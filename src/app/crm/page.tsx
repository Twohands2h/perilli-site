// src/app/crm/page.tsx

import { redirect } from 'next/navigation'
import { isAuthenticated } from '@/lib/crm/auth'

export default function CrmRoot() {
  if (isAuthenticated()) {
    redirect('/crm/dashboard')
  } else {
    redirect('/crm/login')
  }
}
