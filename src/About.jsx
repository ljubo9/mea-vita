import InfiniteTaggedMarquee from "./InfiniteTaggedMarquee";
import { GALLERY } from "./data/galleryData";

export default function About() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
        O nama
      </h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-start">
        <div className="overflow-hidden rounded-xl border border-slate-200 bg-white p-6">
          <img
            src="src/assets/logo.jpg"
            alt="Dom za starije Mea Vita"
            className="w-full h-72 sm:h-96 object-contain"
          />
        </div>

        <div className="space-y-4 text-slate-700 leading-7">
          <p>Naš dom sa iskusnim, educiranim i nadasve empatičnim djelatnicima ovom se djelatnošću bavi još od 2004. godine kad je osnovan kao Obiteljski dom sa dvadeset korisnika. </p>
          <p>Danas dom Mea Vita pruža socijalne usluge: trajnog smještaja za 33 korisnika, organiziranog stanovanje za 8 korisnika i pomoć i njega u kući za 10 korisnika.</p> 
          <p><b>MISIJA</b> doma je stalna i sustavna skrb o starijim i nemoćnim osobama pružajući im toplinu i sigurnost kako bi dostojanstveno proživjeli svoju starost. Naglasak se stavlja na individualni pristup uz poštivanje i uvažavanje korisnika te sveobuhvatnu podrška u zadovoljavanju njegovih potreba. </p>
          <p><b>VIZIJA</b> doma je stalno podizanje kvalitete usluge korisnika s ciljem da novim oblicima i metodama doprinesimo njihovom sigurnom i humanom zbrinjavanju.</p>
        </div>
      </div>
      <InfiniteTaggedMarquee images={GALLERY} total={12} speedSeconds={35} />
    </section>
  );
}
