// src/app/api/crm/clients/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticatedFromRequest } from '@/lib/crm/auth'
import { supabase } from '@/lib/crm/supabase'

function unauth() {
  return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
}

// GET /api/crm/clients/[id] — cliente con tutti i progetti
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticatedFromRequest(req)) return unauth()

  const { data: client, error } = await supabase
    .from('crm_clients')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 404 })

  const { data: projects } = await supabase
    .from('crm_projects')
    .select('*')
    .eq('client_id', params.id)
    .order('created_at', { ascending: false })

  return NextResponse.json({ ...client, projects: projects || [] })
}

// PATCH /api/crm/clients/[id] — aggiorna anagrafica cliente
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticatedFromRequest(req)) return unauth()

  const body = await req.json()
  const { data, error } = await supabase
    .from('crm_clients')
    .update({
      name: body.name,
      company: body.company || null,
      email: body.email || null,
      phone: body.phone || null,
      source: body.source || null,
      notes: body.notes || null,
      vat_number: body.vat_number || null,
      sdi_code: body.sdi_code || null,
      pec: body.pec || null,
      address: body.address || null,
      website: body.website || null,
    })
    .eq('id', params.id)
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

// DELETE /api/crm/clients/[id] — elimina cliente e tutti i progetti/file
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticatedFromRequest(req)) return unauth()

  // Elimina file da Storage
  const { data: files } = await supabase
    .from('crm_files')
    .select('storage_path')
    .eq('client_id', params.id)
    .not('storage_path', 'is', null)

  if (files && files.length > 0) {
    const paths = files.map(f => f.storage_path).filter(Boolean) as string[]
    await supabase.storage.from('crm-files').remove(paths)
  }

  const { error } = await supabase.from('crm_clients').delete().eq('id', params.id)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}