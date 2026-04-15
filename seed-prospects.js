// seed-prospects.js
// Esegui con: node seed-prospects.js
// Assicurati che il server sia attivo su localhost:3000

const BASE_URL = 'http://localhost:3000/api/crm/prospects'

const prospects = [
  // ── TIER A ────────────────────────────────────────────────────────────────
  {
    agency_name: 'Indiana Production',
    website: 'https://www.indianaproduction.com',
    country: 'Italia',
    city: 'Roma / Milano',
    market: 'Italia',
    contact_name: 'Giampaolo Rossi',
    contact_role: 'Head of Talent Research',
    contact_email: 'g.rossi@indianaproduction.com',
    contact_linkedin: 'https://www.linkedin.com/company/indiana-production',
    tier: 'A',
    agency_type: 'Casa di Produzione',
    specialization: 'Advertising, Cinema, TV, Branded Content',
    notable_clients: 'Esselunga, Eni, Intimissimi, Peroni, Lancia, Netflix, Amazon',
    why_them: 'Ha un Head of Talent Research dedicato — cerca attivamente profili per roster. Produce centinaia di spot/anno con team assemblati a progetto. Sede Roma. Partner VFX di riferimento è Proxima Milano ma cercano profili senior anche esterni.',
    status: 'Da contattare',
    email_template: 'Italia_Produzione',
    anchor_credit: 'Julien Temple — I Am Curious Johnny',
    next_followup_at: '2026-04-22',
  },
  {
    agency_name: 'Filmmaster Productions',
    website: 'https://www.filmmasterproductions.com',
    country: 'Italia',
    city: 'Roma / Milano',
    market: 'Italia',
    contact_name: 'Fabrizio Razza',
    contact_role: 'Executive Producer',
    contact_email: 'fabrizio.razza@filmmaster.com',
    contact_linkedin: 'https://www.linkedin.com/in/fabrizio-razza-4678391a',
    tier: 'A',
    agency_type: 'Casa di Produzione',
    specialization: 'Advertising, Spot TV, Branded Content',
    notable_clients: 'Despar, Listerine, Fiat, Telecom Italia, Save the Children',
    why_them: '45 anni di storia, 4.000+ spot prodotti, 28 Lions a Cannes. Sede principale Roma. Esternalizza post produzione e VFX a progetto. Ha un team R&D che cerca nuovi profili.',
    status: 'Da contattare',
    email_template: 'Italia_Produzione',
    anchor_credit: 'Gucci Kids',
    next_followup_at: '2026-04-22',
  },
  {
    agency_name: 'Filmmaster Productions — Andrea Ciarla',
    website: 'https://www.filmmasterproductions.com',
    country: 'Italia',
    city: 'Roma / Milano',
    market: 'Italia',
    contact_name: 'Andrea Ciarla',
    contact_role: 'Executive Producer',
    contact_email: 'andrea.ciarla@filmmaster.com',
    tier: 'A',
    agency_type: 'Casa di Produzione',
    specialization: 'Advertising, Spot TV',
    notable_clients: 'Despar, Listerine, Fiat',
    why_them: 'Secondo EP di Filmmaster da contattare in parallelo o come follow-up se Razza non risponde.',
    status: 'Da contattare',
    email_template: 'Italia_Produzione',
    anchor_credit: 'Gucci Kids',
    next_followup_at: '2026-04-29',
  },

  // ── TIER B ────────────────────────────────────────────────────────────────
  {
    agency_name: 'Interact SpA',
    website: 'https://www.interact.it',
    country: 'Italia',
    city: 'Roma',
    market: 'Italia',
    contact_name: '',
    contact_role: 'Executive Producer / Head of Production',
    tier: 'B',
    agency_type: 'Casa di Produzione Istituzionale',
    specialization: 'Video istituzionali, documentari, spot corporate',
    notable_clients: 'Enel, ONU, Cisl, Notariato, RDS, Festa del Cinema Roma',
    why_them: 'Perfettamente in linea con i crediti istituzionali di Piero (ACEA, Ministeri, Save the Children). Produce video per clienti pubblici di primo livello. Sede Roma. Contatto da trovare via LinkedIn.',
    status: 'Da contattare',
    email_template: 'Italia_Produzione',
    anchor_credit: 'Save the Children',
    next_followup_at: '2026-04-29',
  },
  {
    agency_name: 'SMALL Agency',
    website: 'https://www.smallagency.it',
    country: 'Italia',
    city: 'Milano',
    market: 'Italia',
    contact_name: '',
    contact_role: 'Executive Creative Director / Head of Production',
    tier: 'B',
    agency_type: 'Agenzia Creativa',
    specialization: 'Advertising, Branded Content, Campagne nazionali',
    notable_clients: 'Esselunga, Despar, Sammontana',
    why_them: 'Agenzia creativa che commissiona produzione a Indiana e Filmmaster. Quando gestiscono direttamente la post su progetti medi, cercano VFX senior esterni. Angolo: presentarsi come professionista che ha già lavorato con i loro partner produttivi.',
    status: 'Da contattare',
    email_template: 'Italia_Agenzia',
    anchor_credit: 'Julien Temple — I Am Curious Johnny',
    next_followup_at: '2026-05-05',
  },
  {
    agency_name: 'Piuma Film',
    website: 'https://piumafilm.com',
    country: 'Italia',
    city: 'Roma / Milano',
    market: 'Italia',
    contact_name: '',
    contact_role: 'Producer / Executive Producer',
    tier: 'B',
    agency_type: 'Casa di Produzione',
    specialization: 'Cinema, Spot TV, Documentari',
    notable_clients: 'Da verificare',
    why_them: 'Casa di produzione con taglio cinematografico. Interessante per progetti che richiedono VFX con sensibilità cinematografica — il profilo esatto di Piero. Contatto da trovare via sito/LinkedIn.',
    status: 'Da contattare',
    email_template: 'Italia_Produzione',
    anchor_credit: 'Walter Volpatto — Along Came Ruby',
    next_followup_at: '2026-05-05',
  },
  {
    agency_name: 'Filmmaster Productions — Michela Gabelli',
    website: 'https://www.filmmasterproductions.com',
    country: 'Italia',
    city: 'Roma / Milano',
    market: 'Italia',
    contact_name: 'Michela Gabelli',
    contact_role: 'Partner / Executive Producer',
    contact_email: 'michela.gabelli@filmmaster.com',
    tier: 'B',
    agency_type: 'Casa di Produzione',
    specialization: 'Advertising, Spot TV',
    why_them: 'Terzo contatto Filmmaster — Partner e EP. Da usare come fallback se i primi due non rispondono entro 2 settimane.',
    status: 'Da contattare',
    email_template: 'Italia_Produzione',
    anchor_credit: 'Gucci Kids',
    next_followup_at: '2026-05-12',
  },

  // ── TIER C — Da sviluppare ─────────────────────────────────────────────────
  {
    agency_name: 'McKinsey Italia (ex cliente)',
    website: 'https://www.mckinsey.com/it',
    country: 'Italia',
    city: 'Roma / Milano',
    market: 'Italia',
    tier: 'A',
    agency_type: 'Consulenza / Corporate',
    specialization: 'Video corporate, eventi, comunicazione istituzionale',
    why_them: 'Ex cliente diretto. Contatto caldo — non outreach freddo. Da riattivare con messaggio personale, non template. Inserito per tracciare il follow-up.',
    status: 'Da contattare',
    email_template: 'Italia_Agenzia',
    anchor_credit: 'Altro',
    next_followup_at: '2026-04-22',
  },
  {
    agency_name: 'Impronta (ex cliente)',
    website: '',
    country: 'Italia',
    city: 'Roma',
    market: 'Italia',
    tier: 'A',
    agency_type: 'Agenzia di Comunicazione',
    specialization: 'Spot istituzionali, comunicazione pubblica',
    why_them: 'Ex cliente diretto. Contatto caldo. Da riattivare con messaggio personale. Inserito per tracciare il follow-up.',
    status: 'Da contattare',
    email_template: 'Italia_Agenzia',
    anchor_credit: 'Altro',
    next_followup_at: '2026-04-22',
  },
  {
    agency_name: 'Hdra (ex cliente)',
    website: '',
    country: 'Italia',
    city: 'Roma',
    market: 'Italia',
    tier: 'A',
    agency_type: 'Agenzia di Comunicazione',
    specialization: 'Spot istituzionali, comunicazione pubblica',
    why_them: 'Ex cliente diretto. Contatto caldo. Da riattivare con messaggio personale. Inserito per tracciare il follow-up.',
    status: 'Da contattare',
    email_template: 'Italia_Agenzia',
    anchor_credit: 'Altro',
    next_followup_at: '2026-04-22',
  },
]

async function seed() {
  console.log(`\n🚀 Inserimento ${prospects.length} prospect nel CRM...\n`)
  let ok = 0
  let fail = 0

  for (const p of prospects) {
    try {
      const res = await fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Cookie': 'crm_session=authenticated' },
        body: JSON.stringify(p),
      })

      if (res.ok) {
        const data = await res.json()
        console.log(`✅ ${p.agency_name} — ${data.id}`)
        ok++
      } else {
        const err = await res.text()
        console.log(`❌ ${p.agency_name} — ${res.status}: ${err}`)
        fail++
      }
    } catch (e) {
      console.log(`❌ ${p.agency_name} — ${e.message}`)
      fail++
    }

    // Piccola pausa per non sovraccaricare
    await new Promise(r => setTimeout(r, 200))
  }

  console.log(`\n✅ Inseriti: ${ok} | ❌ Falliti: ${fail}\n`)
}

seed()
