// src/lib/crm/supabase.ts
// Usato SOLO nelle API routes (server-side) — mai nel browser

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceKey) {
  throw new Error('Mancano le variabili SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY')
}

// Service role bypassa RLS — sicuro perché usato solo server-side
export const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: { persistSession: false }
})
