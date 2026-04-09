// src/app/api/crm/stats/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticatedFromRequest } from '@/lib/crm/auth'
import { supabase } from '@/lib/crm/supabase'

export async function GET(req: NextRequest) {
    if (!isAuthenticatedFromRequest(req)) {
        return NextResponse.json({ error: 'Non autorizzato' }, { status: 401 })
    }

    const year = new URL(req.url).searchParams.get('year') || new Date().getFullYear().toString()

    // Tutti i progetti con info cliente
    const { data: projects } = await supabase
        .from('crm_projects')
        .select('*, crm_clients(id, name, source)')
        .order('created_at', { ascending: false })

    if (!projects) return NextResponse.json({ error: 'Errore query' }, { status: 500 })

    const closed = projects.filter(p => p.status === 'Chiuso')
    const active = projects.filter(p => p.status !== 'Chiuso')

    // ── Finanze ────────────────────────────────────────────────────────────────
    const totalDaFatturare = closed
        .filter(p => p.billing_status === 'Da fatturare')
        .reduce((a, p) => a + (p.budget || 0), 0)

    const totalFatturato = closed
        .filter(p => p.billing_status === 'Fatturato')
        .reduce((a, p) => a + (p.budget || 0), 0)

    const totalPagato = closed
        .filter(p => p.billing_status === 'Pagato')
        .reduce((a, p) => a + (p.budget || 0), 0)

    // Entrate mensili per anno selezionato (basato su paid_at)
    const monthlyRevenue = Array.from({ length: 12 }, (_, i) => {
        const month = String(i + 1).padStart(2, '0')
        const amount = closed
            .filter(p => p.billing_status === 'Pagato' && p.paid_at?.startsWith(`${year}-${month}`))
            .reduce((a, p) => a + (p.budget || 0), 0)
        const labels = ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic']
        return { month: labels[i], amount }
    })

    // ── Pipeline attiva ────────────────────────────────────────────────────────
    const activeProjects = active
        .sort((a, b) => {
            if (!a.deadline && !b.deadline) return 0
            if (!a.deadline) return 1
            if (!b.deadline) return -1
            return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
        })
        .slice(0, 10)
        .map(p => ({ ...p, client_name: p.crm_clients?.name || '—' }))

    // ── Top clienti per valore ─────────────────────────────────────────────────
    const clientMap: Record<string, { name: string; total: number; projects: number }> = {}
    for (const p of projects) {
        const cid = p.client_id
        const cname = p.crm_clients?.name || '—'
        if (!clientMap[cid]) clientMap[cid] = { name: cname, total: 0, projects: 0 }
        clientMap[cid].total += p.budget || 0
        clientMap[cid].projects += 1
    }
    const topClients = Object.entries(clientMap)
        .map(([client_id, v]) => ({ client_id, ...v }))
        .sort((a, b) => b.total - a.total)
        .slice(0, 8)

    // ── Acquisizione ───────────────────────────────────────────────────────────
    const sourceMap: Record<string, { count: number; value: number }> = {}
    for (const p of projects) {
        const src = p.crm_clients?.source || 'Non specificato'
        if (!sourceMap[src]) sourceMap[src] = { count: 0, value: 0 }
        sourceMap[src].count += 1
        sourceMap[src].value += p.budget || 0
    }
    const sourceStats = Object.entries(sourceMap)
        .map(([source, v]) => ({ source, ...v }))
        .sort((a, b) => b.value - a.value)

    // ── Progetti per stato ─────────────────────────────────────────────────────
    const statusMap: Record<string, number> = {}
    for (const p of projects) {
        statusMap[p.status] = (statusMap[p.status] || 0) + 1
    }
    const byStatus = Object.entries(statusMap).map(([status, count]) => ({ status, count }))

    // ── Fatturazione per stato ─────────────────────────────────────────────────
    const billingMap: Record<string, { count: number; value: number }> = {}
    for (const p of closed) {
        const bs = p.billing_status || 'Da fatturare'
        if (!billingMap[bs]) billingMap[bs] = { count: 0, value: 0 }
        billingMap[bs].count += 1
        billingMap[bs].value += p.budget || 0
    }
    const byBilling = Object.entries(billingMap).map(([billing_status, v]) => ({ billing_status, ...v }))

    // ── Anni disponibili per il filtro ─────────────────────────────────────────
    const yearSet = new Set<string>(
        projects.filter(p => p.paid_at).map(p => (p.paid_at as string).slice(0, 4))
    )
    const years = Array.from(yearSet).sort((a, b) => Number(b) - Number(a))

    if (!years.includes(new Date().getFullYear().toString())) {
        years.unshift(new Date().getFullYear().toString())
    }

    return NextResponse.json({
        totalDaFatturare,
        totalFatturato,
        totalPagato,
        monthlyRevenue,
        activeProjects,
        topClients,
        sourceStats,
        byStatus,
        byBilling,
        years,
        selectedYear: year,
    })
}