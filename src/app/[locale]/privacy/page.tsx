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
                    {isIt ? 'Privacy e Cookie Policy' : 'Privacy & Cookie Policy'}
                </h1>

                <div className="prose-custom">
                    {isIt ? (
                        <>
                            <p><strong>Ultimo aggiornamento:</strong> Marzo 2026</p>

                            <h2>1. Titolare del trattamento</h2>
                            <p>Piero Perilli<br />
                                P.IVA IT10343871009<br />
                                Email: info@pieroperilli.com<br />
                                Sede: Roma, Italia</p>

                            <h2>2. Dati raccolti e finalità</h2>

                            <h3>Form di contatto</h3>
                            <p>Raccogliamo nome, email e messaggio esclusivamente per rispondere alle richieste ricevute. Base giuridica: consenso dell&apos;interessato (art. 6.1.a GDPR). I dati vengono conservati per il tempo necessario a gestire la richiesta e successivamente eliminati. Non condividiamo i dati con terze parti a fini di marketing e non li vendiamo.</p>

                            <h3>Email di conferma</h3>
                            <p>Dopo l&apos;invio del form, ricevi un&apos;email automatica di conferma tramite Resend (resend.com). L&apos;email viene inviata da noreply@pieroperilli.com. Resend agisce come responsabile del trattamento ai sensi dell&apos;art. 28 GDPR.</p>

                            <h2>3. Cookie utilizzati</h2>
                            <p>Questo sito utilizza cookie tecnici necessari e, previo consenso, cookie analytics di terze parti. Non utilizziamo cookie di profilazione o marketing.</p>

                            <h3>Cookie tecnici (sempre attivi)</h3>
                            <table className="w-full text-sm border-collapse mb-6">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left py-2 pr-4 text-text-primary">Nome</th>
                                        <th className="text-left py-2 pr-4 text-text-primary">Finalità</th>
                                        <th className="text-left py-2 pr-4 text-text-primary">Durata</th>
                                        <th className="text-left py-2 text-text-primary">Tipo</th>
                                    </tr>
                                </thead>
                                <tbody className="text-text-secondary">
                                    <tr className="border-b border-border/50">
                                        <td className="py-2 pr-4">pp_consent</td>
                                        <td className="py-2 pr-4">Memorizza le preferenze cookie dell&apos;utente</td>
                                        <td className="py-2 pr-4">180 giorni</td>
                                        <td className="py-2">Proprio</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-2 pr-4">NEXT_LOCALE</td>
                                        <td className="py-2 pr-4">Memorizza la preferenza di lingua</td>
                                        <td className="py-2 pr-4">Sessione</td>
                                        <td className="py-2">Proprio</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Cookie analytics (solo con consenso)</h3>
                            <p>I seguenti cookie vengono attivati esclusivamente dopo che l&apos;utente ha dato il proprio consenso tramite il banner cookie. La base giuridica è il consenso (art. 6.1.a GDPR).</p>
                            <table className="w-full text-sm border-collapse mb-6">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left py-2 pr-4 text-text-primary">Servizio</th>
                                        <th className="text-left py-2 pr-4 text-text-primary">Finalità</th>
                                        <th className="text-left py-2 pr-4 text-text-primary">Cookie principali</th>
                                        <th className="text-left py-2 text-text-primary">Privacy</th>
                                    </tr>
                                </thead>
                                <tbody className="text-text-secondary">
                                    <tr className="border-b border-border/50">
                                        <td className="py-2 pr-4">Google Analytics 4</td>
                                        <td className="py-2 pr-4">Statistiche sul traffico e il comportamento degli utenti</td>
                                        <td className="py-2 pr-4">_ga, _ga_*</td>
                                        <td className="py-2"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Google Privacy</a></td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-2 pr-4">Microsoft Clarity</td>
                                        <td className="py-2 pr-4">Heatmap, registrazioni sessioni, analisi comportamento</td>
                                        <td className="py-2 pr-4">_clck, _clsk, CLID</td>
                                        <td className="py-2"><a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Microsoft Privacy</a></td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Analytics senza cookie</h3>
                            <p>Vercel Analytics raccoglie dati aggregati sulle prestazioni del sito (Core Web Vitals) senza utilizzare cookie e senza raccogliere dati personali identificabili. Non richiede consenso.</p>

                            <h2>4. Gestione del consenso cookie</h2>
                            <p>Alla prima visita, viene mostrato un banner che permette di accettare tutti i cookie, rifiutare tutti i cookie non tecnici, o personalizzare le preferenze per categoria. La chiusura del banner tramite il pulsante X equivale al rifiuto dei cookie non necessari.</p>
                            <p>Puoi modificare le tue preferenze in qualsiasi momento cliccando su &quot;Preferenze Cookie&quot; nel footer del sito. Il consenso viene memorizzato per 180 giorni, dopo i quali il banner verrà ripresentato.</p>

                            <h2>5. Servizi di terze parti</h2>
                            <ul>
                                <li><strong>Resend</strong> (resend.com) — invio email transazionali (conferma form contatto). <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Privacy Policy Resend</a>.</li>
                                <li><strong>Calendly</strong> — prenotazione call. I dati inseriti su Calendly sono gestiti secondo la <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">privacy policy di Calendly</a>.</li>
                                <li><strong>WhatsApp</strong> — il link apre una conversazione WhatsApp. I dati sono gestiti da Meta/WhatsApp.</li>
                                <li><strong>YouTube</strong> — incorporamento video. I video vengono caricati solo dopo il consenso dell&apos;utente. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Privacy Policy Google</a>.</li>
                            </ul>

                            <h2>6. Trasferimento dati extra-UE</h2>
                            <p>Alcuni servizi di terze parti (Google Analytics, Microsoft Clarity, Resend) possono trasferire dati negli Stati Uniti. Il trasferimento avviene sulla base del EU-US Data Privacy Framework e delle clausole contrattuali standard (SCC) ai sensi dell&apos;art. 46 GDPR.</p>

                            <h2>7. Diritti dell&apos;interessato</h2>
                            <p>Ai sensi del GDPR (Regolamento UE 2016/679), hai diritto di:</p>
                            <ul>
                                <li>Accedere ai tuoi dati personali (art. 15)</li>
                                <li>Richiederne la rettifica (art. 16) o la cancellazione (art. 17)</li>
                                <li>Limitare il trattamento (art. 18)</li>
                                <li>Opporti al trattamento (art. 21)</li>
                                <li>Richiedere la portabilità dei dati (art. 20)</li>
                                <li>Revocare il consenso in qualsiasi momento (art. 7)</li>
                            </ul>
                            <p>Per esercitare questi diritti, scrivi a <a href="mailto:info@pieroperilli.com" className="text-accent underline underline-offset-2">info@pieroperilli.com</a>.</p>
                            <p>Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">www.garanteprivacy.it</a>).</p>
                        </>
                    ) : (
                        <>
                            <p><strong>Last updated:</strong> March 2026</p>

                            <h2>1. Data Controller</h2>
                            <p>Piero Perilli<br />
                                VAT IT10343871009<br />
                                Email: info@pieroperilli.com<br />
                                Location: Rome, Italy</p>

                            <h2>2. Data Collected and Purposes</h2>

                            <h3>Contact Form</h3>
                            <p>We collect name, email and message exclusively to respond to inquiries. Legal basis: data subject&apos;s consent (Art. 6.1.a GDPR). Data is retained for the time necessary to handle the request and subsequently deleted. We do not share data with third parties for marketing purposes and do not sell it.</p>

                            <h3>Confirmation Email</h3>
                            <p>After submitting the form, you receive an automatic confirmation email via Resend (resend.com). The email is sent from noreply@pieroperilli.com. Resend acts as a data processor under Art. 28 GDPR.</p>

                            <h2>3. Cookies Used</h2>
                            <p>This site uses necessary technical cookies and, with consent, third-party analytics cookies. We do not use profiling or marketing cookies.</p>

                            <h3>Technical Cookies (always active)</h3>
                            <table className="w-full text-sm border-collapse mb-6">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left py-2 pr-4 text-text-primary">Name</th>
                                        <th className="text-left py-2 pr-4 text-text-primary">Purpose</th>
                                        <th className="text-left py-2 pr-4 text-text-primary">Duration</th>
                                        <th className="text-left py-2 text-text-primary">Type</th>
                                    </tr>
                                </thead>
                                <tbody className="text-text-secondary">
                                    <tr className="border-b border-border/50">
                                        <td className="py-2 pr-4">pp_consent</td>
                                        <td className="py-2 pr-4">Stores user cookie preferences</td>
                                        <td className="py-2 pr-4">180 days</td>
                                        <td className="py-2">First-party</td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-2 pr-4">NEXT_LOCALE</td>
                                        <td className="py-2 pr-4">Stores language preference</td>
                                        <td className="py-2 pr-4">Session</td>
                                        <td className="py-2">First-party</td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Analytics Cookies (consent required)</h3>
                            <p>The following cookies are activated only after the user has given consent through the cookie banner. Legal basis: consent (Art. 6.1.a GDPR).</p>
                            <table className="w-full text-sm border-collapse mb-6">
                                <thead>
                                    <tr className="border-b border-border">
                                        <th className="text-left py-2 pr-4 text-text-primary">Service</th>
                                        <th className="text-left py-2 pr-4 text-text-primary">Purpose</th>
                                        <th className="text-left py-2 pr-4 text-text-primary">Main Cookies</th>
                                        <th className="text-left py-2 text-text-primary">Privacy</th>
                                    </tr>
                                </thead>
                                <tbody className="text-text-secondary">
                                    <tr className="border-b border-border/50">
                                        <td className="py-2 pr-4">Google Analytics 4</td>
                                        <td className="py-2 pr-4">Traffic statistics and user behavior analysis</td>
                                        <td className="py-2 pr-4">_ga, _ga_*</td>
                                        <td className="py-2"><a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Google Privacy</a></td>
                                    </tr>
                                    <tr className="border-b border-border/50">
                                        <td className="py-2 pr-4">Microsoft Clarity</td>
                                        <td className="py-2 pr-4">Heatmaps, session recordings, behavior analysis</td>
                                        <td className="py-2 pr-4">_clck, _clsk, CLID</td>
                                        <td className="py-2"><a href="https://privacy.microsoft.com/privacystatement" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Microsoft Privacy</a></td>
                                    </tr>
                                </tbody>
                            </table>

                            <h3>Cookieless Analytics</h3>
                            <p>Vercel Analytics collects aggregated site performance data (Core Web Vitals) without using cookies or collecting personally identifiable data. No consent required.</p>

                            <h2>4. Cookie Consent Management</h2>
                            <p>On first visit, a banner is displayed allowing you to accept all cookies, reject all non-technical cookies, or customize preferences by category. Closing the banner via the X button equals rejecting non-essential cookies.</p>
                            <p>You can change your preferences at any time by clicking &quot;Cookie Preferences&quot; in the site footer. Consent is stored for 180 days, after which the banner will be shown again.</p>

                            <h2>5. Third-Party Services</h2>
                            <ul>
                                <li><strong>Resend</strong> (resend.com) — transactional email delivery (contact form confirmation). <a href="https://resend.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Resend Privacy Policy</a>.</li>
                                <li><strong>Calendly</strong> — call booking. Data entered on Calendly is managed according to <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Calendly&apos;s privacy policy</a>.</li>
                                <li><strong>WhatsApp</strong> — the link opens a WhatsApp conversation. Data is managed by Meta/WhatsApp.</li>
                                <li><strong>YouTube</strong> — video embedding. Videos are loaded only after user consent. <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">Google Privacy Policy</a>.</li>
                            </ul>

                            <h2>6. Data Transfer Outside EU</h2>
                            <p>Some third-party services (Google Analytics, Microsoft Clarity, Resend) may transfer data to the United States. Transfer occurs on the basis of the EU-US Data Privacy Framework and Standard Contractual Clauses (SCCs) under Art. 46 GDPR.</p>

                            <h2>7. Your Rights</h2>
                            <p>Under the GDPR (EU Regulation 2016/679), you have the right to:</p>
                            <ul>
                                <li>Access your personal data (Art. 15)</li>
                                <li>Request rectification (Art. 16) or erasure (Art. 17)</li>
                                <li>Restrict processing (Art. 18)</li>
                                <li>Object to processing (Art. 21)</li>
                                <li>Request data portability (Art. 20)</li>
                                <li>Withdraw consent at any time (Art. 7)</li>
                            </ul>
                            <p>To exercise these rights, write to <a href="mailto:info@pieroperilli.com" className="text-accent underline underline-offset-2">info@pieroperilli.com</a>.</p>
                            <p>You also have the right to lodge a complaint with the Italian Data Protection Authority (<a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-2">www.garanteprivacy.it</a>).</p>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
}