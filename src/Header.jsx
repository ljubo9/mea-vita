import { useState } from "react";
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

function ServicesDropdownDesktop() {
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
        className={[
          "invisible opacity-0 translate-y-1",
          "group-hover:visible group-hover:opacity-100 group-hover:translate-y-0",
          "absolute left-0 top-full mt-2 w-64 rounded-lg bg-sky-950 p-2 shadow-lg ring-1 ring-sky-200/20 transition",
          "before:content-[''] before:absolute before:-top-2 before:left-0 before:h-2 before:w-full",
        ].join(" ")}
        role="menu"
        aria-label="Usluge"
      >
        <Link className={baseItem} to="/usluge/smjestaj-u-domu" role="menuitem">
          Smještaj u domu
        </Link>
        <Link
          className={baseItem}
          to="/usluge/organizirano-stanovanje"
          role="menuitem"
        >
          Organizirano stanovanje
        </Link>
        <Link className={baseItem} to="/usluge/pomoc-u-kuci" role="menuitem">
          Pomoć u kući
        </Link>
      </div>
    </div>
  );
}

function MobileLink({ to, children, onClick }) {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) =>
        [
          "block rounded-md px-4 py-3 text-base font-medium transition-colors",
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
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-sky-900/50 bg-sky-950/95 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between gap-3 py-4">
          <Link to="/" className="text-lg font-semibold text-sky-50" onClick={close}>
            Dom za starije Mea Vita
          </Link>

          <a
            className="sm:hidden inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm text-sky-100/90 hover:bg-sky-900 hover:text-white"
            href="tel:+38542683467"
          >
            <PhoneIcon className="h-5 w-5 text-sky-200" aria-hidden="true" />
            042/683-467
          </a>

          <button
            type="button"
            className="sm:hidden inline-flex items-center justify-center rounded-md p-3 text-sky-50 hover:bg-sky-900 focus:outline-none focus:ring-2 focus:ring-sky-200 focus:ring-offset-2 focus:ring-offset-sky-950"
            aria-label="Otvori izbornik"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-xl leading-none">{open ? "✕" : "☰"}</span>
          </button>

          <div className="hidden sm:flex items-center gap-6">
            <a
              className="inline-flex items-center gap-2 text-base text-sky-100/90 underline underline-offset-4 hover:text-white"
              href="tel:+38542683467"
            >
              <PhoneIcon className="h-5 w-5 text-sky-200" aria-hidden="true" />
              042/683-467
            </a>

            <nav aria-label="Glavna navigacija" className="flex items-center gap-2">
              <NavItem to="/" end>
                Naslovnica
              </NavItem>
              <NavItem to="/o-nama">O nama</NavItem>
              <ServicesDropdownDesktop />
              <NavItem to="/galerija">Galerija</NavItem>
              <NavItem to="/kontakt">Kontakt</NavItem>
            </nav>
          </div>
        </div>

        {open && (
          <div className="sm:hidden border-t border-sky-900/50 pb-4 pt-3">
            <nav aria-label="Glavna navigacija (mobitel)" className="grid gap-2">
              <MobileLink to="/" onClick={close}>
                Naslovnica
              </MobileLink>
              <MobileLink to="/o-nama" onClick={close}>
                O nama
              </MobileLink>

              <details
                className={[
                  "rounded-lg ring-1 ring-inset ring-sky-200/20 bg-sky-950/40",
                  "open:bg-sky-950/60",
                  "[&_span[data-caret]]:open:rotate-180",
                ].join(" ")}
              >
                <summary
                  className="list-none cursor-pointer select-none px-4 py-3 text-base font-medium text-sky-50 hover:bg-sky-900/60 rounded-lg flex items-center justify-between"
                >
                  <span>Usluge</span>
                  <span
                    data-caret
                    className="transition-transform text-sky-200"
                    aria-hidden="true"
                  >
                    ▾
                  </span>
                </summary>

                <div className="px-2 pb-2 grid gap-1">
                  <NavLink
                    to="/usluge/smjestaj-u-domu"
                    onClick={close}
                    className="block rounded-md px-3 py-2 text-sm text-sky-100/90 hover:bg-sky-900 hover:text-white"
                  >
                    Smještaj u domu
                  </NavLink>
                  <NavLink
                    to="/usluge/organizirano-stanovanje"
                    onClick={close}
                    className="block rounded-md px-3 py-2 text-sm text-sky-100/90 hover:bg-sky-900 hover:text-white"
                  >
                    Organizirano stanovanje
                  </NavLink>
                  <NavLink
                    to="/usluge/pomoc-u-kuci"
                    onClick={close}
                    className="block rounded-md px-3 py-2 text-sm text-sky-100/90 hover:bg-sky-900 hover:text-white"
                  >
                    Pomoć u kući
                  </NavLink>
                </div>
              </details>

              <MobileLink to="/galerija" onClick={close}>
                Galerija
              </MobileLink>
              <MobileLink to="/kontakt" onClick={close}>
                Kontakt
              </MobileLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
