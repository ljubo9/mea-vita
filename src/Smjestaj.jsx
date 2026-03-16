export default function Smjestaj() {
  return (
    <div className="py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Smještaj u domu
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Smještaj je socijalna usluga kojom se korisniku pruža intenzivna skrb i zadovoljavanje osnovnih životnih potreba kada to nije moguće osigurati u obitelji i pružanjem drugih socijalnih usluga, a smještajem se osigurava stanovanje i organizirane aktivnosti tijekom dana uz stalnu stručnu i drugu pomoć i potporu u osiguravanju osnovnih i dodatnih životnih potreba koje ne mogu biti zadovoljene u obitelji.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 p-8 ring-1 ring-sky-100/50">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              🏠 Lokacija
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Smještaj za starije osobe u domu Mea Vita je idealno mjesto za osobe starije životne dobi, koje žele svoj život provesti u miru i zadovoljstvu. Nalazimo se u mirnoj ulici na adresi <strong>Nikole Tesle 15, Trnovec</strong>
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-green-50 p-8 ring-1 ring-emerald-100/50">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              🏛️ Moderni standardi
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Dom je moderno uređen i opremljen u skladu sa svim standardima socijalne skrbi, kako bi zadovoljio sve potrebe naših korisnika. Obratite nam se sa povjerenjem, čeka Vas tim stručnjaka koji će Vam pružiti kvalitetnu i stručnu uslugu.
            </p>
          </div>

          <div className="lg:col-span-2 rounded-2xl bg-gradient-to-r from-rose-50 to-orange-50 p-8 ring-1 ring-rose-100/50">
            <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-3">
              👥 Stručni tim
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Stalna stručna i druga pomoć u osiguravanju osnovnih i dodatnih životnih potreba, 
              organizirane aktivnosti tijekom dana.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-sky-950/5 p-8 ring-1 ring-sky-100/20 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-sky-900 text-sky-50 text-2xl">
              💙
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Obratite nam se s povjerenjem
              </h3>
              <p className="text-lg text-slate-700 max-w-2xl mx-auto">
                Čeka Vas tim stručnjaka koji će Vam pružiti kvalitetnu i stručnu uslugu u miru i zadovoljstvu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
