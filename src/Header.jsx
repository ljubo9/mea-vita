import { NavLink, Link } from "react-router-dom";
import { PhoneIcon } from "@heroicons/react/24/solid";

function NavItem({ to, end = false, children, onClick }) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "inline-flex items-center justify-center",
          "h-11 px-5",
          "rounded-md",
          "text-base font-medium",
          "transition-colors",

          isActive
            ? "bg-sky-800 text-white" 
            : "text-sky-100/90 hover:bg-sky-900 hover:text-white",

          "focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-sky-950",
        ].join(" ")
      }
    >
      {children}
    </NavLink>
  );
}

export default function Header() {
  return (
    <header className="border-b border-sky-900/50 bg-sky-950">
      <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/" className="text-lg font-semibold text-sky-50">
          Dom za starije Mea Vita
        </Link>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <a
            className="inline-flex items-center gap-2 text-base text-sky-100/90 underline underline-offset-4 hover:text-white" href="tel:+38542683467">
            <PhoneIcon className="h-5 w-5 text-sky-200" aria-hidden="true" />
             042/683-467
          </a>


          <nav aria-label="Glavna navigacija" className="flex flex-wrap gap-2">
            <NavItem to="/" end>
              Naslovnica
            </NavItem>
            <NavItem to="/o-nama">O nama</NavItem>
            <NavItem to="/galerija">Galerija</NavItem>
            <NavItem to="/kontakt">Kontakt</NavItem>
          </nav>
        </div>
      </div>
    </header>
  );
}
