import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white"}`;

  return (
    <nav className="bg-gray-800 mb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          <Link className="text-white font-semibold" to="/">NGINX Class Demo</Link>
          <div className="flex gap-2">
            <NavLink to="/" className={linkClass} end>Inicio</NavLink>
            <NavLink to="/api-demo" className={linkClass}>API Demo</NavLink>
            <NavLink to="/about" className={linkClass}>Acerca de</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
