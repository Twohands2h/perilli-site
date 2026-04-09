// src/app/crm/dashboard/page.tsx

import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/crm/auth'
import { supabase } from '@/lib/crm/supabase'
import CrmShell from '@/components/crm/CrmShell'
import type { CrmClient } from '@/lib/crm/types'

export const dynamic = 'force-dynamic'

export default async function CrmDashboard() {
  if (!isAuthenticated()) redirect('/crm/login')

  const { data: raw, error } = await supabase
    .from('crm_clients')
    .select(`
      id, name, company, email, phone, source, notes,
      vat_number, sdi_code, pec, address, website,
      created_at, updated_at,
      crm_projects (
        id, title, status, billing_status, budget, deadline,
        service, next_action, billed_at, paid_at, created_at
      )
    `)
    .order('created_at', { ascending: false })

  if (error) {
    console.error('CRM dashboard load error:', error.message)
  }

  // Supabase restituisce crm_projects come chiave — normalizziamo in projects
  const clients: CrmClient[] = (raw || []).map(c => {
    const row = c as Record<string, unknown>
    const { crm_projects, ...rest } = row
    return {
      ...rest,
      projects: Array.isArray(crm_projects) ? crm_projects : [],
    } as CrmClient
  })

  return <CrmShell initialClients={clients} initialView="dashboard" />
}