import EmblaCarousel from '../components/EmblaCarousel';

const OPTIONS = { loop: true };

// Imágenes reales desde la carpeta `public/assets/patrocinadores/`
const SLIDES = [
    '/assets/patrocinadores/patrocinador1.svg',
    '/assets/patrocinadores/patrocinador2.svg',
    '/assets/patrocinadores/patrocinador3.svg',
    '/assets/patrocinadores/patrocinador4.svg',
    '/assets/patrocinadores/patrocinador5.svg',
    '/assets/patrocinadores/patrocinador6.svg',
    '/assets/patrocinadores/patrocinador7.svg',
    '/assets/patrocinadores/patrocinador8.svg',
    '/assets/patrocinadores/patrocinador9.svg',
    '/assets/patrocinadores/patrocinador10.svg',
    '/assets/patrocinadores/patrocinador1.svg',
    '/assets/patrocinadores/patrocinador2.svg',
    '/assets/patrocinadores/patrocinador3.svg',
    '/assets/patrocinadores/patrocinador4.svg',
    '/assets/patrocinadores/patrocinador5.svg',
    '/assets/patrocinadores/patrocinador6.svg',
    '/assets/patrocinadores/patrocinador7.svg',
    '/assets/patrocinadores/patrocinador8.svg',
    '/assets/patrocinadores/patrocinador9.svg',
    '/assets/patrocinadores/patrocinador10.svg',
    '/assets/patrocinadores/patrocinador1.svg',
    '/assets/patrocinadores/patrocinador2.svg',
    '/assets/patrocinadores/patrocinador3.svg',
    '/assets/patrocinadores/patrocinador4.svg',
    '/assets/patrocinadores/patrocinador5.svg',
    '/assets/patrocinadores/patrocinador6.svg',
    '/assets/patrocinadores/patrocinador7.svg',
    '/assets/patrocinadores/patrocinador8.svg',
    '/assets/patrocinadores/patrocinador9.svg',
    '/assets/patrocinadores/patrocinador10.svg',
    '/assets/patrocinadores/patrocinador1.svg',
    '/assets/patrocinadores/patrocinador2.svg',
    '/assets/patrocinadores/patrocinador3.svg',
    '/assets/patrocinadores/patrocinador4.svg',
    '/assets/patrocinadores/patrocinador5.svg',
    '/assets/patrocinadores/patrocinador6.svg',
    '/assets/patrocinadores/patrocinador7.svg',
    '/assets/patrocinadores/patrocinador8.svg',
    '/assets/patrocinadores/patrocinador9.svg',
    '/assets/patrocinadores/patrocinador10.svg',
];

export default function Menu() {
    return (
        <div className="w-screen h-auto flex flex-col justify-center items-center p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Menú</h1>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />
        </div>
    );
}
