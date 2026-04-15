'use client'
// src/components/crm/CrmShell.tsx

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import ProspectsView from '@/components/crm/ProspectsView'
import type {
  CrmClient, CrmProject, CrmFile, CrmLog,
  ClientFormData, ProjectFormData,
  ClientSource, ProjectStatus, BillingStatus, LogType, FileType
} from '@/lib/crm/types'

// ─── CONSTANTS ────────────────────────────────────────────────────────────────
const PROJECT_STATUSES: ProjectStatus[] = ['Lead', 'In lavorazione', 'Chiuso', 'Stand-by']
const BILLING_STATUSES: BillingStatus[] = ['Da fatturare', 'Fatturato', 'Pagato']
const LOG_TYPES: LogType[] = ['Nota', 'Call', 'Email', 'Documento', 'Preventivo', 'Revisione']
const FILE_TYPES: FileType[] = ['Pitch', 'Preventivo', 'Contratto', 'Brief', 'Documento', 'Revisione', 'Materiali']
const SOURCES: ClientSource[] = ['Google', 'Social (Instagram/LinkedIn)', 'Passaparola', 'Vecchio cliente', 'Behance', 'IMDB', 'Altro']
const PROJECT_PROGRESS: Record<string, number> = { Lead: 10, 'In lavorazione': 50, Chiuso: 100, 'Stand-by': 20 }

// ─── COLORS ───────────────────────────────────────────────────────────────────
const C = {
  bg: '#1a1a1a', bg2: '#222', bg3: '#2a2a2a',
  border: '#333', orange: '#f5aa44', muted: '#888', off: '#e8e4de',
  red: '#f08080', redbg: '#2d1a1a',
  green: '#a3d977', greenbg: '#1e3310',
  amber: '#f5c87a', amberbg: '#2d1f00',
  blue: '#7ec8f0', bluebg: '#1a2d3d',
  purple: '#c4b5f5', purplebg: '#1e1a2d',
  gray: '#aaa', graybg: '#2a2a2a',
}

// ─── UTILS ────────────────────────────────────────────────────────────────────
function ini(n: string) { return (n || '?').split(' ').filter(Boolean).map(w => w[0]).join('').slice(0, 2).toUpperCase() }
function fd(d?: string | null) { if (!d) return '—'; const clean = d.length === 10 ? d + 'T00:00:00' : d; return new Date(clean).toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: '2-digit' }) }
function fm(v?: number | null) { if (!v && v !== 0) return '—'; return '€' + v.toLocaleString('it-IT') }
function fmtSize(b?: number | null) { if (!b) return ''; if (b < 1048576) return Math.round(b / 1024) + 'KB'; return (b / 1048576).toFixed(1) + 'MB' }
function today() { return new Date().toISOString().slice(0, 10) }
function deadlineDiff(d?: string | null) {
  if (!d) return null
  const t = new Date(); t.setHours(0, 0, 0, 0)
  return Math.ceil((new Date(d + 'T00:00:00').getTime() - t.getTime()) / 86400000)
}
function fileIcon(mime?: string | null) {
  if (!mime) return '📎'
  if (mime.includes('pdf')) return '📄'
  if (mime.startsWith('image/')) return '🖼️'
  if (mime.startsWith('video/')) return '🎬'
  return '📎'
}

// ─── BASE STYLES ──────────────────────────────────────────────────────────────
const inputSt: React.CSSProperties = { width: '100%', padding: '9px 12px', fontSize: '13px', border: `1px solid ${C.border}`, borderRadius: '8px', background: C.bg3, color: C.off, fontFamily: 'inherit', boxSizing: 'border-box' }
const labelSt: React.CSSProperties = { display: 'block', fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 600 }

// ─── SMALL COMPONENTS ─────────────────────────────────────────────────────────
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
    <div className="crm-modal-bg" style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.75)', zIndex: 1000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '30px 20px', overflowY: 'auto' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div className="crm-modal-inner" style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '14px', padding: '24px', width: '100%', maxWidth: wide ? '680px' : '520px', margin: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>{title}</h3>
          <Btn v="ghost" sz="sm" onClick={onClose}>✕</Btn>
        </div>
        {children}
      </div>
    </div>
  )
}

function SL({ children, action }: { children: React.ReactNode; action?: React.ReactNode }) {
  return <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '10px', fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.07em', margin: '18px 0 9px' }}><span>{children}</span>{action}</div>
}

function InfoItem({ label, children }: { label: string; children: React.ReactNode }) {
  return <div style={{ background: C.bg3, borderRadius: '8px', padding: '10px 12px' }}><div style={{ fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '3px' }}>{label}</div><div style={{ fontSize: '13px', color: C.off }}>{children}</div></div>
}

// ─── BADGES ───────────────────────────────────────────────────────────────────
function ProjectStatusBadge({ status }: { status: ProjectStatus }) {
  const map: Record<string, React.CSSProperties> = {
    'Lead': { background: C.bluebg, color: C.blue },
    'In lavorazione': { background: C.purplebg, color: C.purple },
    'Chiuso': { background: C.greenbg, color: C.green },
    'Stand-by': { background: C.graybg, color: C.gray },
  }
  return <span style={{ display: 'inline-flex', alignItems: 'center', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontWeight: 600, whiteSpace: 'nowrap', ...map[status] }}>{status}</span>
}

// La pillola di fatturazione — cuore dell'interfaccia
function BillingPill({ project, onUpdate }: { project: CrmProject; onUpdate: (p: CrmProject) => void }) {
  const [loading, setLoading] = useState(false)

  if (project.status !== 'Chiuso') return null

  const cfg: Record<string, { bg: string; color: string; icon: string; next: BillingStatus }> = {
    'Da fatturare': { bg: C.amberbg, color: C.amber, icon: '🟡', next: 'Fatturato' },
    'Fatturato': { bg: C.bluebg, color: C.blue, icon: '🔵', next: 'Pagato' },
    'Pagato': { bg: C.greenbg, color: C.green, icon: '🟢', next: 'Da fatturare' },
  }

  const current = (project.billing_status || 'Da fatturare') as BillingStatus
  const { bg, color, icon, next } = cfg[current]

  async function cycle() {
    setLoading(true)
    const res = await fetch(`/api/crm/projects/${project.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ billing_status: next }),
    })
    if (res.ok) {
      const updated = await res.json()
      onUpdate(updated)
    }
    setLoading(false)
  }

  return (
    <button
      onClick={e => { e.stopPropagation(); cycle() }}
      disabled={loading}
      title={`Clicca per passare a: ${next}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', fontSize: '11px', padding: '4px 10px', borderRadius: '20px', fontWeight: 700, border: 'none', cursor: 'pointer', background: bg, color, opacity: loading ? 0.6 : 1, transition: 'opacity 0.15s' }}>
      {icon} {current}
    </button>
  )
}

function DeadlineBadge({ deadline }: { deadline?: string | null }) {
  const diff = deadlineDiff(deadline)
  if (diff === null) return null
  if (diff < 0) return <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '6px', background: C.redbg, color: C.red, fontWeight: 600 }}>⚠ scad. {fd(deadline)}</span>
  if (diff <= 7) return <span style={{ fontSize: '11px', padding: '3px 8px', borderRadius: '6px', background: C.amberbg, color: C.amber, fontWeight: 600 }}>⏰ {diff}gg</span>
  return <span style={{ fontSize: '11px', color: C.muted }}>📅 {fd(deadline)}</span>
}

// ─── CLIENT FORM (solo anagrafica) ────────────────────────────────────────────
function ClientForm({ init, onSave, onCancel, loading }: { init?: Partial<ClientFormData>; onSave: (d: ClientFormData) => void; onCancel: () => void; loading: boolean }) {
  const [f, sf] = useState<ClientFormData>({
    name: init?.name || '', company: init?.company || '',
    email: init?.email || '', phone: init?.phone || '',
    source: init?.source, notes: init?.notes || '',
    vat_number: init?.vat_number || '', sdi_code: init?.sdi_code || '',
    pec: init?.pec || '', address: init?.address || '', website: init?.website || '',
  })
  const set = (k: keyof ClientFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => sf(p => ({ ...p, [k]: e.target.value }))
  return (
    <form onSubmit={e => { e.preventDefault(); onSave(f) }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <Field label="Nome *"><Inp value={f.name} onChange={set('name')} placeholder="Mario Rossi" required /></Field>
        <Field label="Azienda"><Inp value={f.company} onChange={set('company')} placeholder="Agenzia X" /></Field>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <Field label="Email"><Inp type="email" value={f.email} onChange={set('email')} placeholder="mario@..." /></Field>
        <Field label="Telefono"><Inp value={f.phone} onChange={set('phone')} placeholder="+39 ..." /></Field>
      </div>
      <Field label="Come mi ha trovato">
        <Sel value={f.source || ''} onChange={set('source')}>
          <option value="">— seleziona —</option>
          {SOURCES.map(s => <option key={s}>{s}</option>)}
        </Sel>
      </Field>
      <Field label="Sito web"><Inp value={f.website} onChange={set('website')} placeholder="https://..." /></Field>
      <div style={{ height: '1px', background: C.border, margin: '12px 0 14px' }} />
      <div style={{ fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '10px', fontWeight: 700 }}>Dati fatturazione</div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <Field label="P.IVA / Codice Fiscale"><Inp value={f.vat_number} onChange={set('vat_number')} placeholder="IT01234567890" /></Field>
        <Field label="Codice SDI"><Inp value={f.sdi_code} onChange={set('sdi_code')} placeholder="es. ABCDE12" /></Field>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <Field label="PEC"><Inp type="email" value={f.pec} onChange={set('pec')} placeholder="fatture@pec.it" /></Field>
        <Field label="Indirizzo"><Inp value={f.address} onChange={set('address')} placeholder="Via Roma 1, Milano" /></Field>
      </div>
      <Field label="Note generali"><Ta value={f.notes} onChange={set('notes')} placeholder="Note sul cliente..." /></Field>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '14px', paddingTop: '14px', borderTop: `1px solid ${C.border}` }}>
        <Btn type="button" onClick={onCancel}>annulla</Btn>
        <Btn v="primary" type="submit" disabled={loading}>{loading ? 'salvataggio…' : 'salva'}</Btn>
      </div>
    </form>
  )
}

// ─── PROJECT FORM ─────────────────────────────────────────────────────────────
function ProjectForm({ init, onSave, onCancel, loading }: { init?: Partial<ProjectFormData>; onSave: (d: ProjectFormData) => void; onCancel: () => void; loading: boolean }) {
  const [f, sf] = useState<ProjectFormData>({
    title: init?.title || '', service: init?.service || '',
    budget: init?.budget ?? '', deadline: init?.deadline || '',
    status: init?.status || 'Lead',
    billing_status: init?.billing_status || 'Da fatturare',
    billed_at: init?.billed_at || '', paid_at: init?.paid_at || '',
    brief: init?.brief || '', next_action: init?.next_action || '',
    first_contact: init?.first_contact || '',
  })
  const set = (k: keyof ProjectFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => sf(p => ({ ...p, [k]: e.target.value }))
  const isClosed = f.status === 'Chiuso'

  return (
    <form onSubmit={e => { e.preventDefault(); onSave(f) }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <Field label="Titolo progetto *"><Inp value={f.title} onChange={set('title')} placeholder="es. Video istituzionale 2026" required /></Field>
        <Field label="Servizio"><Inp value={f.service} onChange={set('service')} placeholder="es. VFX + Color Grading" /></Field>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <Field label="Budget (€)"><Inp type="number" value={f.budget?.toString() || ''} onChange={set('budget')} placeholder="5000" /></Field>
        <Field label="Scadenza"><Inp type="date" value={f.deadline} onChange={set('deadline')} /></Field>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <Field label="Stato">
          <Sel value={f.status} onChange={set('status')}>
            {PROJECT_STATUSES.map(s => <option key={s}>{s}</option>)}
          </Sel>
        </Field>
        <Field label="Prossima azione"><Inp value={f.next_action} onChange={set('next_action')} placeholder="es. Inviare revisione" /></Field>
      </div>
      <Field label="Primo contatto"><Inp type="date" value={f.first_contact} onChange={set('first_contact')} /></Field>

      {/* Sezione fatturazione — solo se Chiuso */}
      {isClosed && (
        <div style={{ background: C.bg3, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '12px 14px', marginBottom: '11px' }}>
          <div style={{ fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '10px', fontWeight: 700 }}>Fatturazione</div>
          <div className="crm-project-form-3col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
            <Field label="Stato">
              <Sel value={f.billing_status || 'Da fatturare'} onChange={set('billing_status')}>
                {BILLING_STATUSES.map(s => <option key={s}>{s}</option>)}
              </Sel>
            </Field>
            <Field label="Data fattura"><Inp type="date" value={f.billed_at} onChange={set('billed_at')} /></Field>
            <Field label="Data pagamento"><Inp type="date" value={f.paid_at} onChange={set('paid_at')} /></Field>
          </div>
        </div>
      )}

      <Field label="Brief & note"><Ta value={f.brief} onChange={set('brief')} placeholder="Descrivi il progetto, materiali ricevuti, richieste specifiche..." /></Field>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '14px', paddingTop: '14px', borderTop: `1px solid ${C.border}` }}>
        <Btn type="button" onClick={onCancel}>annulla</Btn>
        <Btn v="primary" type="submit" disabled={loading}>{loading ? 'salvataggio…' : 'salva'}</Btn>
      </div>
    </form>
  )
}



// ─── NEW PROJECT MODAL (with client create/select) ────────────────────────────
function NewProjectModal({ clients, onClose, onCreated }: {
  clients: CrmClient[]
  onClose: () => void
  onCreated: (clientId: string, projectId: string) => void
}) {
  const [mode, setMode] = useState<'existing' | 'new'>('existing')
  const [clientId, setClientId] = useState(clients[0]?.id || '')
  const [clientSearch, setClientSearch] = useState('')
  const [newClient, setNewClient] = useState<ClientFormData>({ name: '', company: '', email: '', phone: '', source: undefined, notes: '' })
  const [project, setProject] = useState<ProjectFormData>({
    title: '', service: '', budget: '', deadline: '',
    status: 'Lead', brief: '', next_action: '', first_contact: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const setNC = (k: keyof ClientFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setNewClient(p => ({ ...p, [k]: e.target.value }))
  const setP = (k: keyof ProjectFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setProject(p => ({ ...p, [k]: e.target.value }))

  const filteredClients = clientSearch
    ? clients.filter(c => `${c.name}${c.company}`.toLowerCase().includes(clientSearch.toLowerCase()))
    : clients

  async function handleSave() {
    if (!project.title.trim()) { setError('Il titolo del progetto è obbligatorio'); return }
    if (mode === 'existing' && !clientId) { setError('Seleziona un cliente'); return }
    if (mode === 'new' && !newClient.name.trim()) { setError('Il nome del cliente è obbligatorio'); return }
    setLoading(true); setError('')

    let finalClientId = clientId

    // Create new client if needed
    if (mode === 'new') {
      const cRes = await fetch('/api/crm/clients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newClient),
      })
      if (!cRes.ok) { setError('Errore nella creazione del cliente'); setLoading(false); return }
      const cData = await cRes.json()
      finalClientId = cData.id
    }

    // Create project
    const pRes = await fetch(`/api/crm/clients/${finalClientId}/projects`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(project),
    })
    if (!pRes.ok) { setError('Errore nella creazione del progetto'); setLoading(false); return }
    const pData = await pRes.json()
    onCreated(finalClientId, pData.id)
    setLoading(false)
  }

  const tabStyle = (active: boolean): React.CSSProperties => ({
    flex: 1, padding: '8px', fontSize: '13px', fontWeight: active ? 700 : 400,
    border: `1px solid ${active ? C.orange : C.border}`,
    borderRadius: '8px', background: active ? 'rgba(245,170,68,0.12)' : 'transparent',
    color: active ? C.orange : C.muted, cursor: 'pointer', fontFamily: 'inherit',
  })

  return (
    <Modal title="Nuovo progetto" onClose={onClose} wide>
      {/* Client selector */}
      <div style={{ marginBottom: '16px' }}>
        <label style={labelSt}>Cliente</label>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '10px' }}>
          <button style={tabStyle(mode === 'existing')} onClick={() => setMode('existing')}>Cliente esistente</button>
          <button style={tabStyle(mode === 'new')} onClick={() => setMode('new')}>+ Nuovo cliente</button>
        </div>

        {mode === 'existing' && (
          <div>
            {clients.length === 0
              ? <div style={{ fontSize: '13px', color: C.muted, padding: '8px 0' }}>Nessun cliente ancora — usa il tab Nuovo cliente</div>
              : <>
                <Inp
                  value={clientSearch}
                  onChange={e => setClientSearch(e.target.value)}
                  placeholder="Cerca cliente..."
                  style={{ marginBottom: '8px' }}
                />
                <div style={{ maxHeight: '160px', overflowY: 'auto', border: `1px solid ${C.border}`, borderRadius: '8px' }}>
                  {filteredClients.map(c => (
                    <div key={c.id} onClick={() => setClientId(c.id)}
                      style={{ padding: '9px 12px', cursor: 'pointer', background: clientId === c.id ? 'rgba(245,170,68,0.12)' : 'transparent', borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: clientId === c.id ? C.orange : C.off }}>{c.name}</div>
                        {c.company && <div style={{ fontSize: '11px', color: C.muted }}>{c.company}</div>}
                      </div>
                      {clientId === c.id && <span style={{ color: C.orange, fontSize: '16px' }}>✓</span>}
                    </div>
                  ))}
                </div>
              </>
            }
          </div>
        )}

        {mode === 'new' && (
          <div style={{ background: C.bg3, borderRadius: '8px', padding: '12px 14px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <Field label="Nome *"><Inp value={newClient.name} onChange={setNC('name')} placeholder="Mario Rossi" /></Field>
              <Field label="Azienda"><Inp value={newClient.company} onChange={setNC('company')} placeholder="Agenzia X" /></Field>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              <Field label="Email"><Inp type="email" value={newClient.email} onChange={setNC('email')} placeholder="mario@..." /></Field>
              <Field label="Telefono"><Inp value={newClient.phone} onChange={setNC('phone')} placeholder="+39 ..." /></Field>
            </div>
            <Field label="Come mi ha trovato">
              <Sel value={newClient.source || ''} onChange={setNC('source')}>
                <option value="">— seleziona —</option>
                {SOURCES.map(s => <option key={s}>{s}</option>)}
              </Sel>
            </Field>
          </div>
        )}
      </div>

      <div style={{ height: '1px', background: C.border, margin: '4px 0 16px' }} />

      {/* Project fields */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <Field label="Titolo progetto *"><Inp value={project.title} onChange={setP('title')} placeholder="es. Video istituzionale 2026" /></Field>
        <Field label="Servizio"><Inp value={project.service} onChange={setP('service')} placeholder="es. VFX + Color Grading" /></Field>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <Field label="Budget (€)"><Inp type="number" value={project.budget?.toString() || ''} onChange={setP('budget')} placeholder="5000" /></Field>
        <Field label="Scadenza"><Inp type="date" value={project.deadline} onChange={setP('deadline')} /></Field>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
        <Field label="Stato">
          <Sel value={project.status} onChange={setP('status')}>
            {PROJECT_STATUSES.map(s => <option key={s}>{s}</option>)}
          </Sel>
        </Field>
        <Field label="Prossima azione"><Inp value={project.next_action} onChange={setP('next_action')} placeholder="es. Inviare preventivo" /></Field>
      </div>
      <Field label="Brief"><Ta value={project.brief} onChange={setP('brief')} placeholder="Descrivi il progetto..." /></Field>

      {error && <div style={{ fontSize: '12px', color: C.red, marginBottom: '8px' }}>{error}</div>}

      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', paddingTop: '14px', borderTop: `1px solid ${C.border}` }}>
        <Btn onClick={onClose}>annulla</Btn>
        <Btn v="primary" onClick={handleSave} disabled={loading}>{loading ? 'creazione…' : 'crea progetto'}</Btn>
      </div>
    </Modal>
  )
}

// ─── PROJECTS VIEW (tutti i progetti, tutti i clienti) ────────────────────────
function ProjectsView({ clients, onRefresh, onNavigate }: { clients: CrmClient[]; onRefresh: () => void; onNavigate: (clientId: string, projectId: string) => void }) {
  const [filter, setFilter] = useState<ProjectStatus | 'Tutti'>('Tutti')
  const [billingFilter, setBillingFilter] = useState<BillingStatus | 'Tutti'>('Tutti')
  const [sortBy, setSortBy] = useState<'recenti' | 'scadenza' | 'budget'>('recenti')
  const [showNewProject, setShowNewProject] = useState(false)

  const allProjects = clients.flatMap(c =>
    (c.projects || []).map(p => ({ ...p, client_name: c.name, client_id: c.id }))
  )

  const filtered = allProjects.filter(p => {
    if (filter !== 'Tutti' && p.status !== filter) return false
    if (billingFilter !== 'Tutti') {
      if (billingFilter === 'Da fatturare' && p.billing_status !== 'Da fatturare') return false
      if (billingFilter !== 'Da fatturare' && p.billing_status !== billingFilter) return false
    }
    return true
  })

  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === 'budget') return (b.budget || 0) - (a.budget || 0)
    if (sortBy === 'scadenza') {
      if (!a.deadline && !b.deadline) return 0
      if (!a.deadline) return 1; if (!b.deadline) return -1
      return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
    }
    // recenti: più recente prima
    return new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  })

  const filterBtnStyle = (active: boolean): React.CSSProperties => ({
    padding: '5px 12px', fontSize: '12px', borderRadius: '20px', cursor: 'pointer',
    border: `1px solid ${active ? C.orange : C.border}`,
    background: active ? 'rgba(245,170,68,0.15)' : 'transparent',
    color: active ? C.orange : C.muted, fontFamily: 'inherit',
  })

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px', flexWrap: 'wrap', gap: '10px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 700 }}>Progetti</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '13px', color: C.muted }}>{sorted.length} progett{sorted.length === 1 ? 'o' : 'i'}</span>
          <Btn v="primary" onClick={() => setShowNewProject(true)}>+ nuovo progetto</Btn>
        </div>
      </div>

      {/* Filtri stato workflow */}
      <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '10px' }}>
        {(['Tutti', ...PROJECT_STATUSES] as (ProjectStatus | 'Tutti')[]).map(s => (
          <button key={s} style={filterBtnStyle(filter === s)} onClick={() => setFilter(s)}>{s}</button>
        ))}
      </div>

      {/* Filtri fatturazione */}
      <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap', marginBottom: '10px' }}>
        {(['Tutti', ...BILLING_STATUSES] as (BillingStatus | 'Tutti')[]).map(s => (
          <button key={s} style={filterBtnStyle(billingFilter === s)} onClick={() => setBillingFilter(s)}>{s}</button>
        ))}
      </div>
      {/* Ordinamento */}
      <div style={{ display: 'flex', gap: '7px', alignItems: 'center', marginBottom: '18px' }}>
        <span style={{ fontSize: '11px', color: C.muted }}>Ordina:</span>
        {(['recenti', 'scadenza', 'budget'] as const).map(s => (
          <button key={s} style={filterBtnStyle(sortBy === s)} onClick={() => setSortBy(s)}>{s}</button>
        ))}
      </div>

      {showNewProject && (
        <NewProjectModal
          clients={clients}
          onClose={() => setShowNewProject(false)}
          onCreated={async (clientId, projectId) => {
            await onRefresh()
            setShowNewProject(false)
            onNavigate(clientId, projectId)
          }}
        />
      )}
      {sorted.length === 0 && <div style={{ textAlign: 'center', padding: '40px', color: C.muted, fontSize: '13px' }}>nessun progetto con questi filtri</div>}

      {sorted.map(p => (
        <div key={p.id} onClick={() => onNavigate(p.client_id, p.id)}
          style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '11px', padding: '14px 18px', marginBottom: '8px', cursor: 'pointer', transition: 'border-color 0.15s' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = C.orange)}
          onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px', marginBottom: '8px' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>{p.title}</div>
              <div style={{ fontSize: '12px', color: C.muted, marginTop: '2px' }}>{p.client_name}{p.service ? ' · ' + p.service : ''}</div>
            </div>
            <div style={{ display: 'flex', gap: '7px', alignItems: 'center', flexShrink: 0, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              <ProjectStatusBadge status={p.status as ProjectStatus} />
              {p.status === 'Chiuso' && (
                <div onClick={e => e.stopPropagation()}>
                  <BillingPill
                    project={p as CrmProject}
                    onUpdate={onRefresh}
                  />
                </div>
              )}
            </div>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
            {p.budget && <span style={{ fontSize: '13px', fontWeight: 700, color: C.off }}>{fm(p.budget)}</span>}
            <DeadlineBadge deadline={p.deadline} />
            {p.next_action && <span style={{ fontSize: '12px', color: C.orange }}>→ {p.next_action}</span>}
            {p.billed_at && <span style={{ fontSize: '11px', color: C.muted }}>fattura: {fd(p.billed_at)}</span>}
            {p.paid_at && <span style={{ fontSize: '11px', color: C.green }}>pagato: {fd(p.paid_at)}</span>}
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── DASHBOARD VIEW ───────────────────────────────────────────────────────────
function DashboardView({ onNavigate }: { onNavigate: (clientId: string, projectId: string) => void }) {
  const [stats, setStats] = useState<Record<string, unknown> | null>(null)
  const [year, setYear] = useState(new Date().getFullYear().toString())
  const [loading, setLoading] = useState(true)

  async function loadStats(y: string) {
    setLoading(true)
    const res = await fetch(`/api/crm/stats?year=${y}`)
    if (res.ok) setStats(await res.json())
    setLoading(false)
  }

  useEffect(() => { loadStats(year) }, [year]) // eslint-disable-line react-hooks/exhaustive-deps

  if (loading || !stats) return <div style={{ padding: '40px', textAlign: 'center', color: C.muted }}>caricamento…</div>

  const years = stats.years as string[]
  const monthly = stats.monthlyRevenue as { month: string; amount: number }[]
  const maxMonth = Math.max(...monthly.map((m: { month: string; amount: number }) => m.amount), 1)
  const topClients = stats.topClients as { client_id: string; name: string; total: number; projects: number }[]
  const totalValue = topClients.reduce((a: number, c: { total: number }) => a + c.total, 0)
  const sourceStats = stats.sourceStats as { source: string; count: number; value: number }[]
  const byBilling = stats.byBilling as { billing_status: string; count: number; value: number }[]
  const activeProjects = stats.activeProjects as (CrmProject & { client_name: string })[]

  const billingColors: Record<string, string> = { 'Da fatturare': C.amber, 'Fatturato': C.blue, 'Pagato': C.green }

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px', flexWrap: 'wrap', gap: '10px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 700 }}>Dashboard</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontSize: '12px', color: C.muted }}>Anno:</span>
          <Sel value={year} onChange={e => { setYear(e.target.value); loadStats(e.target.value) }} style={{ width: 'auto', padding: '5px 10px', fontSize: '13px' }}>
            {years.map((y: string) => <option key={y}>{y}</option>)}
          </Sel>
        </div>
      </div>

      {/* Finanze */}
      <SL>Finanze</SL>
      <div className="crm-dash-finance" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '10px' }}>
        {[
          { label: 'Da fatturare', value: stats.totalDaFatturare as number, color: C.amber, bg: C.amberbg },
          { label: 'Fatturato (in attesa)', value: stats.totalFatturato as number, color: C.blue, bg: C.bluebg },
          { label: 'Incassato', value: stats.totalPagato as number, color: C.green, bg: C.greenbg },
        ].map(s => (
          <div key={s.label} style={{ background: s.bg, border: `1px solid ${s.color}33`, borderRadius: '11px', padding: '16px 18px' }}>
            <div style={{ fontSize: '22px', fontWeight: 700, color: s.color }}>{fm(s.value)}</div>
            <div style={{ fontSize: '11px', color: s.color, opacity: 0.8, marginTop: '4px' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Grafico mensile */}
      <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '11px', padding: '16px 18px', marginBottom: '18px' }}>
        <div style={{ fontSize: '11px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '14px' }}>Incassato per mese — {year}</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: '6px', height: '80px' }}>
          {monthly.map((m: { month: string; amount: number }) => (
            <div key={m.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
              <div style={{ width: '100%', background: m.amount > 0 ? C.green : C.bg3, borderRadius: '4px 4px 0 0', height: `${Math.max((m.amount / maxMonth) * 60, m.amount > 0 ? 4 : 0)}px`, transition: 'height 0.3s', minHeight: m.amount > 0 ? '4px' : '0' }} title={fm(m.amount)} />
              <div style={{ fontSize: '9px', color: C.muted }}>{m.month}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Fatturazione per stato */}
      {byBilling.length > 0 && (
        <>
          <SL>Fatturazione per stato</SL>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '7px', marginBottom: '18px' }}>
            {byBilling.map((b: { billing_status: string; count: number; value: number }) => (
              <div key={b.billing_status} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '10px 14px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: billingColors[b.billing_status] || C.off, minWidth: '120px' }}>{b.billing_status}</span>
                <span style={{ fontSize: '13px', color: C.off, flex: 1 }}>{b.count} progett{b.count === 1 ? 'o' : 'i'}</span>
                <span style={{ fontSize: '14px', fontWeight: 700, color: billingColors[b.billing_status] || C.off }}>{fm(b.value)}</span>
              </div>
            ))}
          </div>
        </>
      )}

      <div className="crm-dash-split" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px', marginBottom: '18px' }}>
        {/* Top clienti */}
        <div>
          <SL>Top clienti per valore</SL>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {topClients.slice(0, 6).map((c: { client_id: string; name: string; total: number; projects: number }) => {
              const pct = totalValue > 0 ? Math.round((c.total / totalValue) * 100) : 0
              return (
                <div key={c.client_id} style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '10px 12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: C.off }}>{c.name}</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: C.orange }}>{fm(c.total)}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ flex: 1, height: '3px', background: C.bg3, borderRadius: '2px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${pct}%`, background: C.orange, borderRadius: '2px' }} />
                    </div>
                    <span style={{ fontSize: '10px', color: C.muted, minWidth: '30px' }}>{pct}%</span>
                    <span style={{ fontSize: '10px', color: C.muted }}>{c.projects} proj</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Acquisizione */}
        <div>
          <SL>Da dove arrivano i clienti</SL>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
            {sourceStats.map((s: { source: string; count: number; value: number }) => (
              <div key={s.source} style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '10px 12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                  <span style={{ fontSize: '13px', color: C.off }}>{s.source}</span>
                  <span style={{ fontSize: '12px', color: C.orange, fontWeight: 700 }}>{fm(s.value)}</span>
                </div>
                <span style={{ fontSize: '11px', color: C.muted }}>{s.count} progett{s.count === 1 ? 'o' : 'i'}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pipeline attiva */}
      <SL>Pipeline attiva</SL>
      {activeProjects.length === 0 && <div style={{ textAlign: 'center', padding: '20px', color: C.muted, fontSize: '13px' }}>nessun progetto attivo</div>}
      {activeProjects.map((p: CrmProject & { client_name: string }) => (
        <div key={p.id} onClick={() => onNavigate(p.client_id, p.id)}
          style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '12px 16px', marginBottom: '7px', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = C.orange)}
          onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: C.off }}>{p.title}</div>
            <div style={{ fontSize: '12px', color: C.muted, marginTop: '2px' }}>{p.client_name}{p.service ? ' · ' + p.service : ''}</div>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexShrink: 0 }}>
            <ProjectStatusBadge status={p.status} />
            <DeadlineBadge deadline={p.deadline} />
            <span style={{ fontSize: '13px', fontWeight: 700, color: C.off }}>{fm(p.budget)}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

// ─── PROJECT DETAIL VIEW ──────────────────────────────────────────────────────
function ProjectDetail({
  project: initialProject, clientName, onBack, onProjectUpdate
}: {
  project: CrmProject; clientName: string; onBack: () => void; onProjectUpdate: (p: CrmProject) => void
}) {
  const [project, setProject] = useState<CrmProject>(initialProject)
  const [modal, setModal] = useState<'editProject' | 'newLog' | 'newFile' | null>(null)
  const [loading, setLoading] = useState(false)
  const [delConfirm, setDelConfirm] = useState(false)
  const [logForm, setLogForm] = useState({ type: 'Nota' as LogType, log_date: today(), text: '' })
  const [fileForm, setFileForm] = useState({ name: '', type: 'Documento' as FileType, url: '' })
  const [pendingFile, setPendingFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState('')

  async function reload() {
    const res = await fetch(`/api/crm/projects/${project.id}`)
    if (res.ok) { const d = await res.json(); setProject(d); onProjectUpdate(d) }
  }

  async function handleSaveProject(data: ProjectFormData) {
    setLoading(true)
    const res = await fetch(`/api/crm/projects/${project.id}`, {
      method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data)
    })
    if (res.ok) { const d = await res.json(); setProject(d); onProjectUpdate(d) }
    setModal(null); setLoading(false)
  }

  async function handleDeleteProject() {
    setLoading(true)
    await fetch(`/api/crm/projects/${project.id}`, { method: 'DELETE' })
    onBack()
    setLoading(false)
  }

  async function handleSaveLog() {
    if (!logForm.text) return
    setLoading(true)
    await fetch(`/api/crm/clients/${project.client_id}/logs`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...logForm, project_id: project.id }),
    })
    await reload(); setModal(null)
    setLogForm({ type: 'Nota', log_date: today(), text: '' }); setLoading(false)
  }

  async function handleDeleteLog(logId: string) {
    await fetch(`/api/crm/clients/${project.client_id}/logs?logId=${logId}`, { method: 'DELETE' })
    await reload()
  }

  async function handleSaveFile() {
    setLoading(true)
    if (pendingFile) {
      const fd = new FormData()
      fd.append('file', pendingFile)
      fd.append('name', fileForm.name || pendingFile.name)
      fd.append('type', fileForm.type)
      fd.append('project_id', project.id)
      await fetch(`/api/crm/clients/${project.client_id}/files`, { method: 'POST', body: fd })
    } else if (fileForm.url) {
      await fetch(`/api/crm/clients/${project.client_id}/files`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fileForm.name, type: fileForm.type, url: fileForm.url, project_id: project.id }),
      })
    }
    await reload(); setModal(null)
    setPendingFile(null); setFilePreview('')
    setFileForm({ name: '', type: 'Documento', url: '' }); setLoading(false)
  }

  async function handleDeleteFile(fileId: string) {
    await fetch(`/api/crm/clients/${project.client_id}/files?fileId=${fileId}`, { method: 'DELETE' })
    await reload()
  }

  async function handleOpenFile(file: CrmFile) {
    if (file.url) { window.open(file.url, '_blank'); return }
    const res = await fetch(`/api/crm/clients/${file.client_id}/files?fileId=${file.id}`)
    if (res.ok) { const { url } = await res.json(); window.open(url, '_blank') }
  }

  const logColors: Record<string, string> = { Nota: C.muted, Call: C.blue, Email: '#2a9d6a', Documento: C.orange, Preventivo: C.purple, Revisione: C.red }
  const pr = PROJECT_PROGRESS[project.status] || 0

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
        <Btn v="ghost" onClick={onBack}>← {clientName}</Btn>
      </div>

      <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '20px 22px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '14px' }}>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>{project.title}</div>
            <div style={{ fontSize: '13px', color: C.muted, marginTop: '2px' }}>{clientName}{project.service ? ' · ' + project.service : ''}</div>
          </div>
          <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
            <Btn sz="sm" onClick={() => setModal('editProject')}>modifica</Btn>
            <Btn sz="sm" v="danger" onClick={() => setDelConfirm(true)}>elimina</Btn>
          </div>
        </div>

        {/* Status + billing */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '16px' }}>
          <ProjectStatusBadge status={project.status} />
          <BillingPill project={project} onUpdate={p => { setProject(p); onProjectUpdate(p) }} />
          {project.billed_at && <span style={{ fontSize: '11px', color: C.muted }}>fattura: {fd(project.billed_at)}</span>}
          {project.paid_at && <span style={{ fontSize: '11px', color: C.green }}>pagato: {fd(project.paid_at)}</span>}
          <div style={{ flex: 1, height: '4px', background: C.bg3, borderRadius: '2px', overflow: 'hidden', minWidth: '60px' }}>
            <div style={{ height: '100%', width: `${pr}%`, background: C.orange, borderRadius: '2px' }} />
          </div>
          <span style={{ fontSize: '11px', color: C.muted }}>{pr}%</span>
        </div>

        {/* Info grid */}
        <SL>Dettagli progetto</SL>
        <div className="crm-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px' }}>
          <InfoItem label="Budget">{fm(project.budget)}</InfoItem>
          <InfoItem label="Scadenza"><DeadlineBadge deadline={project.deadline} />{!project.deadline && '—'}</InfoItem>
          <InfoItem label="Primo contatto">{fd(project.first_contact)}</InfoItem>
          <InfoItem label="Prossima azione"><span style={{ color: C.orange, fontWeight: 600 }}>{project.next_action || '—'}</span></InfoItem>
        </div>

        {project.brief && (
          <>
            <SL>Brief</SL>
            <div style={{ background: C.bg3, borderRadius: '8px', padding: '12px 14px', fontSize: '13px', color: C.off, lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{project.brief}</div>
          </>
        )}

        {/* File */}
        <SL action={<Btn sz="sm" onClick={() => setModal('newFile')}>+ aggiungi</Btn>}>
          Documenti ({project.files?.length || 0})
        </SL>
        {(!project.files || project.files.length === 0) && <div style={{ fontSize: '13px', color: C.muted, padding: '4px 0' }}>nessun documento.</div>}
        {project.files?.map(f => (
          <div key={f.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', background: C.bg3, borderRadius: '8px', padding: '10px 12px', marginBottom: '6px' }}>
            <div style={{ fontSize: '20px' }}>{fileIcon(f.mime)}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: C.off }}>{f.name}</div>
              <div style={{ fontSize: '11px', color: C.muted, marginTop: '2px' }}>{f.type} · {fd(f.created_at)}{f.size ? ' · ' + fmtSize(f.size) : ''}</div>
            </div>
            <div style={{ display: 'flex', gap: '6px' }}>
              <Btn sz="sm" onClick={() => handleOpenFile(f)}>apri</Btn>
              <Btn sz="sm" v="danger" onClick={() => handleDeleteFile(f.id)}>×</Btn>
            </div>
          </div>
        ))}

        {/* Log */}
        <SL action={<Btn sz="sm" onClick={() => setModal('newLog')}>+ aggiungi</Btn>}>
          Log attività ({project.logs?.length || 0})
        </SL>
        {(!project.logs || project.logs.length === 0) && <div style={{ fontSize: '13px', color: C.muted, padding: '4px 0' }}>nessuna attività.</div>}
        {project.logs?.map((l: CrmLog) => (
          <div key={l.id} style={{ display: 'flex', gap: '10px', padding: '9px 0', borderBottom: `1px solid ${C.border}` }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: logColors[l.type] || C.muted, flexShrink: 0, marginTop: '5px' }} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '13px', color: C.off, lineHeight: 1.5 }}>{l.text}</div>
              <div style={{ fontSize: '11px', color: C.muted, marginTop: '2px' }}>{l.type} · {fd(l.log_date)}</div>
            </div>
            <Btn sz="sm" v="ghost" onClick={() => handleDeleteLog(l.id)}>×</Btn>
          </div>
        ))}

        {/* Delete confirm */}
        {delConfirm && (
          <div style={{ background: C.redbg, border: `1px solid ${C.red}`, borderRadius: '8px', padding: '12px 14px', fontSize: '13px', color: C.red, marginTop: '14px' }}>
            Eliminare <strong>{project.title}</strong> con tutti i suoi dati?
            <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
              <Btn sz="sm" v="danger" onClick={handleDeleteProject} disabled={loading}>sì, elimina</Btn>
              <Btn sz="sm" onClick={() => setDelConfirm(false)}>annulla</Btn>
            </div>
          </div>
        )}
      </div>

      {/* MODALS */}
      {modal === 'editProject' && (
        <Modal title="Modifica progetto" onClose={() => setModal(null)}>
          <ProjectForm init={{ ...project, budget: project.budget ?? '' }} onSave={handleSaveProject} onCancel={() => setModal(null)} loading={loading} />
        </Modal>
      )}
      {modal === 'newLog' && (
        <Modal title="Aggiungi attività" onClose={() => setModal(null)}>
          <Field label="Tipo"><Sel value={logForm.type} onChange={e => setLogForm(f => ({ ...f, type: e.target.value as LogType }))}>{LOG_TYPES.map(t => <option key={t}>{t}</option>)}</Sel></Field>
          <Field label="Data"><Inp type="date" value={logForm.log_date} onChange={e => setLogForm(f => ({ ...f, log_date: e.target.value }))} /></Field>
          <Field label="Testo *"><Ta value={logForm.text} onChange={e => setLogForm(f => ({ ...f, text: e.target.value }))} placeholder="es. Call 30 min: confermato budget, consegna fine mese…" /></Field>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', paddingTop: '14px', borderTop: `1px solid ${C.border}` }}>
            <Btn onClick={() => setModal(null)}>annulla</Btn>
            <Btn v="primary" onClick={handleSaveLog} disabled={loading || !logForm.text}>{loading ? '…' : 'aggiungi'}</Btn>
          </div>
        </Modal>
      )}
      {modal === 'newFile' && (
        <Modal title="Aggiungi documento" onClose={() => setModal(null)}>
          <Field label="Nome *"><Inp value={fileForm.name} onChange={e => setFileForm(f => ({ ...f, name: e.target.value }))} placeholder="es. Pitch v2, Contratto firmato" /></Field>
          <Field label="Tipo"><Sel value={fileForm.type} onChange={e => setFileForm(f => ({ ...f, type: e.target.value as FileType }))}>{FILE_TYPES.map(t => <option key={t}>{t}</option>)}</Sel></Field>
          <Field label="Carica file (max 20MB)">
            <div onClick={() => document.getElementById('fui')?.click()} style={{ border: `2px dashed ${C.border}`, borderRadius: '10px', padding: '18px', textAlign: 'center', cursor: 'pointer' }}>
              <input id="fui" type="file" style={{ display: 'none' }} onChange={e => { const file = e.target.files?.[0]; if (!file) return; if (file.size > 20 * 1024 * 1024) { alert('Max 20MB'); return } setPendingFile(file); setFilePreview(file.name); if (!fileForm.name) setFileForm(f => ({ ...f, name: file.name.replace(/\.[^.]+$/, '') })) }} />
              {filePreview ? <div style={{ fontSize: '13px', color: C.orange }}>📎 {filePreview}</div> : <div style={{ fontSize: '13px', color: C.muted }}>clicca per scegliere</div>}
            </div>
          </Field>
          <Field label="Oppure URL (Drive, Dropbox…)"><Inp type="url" value={fileForm.url} onChange={e => setFileForm(f => ({ ...f, url: e.target.value }))} placeholder="https://…" disabled={!!pendingFile} /></Field>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', paddingTop: '14px', borderTop: `1px solid ${C.border}` }}>
            <Btn onClick={() => { setModal(null); setPendingFile(null); setFilePreview('') }}>annulla</Btn>
            <Btn v="primary" onClick={handleSaveFile} disabled={loading || (!pendingFile && !fileForm.url) || !fileForm.name}>{loading ? 'caricamento…' : 'aggiungi'}</Btn>
          </div>
        </Modal>
      )}
    </div>
  )
}

// ─── CLIENT DETAIL VIEW ───────────────────────────────────────────────────────
function ClientDetail({ clientId, initialProjectId, onBack, onClientUpdate }: { clientId: string; initialProjectId?: string | null; onBack: () => void; onClientUpdate: () => void }) {
  const [client, setClient] = useState<CrmClient | null>(null)
  const [activeProject, setActiveProject] = useState<CrmProject | null>(null)
  const [modal, setModal] = useState<'editClient' | 'newProject' | null>(null)
  const [loading, setLoading] = useState(false)
  const [delConfirm, setDelConfirm] = useState(false)

  async function loadClient() {
    const res = await fetch(`/api/crm/clients/${clientId}`)
    if (res.ok) {
      setClient(await res.json())
      // Auto-open project if coming from Projects view
      if (initialProjectId) {
        const pRes = await fetch(`/api/crm/projects/${initialProjectId}`)
        if (pRes.ok) setActiveProject(await pRes.json())
      }
    }
  }

  useEffect(() => { loadClient() }, []) // eslint-disable-line react-hooks/exhaustive-deps

  async function handleSaveClient(data: ClientFormData) {
    setLoading(true)
    await fetch(`/api/crm/clients/${clientId}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    await loadClient(); onClientUpdate(); setModal(null); setLoading(false)
  }

  async function handleNewProject(data: ProjectFormData) {
    setLoading(true)
    const res = await fetch(`/api/crm/clients/${clientId}/projects`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    if (res.ok) { await loadClient(); onClientUpdate() }
    setModal(null); setLoading(false)
  }

  async function handleDeleteClient() {
    setLoading(true)
    await fetch(`/api/crm/clients/${clientId}`, { method: 'DELETE' })
    onClientUpdate(); onBack(); setLoading(false)
  }

  function handleProjectUpdate(updated: CrmProject) {
    setClient(prev => prev ? { ...prev, projects: prev.projects?.map(p => p.id === updated.id ? updated : p) } : prev)
  }

  if (!client) return <div style={{ padding: '40px', textAlign: 'center', color: C.muted }}>caricamento…</div>

  if (activeProject) {
    return <ProjectDetail project={activeProject} clientName={client.name} onBack={() => setActiveProject(null)} onProjectUpdate={p => { setActiveProject(p); handleProjectUpdate(p) }} />
  }

  const totalBudget = (client.projects || []).reduce((a, p) => a + (p.budget || 0), 0)

  return (
    <div>
      <Btn v="ghost" onClick={onBack} style={{ marginBottom: '18px' }}>← tutti i clienti</Btn>

      <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '20px 22px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '16px' }}>
          <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
            <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(245,170,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 700, color: C.orange, flexShrink: 0 }}>{ini(client.name)}</div>
            <div>
              <div style={{ fontSize: '20px', fontWeight: 700, color: '#fff' }}>{client.name}</div>
              <div style={{ fontSize: '13px', color: C.muted, marginTop: '2px' }}>{client.company || ''}</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '7px' }}>
            <Btn sz="sm" onClick={() => setModal('editClient')}>modifica</Btn>
            <Btn sz="sm" v="danger" onClick={() => setDelConfirm(true)}>elimina</Btn>
          </div>
        </div>

        {/* Anagrafica */}
        <div className="crm-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px', marginBottom: '4px' }}>
          <InfoItem label="Email">{client.email ? <a href={`mailto:${client.email}`} style={{ color: C.orange }}>{client.email}</a> : '—'}</InfoItem>
          <InfoItem label="Telefono">{client.phone ? <a href={`tel:${client.phone}`} style={{ color: C.orange }}>{client.phone}</a> : '—'}</InfoItem>
          <InfoItem label="Fonte">
            {client.source ? <span style={{ background: 'rgba(245,170,68,0.15)', color: C.orange, borderRadius: '5px', padding: '2px 8px', fontSize: '12px', fontWeight: 600 }}>{client.source}</span> : '—'}
          </InfoItem>
          <InfoItem label="Valore totale"><span style={{ fontSize: '15px', fontWeight: 700, color: C.orange }}>{fm(totalBudget)}</span></InfoItem>
        </div>

        {(client.vat_number || client.sdi_code || client.pec || client.address || client.website) && (
          <>
            <SL>Dati fatturazione</SL>
            <div className="crm-info-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px' }}>
              {client.vat_number && <InfoItem label="P.IVA / CF">{client.vat_number}</InfoItem>}
              {client.sdi_code && <InfoItem label="Codice SDI">{client.sdi_code}</InfoItem>}
              {client.pec && <InfoItem label="PEC"><a href={`mailto:${client.pec}`} style={{ color: C.orange }}>{client.pec}</a></InfoItem>}
              {client.address && <InfoItem label="Indirizzo">{client.address}</InfoItem>}
              {client.website && <InfoItem label="Sito web"><a href={client.website} target="_blank" style={{ color: C.orange }}>{client.website}</a></InfoItem>}
            </div>
          </>
        )}
        {client.notes && (
          <>
            <SL>Note</SL>
            <div style={{ background: C.bg3, borderRadius: '8px', padding: '10px 12px', fontSize: '13px', color: C.off, lineHeight: 1.6 }}>{client.notes}</div>
          </>
        )}

        {/* Progetti */}
        <SL action={<Btn sz="sm" v="primary" onClick={() => setModal('newProject')}>+ nuovo progetto</Btn>}>
          Progetti ({client.projects?.length || 0})
        </SL>

        {(!client.projects || client.projects.length === 0) && (
          <div style={{ textAlign: 'center', padding: '20px', color: C.muted, fontSize: '13px' }}>
            Nessun progetto ancora. <span style={{ color: C.orange, cursor: 'pointer' }} onClick={() => setModal('newProject')}>Crea il primo →</span>
          </div>
        )}

        {client.projects?.map(p => (
          <div key={p.id} onClick={() => { fetch(`/api/crm/projects/${p.id}`).then(r => r.json()).then(d => setActiveProject(d)) }}
            style={{ background: C.bg3, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '14px 16px', marginBottom: '8px', cursor: 'pointer', transition: 'border-color 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = C.orange)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px', marginBottom: '8px' }}>
              <div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: '#fff' }}>{p.title}</div>
                {p.service && <div style={{ fontSize: '12px', color: C.muted, marginTop: '2px' }}>{p.service}</div>}
              </div>
              <div style={{ display: 'flex', gap: '7px', alignItems: 'center', flexShrink: 0 }}>
                <ProjectStatusBadge status={p.status as ProjectStatus} />
                {p.status === 'Chiuso' && (
                  <BillingPill
                    project={p as CrmProject}
                    onUpdate={updated => {
                      setClient(prev => prev ? { ...prev, projects: prev.projects?.map(x => x.id === updated.id ? updated : x) } : prev)
                    }}
                  />
                )}
              </div>
            </div>
            <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
              {p.budget && <span style={{ fontSize: '13px', fontWeight: 700, color: C.off }}>{fm(p.budget)}</span>}
              <DeadlineBadge deadline={p.deadline} />
              {p.next_action && <span style={{ fontSize: '12px', color: C.orange }}>→ {p.next_action}</span>}
            </div>
          </div>
        ))}

        {delConfirm && (
          <div style={{ background: C.redbg, border: `1px solid ${C.red}`, borderRadius: '8px', padding: '12px 14px', fontSize: '13px', color: C.red, marginTop: '14px' }}>
            Eliminare <strong>{client.name}</strong> e tutti i suoi progetti?
            <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
              <Btn sz="sm" v="danger" onClick={handleDeleteClient} disabled={loading}>sì, elimina tutto</Btn>
              <Btn sz="sm" onClick={() => setDelConfirm(false)}>annulla</Btn>
            </div>
          </div>
        )}
      </div>

      {modal === 'editClient' && (
        <Modal title="Modifica cliente" onClose={() => setModal(null)}>
          <ClientForm init={client} onSave={handleSaveClient} onCancel={() => setModal(null)} loading={loading} />
        </Modal>
      )}
      {modal === 'newProject' && (
        <Modal title="Nuovo progetto" onClose={() => setModal(null)}>
          <ProjectForm onSave={handleNewProject} onCancel={() => setModal(null)} loading={loading} />
        </Modal>
      )}
    </div>
  )
}

// ─── MAIN SHELL ───────────────────────────────────────────────────────────────
interface Props { initialClients: CrmClient[]; initialView: 'dashboard' | 'clients' | 'projects' | 'detail' }

export default function CrmShell({ initialClients, initialView }: Props) {
  const router = useRouter()
  const [clients, setClients] = useState<CrmClient[]>(initialClients)
  const [view, setView] = useState<'dashboard' | 'clients' | 'projects' | 'detail' | 'prospects'>(initialView)
  const [activeClientId, setActiveClientId] = useState<string | null>(null)
  const [activeProjectId, setActiveProjectId] = useState<string | null>(null)
  const [modal, setModal] = useState<'newClient' | null>(null)
  const [loading, setLoading] = useState(false)
  const [search, setSearch] = useState('')

  async function refreshClients() {
    const res = await fetch('/api/crm/clients')
    if (res.ok) setClients(await res.json())
  }

  async function handleNewClient(data: ClientFormData) {
    setLoading(true)
    const res = await fetch('/api/crm/clients', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
    if (res.ok) { await refreshClients(); setModal(null) }
    setLoading(false)
  }

  async function handleLogout() {
    await fetch('/api/crm/auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'logout' }) })
    router.push('/crm/login')
    router.refresh()
  }

  const filtered = search ? clients.filter(c => `${c.name}${c.company}`.toLowerCase().includes(search.toLowerCase())) : clients


  return (
    <>
      {/* ── MOBILE BOTTOM NAV ── */}
      <style>{`
      @media (max-width: 767px) {
        .crm-app { display: flex !important; flex-direction: column !important; }
        .crm-sidebar { display: none !important; }
        .crm-main { padding: 16px 14px 80px !important; max-height: none !important; }
        .crm-bottom-nav { display: flex !important; }
        .crm-modal-inner { max-width: 100% !important; margin: 0 !important; border-radius: 16px 16px 0 0 !important; position: fixed !important; bottom: 0 !important; left: 0 !important; right: 0 !important; max-height: 92vh !important; overflow-y: auto !important; }
        .crm-modal-bg { align-items: flex-end !important; padding: 0 !important; }
        .crm-info-grid { grid-template-columns: 1fr !important; }
        .crm-dash-finance { grid-template-columns: 1fr !important; }
        .crm-dash-split { grid-template-columns: 1fr !important; }
        .crm-project-form-3col { grid-template-columns: 1fr !important; }
      }
      @media (min-width: 768px) {
        .crm-bottom-nav { display: none !important; }
        .crm-app { display: grid !important; grid-template-columns: 270px 1fr !important; }
      }
    `}</style>
      <div className="crm-app" style={{ minHeight: '100vh' }}>
        {/* SIDEBAR — desktop only */}
        <div className="crm-sidebar" style={{ background: C.bg2, borderRight: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }}>
          <div style={{ padding: '16px 18px 12px', borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div><div style={{ fontSize: '20px', fontWeight: 800, color: C.orange }}>PIERO.</div><div style={{ fontSize: '10px', color: C.muted }}>CRM</div></div>
            <button onClick={handleLogout} style={{ fontSize: '11px', color: C.muted, background: 'none', border: `1px solid ${C.border}`, borderRadius: '6px', padding: '4px 8px', cursor: 'pointer', fontFamily: 'inherit' }}>esci</button>
          </div>

          {/* Stats mini */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', padding: '10px 14px', borderBottom: `1px solid ${C.border}` }}>
            {[{ n: clients.length, l: 'clienti' }, { n: clients.flatMap(c => c.projects || []).filter(p => p.status !== 'Chiuso').length, l: 'attivi' }].map(s => (
              <div key={s.l} style={{ background: C.bg3, borderRadius: '7px', padding: '8px 10px' }}>
                <div style={{ fontSize: '20px', fontWeight: 700 }}>{s.n}</div>
                <div style={{ fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.l}</div>
              </div>
            ))}
          </div>

          {/* Nav */}
          <div style={{ padding: '8px 8px', borderBottom: `1px solid ${C.border}` }}>
            {[{ id: 'dashboard', label: 'Dashboard' }, { id: 'clients', label: 'Tutti i clienti' }, { id: 'projects', label: 'Progetti' }, { id: 'prospects', label: 'Prospects 🌍' }].map(item => (
              <div key={item.id} onClick={() => { setView(item.id as 'dashboard' | 'clients' | 'projects' | 'prospects'); setActiveClientId(null) }}
                style={{ padding: '8px 10px', borderRadius: '7px', cursor: 'pointer', fontSize: '13px', fontWeight: 500, marginBottom: '2px', background: view === item.id && !activeClientId ? 'rgba(245,170,68,0.15)' : 'transparent', color: view === item.id && !activeClientId ? C.orange : C.off }}>
                {item.label}
              </div>
            ))}
          </div>

          <div style={{ flex: 1 }} />

          <div style={{ padding: '12px 14px', borderTop: `1px solid ${C.border}` }}>
            <Btn v="primary" style={{ width: '100%' }} onClick={() => setModal('newClient')}>+ nuovo cliente</Btn>
          </div>
        </div>

        {/* MAIN */}
        <div className="crm-main" style={{ padding: '28px 32px', overflowY: 'auto', maxHeight: '100vh' }}>

          {view === 'dashboard' && !activeClientId && <DashboardView onNavigate={(clientId, projectId) => {
            setActiveProjectId(projectId)
            setActiveClientId(clientId)
            setView('detail')
          }} />}

          {view === 'projects' && !activeClientId && (
            <ProjectsView clients={clients} onRefresh={refreshClients} onNavigate={(clientId, projectId) => {
              setActiveProjectId(projectId)
              setActiveClientId(clientId)
              setView('detail')
            }} />
          )}

          {view === 'prospects' && !activeClientId && <ProspectsView />}

          {view === 'clients' && !activeClientId && (
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
                <h1 style={{ fontSize: '22px', fontWeight: 700 }}>Clienti</h1>
                <Btn v="primary" onClick={() => setModal('newClient')}>+ nuovo</Btn>
              </div>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="cerca…"
                style={{ width: '100%', padding: '9px 14px', fontSize: '13px', border: `1px solid ${C.border}`, borderRadius: '9px', background: C.bg3, color: C.off, marginBottom: '14px', fontFamily: 'inherit', boxSizing: 'border-box' }} />
              {filtered.length === 0 && <div style={{ textAlign: 'center', padding: '40px', color: C.muted }}>{search ? 'nessun risultato' : 'Nessun cliente ancora.'}</div>}
              {filtered.map(c => {
                const totalBudget = (c.projects || []).reduce((a, p) => a + (p.budget || 0), 0)
                const activeP = (c.projects || []).filter(p => p.status !== 'Chiuso').length
                const toInvoice = (c.projects || []).filter(p => p.billing_status === 'Da fatturare').length
                return (
                  <div key={c.id} onClick={() => { setActiveProjectId(null); setActiveClientId(c.id); setView('detail') }}
                    style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '16px 20px', marginBottom: '10px', cursor: 'pointer' }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = C.orange)}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = C.border)}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px', marginBottom: '10px' }}>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(245,170,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: C.orange, flexShrink: 0 }}>{ini(c.name)}</div>
                        <div>
                          <div style={{ fontSize: '15px', fontWeight: 700, color: '#fff' }}>{c.name}</div>
                          <div style={{ fontSize: '12px', color: C.muted }}>{c.company || '—'}</div>
                        </div>
                      </div>
                      <div style={{ fontSize: '16px', fontWeight: 700, color: C.orange }}>{fm(totalBudget)}</div>
                    </div>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                      <span style={{ fontSize: '12px', color: C.muted }}>{(c.projects || []).length} progett{(c.projects || []).length === 1 ? 'o' : 'i'}</span>
                      {activeP > 0 && <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '5px', background: C.purplebg, color: C.purple }}>{activeP} attiv{activeP === 1 ? 'o' : 'i'}</span>}
                      {toInvoice > 0 && <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '5px', background: C.amberbg, color: C.amber }}>🟡 {toInvoice} da fatturare</span>}
                      {c.source && <span style={{ fontSize: '11px', padding: '2px 8px', borderRadius: '5px', background: 'rgba(245,170,68,0.1)', color: C.orange }}>{c.source}</span>}
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {activeClientId && (
            <ClientDetail
              clientId={activeClientId}
              initialProjectId={activeProjectId}
              onBack={() => { setActiveClientId(null); setActiveProjectId(null); setView(activeProjectId ? 'projects' : 'clients') }}
              onClientUpdate={refreshClients}
            />
          )}
        </div>

        {/* MODAL NUOVO CLIENTE */}
        {modal === 'newClient' && (
          <Modal title="Nuovo cliente" onClose={() => setModal(null)}>
            <ClientForm onSave={handleNewClient} onCancel={() => setModal(null)} loading={loading} />
          </Modal>
        )}
      </div>

      {/* ── MOBILE BOTTOM NAV ── */}
      <div className="crm-bottom-nav" style={{
        display: 'none', position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
        background: C.bg2, borderTop: `1px solid ${C.border}`,
        padding: '8px 0 calc(8px + env(safe-area-inset-bottom))',
      }}>
        {[
          { id: 'dashboard', icon: '▦', label: 'Home' },
          { id: 'clients', icon: '◉', label: 'Clienti' },
          { id: 'projects', icon: '◈', label: 'Progetti' },
          { id: 'prospects', icon: '🌍', label: 'Prospects' },
        ].map(item => {
          const isActive = view === item.id && !activeClientId
          return (
            <button key={item.id} onClick={() => { setView(item.id as 'dashboard' | 'clients' | 'projects' | 'prospects'); setActiveClientId(null) }}
              style={{ flex: 1, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', padding: '4px 0', color: isActive ? C.orange : C.muted, fontFamily: 'inherit' }}>
              <span style={{ fontSize: '20px', lineHeight: 1 }}>{item.icon}</span>
              <span style={{ fontSize: '10px', fontWeight: isActive ? 700 : 400 }}>{item.label}</span>
            </button>
          )
        })}
        <button onClick={() => setModal('newClient')}
          style={{ flex: 1, background: 'none', border: 'none', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', padding: '4px 0', color: C.orange, fontFamily: 'inherit' }}>
          <span style={{ fontSize: '22px', lineHeight: 1, fontWeight: 700 }}>＋</span>
          <span style={{ fontSize: '10px', fontWeight: 700 }}>Nuovo</span>
        </button>
      </div>
    </>
  )
}