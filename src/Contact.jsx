import Email from "./Email";

export default function Contact() {
  return (
    <div className="space-y-8">
       <header>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Slobodno nam pošaljite upit ili nas nazovite.
        </h1>
      </header>

       <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
           <div className="bg-sky-950 text-sky-50">
            <div className="p-6 sm:p-8">
              <h2 className="text-xl font-semibold">Karta lokacije</h2>
              <div className="mt-3 h-px w-12 bg-sky-200/30" />

              <div className="mt-5 space-y-2 text-sm text-sky-100/90">
                <p className="text-base font-semibold text-sky-50">
                  Dom za starije Mea Vita
                </p>
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
            </div>

            <div className="px-6 pb-6 sm:px-8 sm:pb-8">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-lg ring-1 ring-sky-200/20">
                <iframe
                  title="Karta - Dom za starije Mea Vita"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.824142541673!2d16.39098267609636!3d46.29346777109963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768aa48c8ec4c89%3A0xa5d59e759963a69a!2sDom%20Mea%20Vita!5e0!3m2!1shr!2shr!4v1771960321264!5m2!1shr!2shr"
                  className="h-full w-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-3 text-xs text-sky-100/70">
                https://share.google/XiUEiwAihuGSrS6SD
              </p>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-slate-900">
              Pošaljite nam poruku
            </h2>
            <div className="mt-3 h-px w-12 bg-slate-200" />

            <div className="mt-6">
              <Email />
            </div>

            <p className="mt-4 text-xs text-slate-500">
              Odgovaramo u najkraćem mogućem roku.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
