export default function PomocUKuci() {
  return (
    <div className="py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Pomoć u kući
          </h1>
          <p className="mt-4 text-lg text-slate-600">
            Usluga pomoći u kući pruža se starijoj osobi kojoj je potrebna pomoć druge osobe.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl bg-gradient-to-r from-sky-50 to-indigo-50 p-8 ring-1 ring-sky-100/50">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              🥗 Organiziranje prehrane
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Dostava gotovih obroka u kuću prilagođenih prehrambenim potrebama starije osobe.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-emerald-50 to-sky-50 p-8 ring-1 ring-emerald-100/50">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              🧹 Kućni poslovi
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Dostava živežnih namirnica, pranje posuđa, pospremanje stana, organiziranje pranja i 
              glačanja rublja, nabava lijekova i drugih potrepština.
            </p>
          </div>

          <div className="lg:col-span-2 rounded-2xl bg-gradient-to-r from-rose-50 to-orange-50 p-8 ring-1 ring-rose-100/50">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              🛁 Osobna higijena
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Pomoć u oblačenju i svlačenju, kupanju i obavljanju drugih higijenskih potreba.
            </p>
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-purple-50 to-sky-50 p-8 ring-1 ring-purple-100/50">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              🚶‍♀️ Svakodnevne potrebe
            </h2>
            <p className="text-slate-700 leading-relaxed">
              Pratnja pri nužnim izlascima iz kuće (liječnički pregled i dr.).
            </p>
          </div>
        </div>

        <div className="mt-12 rounded-2xl bg-sky-950/5 p-8 ring-1 ring-sky-100/20">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-900 text-sky-50">
              📍
            </div>
            <div>
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                Područje pokrivenosti
              </h3>
              <p className="text-slate-700">
                Dom Mea Vita pruža usluge pomoći u kući za <strong>10 starijih osoba</strong> na području općine Trnovec Bartolovečki i području grada Varaždina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
