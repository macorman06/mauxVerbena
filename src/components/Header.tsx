import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-accent shadow-md p-4">
      <div className="container mx-auto flex items-center justify-between">
        <img
          src="/assets/logos/logo_left.png"
          alt="Logo izquierdo"
          className="h-16"
        />
        <Link to="/" className="text-4xl font-bold text-white">
          VERBENA MAUX
        </Link>
        <img
          src="/assets/logos/logo_right.png"
          alt="Logo derecho"
          className="h-16"
        />
      </div>
    </header>
  );
}