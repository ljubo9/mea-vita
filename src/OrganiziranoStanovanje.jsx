export default function OrganiziranoStanovanje() {
  return (
    <div className="py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Organizirano stanovanje
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Organizirano stanovanje je izvan institucijska socijalna usluga kojom se osigurava stanovanje u stambenoj jedinici uz povremenu stručnu i drugu pomoć i potporu u osiguravanju osnovnih životnih potreba te socijalnih, radnih, rekreacijskih i drugih potreba radi uspostavljanja i održavanja njihovih socijalnih uloga, izjednačavanja njihovih mogućnosti, poboljšanja kvalitete života, poticanja aktivnog življenja te socijalnog uključivanja, ovisno o potrebama korisnika.
          </p>
          <p className="mt-4 text-lg text-slate-600">
            Usluga organiziranog stanovanja za osobu starije životne dobi koja samostalno zadovoljava svoje potrebe odnosno kojoj je djelomično potrebna pomoć pri zadovoljavanju osnovnih potreba.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="lg:col-span-2 rounded-2xl bg-gradient-to-r from-emerald-50 to-sky-50 p-8 ring-1 ring-emerald-100/50">
            <h2 className="text-xl font-semibold text-slate-900 mb-4 flex items-center gap-3">
              ⏰ Svakodnevna podrška
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Socijalna usluga organiziranog stanovanja koju pruža Pružatelj usluge je podrška funkcionalno djelomično ovisnom korisniku 2,5 sata dnevno (organizirano stanovanje uz svakodnevnu kratkotrajnu podršku).
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 p-8 ring-1 ring-sky-100/50">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              🏠 Lokacija
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Dom Mea Vita vaninstitucionalnu socijalnu uslugu organiziranog stanovanja pruža u stambenoj jedinici koja se nalazi u poslovno-stambenoj zgradi na adresi <strong>Ludbreška 18, Trnovec</strong>.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-orange-50 to-rose-50 p-8 ring-1 ring-orange-100/50">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              📐 Kapacitet
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Stambena jedinica se sastoji se od dnevnog boravka s kuhinjom i blagovaonicom, dva sanitarna čvora i tri sobe za korisnike.
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-sky-950/5 p-8 ring-1 ring-sky-100/20">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-900 text-sky-50">
              🏡
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Topla i domaća atmosfera
              </h3>
              <p className="text-slate-700">
                Ova jedinica pruža korisnicima smještaj u toploj i domaćoj atmosferi te korisnici mogu prema svojim željama sa ili bez pomoći našeg stručnog osoblja kuhati razna jela i peći kolače, gledati televizor u boravku ili odmarati u svojoj sobi gledajući televizor ili čitajući knjigu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
