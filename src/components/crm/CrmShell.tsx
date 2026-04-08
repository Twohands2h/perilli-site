'use client'
// src/components/crm/CrmShell.tsx

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import type { CrmClient, CrmFile, ClientFormData, ClientStatus, LogType, FileType } from '@/lib/crm/types'

// ─── CONSTANTS ───────────────────────────────────────────────────────────────

const STATUSES: ClientStatus[] = ['Lead', 'Preventivo inviato', 'In lavorazione', 'Completato', 'Stand-by']
const LOG_TYPES: LogType[] = ['Nota', 'Call', 'Email', 'Documento', 'Preventivo', 'Revisione']
const FILE_TYPES: FileType[] = ['Pitch', 'Preventivo', 'Contratto', 'Brief', 'Documento', 'Revisione', 'Materiali']
const SOURCES = ['Google', 'Social (Instagram/LinkedIn)', 'Passaparola', 'Vecchio cliente', 'Behance', 'IMDB', 'Altro']
const STATUS_PROGRESS: Record<string, number> = { Lead: 10, 'Preventivo inviato': 30, 'In lavorazione': 60, Completato: 100, 'Stand-by': 20 }

// ─── UTILS ────────────────────────────────────────────────────────────────────

function ini(n: string) { return (n || '?').split(' ').filter(Boolean).map((w: string) => w[0]).join('').slice(0, 2).toUpperCase() }
function fd(d?: string | null) { if (!d) return '—'; return new Date(d + 'T00:00:00').toLocaleDateString('it-IT', { day: '2-digit', month: 'short', year: '2-digit' }) }
function fm(v?: number | null) { if (!v && v !== 0) return '—'; return '€' + v.toLocaleString('it-IT') }
function fmtSize(b?: number | null) { if (!b) return ''; if (b < 1048576) return Math.round(b / 1024) + 'KB'; return (b / 1048576).toFixed(1) + 'MB' }

function deadlineDiff(d?: string | null): number | null {
  if (!d) return null
  const today = new Date(); today.setHours(0, 0, 0, 0)
  return Math.ceil((new Date(d + 'T00:00:00').getTime() - today.getTime()) / 86400000)
}

function DeadlineBadge({ deadline }: { deadline?: string | null }) {
  const diff = deadlineDiff(deadline)
  if (diff === null) return <span style={{ ...bs.badge, ...bs.bGray }}>nessuna scadenza</span>
  if (diff < 0) return <span style={{ ...bs.badge, ...bs.bRed }}>⚠ scad. {fd(deadline)}</span>
  if (diff <= 7) return <span style={{ ...bs.badge, ...bs.bAmber }}>⏰ {diff}gg — {fd(deadline)}</span>
  return <span style={{ ...bs.badge, ...bs.bGreen }}>📅 {fd(deadline)}</span>
}

function StatusBadge({ status }: { status: string }) {
  const map: Record<string, React.CSSProperties> = {
    'Lead': bs.bBlue, 'Preventivo inviato': bs.bAmber,
    'In lavorazione': bs.bPurple, 'Completato': bs.bGreen, 'Stand-by': bs.bGray,
  }
  return <span style={{ ...bs.badge, ...map[status] }}>{status}</span>
}

function fileIcon(mime?: string | null) {
  if (!mime) return '📎'
  if (mime.includes('pdf')) return '📄'
  if (mime.startsWith('image/')) return '🖼️'
  if (mime.startsWith('video/')) return '🎬'
  if (mime.startsWith('audio/')) return '🎵'
  if (mime.includes('zip') || mime.includes('rar')) return '🗜️'
  return '📎'
}

// ─── BASE STYLES ──────────────────────────────────────────────────────────────

const C = {
  bg: '#1a1a1a', bg2: '#222', bg3: '#2a2a2a', bg4: '#1e1e1e',
  border: '#333', orange: '#f5aa44', muted: '#888', off: '#e8e4de',
  red: '#f08080', redbg: '#2d1a1a', green: '#a3d977', greenbg: '#2a3d1a',
  amber: '#f5c87a', amberbg: '#2d1f00', blue: '#7ec8f0', bluebg: '#1a2d3d',
  purple: '#c4b5f5', purplebg: '#1e1a2d', gray: '#aaa', graybg: '#2a2a2a',
}

const bs: Record<string, React.CSSProperties> = {
  badge: { display: 'inline-flex', alignItems: 'center', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', fontWeight: 600, whiteSpace: 'nowrap' },
  bBlue: { background: C.bluebg, color: C.blue },
  bAmber: { background: C.amberbg, color: C.amber },
  bGreen: { background: C.greenbg, color: C.green },
  bRed: { background: C.redbg, color: C.red },
  bPurple: { background: C.purplebg, color: C.purple },
  bGray: { background: C.graybg, color: C.gray },
}

// ─── FORM COMPONENTS ──────────────────────────────────────────────────────────

const inputStyle: React.CSSProperties = { width: '100%', padding: '9px 12px', fontSize: '13px', border: `1px solid ${C.border}`, borderRadius: '8px', background: C.bg3, color: C.off, fontFamily: 'inherit', boxSizing: 'border-box' }
const labelStyle: React.CSSProperties = { display: 'block', fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '4px', fontWeight: 600 }

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return <div style={{ marginBottom: '12px' }}><label style={labelStyle}>{label}</label>{children}</div>
}

function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input {...props} style={{ ...inputStyle, ...props.style }} />
}

function Select({ children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select {...props} style={{ ...inputStyle, ...props.style }}>{children}</select>
}

function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea {...props} style={{ ...inputStyle, minHeight: '80px', resize: 'vertical', ...props.style }} />
}

function Btn({ variant = 'default', size = 'md', children, ...props }: { variant?: 'default' | 'primary' | 'danger' | 'ghost'; size?: 'sm' | 'md' } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const base: React.CSSProperties = { padding: size === 'sm' ? '4px 10px' : '8px 16px', fontSize: size === 'sm' ? '11px' : '13px', border: `1px solid ${C.border}`, borderRadius: size === 'sm' ? '6px' : '8px', background: 'transparent', color: C.off, cursor: 'pointer', fontFamily: 'inherit' }
  const variants: Record<string, React.CSSProperties> = {
    primary: { background: C.orange, borderColor: C.orange, color: '#1a1200', fontWeight: 700 },
    danger: { color: C.red, borderColor: C.red },
    ghost: { border: 'none', color: C.muted, padding: size === 'sm' ? '3px 7px' : '6px 10px' },
  }
  return <button {...props} style={{ ...base, ...(variants[variant] || {}), ...props.style }}>{children}</button>
}

// ─── CLIENT FORM ──────────────────────────────────────────────────────────────

function ClientForm({ initial, onSave, onCancel, loading }: {
  initial?: Partial<ClientFormData>
  onSave: (data: ClientFormData) => void
  onCancel: () => void
  loading: boolean
}) {
  const [form, setForm] = useState<ClientFormData>({
    name: initial?.name || '', company: initial?.company || '', email: initial?.email || '',
    phone: initial?.phone || '', service: initial?.service || '', source: initial?.source,
    budget: initial?.budget ?? '', deadline: initial?.deadline || '',
    status: initial?.status || 'Lead', next_action: initial?.next_action || '',
    first_contact: initial?.first_contact || '', brief: initial?.brief || '',
  })
  const set = (k: keyof ClientFormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }))

  const grid2: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }

  return (
    <form onSubmit={e => { e.preventDefault(); onSave(form) }}>
      <div style={grid2}>
        <Field label="Nome *"><Input value={form.name} onChange={set('name')} placeholder="Mario Rossi" required /></Field>
        <Field label="Azienda"><Input value={form.company} onChange={set('company')} placeholder="Agenzia X" /></Field>
      </div>
      <div style={grid2}>
        <Field label="Email"><Input type="email" value={form.email} onChange={set('email')} placeholder="mario@..." /></Field>
        <Field label="Telefono"><Input value={form.phone} onChange={set('phone')} placeholder="+39 ..." /></Field>
      </div>
      <Field label="Servizio richiesto">
        <Input value={form.service} onChange={set('service')} placeholder="es. VFX + Color Grading, AI Video..." />
      </Field>
      <Field label="Come mi ha trovato">
        <Select value={form.source || ''} onChange={set('source')}>
          <option value="">— seleziona —</option>
          {SOURCES.map(s => <option key={s}>{s}</option>)}
        </Select>
      </Field>
      <div style={grid2}>
        <Field label="Budget / preventivo (€)"><Input type="number" value={form.budget?.toString() || ''} onChange={set('budget')} placeholder="5000" /></Field>
        <Field label="Scadenza consegna"><Input type="date" value={form.deadline} onChange={set('deadline')} /></Field>
      </div>
      <div style={grid2}>
        <Field label="Stato">
          <Select value={form.status} onChange={set('status')}>
            {STATUSES.map(s => <option key={s}>{s}</option>)}
          </Select>
        </Field>
        <Field label="Prossima azione"><Input value={form.next_action} onChange={set('next_action')} placeholder="Inviare revisione" /></Field>
      </div>
      <Field label="Data primo contatto"><Input type="date" value={form.first_contact} onChange={set('first_contact')} /></Field>
      <Field label="Brief & note progetto">
        <Textarea value={form.brief} onChange={set('brief')} placeholder="Descrivi il progetto, materiali ricevuti, richieste..." />
      </Field>
      <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', marginTop: '16px', paddingTop: '14px', borderTop: `1px solid ${C.border}` }}>
        <Btn type="button" onClick={onCancel}>annulla</Btn>
        <Btn variant="primary" type="submit" disabled={loading}>{loading ? 'salvataggio…' : 'salva'}</Btn>
      </div>
    </form>
  )
}

// ─── MODAL ────────────────────────────────────────────────────────────────────

function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 1000, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', padding: '30px 20px', overflowY: 'auto' }}
      onClick={e => { if (e.target === e.currentTarget) onClose() }}>
      <div style={{ background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '14px', padding: '24px', width: '100%', maxWidth: '520px', margin: 'auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>{title}</h3>
          <Btn variant="ghost" size="sm" onClick={onClose}>✕</Btn>
        </div>
        {children}
      </div>
    </div>
  )
}

// ─── SECTION LABEL ────────────────────────────────────────────────────────────

function SL({ children, action }: { children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '10px', fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.07em', margin: '18px 0 9px' }}>
      <span>{children}</span>
      {action}
    </div>
  )
}

// ─── INFO ITEM ────────────────────────────────────────────────────────────────

function InfoItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ background: C.bg3, borderRadius: '8px', padding: '10px 12px' }}>
      <div style={{ fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '3px' }}>{label}</div>
      <div style={{ fontSize: '13px', color: C.off }}>{children}</div>
    </div>
  )
}

// ─── MAIN SHELL ──────────────────────────────────────────────────────────────

interface Props {
  initialClients: CrmClient[]
  initialView: 'dashboard' | 'clients' | 'detail'
}

export default function CrmShell({ initialClients, initialView }: Props) {
  const router = useRouter()
  const [clients, setClients] = useState<CrmClient[]>(initialClients)
  const [view, setView] = useState<'dashboard' | 'clients' | 'detail'>(initialView)
  const [activeClient, setActiveClient] = useState<CrmClient | null>(null)
  const [search, setSearch] = useState('')
  const [modal, setModal] = useState<'newClient' | 'editClient' | 'newLog' | 'newFile' | null>(null)
  const [loading, setLoading] = useState(false)
  const [delConfirm, setDelConfirm] = useState(false)

  // Log/File form state
  const [logForm, setLogForm] = useState({ type: 'Nota' as LogType, log_date: today(), text: '' })
  const [fileForm, setFileForm] = useState({ name: '', type: 'Documento' as FileType, url: '' })
  const [pendingFile, setPendingFile] = useState<File | null>(null)
  const [filePreview, setFilePreview] = useState('')

  function today() { return new Date().toISOString().slice(0, 10) }

  // ── API HELPERS ─────────────────────────────────────────────────────────────

  async function refreshClients() {
    const res = await fetch('/api/crm/clients')
    if (res.ok) setClients(await res.json())
  }

  async function loadClient(id: string) {
    const res = await fetch(`/api/crm/clients/${id}`)
    if (res.ok) {
      const data = await res.json()
      setActiveClient(data)
    }
  }

  async function handleSaveClient(data: ClientFormData) {
    setLoading(true)
    const isEdit = modal === 'editClient' && activeClient
    const res = await fetch(isEdit ? `/api/crm/clients/${activeClient.id}` : '/api/crm/clients', {
      method: isEdit ? 'PATCH' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    if (res.ok) {
      await refreshClients()
      if (isEdit) await loadClient(activeClient.id)
      setModal(null)
    }
    setLoading(false)
  }

  async function handleDeleteClient() {
    if (!activeClient) return
    setLoading(true)
    await fetch(`/api/crm/clients/${activeClient.id}`, { method: 'DELETE' })
    setActiveClient(null)
    setDelConfirm(false)
    setView('clients')
    await refreshClients()
    setLoading(false)
  }

  async function handleSaveLog() {
    if (!activeClient || !logForm.text) return
    setLoading(true)
    await fetch(`/api/crm/clients/${activeClient.id}/logs`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(logForm),
    })
    await loadClient(activeClient.id)
    setModal(null)
    setLogForm({ type: 'Nota', log_date: today(), text: '' })
    setLoading(false)
  }

  async function handleDeleteLog(logId: string) {
    if (!activeClient) return
    await fetch(`/api/crm/clients/${activeClient.id}/logs?logId=${logId}`, { method: 'DELETE' })
    await loadClient(activeClient.id)
  }

  async function handleSaveFile() {
    if (!activeClient) return
    setLoading(true)

    if (pendingFile) {
      const fd = new FormData()
      fd.append('file', pendingFile)
      fd.append('name', fileForm.name || pendingFile.name)
      fd.append('type', fileForm.type)
      await fetch(`/api/crm/clients/${activeClient.id}/files`, { method: 'POST', body: fd })
    } else if (fileForm.url) {
      await fetch(`/api/crm/clients/${activeClient.id}/files`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: fileForm.name, type: fileForm.type, url: fileForm.url }),
      })
    }

    await loadClient(activeClient.id)
    setModal(null)
    setPendingFile(null)
    setFilePreview('')
    setFileForm({ name: '', type: 'Documento', url: '' })
    setLoading(false)
  }

  async function handleDeleteFile(fileId: string) {
    if (!activeClient) return
    await fetch(`/api/crm/clients/${activeClient.id}/files?fileId=${fileId}`, { method: 'DELETE' })
    await loadClient(activeClient.id)
  }

  async function handleOpenFile(file: CrmFile) {
    if (file.url) { window.open(file.url, '_blank'); return }
    const res = await fetch(`/api/crm/clients/${file.client_id}/files?fileId=${file.id}`)
    if (res.ok) {
      const { url } = await res.json()
      window.open(url, '_blank')
    }
  }

  async function handleLogout() {
    await fetch('/api/crm/auth', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ action: 'logout' }) })
    router.push('/crm/login')
    router.refresh()
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 20 * 1024 * 1024) { alert('Max 20MB'); return }
    setPendingFile(file)
    setFilePreview(file.name)
    if (!fileForm.name) setFileForm(f => ({ ...f, name: file.name.replace(/\.[^.]+$/, '') }))
  }

  // ── COMPUTED ─────────────────────────────────────────────────────────────────

  const filteredClients = search
    ? clients.filter(c => `${c.name}${c.company}${c.service}${c.brief}`.toLowerCase().includes(search.toLowerCase()))
    : clients

  const activeClients = clients.filter(c => c.status !== 'Completato')
  const sortedPipeline = [...activeClients].sort((a, b) => {
    if (!a.deadline && !b.deadline) return 0
    if (!a.deadline) return 1; if (!b.deadline) return -1
    return new Date(a.deadline).getTime() - new Date(b.deadline).getTime()
  })

  // ── STYLES ────────────────────────────────────────────────────────────────────

  const sApp: React.CSSProperties = { display: 'grid', gridTemplateColumns: '270px 1fr', minHeight: '100vh' }
  const sSidebar: React.CSSProperties = { background: C.bg2, borderRight: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh', overflowY: 'auto' }
  const sMain: React.CSSProperties = { padding: '28px 32px', overflowY: 'auto', maxHeight: '100vh' }
  const sCard: React.CSSProperties = { background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '12px', padding: '20px 22px', marginBottom: '12px' }
  const sInfoGrid: React.CSSProperties = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7px' }

  const logDotColors: Record<string, string> = {
    Nota: C.muted, Call: C.blue, Email: '#2a9d6a', Documento: C.orange, Preventivo: C.purple, Revisione: C.red,
  }

  // ── RENDER ───────────────────────────────────────────────────────────────────

  return (
    <div style={sApp}>
      {/* SIDEBAR */}
      <div style={sSidebar}>
        <div style={{ padding: '16px 18px 12px', borderBottom: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: C.orange }}>PIERO.</div>
            <div style={{ fontSize: '10px', color: C.muted }}>CRM</div>
          </div>
          <button onClick={handleLogout} style={{ fontSize: '11px', color: C.muted, background: 'none', border: `1px solid ${C.border}`, borderRadius: '6px', padding: '4px 8px', cursor: 'pointer', fontFamily: 'inherit' }}>esci</button>
        </div>

        {/* Stats mini */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', padding: '10px 14px', borderBottom: `1px solid ${C.border}` }}>
          {[
            { n: clients.length, l: 'totali' },
            { n: activeClients.length, l: 'attivi' },
          ].map(s => (
            <div key={s.l} style={{ background: C.bg3, borderRadius: '7px', padding: '8px 10px' }}>
              <div style={{ fontSize: '20px', fontWeight: 700 }}>{s.n}</div>
              <div style={{ fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Nav */}
        <div style={{ padding: '8px 8px', borderBottom: `1px solid ${C.border}` }}>
          {[
            { id: 'dashboard', label: 'Dashboard' },
            { id: 'clients', label: 'Tutti i clienti' },
          ].map(item => (
            <div key={item.id} onClick={() => { setView(item.id as 'dashboard' | 'clients' | 'detail'); setActiveClient(null) }}
              style={{ padding: '8px 10px', borderRadius: '7px', cursor: 'pointer', fontSize: '13px', fontWeight: 500, marginBottom: '2px', background: view === item.id && !activeClient ? 'rgba(245,170,68,0.15)' : 'transparent', color: view === item.id && !activeClient ? C.orange : C.off }}>
              {item.label}
            </div>
          ))}
        </div>

        {/* Pipeline list */}
        <div style={{ fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.07em', padding: '10px 14px 4px' }}>Pipeline</div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '4px 8px' }}>
          {sortedPipeline.length === 0 && <div style={{ padding: '10px', fontSize: '12px', color: C.muted }}>nessun progetto attivo</div>}
          {sortedPipeline.map(c => {
            const diff = deadlineDiff(c.deadline)
            return (
              <div key={c.id} onClick={() => { setActiveClient(null); loadClient(c.id).then(() => setView('detail')) }}
                style={{ padding: '8px 10px', borderRadius: '7px', cursor: 'pointer', marginBottom: '1px', background: activeClient?.id === c.id ? 'rgba(245,170,68,0.12)' : 'transparent', borderLeft: activeClient?.id === c.id ? `3px solid ${C.orange}` : '3px solid transparent' }}>
                <div style={{ fontSize: '13px', fontWeight: 600 }}>{c.name}</div>
                <div style={{ fontSize: '11px', color: C.muted, marginTop: '1px' }}>{c.status}</div>
                {diff !== null && (
                  <div style={{ fontSize: '10px', marginTop: '2px', color: diff < 0 ? C.red : diff <= 7 ? C.amber : C.muted }}>
                    {diff < 0 ? `⚠ scad. ${fd(c.deadline)}` : diff <= 7 ? `⏰ ${diff}gg — ${fd(c.deadline)}` : `📅 ${fd(c.deadline)}`}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div style={{ padding: '12px 14px', borderTop: `1px solid ${C.border}` }}>
          <Btn variant="primary" style={{ width: '100%' }} onClick={() => setModal('newClient')}>+ nuovo cliente</Btn>
        </div>
      </div>

      {/* MAIN */}
      <div style={sMain}>

        {/* ── DASHBOARD ── */}
        {view === 'dashboard' && !activeClient && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '22px' }}>
              <h1 style={{ fontSize: '22px', fontWeight: 700 }}>Dashboard</h1>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '10px', marginBottom: '22px' }}>
              {[
                { n: clients.length, l: 'clienti totali' },
                { n: activeClients.length, l: 'pipeline attiva' },
                { n: clients.filter(c => c.status === 'Completato').length, l: 'completati' },
                { n: '€' + Math.round(clients.filter(c => c.budget).reduce((a, c) => a + (c.budget || 0), 0) / 1000) + 'k', l: 'valore pipeline' },
                { n: clients.filter(c => c.deadline && c.status !== 'Completato' && deadlineDiff(c.deadline)! < 0).length, l: '⚠ scadute', danger: true },
              ].map(s => (
                <div key={s.l} style={{ background: C.bg2, border: `1px solid ${s.danger && (s.n as number) > 0 ? C.red : C.border}`, borderRadius: '11px', padding: '14px 18px' }}>
                  <div style={{ fontSize: '26px', fontWeight: 700, color: s.danger && (s.n as number) > 0 ? C.red : '#fff' }}>{s.n}</div>
                  <div style={{ fontSize: '11px', color: s.danger && (s.n as number) > 0 ? C.red : C.muted, marginTop: '3px' }}>{s.l}</div>
                </div>
              ))}
            </div>
            <div style={{ fontSize: '10px', fontWeight: 700, color: C.muted, textTransform: 'uppercase', letterSpacing: '0.07em', marginBottom: '10px' }}>Scadenze & Pipeline</div>
            {sortedPipeline.length === 0 && <div style={{ textAlign: 'center', padding: '40px', color: C.muted }}>nessun progetto attivo</div>}
            {sortedPipeline.map(c => (
              <div key={c.id} onClick={() => { loadClient(c.id).then(() => setView('detail')) }}
                style={{ display: 'flex', alignItems: 'center', gap: '12px', background: C.bg2, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '12px 16px', cursor: 'pointer', marginBottom: '7px' }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '50%', background: 'rgba(245,170,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, color: C.orange, flexShrink: 0 }}>{ini(c.name)}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: C.off }}>{c.name}</div>
                  <div style={{ fontSize: '12px', marginTop: '3px', display: 'flex', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <StatusBadge status={c.status} />
                    {c.service && <span style={{ color: C.muted }}>{c.service}</span>}
                  </div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '14px', fontWeight: 700 }}>{fm(c.budget)}</div>
                  <div style={{ marginTop: '4px' }}><DeadlineBadge deadline={c.deadline} /></div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── CLIENTS LIST ── */}
        {view === 'clients' && !activeClient && (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '18px' }}>
              <h1 style={{ fontSize: '22px', fontWeight: 700 }}>Clienti</h1>
              <Btn variant="primary" onClick={() => setModal('newClient')}>+ nuovo</Btn>
            </div>
            <input value={search} onChange={e => setSearch(e.target.value)} placeholder="cerca per nome, azienda, servizio…"
              style={{ width: '100%', padding: '9px 14px', fontSize: '13px', border: `1px solid ${C.border}`, borderRadius: '9px', background: C.bg3, color: C.off, marginBottom: '14px', fontFamily: 'inherit', boxSizing: 'border-box' }} />
            {filteredClients.length === 0 && <div style={{ textAlign: 'center', padding: '40px', color: C.muted }}>{search ? 'nessun risultato' : 'Nessun cliente ancora.'}</div>}
            {filteredClients.map(c => (
              <div key={c.id} onClick={() => { loadClient(c.id).then(() => setView('detail')) }}
                style={{ ...sCard, cursor: 'pointer' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px', marginBottom: '10px' }}>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(245,170,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, color: C.orange, flexShrink: 0 }}>{ini(c.name)}</div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 700 }}>{c.name}</div>
                      <div style={{ fontSize: '12px', color: C.muted }}>{c.company || '—'}{c.service ? ' · ' + c.service : ''}</div>
                    </div>
                  </div>
                  <StatusBadge status={c.status} />
                </div>
                <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ fontSize: '13px', color: C.muted }}>💶 <strong style={{ color: C.off }}>{fm(c.budget)}</strong></span>
                  <DeadlineBadge deadline={c.deadline} />
                  {c.next_action && <span style={{ fontSize: '12px', color: C.orange }}>→ {c.next_action}</span>}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ── DETAIL ── */}
        {view === 'detail' && activeClient && (
          <div>
            <div style={{ marginBottom: '18px' }}>
              <Btn variant="ghost" onClick={() => { setActiveClient(null); setView('clients'); setDelConfirm(false) }}>← indietro</Btn>
            </div>
            <div style={sCard}>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', marginBottom: '14px' }}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(245,170,68,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 700, color: C.orange, flexShrink: 0 }}>{ini(activeClient.name)}</div>
                  <div>
                    <div style={{ fontSize: '20px', fontWeight: 700 }}>{activeClient.name}</div>
                    <div style={{ fontSize: '13px', color: C.muted, marginTop: '2px' }}>{activeClient.company}{activeClient.service ? ' · ' + activeClient.service : ''}</div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '7px', flexWrap: 'wrap' }}>
                  <Btn size="sm" onClick={() => setModal('editClient')}>modifica</Btn>
                  <Btn size="sm" variant="danger" onClick={() => setDelConfirm(true)}>elimina</Btn>
                </div>
              </div>

              {/* Progress */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                <StatusBadge status={activeClient.status} />
                <div style={{ flex: 1, height: '4px', background: C.bg3, borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${STATUS_PROGRESS[activeClient.status] || 0}%`, background: C.orange, borderRadius: '2px' }} />
                </div>
                <span style={{ fontSize: '12px', color: C.muted }}>{STATUS_PROGRESS[activeClient.status] || 0}%</span>
              </div>

              {/* Info grid */}
              <SL>Contatti & Progetto</SL>
              <div style={sInfoGrid}>
                <InfoItem label="Email">{activeClient.email ? <a href={`mailto:${activeClient.email}`} style={{ color: C.orange }}>{activeClient.email}</a> : '—'}</InfoItem>
                <InfoItem label="Telefono">{activeClient.phone ? <a href={`tel:${activeClient.phone}`} style={{ color: C.orange }}>{activeClient.phone}</a> : '—'}</InfoItem>
                <InfoItem label="Budget / preventivo">{fm(activeClient.budget)}</InfoItem>
                <InfoItem label="Scadenza consegna"><DeadlineBadge deadline={activeClient.deadline} /></InfoItem>
                <InfoItem label="Primo contatto">{fd(activeClient.first_contact)}</InfoItem>
                <InfoItem label="Prossima azione"><span style={{ color: C.orange, fontWeight: 600 }}>{activeClient.next_action || '—'}</span></InfoItem>
                <InfoItem label="Fonte contatto">
                  {activeClient.source
                    ? <span style={{ background: 'rgba(245,170,68,0.15)', color: C.orange, borderRadius: '5px', padding: '2px 8px', fontSize: '12px', fontWeight: 600 }}>{activeClient.source}</span>
                    : '—'}
                </InfoItem>
                <InfoItem label="Aggiornato">{fd(activeClient.updated_at)}</InfoItem>
              </div>

              {/* Brief */}
              <SL>Brief & Note</SL>
              <div style={{ background: C.bg3, borderRadius: '8px', padding: '12px 14px', fontSize: '13px', color: C.off, minHeight: '50px', lineHeight: 1.6, whiteSpace: 'pre-wrap' }}>{activeClient.brief || '—'}</div>

              {/* Files */}
              <SL action={<Btn size="sm" onClick={() => setModal('newFile')}>+ aggiungi</Btn>}>
                Pitch & Documenti ({activeClient.files?.length || 0})
              </SL>
              {(!activeClient.files || activeClient.files.length === 0) && <div style={{ fontSize: '13px', color: C.muted, padding: '6px 0' }}>nessun documento ancora.</div>}
              {activeClient.files?.map(f => (
                <div key={f.id} style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', background: C.bg3, borderRadius: '8px', padding: '10px 12px', marginBottom: '6px', gap: '10px' }}>
                  <div style={{ fontSize: '22px', flexShrink: 0 }}>{fileIcon(f.mime)}</div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: C.off }}>{f.name}</div>
                    <div style={{ fontSize: '11px', color: C.muted, marginTop: '2px' }}>{f.type} · {fd(f.created_at)}{f.size ? ' · ' + fmtSize(f.size) : ''}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', flexShrink: 0 }}>
                    <Btn size="sm" onClick={() => handleOpenFile(f)}>apri</Btn>
                    <Btn size="sm" variant="danger" onClick={() => handleDeleteFile(f.id)}>×</Btn>
                  </div>
                </div>
              ))}

              {/* Logs */}
              <SL action={<Btn size="sm" onClick={() => setModal('newLog')}>+ aggiungi</Btn>}>
                Log Attività ({activeClient.logs?.length || 0})
              </SL>
              {(!activeClient.logs || activeClient.logs.length === 0) && <div style={{ fontSize: '13px', color: C.muted, padding: '6px 0' }}>nessuna attività registrata.</div>}
              {activeClient.logs?.map(l => (
                <div key={l.id} style={{ display: 'flex', gap: '10px', padding: '9px 0', borderBottom: `1px solid ${C.border}` }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: logDotColors[l.type] || C.muted, flexShrink: 0, marginTop: '5px' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', color: C.off, lineHeight: 1.5 }}>{l.text}</div>
                    <div style={{ fontSize: '11px', color: C.muted, marginTop: '2px' }}>{l.type} · {fd(l.log_date)}</div>
                  </div>
                  <Btn size="sm" variant="ghost" onClick={() => handleDeleteLog(l.id)}>×</Btn>
                </div>
              ))}

              {/* Delete confirm */}
              {delConfirm && (
                <div style={{ background: C.redbg, border: `1px solid ${C.red}`, borderRadius: '8px', padding: '12px 14px', fontSize: '13px', color: C.red, marginTop: '14px' }}>
                  Eliminare definitivamente <strong>{activeClient.name}</strong> e tutti i suoi dati?
                  <div style={{ display: 'flex', gap: '8px', marginTop: '10px' }}>
                    <Btn size="sm" variant="danger" onClick={handleDeleteClient} disabled={loading}>sì, elimina tutto</Btn>
                    <Btn size="sm" onClick={() => setDelConfirm(false)}>annulla</Btn>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── MODALS ── */}

      {modal === 'newClient' && (
        <Modal title="Nuovo cliente" onClose={() => setModal(null)}>
          <ClientForm onSave={handleSaveClient} onCancel={() => setModal(null)} loading={loading} />
        </Modal>
      )}

      {modal === 'editClient' && activeClient && (
        <Modal title="Modifica cliente" onClose={() => setModal(null)}>
          <ClientForm
            initial={{ ...activeClient, budget: activeClient.budget ?? '' }}
            onSave={handleSaveClient}
            onCancel={() => setModal(null)}
            loading={loading}
          />
        </Modal>
      )}

      {modal === 'newLog' && (
        <Modal title="Aggiungi attività" onClose={() => setModal(null)}>
          <Field label="Tipo">
            <Select value={logForm.type} onChange={e => setLogForm(f => ({ ...f, type: e.target.value as LogType }))}>
              {LOG_TYPES.map(t => <option key={t}>{t}</option>)}
            </Select>
          </Field>
          <Field label="Data">
            <Input type="date" value={logForm.log_date} onChange={e => setLogForm(f => ({ ...f, log_date: e.target.value }))} />
          </Field>
          <Field label="Testo *">
            <Textarea value={logForm.text} onChange={e => setLogForm(f => ({ ...f, text: e.target.value }))}
              placeholder="es. Call 30 min: budget confermato €4.500, consegna entro fine marzo…" />
          </Field>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', paddingTop: '14px', borderTop: `1px solid ${C.border}` }}>
            <Btn onClick={() => setModal(null)}>annulla</Btn>
            <Btn variant="primary" onClick={handleSaveLog} disabled={loading || !logForm.text}>{loading ? 'salvataggio…' : 'aggiungi'}</Btn>
          </div>
        </Modal>
      )}

      {modal === 'newFile' && (
        <Modal title="Aggiungi documento" onClose={() => setModal(null)}>
          <Field label="Nome *">
            <Input value={fileForm.name} onChange={e => setFileForm(f => ({ ...f, name: e.target.value }))} placeholder="es. Pitch Garanzia10Plus v2, Preventivo, Contratto" />
          </Field>
          <Field label="Tipo">
            <Select value={fileForm.type} onChange={e => setFileForm(f => ({ ...f, type: e.target.value as FileType }))}>
              {FILE_TYPES.map(t => <option key={t}>{t}</option>)}
            </Select>
          </Field>
          <Field label="Carica file (max 20MB)">
            <div onClick={() => document.getElementById('fileUploadInput')?.click()}
              style={{ border: `2px dashed ${C.border}`, borderRadius: '10px', padding: '20px', textAlign: 'center', cursor: 'pointer' }}>
              <input id="fileUploadInput" type="file" style={{ display: 'none' }} onChange={handleFileSelect} />
              {filePreview
                ? <div style={{ fontSize: '13px', color: C.orange }}>📎 {filePreview}</div>
                : <div style={{ fontSize: '13px', color: C.muted }}>clicca per scegliere o <strong style={{ color: C.orange }}>trascina</strong></div>}
            </div>
          </Field>
          <Field label="Oppure URL esterno (Drive, Dropbox…)">
            <Input type="url" value={fileForm.url} onChange={e => setFileForm(f => ({ ...f, url: e.target.value }))} placeholder="https://drive.google.com/…" disabled={!!pendingFile} />
          </Field>
          <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end', paddingTop: '14px', borderTop: `1px solid ${C.border}` }}>
            <Btn onClick={() => { setModal(null); setPendingFile(null); setFilePreview('') }}>annulla</Btn>
            <Btn variant="primary" onClick={handleSaveFile} disabled={loading || (!pendingFile && !fileForm.url) || !fileForm.name}>{loading ? 'caricamento…' : 'aggiungi'}</Btn>
          </div>
        </Modal>
      )}
    </div>
  )
}