import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SLIDES = [
    '/mauxVerbena/assets/patrocinadores/patrocinador1.svg',
    '/mauxVerbena/assets/patrocinadores/patrocinador2.svg',
    '/mauxVerbena/assets/patrocinadores/patrocinado2.svg',
    '/mauxVerbena/assets/patrocinadores/patrocinador3.svg',
    '/mauxVerbena/assets/patrocinadores/patrocinador6.svg',
    '/mauxVerbena/assets/patrocinadores/patrocinador7.svg',
    '/mauxVerbena/assets/patrocinadores/patrocinador8.svg',
    '/mauxVerbena/assets/patrocinadores/patrocinador10.svg',
    '/mauxVerbena/assets/patrocinadores/patrocinador11.svg',
    '/mauxVerbena/assets/patrocinadores/patrocinador12.svg',
    '/mauxVerbena/assets/patrocinadores/patrocinador13.svg',
];

export default function Sponsors() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent(prev => (prev + 1) % SLIDES.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    const goTo = (i: number) => setCurrent(i);
    const prev = () => setCurrent(prev => (prev - 1 + SLIDES.length) % SLIDES.length);
    const next = () => setCurrent(prev => (prev + 1) % SLIDES.length);

    return (
        <div className="flex flex-col" style={{ height: 'calc(100vh - 8rem)', backgroundColor: '#e5e7eb' }}>
            {/* Imagen a pantalla completa */}
            <div className="relative flex-1 overflow-hidden" style={{ backgroundColor: '#e5e7eb' }}>
                <AnimatePresence mode="wait">
                    <motion.img
                        key={current}
                        src={SLIDES[current]}
                        alt={`Patrocinador ${current + 1}`}
                        initial={{ opacity: 0, scale: 0.97 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.02 }}
                        transition={{ duration: 0.4, ease: 'easeInOut' }}
                        className="absolute inset-0 w-full h-full object-contain p-8"
                    />
                </AnimatePresence>

                {/* Flechas */}
                <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 border border-border shadow-card flex items-center justify-center text-dark hover:bg-white transition-colors z-10"
                    aria-label="Anterior"
                >
                    ‹
                </button>
                <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white/80 border border-border shadow-card flex items-center justify-center text-dark hover:bg-white transition-colors z-10"
                    aria-label="Siguiente"
                >
                    ›
                </button>

                {/* Contador */}
                <div className="absolute top-3 right-4 text-xs text-muted bg-white/80 px-2 py-1 rounded-full">
                    {current + 1} / {SLIDES.length}
                </div>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 py-3 bg-light border-t border-border">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`rounded-full transition-all ${i === current
                                ? 'w-5 h-2 bg-accent'
                                : 'w-2 h-2 bg-border hover:bg-muted'
                            }`}
                        aria-label={`Ir a patrocinador ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
