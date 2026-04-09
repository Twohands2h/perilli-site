// src/app/api/crm/clients/[id]/projects/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticatedFromRequest } from '@/lib/crm/auth'
import { supabase } from '@/lib/crm/supabase'

function unauth() {
    return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
}

// GET /api/crm/clients/[id]/projects — lista progetti del cliente
export async function GET(req: NextRequest, { params }: { params: { id: string } }) {
    if (!isAuthenticatedFromRequest(req)) return unauth()

    const { data, error } = await supabase
        .from('crm_projects')
        .select('*, crm_files(count), crm_logs(count)')
        .eq('client_id', params.id)
        .order('created_at', { ascending: false })

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data)
}

// POST /api/crm/clients/[id]/projects — crea nuovo progetto
export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    if (!isAuthenticatedFromRequest(req)) return unauth()

    const body = await req.json()
    const { data, error } = await supabase
        .from('crm_projects')
        .insert({
            client_id: params.id,
            title: body.title,
            service: body.service || null,
            budget: body.budget ? Number(body.budget) : null,
            deadline: body.deadline || null,
            status: body.status || 'Lead',
            billing_status: body.status === 'Chiuso' ? (body.billing_status || 'Da fatturare') : null,
            billed_at: body.billed_at || null,
            paid_at: body.paid_at || null,
            brief: body.brief || null,
            next_action: body.next_action || null,
            first_contact: body.first_contact || null,
        })
        .select()
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data, { status: 201 })
}