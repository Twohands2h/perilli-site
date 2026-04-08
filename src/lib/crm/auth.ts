// src/lib/crm/auth.ts

import { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

const SESSION_COOKIE = 'crm_session'
const SESSION_VALUE = 'authenticated'

// Per le Server Components (layout, page) — Next.js 14 compatible
export function isAuthenticated(): boolean {
  try {
    const cookieStore = cookies()
    const session = (cookieStore as any).get(SESSION_COOKIE)
    return session?.value === SESSION_VALUE
  } catch {
    return false
  }
}

// Per le API Route handlers — legge dalla request direttamente
export function isAuthenticatedFromRequest(req: NextRequest): boolean {
  const session = req.cookies.get(SESSION_COOKIE)
  return session?.value === SESSION_VALUE
}

export function checkPassword(pwd: string): boolean {
  const correct = process.env.CRM_PASSWORD
  if (!correct) {
    console.error('CRM_PASSWORD non configurata nelle env vars')
    return false
  }
  return pwd === correct
}

export function getSessionCookieOptions() {
  return {
    name: SESSION_COOKIE,
    value: SESSION_VALUE,
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',           // '/' invece di '/crm' — così il cookie vale per tutto il dominio
    maxAge: 60 * 60 * 24 * 30,
  }
}

export function clearSessionCookieOptions() {
  return {
    name: SESSION_COOKIE,
    value: '',
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
    path: '/',
    maxAge: 0,
  }
}