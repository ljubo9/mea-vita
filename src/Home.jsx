import { Link } from "react-router-dom";
import InfiniteTaggedMarquee from "./InfiniteTaggedMarquee";
import { GALLERY } from "./data/galleryData";

function coverFor(tag) {
  return GALLERY.find((x) => x.tag === tag)?.src;
}

const categories = [
  { tag: "Dom", label: "Dom", coverSrc: coverFor("Dom") },
  { tag: "Organizirano stanovanje", label: "Organizirano stanovanje", coverSrc: coverFor("Organizirano stanovanje") },
  { tag: "Pomoć u kući", label: "Pomoć u kući", coverSrc: coverFor("Pomoć u kući") },
].filter((c) => c.coverSrc);


export default function Home() {
  return (
    <section className="space-y-6">
      <img
        src="src/assets/dom iz profila.jpg"
        alt="Dom za starije Mea Vita"
        className="mx-auto block w-full max-w-6xl h-64 sm:h-80 md:h-96 rounded-xl object-cover border border-slate-200"
      />

      <p className="text-slate-700 leading-7 max-w-4xl">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>

      <p className="text-slate-700 leading-7 max-w-4xl">
        Prema potrebama korisnika, osiguravamo sljedeće socijalne usluge:
      </p>

      <ul className="space-y-2">
        <li>
          •{" "}
          <Link
            className="text-sky-900 underline underline-offset-4 hover:text-sky-950"
            to="/usluge/smjestaj-u-domu"
          >
            Smještaj u domu
          </Link>
        </li>
        <li>
          •{" "}
          <Link
            className="text-sky-900 underline underline-offset-4 hover:text-sky-950"
            to="/usluge/organizirano-stanovanje"
          >
            Organizirano stanovanje
          </Link>
        </li>
        <li>
          •{" "}
          <Link
            className="text-sky-900 underline underline-offset-4 hover:text-sky-950"
            to="/usluge/pomoc-u-kuci"
          >
            Pomoć u kući
          </Link>
        </li>
      </ul>
      <InfiniteTaggedMarquee images={GALLERY} total={12} speedSeconds={35} />
    </section>
  );
}
