import { unstable_setRequestLocale } from 'next-intl/server';

export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
    unstable_setRequestLocale(locale);
    const isIt = locale === 'it';

    return (
        <section className="pt-24 pb-10 md:pt-32 md:pb-16 lg:pt-40 lg:pb-20">
            <div className="section-container max-w-text">
                <h1
                    className="font-bold text-text-primary mb-6 md:mb-8"
                    style={{ fontSize: 'clamp(1.5rem, 4vw, 2.5rem)' }}
                >
                    Privacy Policy
                </h1>

                <div className="prose-custom">
                    {isIt ? (
                        <>
                            <p><strong>Ultimo aggiornamento:</strong> Febbraio 2026</p>

                            <h2>Titolare del trattamento</h2>
                            <p>Piero Perilli<br />
                                P.IVA IT10343871009<br />
                                Email: info@pieroperilli.com<br />
                                Sede: Roma, Italia</p>

                            <h2>Dati raccolti</h2>
                            <p>Questo sito raccoglie dati personali esclusivamente attraverso il form di contatto (nome, email, messaggio) e strumenti di analisi anonimi. Non utilizziamo cookie di profilazione.</p>

                            <h2>Finalità del trattamento</h2>
                            <p>I dati raccolti tramite il form di contatto vengono utilizzati esclusivamente per rispondere alle richieste ricevute. Non condividiamo i dati con terze parti, non li utilizziamo per finalità di marketing e non li vendiamo.</p>

                            <h2>Strumenti di analisi</h2>
                            <p>Utilizziamo Vercel Analytics e/o Plausible Analytics per raccogliere statistiche anonime sull&apos;utilizzo del sito. Questi strumenti non utilizzano cookie e non raccolgono dati personali identificabili. Sono conformi al GDPR senza necessità di banner cookie.</p>

                            <h2>Servizi di terze parti</h2>
                            <p>Il sito integra i seguenti servizi esterni:</p>
                            <ul>
                                <li><strong>Calendly</strong> — per la prenotazione di call. I dati inseriti su Calendly sono gestiti secondo la privacy policy di Calendly.</li>
                                <li><strong>WhatsApp</strong> — il link apre una conversazione WhatsApp. I dati sono gestiti da Meta/WhatsApp.</li>
                                <li><strong>YouTube/Vimeo</strong> — per l&apos;incorporamento di video. Possono impostare cookie tecnici.</li>
                            </ul>

                            <h2>Conservazione dei dati</h2>
                            <p>I dati del form di contatto vengono conservati per il tempo necessario a gestire la richiesta e successivamente eliminati. Non manteniamo database di contatti a fini promozionali.</p>

                            <h2>Diritti dell&apos;interessato</h2>
                            <p>Ai sensi del GDPR (Regolamento UE 2016/679), hai diritto di accedere ai tuoi dati, richiederne la rettifica o la cancellazione, e opporti al trattamento. Per esercitare questi diritti, scrivi a info@pieroperilli.com.</p>
                        </>
                    ) : (
                        <>
                            <p><strong>Last updated:</strong> February 2026</p>

                            <h2>Data Controller</h2>
                            <p>Piero Perilli<br />
                                VAT IT10343871009<br />
                                Email: info@pieroperilli.com<br />
                                Location: Rome, Italy</p>

                            <h2>Data Collected</h2>
                            <p>This website collects personal data exclusively through the contact form (name, email, message) and anonymous analytics tools. We do not use profiling cookies.</p>

                            <h2>Purpose of Processing</h2>
                            <p>Data collected through the contact form is used exclusively to respond to inquiries. We do not share data with third parties, do not use it for marketing purposes, and do not sell it.</p>

                            <h2>Analytics</h2>
                            <p>We use Vercel Analytics and/or Plausible Analytics to collect anonymous usage statistics. These tools do not use cookies and do not collect personally identifiable data. They are GDPR compliant without requiring a cookie banner.</p>

                            <h2>Third-Party Services</h2>
                            <p>This site integrates the following external services:</p>
                            <ul>
                                <li><strong>Calendly</strong> — for booking calls. Data entered on Calendly is managed according to Calendly&apos;s privacy policy.</li>
                                <li><strong>WhatsApp</strong> — the link opens a WhatsApp conversation. Data is managed by Meta/WhatsApp.</li>
                                <li><strong>YouTube/Vimeo</strong> — for video embedding. They may set technical cookies.</li>
                            </ul>

                            <h2>Data Retention</h2>
                            <p>Contact form data is retained for the time necessary to handle the request and subsequently deleted. We do not maintain contact databases for promotional purposes.</p>

                            <h2>Your Rights</h2>
                            <p>Under the GDPR (EU Regulation 2016/679), you have the right to access your data, request its rectification or deletion, and object to processing. To exercise these rights, write to info@pieroperilli.com.</p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}