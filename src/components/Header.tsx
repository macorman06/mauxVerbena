import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-light shadow-md p-4 pl-14 pr-14">
      <div className="container mx-auto flex items-center justify-between">
        <img
          src="/assets/logos/juveliber.png"
          alt="Logo izquierdo"
          className="h-12"
        />
        <Link to="/" className="text-4xl font-bold text-dark">
          VERBENA MAUX
        </Link>
        <img
          src="/assets/logos/salesianos_parla.png"
          alt="Logo derecho"
          className="h-12"
        />
      </div>
    </header>
  );
}