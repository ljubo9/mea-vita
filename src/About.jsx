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
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </section>
  );
}
