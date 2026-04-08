// src/app/crm/dashboard/page.tsx

import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/crm/auth'
import { supabase } from '@/lib/crm/supabase'
import CrmShell from '@/components/crm/CrmShell'

export const dynamic = 'force-dynamic'

export default async function CrmDashboard() {
  if (!isAuthenticated()) redirect('/crm/login')

  const { data: clients } = await supabase
    .from('crm_clients')
    .select('*, crm_files(count), crm_logs(count)')
    .order('created_at', { ascending: false })

  return <CrmShell initialClients={clients || []} initialView="dashboard" />
}
