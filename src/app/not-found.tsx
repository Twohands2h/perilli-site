import Link from 'next/link';

export default function NotFound() {
    return (
        <section className="min-h-[70vh] flex items-center justify-center">
            <div className="section-container text-center">
                <p className="text-6xl md:text-8xl font-bold text-accent/20 mb-4">404</p>
                <h1
                    className="font-bold text-text-primary mb-4"
                    style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)' }}
                >
                    Pagina non trovata
                </h1>
                <p className="text-text-secondary text-sm mb-8 max-w-md mx-auto">
                    La pagina che stai cercando non esiste o è stata spostata.
                    <br />
                    <span className="text-text-muted">The page you&apos;re looking for doesn&apos;t exist or has been moved.</span>
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link href="/" className="btn-primary w-full sm:w-auto justify-center">
                        Homepage
                    </Link>
                    <Link href="/contatti" className="btn-secondary w-full sm:w-auto justify-center">
                        Contatti
                    </Link>
                </div>
            </div>
        </section>
    );
}