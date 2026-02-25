import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { GALLERY } from "./data/galleryData";

const TAGS = ["Sve slike", "Dom", "Organizirano stanovanje", "Pomoć u kući"];

export default function GalleryPage() {
  const [params, setParams] = useSearchParams();
  const tagParam = params.get("tag"); 

  const active = tagParam ?? "Sve slike";

  const filtered = useMemo(() => {
    if (!tagParam) return GALLERY;
    return GALLERY.filter((img) => img.tag === tagParam);
  }, [tagParam]);

  const [index, setIndex] = useState(-1);
  const slides = filtered.map((img) => ({ src: img.src, alt: img.title ?? img.tag }));

  const setActive = (tag) => {
    if (tag === "Sve slike") setParams({}, { replace: true });
    else setParams({ tag }, { replace: true });
  };

  return (
    <main className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-4xl font-semibold text-slate-900">Galerija</h1>

      <div className="mt-6 flex flex-wrap gap-2">
        {TAGS.map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setActive(t)}
            className={[
              "rounded-full px-4 py-2 text-sm font-medium transition",
              t === active
                ? "bg-sky-800 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200",
            ].join(" ")}
          >
            {t}
          </button>
        ))}
      </div>

      <section className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {filtered.map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setIndex(i)}
            className="group relative overflow-hidden rounded-xl bg-slate-100 ring-1 ring-black/5"
            aria-label={`Otvori sliku: ${img.title ?? img.tag}`}
          >
            <img
              src={img.src}
              alt={img.title ?? img.tag}
              loading="lazy"
              className="h-44 w-full object-cover transition duration-300 group-hover:scale-[1.03] sm:h-52"
            />
            <div className="absolute left-3 top-3 rounded-full bg-sky-950/80 px-3 py-1 text-xs font-semibold text-sky-50 ring-1 ring-white/10">
              {img.tag}
            </div>
          </button>
        ))}
      </section>

      <Lightbox open={index >= 0} close={() => setIndex(-1)} index={index} slides={slides} />
    </main>
  );
}
