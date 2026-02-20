'use client';

import { useLocale } from 'next-intl';
import AnimateOnScroll from '@/components/AnimateOnScroll';

export default function MethodSection() {
    const locale = useLocale();
    const isIt = locale === 'it';

    return (
        <section className="py-20 md:py-28 border-t border-border">
            <div className="section-container">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                    {/* Left — headline */}
                    <AnimateOnScroll>
                        <div>
                            <p className="section-title">
                                {isIt ? 'ARTIGIANO DIGITALE' : 'DIGITAL ARTISAN'}
                            </p>
                            <h2
                                className="font-bold text-text-primary"
                                style={{
                                    fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
                                    lineHeight: '1.1',
                                    letterSpacing: '-0.02em',
                                }}
                            >
                                {isIt
                                    ? 'Un Workflow Integrato per Registi e Produzioni'
                                    : 'An Integrated Workflow for Directors and Productions'}
                            </h2>
                        </div>
                    </AnimateOnScroll>

                    {/* Right — text */}
                    <AnimateOnScroll delay={100}>
                        <div className="text-text-secondary text-sm md:text-base leading-relaxed space-y-5">
                            {isIt ? (
                                <>
                                    <p>Nel workflow di post-produzione tradizionale, ogni fase è un silo. Si attende la fine del montaggio per passare alla color correction. Si aspetta la color per iniziare i VFX. Ogni passaggio di mano è un&apos;attesa, un nuovo briefing, un&apos;occasione in cui il filo creativo rischia di perdersi.</p>
                                    <p>Il mio approccio rompe questa catena. Essendo un unico professionista che padroneggia <strong className="text-text-primary">montaggio, color grading ed effetti visivi</strong>, offro un workflow fluido e non lineare. Mentre montiamo una scena, possiamo già definire il suo look colore. Se una ripresa richiede un intervento di VFX, posso realizzarlo contestualmente, senza interrompere il flusso creativo.</p>
                                </>
                            ) : (
                                <>
                                    <p>In the traditional post-production workflow, every phase is a silo. You wait for editing to finish before moving to color correction. You wait for color before starting VFX. Every handoff is a wait, a new briefing, an opportunity for the creative thread to get lost.</p>
                                    <p>My approach breaks this chain. As a single professional who masters <strong className="text-text-primary">editing, color grading and visual effects</strong>, I offer a fluid, non-linear workflow. While editing a scene, we can already define its color look. If a shot needs VFX work, I can do it contextually, without interrupting the creative flow.</p>
                                </>
                            )}
                        </div>
                    </AnimateOnScroll>
                </div>

                {/* Benefits */}
                <AnimateOnScroll delay={200}>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
                        {(isIt ? [
                            { title: 'Slancio Creativo', text: 'La visione rimane sempre "calda" e coerente, senza le pause forzate tra una fase e l\'altra.' },
                            { title: 'Visione d\'Insieme', text: 'Vedere l\'immagine evolvere con montaggio, colore e VFX simultaneamente permette decisioni migliori e più consapevoli.' },
                            { title: 'Partner Attivo', text: 'Non sono solo un esecutore, ma un partner strategico che, avendo il controllo di tutte le fasi, offre soluzioni creative integrate.' },
                        ] : [
                            { title: 'Creative Momentum', text: 'The vision stays "warm" and coherent, without forced pauses between phases.' },
                            { title: 'Complete Overview', text: 'Seeing the image evolve with editing, color and VFX simultaneously enables better, more informed decisions.' },
                            { title: 'Active Partner', text: 'I\'m not just an executor, but a strategic partner who, controlling all phases, offers integrated creative solutions.' },
                        ]).map((benefit, i) => (
                            <div key={i}>
                                <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    {benefit.text}
                                </p>
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>
            </div>
        </section>
    );
}