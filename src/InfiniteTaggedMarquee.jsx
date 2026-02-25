import { useMemo } from "react";
import { useNavigate } from "react-router-dom";

function pickOne(arr) {
  if (!arr.length) return null;
  return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function InfiniteTaggedMarquee({
  title = "Galerija slika",
  images,
  tags = ["Dom", "Organizirano stanovanje", "Pomoć u kući"],
  total = 12,
  speedSeconds = 35,
}) {
  const navigate = useNavigate();

  const tiles = useMemo(() => {
    const byTag = new Map(tags.map((t) => [t, images.filter((x) => x.tag === t)]));
    const guaranteed = tags.map((t) => pickOne(byTag.get(t) || [])).filter(Boolean);
    const rest = shuffle(images).slice(0, Math.max(0, total - guaranteed.length));
    return shuffle([...guaranteed, ...rest]);
  }, [images, tags, total]);

  const loop = useMemo(() => [...tiles, ...tiles], [tiles]);

  const go = (tag) => {
    navigate(`/galerija?tag=${encodeURIComponent(tag)}`);
  };

  return (
    <section className="py-10">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-center gap-6">
          <div className="h-px w-20 bg-slate-200" />
          <h2 className="text-xl font-semibold text-slate-700">{title}</h2>
          <div className="h-px w-20 bg-slate-200" />
        </div>

        <div className="mt-8 overflow-hidden">
          <div
            className="flex w-max gap-5 animate-[marquee_var(--marquee-duration)_linear_infinite] hover:[animation-play-state:paused]"
            style={{ ["--marquee-duration"]: `${speedSeconds}s` }}
          >
            {loop.map((img, idx) => (
              <button
                key={`${img.src}-${idx}`}
                type="button"
                onClick={() => go(img.tag)}
                className="shrink-0 w-[240px] sm:w-[280px] text-left"
              >
                <div className="relative overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-black/5">
                  <img
                    src={img.src}
                    alt={img.title ?? img.tag}
                    loading="lazy"
                    className="h-44 w-full object-cover transition duration-300 hover:scale-[1.03] sm:h-52"
                  />
                  <div className="absolute left-3 top-3 rounded-full bg-sky-950/80 px-3 py-1 text-xs font-semibold text-sky-50 ring-1 ring-white/10">
                    {img.tag}
                  </div>
                </div>
                <div className="mt-3 text-center text-base font-semibold text-slate-800">
                  {img.tag}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
