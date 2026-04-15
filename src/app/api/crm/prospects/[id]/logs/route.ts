// src/app/api/crm/prospects/[id]/logs/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@/lib/crm/supabase'

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
  const supabase = createClient()
  const body = await req.json()
  
  // Inserisce il log
  const { data, error } = await supabase
    .from('prospect_logs')
    .insert({ ...body, prospect_id: params.id })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })

  // Aggiorna last_contact_at sul prospect
  await supabase
    .from('prospects')
    .update({ last_contact_at: new Date().toISOString() })
    .eq('id', params.id)

  return NextResponse.json(data)
}
