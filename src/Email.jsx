import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Email() {
  const formRef = useRef(null);

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY }
      );

      setStatus("success");
      formRef.current?.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err?.text || err?.message || "Slanje nije uspjelo. Pokušajte ponovno."
      );
    }
  };

  const inputBase =
    "mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2 text-base text-slate-900 placeholder:text-slate-400 shadow-sm " +
    "focus:outline-none focus:ring-2 focus:ring-sky-300 focus:border-sky-300";
  const labelBase = "block text-sm font-medium text-slate-900";

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="space-y-4"
    >
      <div>
        <label className={labelBase} htmlFor="subject">
          Naslov
        </label>
        <select
          className={inputBase}
          id="subject"
          name="subject"
          type="text"
          required
          defaultValue="">
            <option value="" disabled>
                Odaberite razlog upita…
            </option>
            <option value="Smještaj u domu">Upit o smještaju</option>
            <option value="Organizirano stanovanje">Upit o organiziranom stanovanju</option>
            <option value="Pomoć u kući">Upit o pomoći u kući</option>
        </select>
      </div>

      <div>
        <label className={labelBase} htmlFor="user_name">
          Ime i prezime
        </label>
        <input
          className={inputBase}
          id="user_name"
          name="user_name"
          type="text"
          required
          autoComplete="name"
          placeholder="Vaše ime i prezime"
        />
      </div>

      <div>
        <label className={labelBase} htmlFor="user_email">
          E-mail
        </label>
        <input
          className={inputBase}
          id="user_email"
          name="user_email"
          type="email"
          required
          autoComplete="email"
          placeholder="Vaša e-mail adresa"
        />
      </div>

      <div>
        <label className={labelBase} htmlFor="message">
          Poruka
        </label>
        <textarea
          className={inputBase + " min-h-32 resize-y"}
          id="message"
          name="message"
          rows={6}
          required
          placeholder="Napišite ukratko što Vas zanima..."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className={
          "inline-flex w-full items-center justify-center rounded-md px-5 py-3 text-sm font-semibold " +
          "bg-amber-100 text-sky-950 shadow-sm hover:bg-amber-200 " +
          "focus:outline-none focus:ring-2 focus:ring-amber-200 focus:ring-offset-2 focus:ring-offset-white " +
          "disabled:cursor-not-allowed disabled:opacity-60"
        }
      >
        {status === "sending" ? "Šaljem..." : "Pošalji"}
      </button>

      {status === "success" && (
        <p
          role="status"
          className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
        >
          Poruka je poslana. Hvala!
        </p>
      )}

      {status === "error" && (
        <p
          role="alert"
          className="rounded-md border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900"
        >
          Greška: {errorMessage}
        </p>
      )}
    </form>
  );
}
