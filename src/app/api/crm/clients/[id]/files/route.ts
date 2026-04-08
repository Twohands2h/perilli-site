// src/app/api/crm/clients/[id]/files/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticatedFromRequest } from '@/lib/crm/auth'
import { supabase } from '@/lib/crm/supabase'

function unauth() {
  return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
}

// POST /api/crm/clients/[id]/files — carica file o salva URL esterno
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticatedFromRequest(req)) return unauth()

  const contentType = req.headers.get('content-type') || ''

  // Upload file binario
  if (contentType.includes('multipart/form-data')) {
    const formData = await req.formData()
    const file = formData.get('file') as File
    const name = formData.get('name') as string
    const type = formData.get('type') as string

    if (!file) return NextResponse.json({ error: 'Nessun file' }, { status: 400 })
    if (file.size > 20 * 1024 * 1024) {
      return NextResponse.json({ error: 'File troppo grande (max 20MB)' }, { status: 400 })
    }

    const ext = file.name.split('.').pop()
    const storagePath = `${params.id}/${Date.now()}-${file.name}`

    const { error: uploadError } = await supabase.storage
      .from('crm-files')
      .upload(storagePath, file, { contentType: file.type, upsert: false })

    if (uploadError) return NextResponse.json({ error: uploadError.message }, { status: 500 })

    const { data, error } = await supabase
      .from('crm_files')
      .insert({
        client_id: params.id,
        name: name || file.name,
        type: type || 'Documento',
        mime: file.type,
        size: file.size,
        storage_path: storagePath,
      })
      .select()
      .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data, { status: 201 })
  }

  // Salva URL esterno (Drive, Dropbox, ecc.)
  const body = await req.json()
  const { data, error } = await supabase
    .from('crm_files')
    .insert({
      client_id: params.id,
      name: body.name,
      type: body.type || 'Documento',
      url: body.url,
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}

// DELETE /api/crm/clients/[id]/files?fileId=xxx
export async function DELETE(req: NextRequest, _ctx: { params: { id: string } }) {
  if (!isAuthenticatedFromRequest(req)) return unauth()

  const fileId = new URL(req.url).searchParams.get('fileId')
  if (!fileId) return NextResponse.json({ error: 'fileId mancante' }, { status: 400 })

  const { data: file } = await supabase
    .from('crm_files')
    .select('storage_path')
    .eq('id', fileId)
    .single()

  if (file?.storage_path) {
    await supabase.storage.from('crm-files').remove([file.storage_path])
  }

  const { error } = await supabase.from('crm_files').delete().eq('id', fileId)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}

// GET /api/crm/clients/[id]/files?fileId=xxx — genera URL firmato per download
export async function GET(req: NextRequest, _ctx: { params: { id: string } }) {
  if (!isAuthenticatedFromRequest(req)) return unauth()

  const fileId = new URL(req.url).searchParams.get('fileId')
  if (!fileId) return NextResponse.json({ error: 'fileId mancante' }, { status: 400 })

  const { data: file } = await supabase
    .from('crm_files')
    .select('*')
    .eq('id', fileId)
    .single()

  if (!file) return NextResponse.json({ error: 'File non trovato' }, { status: 404 })

  if (file.url) return NextResponse.json({ url: file.url })

  if (file.storage_path) {
    const { data, error } = await supabase.storage
      .from('crm-files')
      .createSignedUrl(file.storage_path, 300) // 5 minuti

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ url: data.signedUrl })
  }

  return NextResponse.json({ error: 'Nessun file o URL associato' }, { status: 404 })
}