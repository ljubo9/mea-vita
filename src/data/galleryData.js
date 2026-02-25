const dom = import.meta.glob("../assets/dom/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  as: "url",
});

const org = import.meta.glob("../assets/organizirano-stanovanje/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  as: "url",
});

const pomoc = import.meta.glob("../assets/pomoc-u-kuci/**/*.{jpg,jpeg,png,webp}", {
  eager: true,
  as: "url",
});

function titleFromFilename(path) {
  const file = path.split("/").pop() || "";
  return file.replace(/\.(jpg|jpeg|png|webp)$/i, "").replace(/[-_]/g, " ");
}

function toItems(modules, tag) {
  return Object.entries(modules).map(([path, url]) => ({
    src: url,
    tag,          
    title: titleFromFilename(path),
    path,
  }));
}

export const TAGS = ["Sve slike", "Dom", "Organizirano stanovanje", "Pomoć u kući"];

export const GALLERY = [
  ...toItems(dom, "Dom"),
  ...toItems(org, "Organizirano stanovanje"),
  ...toItems(pomoc, "Pomoć u kući"),
].sort((a, b) => a.path.localeCompare(b.path));
