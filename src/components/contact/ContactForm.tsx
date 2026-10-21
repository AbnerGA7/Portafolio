import { useState, type FormEvent } from "react";

interface Props {
  translations: Record<string, string>;
}

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-fg placeholder:text-muted/70 transition-colors focus:border-accent focus:outline-none";

const ContactForm = ({ translations: tr }: Props) => {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("loading");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/abner.gonzales.work@gmail.com",
        {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" },
        }
      );
      if (!res.ok) throw new Error("Failed to send message");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center gap-4 py-16 text-center" role="status">
        <span className="grid size-16 place-items-center rounded-full bg-accent text-accent-ink">
          <svg viewBox="0 0 24 24" className="size-7" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m5 12 5 5 9-10" />
          </svg>
        </span>
        <p className="font-display text-2xl font-semibold">{tr["contact.form.success"]}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-sm text-muted underline underline-offset-4 hover:text-fg"
        >
          {tr["contact.form.again"]}
        </button>
      </div>
    );
  }

  const loading = status === "loading";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input type="hidden" name="_subject" value={tr["contact.form.subject"]} />
      <input type="hidden" name="_template" value="table" />
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">{tr["contact.form.name.label"]}</span>
          <input
            name="name"
            required
            autoComplete="name"
            placeholder={tr["contact.form.name.placeholder"]}
            className={inputClass}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm font-medium">{tr["contact.form.email.label"]}</span>
          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder={tr["contact.form.email.placeholder"]}
            className={inputClass}
          />
        </label>
      </div>
      <label className="flex flex-col gap-2">
        <span className="text-sm font-medium">{tr["contact.form.message.label"]}</span>
        <textarea
          name="message"
          required
          rows={6}
          placeholder={tr["contact.form.message.placeholder"]}
          className={`${inputClass} resize-y`}
        />
      </label>

      {status === "error" && (
        <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600 dark:text-red-300">
          {tr["contact.form.error"]}
        </p>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <p className="text-xs text-muted">{tr["contact.form.hint"]}</p>
        <button
          type="submit"
          disabled={loading}
          className="btn btn-primary disabled:cursor-wait disabled:opacity-70"
        >
          {loading && (
            <span className="size-4 animate-spin rounded-full border-2 border-current border-t-transparent" aria-hidden="true" />
          )}
          {loading ? tr["contact.form.sending"] : tr["contact.form.submit"]}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
