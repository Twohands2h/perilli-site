'use client'
// src/components/crm/ProspectsView.tsx

import { useState, useEffect, useCallback } from 'react'

// ─── TYPES ────────────────────────────────────────────────────────────────────
export type ProspectStatus = 'Da contattare' | 'Contattato' | 'Risposto' | 'In trattativa' | 'Chiuso' | 'Non interessato'
export type ProspectMarket = 'Italia' | 'UK' | 'USA' | 'Francia' | 'Australia' | 'India' | 'Altro'
export type ProspectTier = 'A' | 'B' | 'C'
export type ProspectLogType = 'Email inviata' | 'Risposta ricevuta' | 'Follow-up inviato' | 'Call' | 'LinkedIn' | 'Nota'
export type EmailTemplate = 'UK_VideoMusic' | 'UK_Advertising' | 'USA_PostProduction' | 'USA_Documentary' | 'Italia_Agenzia' | 'Italia_Produzione' | 'Francia_Advertising' | 'Australia_Production' | 'India_Production' | 'Generico'

export interface Prospect {
  id: string
  agency_name: string
  website?: string
  country?: string
  city?: string
  market: ProspectMarket
  contact_name?: string
  contact_role?: string
  contact_email?: string
  contact_linkedin?: string
  tier: ProspectTier
  agency_type?: string
  specialization?: string
  notable_clients?: string
  why_them?: string
  status: ProspectStatus
  email_template?: EmailTemplate
  anchor_credit?: string
  last_contact_at?: string
  next_followup_at?: string
  created_at: string
  updated_at: string
  logs?: ProspectLog[]
}

export interface ProspectLog {
  id: string
  prospect_id: string
  log_type: ProspectLogType
  log_date: string
  subject?: string
  text?: string
  outcome?: string
  created_at: string
}

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const STATUSES: ProspectStatus[] = ['Da contattare', 'Contattato', 'Risposto', 'In trattativa', 'Chiuso', 'Non interessato']
const MARKETS: ProspectMarket[] = ['Italia', 'UK', 'USA', 'Francia', 'Australia', 'India', 'Altro']
const TIERS: ProspectTier[] = ['A', 'B', 'C']
const LOG_TYPES: ProspectLogType[] = ['Email inviata', 'Risposta ricevuta', 'Follow-up inviato', 'Call', 'LinkedIn', 'Nota']
const TEMPLATES: EmailTemplate[] = ['UK_VideoMusic', 'UK_Advertising', 'USA_PostProduction', 'USA_Documentary', 'Italia_Agenzia', 'Italia_Produzione', 'Francia_Advertising', 'Australia_Production', 'India_Production', 'Generico']
const ANCHOR_CREDITS = [
  'Julien Temple — I Am Curious Johnny',
  'Walter Volpatto — Along Came Ruby',
  'Hollywood Reporter — Gwyneth Paltrow Rome',
  'Nexus Media — Robert Orlando',
  'Floverr — Anita Udeep (UK Production)',
  'Roche — AI Video Production',
  'Gucci Kids',
  'Save the Children',
  'History Channel',
  'Altro',
]

// ─── COLORS (stessi del CrmShell) ────────────────────────────────────────────
const C = {
  bg: '#1a1a1a', bg2: '#222', bg3: '#2a2a2a',
  border: '#333', orange: '#f5aa44', muted: '#888', off: '#e8e4de',
  red: '#f08080', redbg: '#2d1a1a',
  green: '#a3d977', greenbg: '#1e3310',
  amber: '#f5c87a', amberbg: '#2d1f00',
  blue: '#7ec8f0', bluebg: '#1a2d3d',
  purple: '#c4b5f5', purplebg: '#1e1a2d',
  gray: '#aaa', graybg: '#2a2a2a',
  teal: '#5fcfb0', tealbg: '#0d2520',
}

// ─── UTILS ────────────────────────────────────────────────────────────────────
function fd(d?: string | null) {
  if (!d) return '—'
  const clean = d.length === 10 ? d + 'T00:00:00' : d
  return new Date(clean).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: '2-digit' })
}
function today() { return new Date().toISOString().slice(0, 10) }
function daysUntil(d?: string | null): number | null {
  if (!d) return null
  const t = new Date(); t.setHours(0, 0, 0, 0)
  return Math.ceil((new Date(d + 'T00:00:00').getTime() - t.getTime()) / 86400000)
}

// ─── BASE STYLES ──────────────────────────────────────────────────────────────
const inputSt: React.CSSProperties = { width: '100%', padding: '9px 12px', fontSize: '13px', border: `1px solid ${C.border}`, borderRadius: '8px', background: C.bg3, color: C.off, fontFamily: 'inherit', boxSizing: 'border-box' }
const labelSt: React.CSSProperties = { display: 'block', fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 600 }

function Inp(p: React.InputHTMLAttributes<HTMLInputElement>) { return <input {...p} style={{ ...inputSt, ...p.style }} /> }
function Sel({ children, ...p }: React.SelectHTMLAttributes<HTMLSelectElement>) { return <select {...p} style={{ ...inputSt, ...p.style }}>{children}</select> }
function Ta(p: React.TextareaHTMLAttributes<HTMLTextAreaElement>) { return <textarea {...p} style={{ ...inputSt, minHeight: '75px', resize: 'vertical', ...p.style }} /> }
function Field({ label, children }: { label: string; children: React.ReactNode }) { return <div style={{ marginBottom: '11px' }}><label style={labelSt}>{label}</label>{children}</div> }

function Btn({ v = 'default', sz = 'md', children, ...p }: { v?: 'default' | 'primary' | 'danger' | 'ghost'; sz?: 'sm' | 'md' } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base: React.CSSProperties = { padding: sz === 'sm' ? '4px 10px' : '8px 16px', fontSize: sz === 'sm' ? '11px' : '13px', border: `1px solid ${C.border}`, borderRadius: sz === 'sm' ? '6px' : '8px', background: 'transparent', color: C.off, cursor: 'pointer', fontFamily: 'inherit', transition: 'opacity 0.15s' }
  const vs: Record<string, React.CSSProperties> = {
    primary: { background: C.orange, borderColor: C.orange, color: '#1a1200', fontWeight: 700 },
    danger: { color: C.red, borderColor: C.red },
    ghost: { border: 'none', color: C.muted },
  }
  return <button {...p} style={{ ...base, ...(vs[v] || {}), ...p.style }}>{children}</button>
}

function Modal({ title, children, onClose, wide }: { title: string; children: React.ReactNode; onClose: () => void; wide?: boolean }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 1000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '30px 20px', overflowY: 'auto' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '14px', padding: '24px', width: '100%', maxWidth: wide ? '680px' : '520px', margin: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>{title}</h3>
          <Btn v="ghost" sz="sm" onClick={onClose}>✕</Btn>
        </div>
        {children}
      </div>
    </div>
  )
}

// ─── STATUS BADGE ─────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: ProspectStatus }) {
  const map: Record<ProspectStatus, React.CSSProperties> = {
    'Da contattare': { background: C.graybg, color: C.gray },
    'Contattato': { background: C.bluebg, color: C.blue },
    'Risposto': { background: C.purplebg, color: C.purple },
    'In trattativa': { background: C.amberbg, color: C.amber },
    'Chiuso': { background: C.greenbg, color: C.green },
    'Non interessato': { background: C.redbg, color: C.red },
  }
  return <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontWeight: 600, whiteSpace: 'nowrap', ...map[status] }}>{status}</span>
}

function TierBadge({ tier }: { tier: ProspectTier }) {
  const map: Record<ProspectTier, React.CSSProperties> = {
    'A': { background: 'rgba(245,170,68,0.15)', color: C.orange, border: `1px solid ${C.orange}` },
    'B': { background: C.bluebg, color: C.blue },
    'C': { background: C.graybg, color: C.gray },
  }
  return <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: '11px', padding: '2px 8px', borderRadius: '6px', fontWeight: 700, ...map[tier] }}>Tier {tier}</span>
}

function MarketFlag({ market }: { market: ProspectMarket }) {
  const flags: Record<ProspectMarket, string> = { 'Italia': '🇮🇹', 'UK': '🇬🇧', 'USA': '🇺🇸', 'Francia': '🇫🇷', 'Australia': '🇦🇺', 'India': '🇮🇳', 'Altro': '🌍' }
  return <span style={{ fontSize: '13px' }}>{flags[market]} <span style={{ fontSize: '11px', color: C.muted }}>{market}</span></span>
}

// ─── PROSPECT FORM ────────────────────────────────────────────────────────────
function ProspectForm({ initial, onSave, onCancel, loading }: {
  initial?: Partial<Prospect>
  onSave: (data: Partial<Prospect>) => void
  onCancel: () => void
  loading?: boolean
}) {
  const [d, setD] = useState<Partial<Prospect>>({
    agency_name: '', market: 'UK', tier: 'B', status: 'Da contattare',
    ...initial,
  })
  const set = (k: keyof Prospect, v: unknown) => setD(prev => ({ ...prev, [k]: v }))

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <Field label="Nome agenzia *">
          <Inp value={d.agency_name || ''} onChange={e => set('agency_name', e.target.value)} placeholder="es. Ridley Scott Associates" required />
        </Field>
        <Field label="Sito web">
          <Inp value={d.website || ''} onChange={e => set('website', e.target.value)} placeholder="https://..." />
        </Field>
        <Field label="Mercato">
          <Sel value={d.market} onChange={e => set('market', e.target.value as ProspectMarket)}>
            {MARKETS.map(m => <option key={m} value={m}>{m}</option>)}
          </Sel>
        </Field>
        <Field label="Paese">
          <Inp value={d.country || ''} onChange={e => set('country', e.target.value)} placeholder="es. United Kingdom" />
        </Field>
        <Field label="Città">
          <Inp value={d.city || ''} onChange={e => set('city', e.target.value)} placeholder="es. London" />
        </Field>
        <Field label="Tipo agenzia">
          <Inp value={d.agency_type || ''} onChange={e => set('agency_type', e.target.value)} placeholder="es. Production Company, Creative Agency" />
        </Field>
      </div>

      <div style={{ height: '1px', background: C.border, margin: '14px 0' }} />
      <div style={{ fontSize: '11px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '10px' }}>Contatto principale</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <Field label="Nome contatto">
          <Inp value={d.contact_name || ''} onChange={e => set('contact_name', e.target.value)} placeholder="es. Jane Smith" />
        </Field>
        <Field label="Ruolo">
          <Inp value={d.contact_role || ''} onChange={e => set('contact_role', e.target.value)} placeholder="es. Executive Producer" />
        </Field>
        <Field label="Email">
          <Inp type="email" value={d.contact_email || ''} onChange={e => set('contact_email', e.target.value)} placeholder="email@agenzia.com" />
        </Field>
        <Field label="LinkedIn URL">
          <Inp value={d.contact_linkedin || ''} onChange={e => set('contact_linkedin', e.target.value)} placeholder="linkedin.com/in/..." />
        </Field>
      </div>

      <div style={{ height: '1px', background: C.border, margin: '14px 0' }} />
      <div style={{ fontSize: '11px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '10px' }}>Qualificazione</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
        <Field label="Tier">
          <Sel value={d.tier} onChange={e => set('tier', e.target.value as ProspectTier)}>
            {TIERS.map(t => <option key={t} value={t}>Tier {t}</option>)}
          </Sel>
        </Field>
        <Field label="Status">
          <Sel value={d.status} onChange={e => set('status', e.target.value as ProspectStatus)}>
            {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
          </Sel>
        </Field>
        <Field label="Template email">
          <Sel value={d.email_template || ''} onChange={e => set('email_template', e.target.value as EmailTemplate)}>
            <option value="">—</option>
            {TEMPLATES.map(t => <option key={t} value={t}>{t}</option>)}
          </Sel>
        </Field>
      </div>

      <Field label="Credit di aggancio">
        <Sel value={d.anchor_credit || ''} onChange={e => set('anchor_credit', e.target.value)}>
          <option value="">—</option>
          {ANCHOR_CREDITS.map(c => <option key={c} value={c}>{c}</option>)}
        </Sel>
      </Field>

      <Field label="Specializzazione">
        <Inp value={d.specialization || ''} onChange={e => set('specialization', e.target.value)} placeholder="es. Music Videos, Brand Content, Documentary" />
      </Field>

      <Field label="Clienti notevoli dell'agenzia">
        <Inp value={d.notable_clients || ''} onChange={e => set('notable_clients', e.target.value)} placeholder="es. Nike, Sony Music, BBC" />
      </Field>

      <Field label="Perché questa agenzia">
        <Ta value={d.why_them || ''} onChange={e => set('why_them', e.target.value)} placeholder="Lavora con registi simili, budget adeguato, specializzazione coerente..." style={{ minHeight: '60px' }} />
      </Field>

      <Field label="Prossimo follow-up">
        <Inp type="date" value={d.next_followup_at?.slice(0, 10) || ''} onChange={e => set('next_followup_at', e.target.value)} />
      </Field>

      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '18px' }}>
        <Btn onClick={onCancel}>Annulla</Btn>
        <Btn v="primary" onClick={() => onSave(d)} disabled={loading || !d.agency_name}>
          {loading ? 'Salvo...' : 'Salva'}
        </Btn>
      </div>
    </div>
  )
}

// ─── LOG FORM ─────────────────────────────────────────────────────────────────
function LogForm({ onSave, onCancel, loading }: {
  onSave: (data: Partial<ProspectLog>) => void
  onCancel: () => void
  loading?: boolean
}) {
  const [d, setD] = useState<Partial<ProspectLog>>({ log_type: 'Email inviata', log_date: today() })
  const set = (k: keyof ProspectLog, v: unknown) => setD(prev => ({ ...prev, [k]: v }))

  return (
    <div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <Field label="Tipo">
          <Sel value={d.log_type} onChange={e => set('log_type', e.target.value as ProspectLogType)}>
            {LOG_TYPES.map(t => <option key={t} value={t}>{t}</option>)}
          </Sel>
        </Field>
        <Field label="Data">
          <Inp type="date" value={d.log_date || today()} onChange={e => set('log_date', e.target.value)} />
        </Field>
      </div>
      <Field label="Oggetto / Titolo">
        <Inp value={d.subject || ''} onChange={e => set('subject', e.target.value)} placeholder="es. Introduzione e disponibilità per progetti VFX" />
      </Field>
      <Field label="Testo / Nota">
        <Ta value={d.text || ''} onChange={e => set('text', e.target.value)} placeholder="Corpo dell'email o note sulla conversazione..." style={{ minHeight: '100px' }} />
      </Field>
      <Field label="Esito">
        <Inp value={d.outcome || ''} onChange={e => set('outcome', e.target.value)} placeholder="es. Nessuna risposta, Interessati, Non ora" />
      </Field>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '18px' }}>
        <Btn onClick={onCancel}>Annulla</Btn>
        <Btn v="primary" onClick={() => onSave(d)} disabled={loading}>
          {loading ? 'Salvo...' : 'Salva log'}
        </Btn>
      </div>
    </div>
  )
}

// ─── PROSPECT DETAIL ──────────────────────────────────────────────────────────
function ProspectDetail({ prospectId, onBack, onUpdate }: {
  prospectId: string
  onBack: () => void
  onUpdate: () => void
}) {
  const [prospect, setProspect] = useState<Prospect | null>(null)
  const [loading, setLoading] = useState(true)
  const [modal, setModal] = useState<'edit' | 'log' | null>(null)
  const [saving, setSaving] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    const res = await fetch(`/api/crm/prospects/${prospectId}`)
    if (res.ok) setProspect(await res.json())
    setLoading(false)
  }, [prospectId])

  useEffect(() => { load() }, [load])

  async function handleUpdate(data: Partial<Prospect>) {
    setSaving(true)
    await fetch(`/api/crm/prospects/${prospectId}`, {
      method: 'PUT', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setSaving(false)
    setModal(null)
    load()
    onUpdate()
  }

  async function handleLog(data: Partial<ProspectLog>) {
    setSaving(true)
    await fetch(`/api/crm/prospects/${prospectId}/logs`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setSaving(false)
    setModal(null)
    load()
  }

  async function handleDelete() {
    if (!confirm('Eliminare questo prospect?')) return
    await fetch(`/api/crm/prospects/${prospectId}`, { method: 'DELETE' })
    onBack()
    onUpdate()
  }

  if (loading) return <div style={{ padding: '40px', textAlign: 'center', color: C.muted }}>Carico...</div>
  if (!prospect) return <div style={{ padding: '40px', textAlign: 'center', color: C.red }}>Non trovato</div>

  const followupDays = daysUntil(prospect.next_followup_at)

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
        <Btn v="ghost" sz="sm" onClick={onBack}>← Indietro</Btn>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <h1 style={{ fontSize: '22px', fontWeight: 700, margin: 0 }}>{prospect.agency_name}</h1>
            <TierBadge tier={prospect.tier} />
            <StatusBadge status={prospect.status} />
          </div>
          <div style={{ display: 'flex', gap: '12px', marginTop: '4px', flexWrap: 'wrap' }}>
            <MarketFlag market={prospect.market} />
            {prospect.city && <span style={{ fontSize: '12px', color: C.muted }}>{prospect.city}</span>}
            {prospect.agency_type && <span style={{ fontSize: '12px', color: C.muted }}>{prospect.agency_type}</span>}
          </div>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Btn sz="sm" onClick={() => setModal('edit')}>Modifica</Btn>
          <Btn v="danger" sz="sm" onClick={handleDelete}>Elimina</Btn>
        </div>
      </div>

      {/* Follow-up alert */}
      {followupDays !== null && followupDays <= 3 && (
        <div style={{ background: followupDays < 0 ? C.redbg : C.amberbg, border: `1px solid ${followupDays < 0 ? C.red : C.amber}`, borderRadius: '8px', padding: '10px 14px', marginBottom: '18px', fontSize: '13px', color: followupDays < 0 ? C.red : C.amber }}>
          {followupDays < 0 ? `⚠️ Follow-up scaduto da ${Math.abs(followupDays)} giorni` : followupDays === 0 ? '🔔 Follow-up oggi' : `🔔 Follow-up tra ${followupDays} giorn${followupDays === 1 ? 'o' : 'i'}`}
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>

        {/* Contatto */}
        <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>Contatto</div>
          {prospect.contact_name && <div style={{ fontSize: '14px', fontWeight: 600, color: '#fff', marginBottom: '2px' }}>{prospect.contact_name}</div>}
          {prospect.contact_role && <div style={{ fontSize: '12px', color: C.muted, marginBottom: '8px' }}>{prospect.contact_role}</div>}
          {prospect.contact_email && (
            <a href={`mailto:${prospect.contact_email}`} style={{ display: 'block', fontSize: '12px', color: C.orange, textDecoration: 'none', marginBottom: '4px' }}>✉ {prospect.contact_email}</a>
          )}
          {prospect.contact_linkedin && (
            <a href={prospect.contact_linkedin} target="_blank" rel="noopener" style={{ display: 'block', fontSize: '12px', color: C.blue, textDecoration: 'none' }}>in LinkedIn</a>
          )}
          {prospect.website && (
            <a href={prospect.website} target="_blank" rel="noopener" style={{ display: 'block', fontSize: '12px', color: C.muted, textDecoration: 'none', marginTop: '4px' }}>🌐 {prospect.website.replace('https://', '')}</a>
          )}
        </div>

        {/* Outreach info */}
        <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>Outreach</div>
          {prospect.anchor_credit && (
            <div style={{ marginBottom: '8px' }}>
              <div style={{ fontSize: '10px', color: C.muted, marginBottom: '2px' }}>Credit di aggancio</div>
              <div style={{ fontSize: '12px', color: C.orange }}>🎬 {prospect.anchor_credit}</div>
            </div>
          )}
          {prospect.email_template && (
            <div style={{ marginBottom: '8px' }}>
              <div style={{ fontSize: '10px', color: C.muted, marginBottom: '2px' }}>Template usato</div>
              <div style={{ fontSize: '12px', color: C.off }}>{prospect.email_template}</div>
            </div>
          )}
          {prospect.last_contact_at && (
            <div style={{ marginBottom: '8px' }}>
              <div style={{ fontSize: '10px', color: C.muted, marginBottom: '2px' }}>Ultimo contatto</div>
              <div style={{ fontSize: '12px', color: C.off }}>{fd(prospect.last_contact_at)}</div>
            </div>
          )}
          {prospect.next_followup_at && (
            <div>
              <div style={{ fontSize: '10px', color: C.muted, marginBottom: '2px' }}>Prossimo follow-up</div>
              <div style={{ fontSize: '12px', color: followupDays !== null && followupDays <= 1 ? C.amber : C.off }}>{fd(prospect.next_followup_at)}</div>
            </div>
          )}
        </div>
      </div>

      {/* Why them + notable clients */}
      {(prospect.why_them || prospect.notable_clients || prospect.specialization) && (
        <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '16px', marginBottom: '20px' }}>
          <div style={{ fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '12px' }}>Qualificazione</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {prospect.specialization && (
              <div>
                <div style={{ fontSize: '10px', color: C.muted, marginBottom: '2px' }}>Specializzazione</div>
                <div style={{ fontSize: '13px', color: C.off }}>{prospect.specialization}</div>
              </div>
            )}
            {prospect.notable_clients && (
              <div>
                <div style={{ fontSize: '10px', color: C.muted, marginBottom: '2px' }}>Clienti notevoli</div>
                <div style={{ fontSize: '13px', color: C.off }}>{prospect.notable_clients}</div>
              </div>
            )}
            {prospect.why_them && (
              <div style={{ gridColumn: '1 / -1' }}>
                <div style={{ fontSize: '10px', color: C.muted, marginBottom: '2px' }}>Perché questa agenzia</div>
                <div style={{ fontSize: '13px', color: C.off, lineHeight: 1.5 }}>{prospect.why_them}</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Log */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <div style={{ fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.07em' }}>Storico contatti ({(prospect.logs || []).length})</div>
        <Btn sz="sm" v="primary" onClick={() => setModal('log')}>+ Aggiungi log</Btn>
      </div>

      {(prospect.logs || []).length === 0 && (
        <div style={{ textAlign: 'center', padding: '30px', color: C.muted, fontSize: '13px' }}>Nessun contatto registrato</div>
      )}

      {(prospect.logs || []).sort((a, b) => b.log_date.localeCompare(a.log_date)).map(log => {
        const typeColors: Record<ProspectLogType, string> = {
          'Email inviata': C.blue, 'Risposta ricevuta': C.green, 'Follow-up inviato': C.amber,
          'Call': C.purple, 'LinkedIn': C.teal, 'Nota': C.gray,
        }
        return (
          <div key={log.id} style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '14px 16px', marginBottom: '8px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '5px', background: 'rgba(255,255,255,0.05)', color: typeColors[log.log_type], fontWeight: 600 }}>{log.log_type}</span>
                {log.subject && <span style={{ fontSize: '13px', fontWeight: 600, color: '#fff' }}>{log.subject}</span>}
              </div>
              <span style={{ fontSize: '11px', color: C.muted }}>{fd(log.log_date)}</span>
            </div>
            {log.text && <div style={{ fontSize: '13px', color: C.off, lineHeight: 1.5, marginBottom: log.outcome ? '6px' : 0 }}>{log.text}</div>}
            {log.outcome && <div style={{ fontSize: '12px', color: C.muted, fontStyle: 'italic' }}>Esito: {log.outcome}</div>}
          </div>
        )
      })}

      {modal === 'edit' && (
        <Modal title="Modifica prospect" onClose={() => setModal(null)} wide>
          <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
            <ProspectForm initial={prospect} onSave={handleUpdate} onCancel={() => setModal(null)} loading={saving} />
          </div>
        </Modal>
      )}
      {modal === 'log' && (
        <Modal title="Aggiungi log" onClose={() => setModal(null)}>
          <LogForm onSave={handleLog} onCancel={() => setModal(null)} loading={saving} />
        </Modal>
      )}
    </div>
  )
}

// ─── MAIN PROSPECTS VIEW ──────────────────────────────────────────────────────
export default function ProspectsView() {
  const [prospects, setProspects] = useState<Prospect[]>([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterMarket, setFilterMarket] = useState<ProspectMarket | 'Tutti'>('Tutti')
  const [filterStatus, setFilterStatus] = useState<ProspectStatus | 'Tutti'>('Tutti')
  const [filterTier, setFilterTier] = useState<ProspectTier | 'Tutti'>('Tutti')
  const [activeId, setActiveId] = useState<string | null>(null)
  const [modal, setModal] = useState<'new' | null>(null)
  const [saving, setSaving] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    const res = await fetch('/api/crm/prospects')
    if (res.ok) setProspects(await res.json())
    setLoading(false)
  }, [])

  useEffect(() => { load() }, [load])

  async function handleCreate(data: Partial<Prospect>) {
    setSaving(true)
    await fetch('/api/crm/prospects', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    setSaving(false)
    setModal(null)
    load()
  }

  if (activeId) {
    return <ProspectDetail prospectId={activeId} onBack={() => setActiveId(null)} onUpdate={load} />
  }

  // Stats
  const total = prospects.length
  const daContattare = prospects.filter(p => p.status === 'Da contattare').length
  const inTreatativa = prospects.filter(p => p.status === 'In trattativa').length
  const tierA = prospects.filter(p => p.tier === 'A').length
  const followupToday = prospects.filter(p => {
    const d = daysUntil(p.next_followup_at)
    return d !== null && d <= 0
  }).length

  // Filter
  const filtered = prospects.filter(p => {
    const q = search.toLowerCase()
    const matchSearch = !q || p.agency_name.toLowerCase().includes(q) || (p.contact_name || '').toLowerCase().includes(q) || (p.city || '').toLowerCase().includes(q) || (p.specialization || '').toLowerCase().includes(q)
    const matchMarket = filterMarket === 'Tutti' || p.market === filterMarket
    const matchStatus = filterStatus === 'Tutti' || p.status === filterStatus
    const matchTier = filterTier === 'Tutti' || p.tier === filterTier
    return matchSearch && matchMarket && matchStatus && matchTier
  }).sort((a, b) => {
    // Tier A first, then by followup date
    if (a.tier !== b.tier) return a.tier.localeCompare(b.tier)
    return a.agency_name.localeCompare(b.agency_name)
  })

  const selSt: React.CSSProperties = { ...inputSt, padding: '6px 10px', fontSize: '12px', width: 'auto' }

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: 700, margin: 0 }}>Prospects</h1>
          <div style={{ fontSize: '12px', color: C.muted, marginTop: '2px' }}>Outreach agenzie — Italia e internazionale</div>
        </div>
        <Btn v="primary" onClick={() => setModal('new')}>+ Nuova agenzia</Btn>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginBottom: '20px' }}>
        {[
          { label: 'Totale', value: total, color: C.off },
          { label: 'Da contattare', value: daContattare, color: C.gray },
          { label: 'In trattativa', value: inTreatativa, color: C.amber },
          { label: 'Tier A', value: tierA, color: C.orange },
          { label: 'Follow-up scaduti', value: followupToday, color: followupToday > 0 ? C.red : C.muted },
        ].map(s => (
          <div key={s.label} style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '14px 16px' }}>
            <div style={{ fontSize: '22px', fontWeight: 700, color: s.color }}>{s.value}</div>
            <div style={{ fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginTop: '2px' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '14px', flexWrap: 'wrap' }}>
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="cerca agenzia, contatto, città..."
          style={{ ...inputSt, flex: 1, minWidth: '200px', padding: '7px 12px', fontSize: '13px' }} />
        <select value={filterMarket} onChange={e => setFilterMarket(e.target.value as ProspectMarket | 'Tutti')} style={selSt}>
          <option value="Tutti">Tutti i mercati</option>
          {MARKETS.map(m => <option key={m} value={m}>{m}</option>)}
        </select>
        <select value={filterStatus} onChange={e => setFilterStatus(e.target.value as ProspectStatus | 'Tutti')} style={selSt}>
          <option value="Tutti">Tutti gli status</option>
          {STATUSES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <select value={filterTier} onChange={e => setFilterTier(e.target.value as ProspectTier | 'Tutti')} style={selSt}>
          <option value="Tutti">Tutti i tier</option>
          {TIERS.map(t => <option key={t} value={t}>Tier {t}</option>)}
        </select>
      </div>

      {/* List */}
      {loading && <div style={{ textAlign: 'center', padding: '40px', color: C.muted }}>Carico...</div>}
      {!loading && filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px', color: C.muted }}>
          {prospects.length === 0 ? 'Nessuna agenzia ancora. Inizia ad aggiungere prospects.' : 'Nessun risultato per i filtri selezionati.'}
        </div>
      )}

      {filtered.map(p => {
        const followupDays = daysUntil(p.next_followup_at)
        const isOverdue = followupDays !== null && followupDays <= 0
        const isSoon = followupDays !== null && followupDays > 0 && followupDays <= 3
        return (
          <div key={p.id} onClick={() => setActiveId(p.id)}
            style={{ background: C.bg2, border: `1px solid ${isOverdue ? C.red : C.border}`, borderRadius: '12px', padding: '16px 20px', marginBottom: '8px', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = isOverdue ? C.red : C.orange)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = isOverdue ? C.red : C.border)}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px', flexWrap: 'wrap' }}>
                  <span style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>{p.agency_name}</span>
                  <TierBadge tier={p.tier} />
                  <StatusBadge status={p.status} />
                </div>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <MarketFlag market={p.market} />
                  {p.city && <span style={{ fontSize: '12px', color: C.muted }}>{p.city}</span>}
                  {p.contact_name && <span style={{ fontSize: '12px', color: C.muted }}>👤 {p.contact_name}{p.contact_role ? ` · ${p.contact_role}` : ''}</span>}
                  {p.specialization && <span style={{ fontSize: '12px', color: C.muted }}>· {p.specialization}</span>}
                  {p.anchor_credit && <span style={{ fontSize: '11px', color: C.orange }}>🎬 {p.anchor_credit}</span>}
                </div>
              </div>
              <div style={{ textAlign: 'right', flexShrink: 0 }}>
                {isOverdue && <div style={{ fontSize: '11px', color: C.red, fontWeight: 600 }}>Follow-up scaduto</div>}
                {isSoon && <div style={{ fontSize: '11px', color: C.amber, fontWeight: 600 }}>Follow-up tra {followupDays}gg</div>}
                {p.next_followup_at && !isOverdue && !isSoon && <div style={{ fontSize: '11px', color: C.muted }}>Follow-up {fd(p.next_followup_at)}</div>}
                {p.last_contact_at && <div style={{ fontSize: '11px', color: C.muted, marginTop: '2px' }}>Ultimo: {fd(p.last_contact_at)}</div>}
              </div>
            </div>
          </div>
        )
      })}

      {modal === 'new' && (
        <Modal title="Nuova agenzia" onClose={() => setModal(null)} wide>
          <div style={{ maxHeight: '70vh', overflowY: 'auto' }}>
            <ProspectForm onSave={handleCreate} onCancel={() => setModal(null)} loading={saving} />
          </div>
        </Modal>
      )}
    </div>
  )
}
