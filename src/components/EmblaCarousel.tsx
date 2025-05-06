import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';

interface EmblaCarouselProps {
    slides: string[];
    options?: any;
}

const EmblaCarousel = ({ slides, options }: EmblaCarouselProps) => {
    const [emblaRef] = useEmblaCarousel(
        {
            loop: true,
            align: 'center',
            containScroll: 'keepSnaps',
            ...options,
        },
        [Autoplay({ delay: 3000, stopOnInteraction: false })]
    );

    return (
        <section className="embla w-full max-w-4xl mx-auto overflow-hidden">
            <div className="embla__viewport" ref={emblaRef}>
                <div className="embla__container flex">
                    {slides.map((imgPath, index) => (
                        <div
                            className="embla__slide flex-[0_0_100%] flex items-center justify-center px-4"
                            key={index}
                        >
                            <img
                                src={imgPath}
                                alt={`Patrocinador ${index + 1}`}
                                className="w-full max-h-[60vh] object-contain rounded-lg shadow-md"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmblaCarousel;
