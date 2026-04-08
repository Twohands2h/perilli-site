'use client'
// src/app/crm/login/page.tsx

import { useState } from 'react'

export default function CrmLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const res = await fetch('/api/crm/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'login', password }),
      credentials: 'include',
    })

    if (res.ok) {
      // Hard redirect — garantisce che il cookie sia scritto prima di caricare la pagina
      window.location.href = '/crm/dashboard'
    } else {
      setError('Password errata. Riprova.')
      setPassword('')
      setLoading(false)
    }
  }

  return (
    <div style={s.wrap}>
      <div style={s.box}>
        <div style={s.logo}>PIERO.</div>
        <div style={s.sub}>CRM — accesso riservato</div>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="password"
            autoFocus
            style={s.input}
          />
          {error && <div style={s.err}>{error}</div>}
          <button type="submit" disabled={loading} style={s.btn}>
            {loading ? 'accesso…' : 'accedi'}
          </button>
        </form>
      </div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  wrap: { display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', padding: '20px', background: '#1a1a1a' },
  box: { background: '#222', border: '1px solid #333', borderRadius: '16px', padding: '40px 32px', width: '100%', maxWidth: '360px', textAlign: 'center' },
  logo: { fontSize: '32px', fontWeight: 800, color: '#f5aa44', marginBottom: '4px' },
  sub: { fontSize: '12px', color: '#888', marginBottom: '28px' },
  input: { width: '100%', padding: '11px 14px', fontSize: '15px', border: '1px solid #444', borderRadius: '9px', background: '#2a2a2a', color: '#fff', marginBottom: '10px', outline: 'none', fontFamily: 'inherit', boxSizing: 'border-box' as const },
  err: { fontSize: '12px', color: '#f08080', marginBottom: '10px' },
  btn: { width: '100%', padding: '11px', fontSize: '15px', background: '#f5aa44', border: 'none', borderRadius: '9px', color: '#1a1200', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' },
}