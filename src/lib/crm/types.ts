// src/lib/crm/types.ts

export type ClientStatus =
  | 'Lead'
  | 'Preventivo inviato'
  | 'In lavorazione'
  | 'Completato'
  | 'Stand-by'

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

export interface CrmClient {
  id: string
  name: string
  company?: string
  email?: string
  phone?: string
  service?: string
  source?: ClientSource
  budget?: number
  deadline?: string       // ISO date YYYY-MM-DD
  status: ClientStatus
  next_action?: string
  first_contact?: string  // ISO date YYYY-MM-DD
  brief?: string
  created_at: string
  updated_at: string
  // joined
  files?: CrmFile[]
  logs?: CrmLog[]
}

export interface CrmFile {
  id: string
  client_id: string
  name: string
  type?: FileType
  mime?: string
  size?: number
  storage_path?: string
  url?: string
  created_at: string
}

export interface CrmLog {
  id: string
  client_id: string
  type: LogType
  log_date: string
  text: string
  created_at: string
}

export interface ClientFormData {
  name: string
  company?: string
  email?: string
  phone?: string
  service?: string
  source?: ClientSource
  budget?: number | ''
  deadline?: string
  status: ClientStatus
  next_action?: string
  first_contact?: string
  brief?: string
}
