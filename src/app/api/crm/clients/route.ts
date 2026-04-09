// src/app/api/crm/clients/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticatedFromRequest } from '@/lib/crm/auth'
import { supabase } from '@/lib/crm/supabase'

function unauth() {
  return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
}

// GET /api/crm/clients — lista clienti con conteggio progetti e somma budget
export async function GET(req: NextRequest) {
  if (!isAuthenticatedFromRequest(req)) return unauth()

  const { data: clients, error } = await supabase
    .from('crm_clients')
    .select(`
      id, name, company, email, phone, source, notes, created_at, updated_at,
      crm_projects (
        id, title, status, billing_status, budget, deadline, service, created_at
      )
    `)
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  // Supabase restituisce crm_projects come chiave — la normalizziamo in projects
  const normalized = (clients || []).map(c => {
    const { crm_projects, ...rest } = c as Record<string, unknown> & { crm_projects?: unknown }
    return { ...rest, projects: crm_projects || [] }
  })
  return NextResponse.json(normalized)
}

// POST /api/crm/clients — crea cliente (solo anagrafica)
export async function POST(req: NextRequest) {
  if (!isAuthenticatedFromRequest(req)) return unauth()

  const body = await req.json()
  const { data, error } = await supabase
    .from('crm_clients')
    .insert({
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
    .select()
    .single()

  if (error) return NextResponse.json({ error: error.message }, { status: 500 })
  return NextResponse.json(data, { status: 201 })
}