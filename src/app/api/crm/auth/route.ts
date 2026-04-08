// src/app/api/crm/auth/route.ts

import { NextRequest, NextResponse } from 'next/server'
import { checkPassword } from '@/lib/crm/auth'

const SESSION_COOKIE = 'crm_session'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { action, password } = body

  if (action === 'login') {
    if (!checkPassword(password)) {
      return NextResponse.json({ error: 'Password errata' }, { status: 401 })
    }

    const res = NextResponse.json({ ok: true })
    res.cookies.set({
      name: SESSION_COOKIE,
      value: 'authenticated',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 30, // 30 giorni
    })
    return res
  }

  if (action === 'logout') {
    const res = NextResponse.json({ ok: true })
    res.cookies.set({
      name: SESSION_COOKIE,
      value: '',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 0,
    })
    return res
  }

  return NextResponse.json({ error: 'Azione non valida' }, { status: 400 })
}