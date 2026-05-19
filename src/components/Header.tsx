import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Bingo', path: '/bingo' },
  { label: 'Patrocinadores', path: '/patrocinadores' },
];

export default function Header() {
  const location = useLocation();
  return (
    <header className="bg-white border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <img src="/mauxVerbena/assets/logos/juveliber.png" alt="Juveliber" className="h-10 w-auto object-contain" />
          <div className="flex flex-col items-center gap-1">
            <Link to="/" className="text-xl font-black text-dark tracking-tight hover:text-accent transition-colors">
              VERBENA MAUX
            </Link>
          </div>
          <img src="/mauxVerbena/assets/logos/salesianos_parla.png" alt="Salesianos Parla" className="h-10 w-auto object-contain" />
        </div>
      </div>
    </header>
  );
}