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

function ServicesDropdown() {
  const baseItem =
    "block w-full rounded-md px-4 py-2 text-sm text-sky-50/90 hover:bg-sky-900 hover:text-white " +
    "focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-sky-950";

  return (
    <div className="relative group">
      <button
        type="button"
        className={[
          "inline-flex items-center justify-center",
          "h-11 px-5 rounded-md text-base font-medium transition-colors",
          "text-sky-100/90 hover:bg-sky-900 hover:text-white",
          "focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-sky-950",
        ].join(" ")}
        aria-haspopup="menu"
      >
        Usluge <span className="ml-2 text-xs">▾</span>
      </button>

      <div
        className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0
                   group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0
                   absolute left-0 top-full mt-2 w-64 rounded-lg bg-sky-950 p-2 shadow-lg ring-1 ring-sky-200/20 transition"
        role="menu"
        aria-label="Usluge"
      >
        <Link className={baseItem} to="/usluge/smjestaj-u-domu" role="menuitem">
          Smještaj u domu
        </Link>
        <Link className={baseItem} to="/usluge/organizirano-stanovanje" role="menuitem">
          Organizirano stanovanje
        </Link>
        <Link className={baseItem} to="/usluge/pomoc-u-kuci" role="menuitem">
          Pomoć u kući
        </Link>
      </div>
    </div>
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
            <ServicesDropdown />
            <NavItem to="/galerija">Galerija</NavItem>
            <NavItem to="/kontakt">Kontakt</NavItem>
          </nav>
        </div>
      </div>
    </header>
  );
}
