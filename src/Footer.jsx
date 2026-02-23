import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-sky-50">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 md:items-start">
          <section aria-label="Kontakt">
            <h2 className="text-lg font-semibold">Kontakt</h2>
            <div className="mt-3 h-px w-10 bg-sky-200/40" />

            <div className="mt-4 space-y-2 text-sm leading-6 text-sky-100/90">
              <p className="font-medium text-sky-50">MEA VITA j.d.o.o</p>
              <p>Adresa: Ulica Nikole Tesle 15, 42202 Trnovec</p>
              <p>
                Telefon:{" "}
                <a
                  className="underline underline-offset-4 hover:text-white"
                  href="tel:+38542683467"
                >
                  042/683-467
                </a>
              </p>
              <p>
                Email:{" "}
                <a
                  className="underline underline-offset-4 hover:text-white"
                  href="mailto:dom.meavita@gmail.com"
                >
                  dom.meavita@gmail.com
                </a>
              </p>
            </div>
          </section>

          <section aria-label="Društvene mreže" className="md:flex md:justify-center">
            <div>
              <h2 className="text-lg font-semibold">Društvene mreže</h2>
              <div className="mt-3 h-px w-10 bg-sky-200/40" />

              <div className="mt-4">
                <a
                  className="inline-flex items-center gap-2 rounded-md bg-sky-900/40 px-4 py-3 text-sm text-sky-50 ring-1 ring-inset ring-sky-200/20 hover:bg-sky-900/60"
                  href="https://facebook.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Pratite nas na Facebooku
                </a>
              </div>
            </div>
          </section>

          <section aria-label="Upit" className="md:flex md:justify-end">
            <div className="md:max-w-xs">
              <h2 className="text-lg font-semibold">Trebate neku uslugu?</h2>
              <div className="mt-3 h-px w-10 bg-sky-200/40" />

              <p className="mt-4 text-sm leading-6 text-sky-100/90">
                Javite nam se za bilo kakva pitanja u vezi doma, smještaja u domu ili
                ostalih usluga koje nudimo.
              </p>

              <div className="mt-5">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center justify-center rounded-md bg-amber-100 px-5 py-3 text-sm font-semibold text-sky-950 hover:bg-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-sky-950"
                >
                  Pošaljite poruku
                </Link>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 border-t border-sky-200/20 pt-6 text-xs text-sky-100/70">
          <p>© {new Date().getFullYear()} Dom za starije Mea Vita.</p>
        </div>
      </div>
    </footer>
  );
}
