// src/app/api/crm/clients/[id]/logs/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticatedFromRequest } from '@/lib/crm/auth'
import { supabase } from '@/lib/crm/supabase'

function unauth() {
  return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
}

// POST /api/crm/clients/[id]/logs — aggiungi log
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticatedFromRequest(req)) return unauth()

  const body = await req.json()
  const { data, error } = await supabase
    .from('crm_logs')
    .insert({
      client_id: params.id,
      type:      body.type || 'Nota',
      log_date:  body.log_date || new Date().toISOString().slice(0, 10),
      text:      body.text,
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}

// DELETE /api/crm/clients/[id]/logs?logId=xxx
export async function DELETE(req: NextRequest, { params }: { params: { id: string } }) {
  if (!isAuthenticatedFromRequest(req)) return unauth()

  const logId = new URL(req.url).searchParams.get('logId')
  if (!logId) return NextResponse.json({ error: 'logId mancante' }, { status: 400 })

  const { error } = await supabase.from('crm_logs').delete().eq('id', logId)
  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
