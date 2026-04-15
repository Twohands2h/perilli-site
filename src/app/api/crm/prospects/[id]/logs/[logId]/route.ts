// src/app/api/crm/prospects/[id]/logs/[logId]/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/crm/supabase'

export async function PUT(req: NextRequest, { params }: { params: { id: string; logId: string } }) {
  const body = await req.json()
  const { data, error } = await supabase
    .from('prospect_logs')
    .update(body)
    .eq('id', params.logId)
    .eq('prospect_id', params.id)
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data)
}

export async function DELETE(_: NextRequest, { params }: { params: { id: string; logId: string } }) {
  const { error } = await supabase
    .from('prospect_logs')
    .delete()
    .eq('id', params.logId)
    .eq('prospect_id', params.id)

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json({ ok: true })
}
