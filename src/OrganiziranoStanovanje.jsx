export default function OrganiziranoStanovanje() {
    return (
        <div>
        <h1 className="text-2xl font-semibold">Organizirano stanovanje</h1>
        <br></br>
        <br></br>
        <a
        href="../public/docs/Pravilnik.pdf"
        download="Pravilnik.pdf"
        target="_blank"
        className="underline underline-offset-4 hover:text-sky-950"
        >
        Preuzmi Pravilnik (PDF)
        </a>
        <br></br>
        <br></br>
        <a
        href="https://narodne-novine.nn.hr/clanci/sluzbeni/full/2022_09_110_1624.html"
        target="_blank"
        rel="noreferrer"
        className="underline underline-offset-4 hover:text-sky-950"
        >
  Otvori Pravilnik (Narodne novine)
</a>

        </div>
    );
}
