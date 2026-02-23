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

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <label htmlFor="subject">Naslov</label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="user_name">Ime i prezime</label>
        <input
          id="user_name"
          name="user_name"
          type="text"
          required
          autoComplete="name"
        />
      </div>

      <div>
        <label htmlFor="user_email">E-mail</label>
        <input
          id="user_email"
          name="user_email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <div>
        <label htmlFor="message">Poruka</label>
        <textarea id="message" name="message" rows={6} required />
      </div>

      <button type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Šaljem..." : "Pošalji"}
      </button>

      {status === "success" && (
        <p role="status">Poruka je poslana. Hvala!</p>
      )}

      {status === "error" && (
        <p role="alert">Greška: {errorMessage}</p>
      )}
    </form>
  );
}
