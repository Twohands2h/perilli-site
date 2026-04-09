// src/app/api/crm/projects/[projectId]/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticatedFromRequest } from '@/lib/crm/auth'
import { supabase } from '@/lib/crm/supabase'
import type { BillingStatus } from '@/lib/crm/types'

function unauth() {
    return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
}

// GET /api/crm/projects/[projectId] — dettaglio progetto con file e log
export async function GET(req: NextRequest, { params }: { params: { projectId: string } }) {
    if (!isAuthenticatedFromRequest(req)) return unauth()

    const { data: project, error } = await supabase
        .from('crm_projects')
        .select('*')
        .eq('id', params.projectId)
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 404 })

    const [{ data: files }, { data: logs }] = await Promise.all([
        supabase.from('crm_files').select('*').eq('project_id', params.projectId).order('created_at', { ascending: false }),
        supabase.from('crm_logs').select('*').eq('project_id', params.projectId).order('log_date', { ascending: false }),
    ])

    return NextResponse.json({ ...project, files: files || [], logs: logs || [] })
}

// PATCH /api/crm/projects/[projectId] — aggiorna progetto
export async function PATCH(req: NextRequest, { params }: { params: { projectId: string } }) {
    if (!isAuthenticatedFromRequest(req)) return unauth()

    const body = await req.json()
    const isClosed = body.status === 'Chiuso'

    const updateData: Record<string, unknown> = {
        title: body.title,
        service: body.service || null,
        budget: body.budget ? Number(body.budget) : null,
        deadline: body.deadline || null,
        status: body.status,
        brief: body.brief || null,
        next_action: body.next_action || null,
        first_contact: body.first_contact || null,
    }

    // billing_status appare solo se chiuso
    if (isClosed) {
        updateData.billing_status = body.billing_status || 'Da fatturare'
        updateData.billed_at = body.billed_at || null
        updateData.paid_at = body.paid_at || null
    } else {
        updateData.billing_status = null
        updateData.billed_at = null
        updateData.paid_at = null
    }

    const { data, error } = await supabase
        .from('crm_projects')
        .update(updateData)
        .eq('id', params.projectId)
        .select()
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data)
}

// PATCH /api/crm/projects/[projectId]?action=billing — cambia solo billing status (click rapido)
// Chiamata separata per il toggle veloce senza aprire il form completo
export async function PUT(req: NextRequest, { params }: { params: { projectId: string } }) {
    if (!isAuthenticatedFromRequest(req)) return unauth()

    const body = await req.json()
    const billing = body.billing_status as BillingStatus
    const today = new Date().toISOString().slice(0, 10)

    const updateData: Record<string, unknown> = { billing_status: billing }

    // Auto-imposta le date quando cambia stato
    if (billing === 'Fatturato') updateData.billed_at = body.billed_at || today
    if (billing === 'Pagato') {
        updateData.paid_at = body.paid_at || today
        // Se non era già fatturato, imposta anche billed_at
        const { data: current } = await supabase.from('crm_projects').select('billed_at').eq('id', params.projectId).single()
        if (!current?.billed_at) updateData.billed_at = today
    }

    const { data, error } = await supabase
        .from('crm_projects')
        .update(updateData)
        .eq('id', params.projectId)
        .select()
        .single()

    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json(data)
}

// DELETE /api/crm/projects/[projectId]
export async function DELETE(req: NextRequest, { params }: { params: { projectId: string } }) {
    if (!isAuthenticatedFromRequest(req)) return unauth()

    // Elimina file da Storage
    const { data: files } = await supabase
        .from('crm_files')
        .select('storage_path')
        .eq('project_id', params.projectId)
        .not('storage_path', 'is', null)

    if (files && files.length > 0) {
        const paths = files.map(f => f.storage_path).filter(Boolean) as string[]
        await supabase.storage.from('crm-files').remove(paths)
    }

    const { error } = await supabase.from('crm_projects').delete().eq('id', params.projectId)
    if (error) return NextResponse.json({ error: error.message }, { status: 500 })
    return NextResponse.json({ ok: true })
}