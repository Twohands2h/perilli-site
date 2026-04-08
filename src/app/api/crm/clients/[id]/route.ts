// src/app/api/crm/clients/[id]/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticatedFromRequest } from '@/lib/crm/auth'
import { supabase } from '@/lib/crm/supabase'

function unauth() {
  return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
}

// GET /api/crm/clients/[id] — dettaglio cliente con file e log
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticatedFromRequest(req)) return unauth()

  const { data: client, error } = await supabase
    .from('crm_clients')
    .select('*')
    .eq('id', params.id)
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 404 })

  const [{ data: files }, { data: logs }] = await Promise.all([
    supabase.from('crm_files').select('*').eq('client_id', params.id).order('created_at', { ascending: false }),
    supabase.from('crm_logs').select('*').eq('client_id', params.id).order('log_date', { ascending: false }),
  ])

  return NextResponse.json({ ...client, files: files || [], logs: logs || [] })
}

// PATCH /api/crm/clients/[id] — aggiorna cliente
export async function PATCH(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticatedFromRequest(req)) return unauth()

  const body = await req.json()
  const { data, error } = await supabase
    .from('crm_clients')
    .update({
      name:          body.name,
      company:       body.company || null,
      email:         body.email || null,
      phone:         body.phone || null,
      service:       body.service || null,
      source:        body.source || null,
      budget:        body.budget ? Number(body.budget) : null,
      deadline:      body.deadline || null,
      status:        body.status,
      next_action:   body.next_action || null,
      first_contact: body.first_contact || null,
      brief:         body.brief || null,
    })
    .eq('id', params.id)
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

// DELETE /api/crm/clients/[id] — elimina cliente (cascade su file e log)
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticatedFromRequest(req)) return unauth()

  // Elimina anche i file da Storage se presenti
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
