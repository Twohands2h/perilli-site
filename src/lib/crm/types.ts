// src/lib/crm/types.ts

export type ProjectStatus =
  | 'Lead'
  | 'In lavorazione'
  | 'Chiuso'
  | 'Stand-by'

export type BillingStatus =
  | 'Da fatturare'
  | 'Fatturato'
  | 'Pagato'

export type LogType =
  | 'Nota'
  | 'Call'
  | 'Email'
  | 'Documento'
  | 'Preventivo'
  | 'Revisione'

export type FileType =
  | 'Pitch'
  | 'Preventivo'
  | 'Contratto'
  | 'Brief'
  | 'Documento'
  | 'Revisione'
  | 'Materiali'

export type ClientSource =
  | 'Google'
  | 'Social (Instagram/LinkedIn)'
  | 'Passaparola'
  | 'Vecchio cliente'
  | 'Behance'
  | 'IMDB'
  | 'Altro'

// ── Cliente — anagrafica + dati fatturazione ──────────────────────────────────
export interface CrmClient {
  id: string
  name: string
  company?: string
  email?: string
  phone?: string
  source?: ClientSource
  notes?: string
  // Dati fatturazione
  vat_number?: string      // P.IVA o Codice Fiscale
  sdi_code?: string        // Codice destinatario SDI
  pec?: string             // PEC per fatturazione
  address?: string         // Indirizzo completo
  website?: string         // Sito web
  created_at: string
  updated_at: string
  // joined
  projects?: CrmProject[]
}

// ── Progetto ───────────────────────────────────────────────────────────────────
export interface CrmProject {
  id: string
  client_id: string
  title: string
  service?: string
  budget?: number
  deadline?: string
  status: ProjectStatus
  billing_status?: BillingStatus   // null finché status != 'Chiuso'
  billed_at?: string
  paid_at?: string
  brief?: string
  next_action?: string
  first_contact?: string
  created_at: string
  updated_at: string
  // joined
  files?: CrmFile[]
  logs?: CrmLog[]
}

// ── File ───────────────────────────────────────────────────────────────────────
export interface CrmFile {
  id: string
  client_id: string
  project_id?: string
  name: string
  type?: FileType
  mime?: string
  size?: number
  storage_path?: string
  url?: string
  created_at: string
}

// ── Log ────────────────────────────────────────────────────────────────────────
export interface CrmLog {
  id: string
  client_id: string
  project_id?: string
  type: LogType
  log_date: string
  text: string
  created_at: string
}

// ── Form data ──────────────────────────────────────────────────────────────────
export interface ClientFormData {
  name: string
  company?: string
  email?: string
  phone?: string
  source?: ClientSource
  notes?: string
  vat_number?: string
  sdi_code?: string
  pec?: string
  address?: string
  website?: string
}

export interface ProjectFormData {
  title: string
  service?: string
  budget?: number | ''
  deadline?: string
  status: ProjectStatus
  billing_status?: BillingStatus
  billed_at?: string
  paid_at?: string
  brief?: string
  next_action?: string
  first_contact?: string
}

// ── Dashboard stats ────────────────────────────────────────────────────────────
export interface DashboardStats {
  // Finanze
  totalDaFatturare: number
  totalFatturato: number
  totalPagato: number
  monthlyRevenue: { month: string; amount: number }[]

  // Pipeline
  activeProjects: (CrmProject & { client_name: string })[]

  // Clienti
  topClients: { client_id: string; name: string; total: number; projects: number }[]

  // Acquisizione
  sourceStats: { source: string; count: number; value: number }[]

  // Progetti per stato
  byStatus: { status: string; count: number }[]
  byBilling: { billing_status: string; count: number; value: number }[]
}