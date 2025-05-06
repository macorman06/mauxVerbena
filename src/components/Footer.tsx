import { Carousel } from 'primereact/carousel';

export default function Footer() {
  const sponsors = Array.from({ length: 10 }, (_, i) => ({
    id: i + 1,
    image: `/assets/patrocinadores/patrocinador${i + 1}.svg`,
  }));

  return (
    <footer className="bg-light p-4">
      <div className="container mx-auto">
        <Carousel
          value={sponsors}
          numVisible={10}
          numScroll={1}
          className="border-none"
          showNavigators={false}
          showIndicators={false}
          itemTemplate={(sponsor) => (
            <img
              key={sponsor.id}
              src={sponsor.image}
              alt={`Patrocinador ${sponsor.id}`}
              className="h-16 object-contain mx-2"
            />
          )}
        />
      </div>
    </footer>
  );
}