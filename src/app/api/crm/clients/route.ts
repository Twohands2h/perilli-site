// src/app/api/crm/clients/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticatedFromRequest } from '@/lib/crm/auth'
import { supabase } from '@/lib/crm/supabase'

function unauthorized() {
  return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
}

// GET /api/crm/clients — lista tutti i clienti con conteggi
export async function GET(req: NextRequest) {
  if (!isAuthenticatedFromRequest(req)) return unauthorized()

  const { data: clients, error } = await supabase
    .from('crm_clients')
    .select(`
      *,
      crm_files(count),
      crm_logs(count)
    `)
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(clients)
}

// POST /api/crm/clients — crea nuovo cliente
export async function POST(req: NextRequest) {
  if (!isAuthenticatedFromRequest(req)) return unauthorized()

  const body = await req.json()
  const { data, error } = await supabase
    .from('crm_clients')
    .insert({
      name:          body.name,
      company:       body.company || null,
      email:         body.email || null,
      phone:         body.phone || null,
      service:       body.service || null,
      source:        body.source || null,
      budget:        body.budget ? Number(body.budget) : null,
      deadline:      body.deadline || null,
      status:        body.status || 'Lead',
      next_action:   body.next_action || null,
      first_contact: body.first_contact || null,
      brief:         body.brief || null,
    })
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}
