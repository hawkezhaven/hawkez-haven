import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api.js";

type Field = { id: string; label: string; type?: "text" | "textarea" | "select"; options?: string[] };

type Props = {
  subject: string;
  fields?: Field[];
  /** When true, submissions are sent through the Convex/Resend server action. */
  serverSend?: boolean;
};

export default function EnquiryForm({ subject, fields = [], serverSend = false }: Props) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const sendEnquiry = useAction(api.enquiry.sendEnquiry);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get("name") as string) ?? "";
    const email = (data.get("email") as string) ?? "";
    const phone = (data.get("phone") as string) ?? "";
    const message = (data.get("message") as string) ?? "";

    if (serverSend) {
      try {
        await sendEnquiry({
          subject,
          name,
          email,
          phone: phone || undefined,
          message: message || undefined,
          extraFields: fields.map(field => ({
            label: field.label,
            value: (data.get(field.id) as string) ?? "",
          })),
        });

        setSent(true);
      } catch (err) {
        setErrorMsg(
          err instanceof Error && err.message
            ? err.message
            : "Something went wrong. Please try again or contact us directly."
        );
      } finally {
        setLoading(false);
      }
    } else {
      const extraText = fields.map(f => `${f.label}: ${data.get(f.id) ?? ""}`).join("\n");
      const body = [
        `Name: ${name}`,
        `Email: ${email}`,
        phone ? `Phone: ${phone}` : "",
        extraText,
        "",
        `Message: ${message}`,
      ].filter(Boolean).join("\n");

      window.open(
        `mailto:hawkezhaven@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
        "_blank"
      );
      setLoading(false);
      setSent(true);
    }
  };

  if (sent) {
    return (
      <div className="bg-white rounded-2xl p-10 border border-[#ddd4be]/50 text-center">
        <CheckCircle size={40} className="text-[#b8922a] mx-auto mb-4" />
        <h3 className="font-serif text-2xl text-[#1a1a18] mb-2">Thank you!</h3>
        <p className="text-sm text-[#4a4a42]">
          {serverSend
            ? "Your message has been sent to the Hawkez Haven team. We'll be in touch within 24–72 hours."
            : "Your enquiry has been opened in your email app. Please press Send to submit it to the Hawkez Haven team. We'll be in touch within 24–72 hours."}
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-xs text-[#b8922a] hover:underline cursor-pointer"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50 space-y-5">
      <p className="text-xs text-[#4a4a42] italic">
        {serverSend
          ? "Your enquiry will be sent directly to the Hawkez Haven team. Responses may take 24–72 hours."
          : "Enquiries are received by the Hawkez Haven team at hawkezhaven@gmail.com. Responses may take 24–72 hours."}
      </p>

      {errorMsg && (
        <div className="flex items-start gap-3 rounded-xl border border-[#ddd4be] bg-[#f5f0e8] px-4 py-3">
          <AlertCircle size={16} className="text-[#b8922a] mt-0.5 shrink-0" />
          <p className="text-xs text-[#4a4a42]">{errorMsg}</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-[#1a1a18] mb-1.5" htmlFor="name">Full Name *</label>
          <input
            id="name" name="name" required type="text" placeholder="Jane Smith"
            className="w-full px-4 py-2.5 rounded-xl border border-[#ddd4be] bg-[#f5f0e8] text-sm text-[#1a1a18] placeholder-[#4a4a42]/40 focus:outline-none focus:ring-2 focus:ring-[#b8922a]/30"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#1a1a18] mb-1.5" htmlFor="email">Email Address *</label>
          <input
            id="email" name="email" required type="email" placeholder="jane@example.com"
            className="w-full px-4 py-2.5 rounded-xl border border-[#ddd4be] bg-[#f5f0e8] text-sm text-[#1a1a18] placeholder-[#4a4a42]/40 focus:outline-none focus:ring-2 focus:ring-[#b8922a]/30"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-[#1a1a18] mb-1.5" htmlFor="phone">Phone Number (optional)</label>
        <input
          id="phone" name="phone" type="tel" placeholder="021 234 5678"
          className="w-full px-4 py-2.5 rounded-xl border border-[#ddd4be] bg-[#f5f0e8] text-sm text-[#1a1a18] placeholder-[#4a4a42]/40 focus:outline-none focus:ring-2 focus:ring-[#b8922a]/30"
        />
      </div>

      {fields.map(field => (
        <div key={field.id}>
          <label className="block text-xs font-medium text-[#1a1a18] mb-1.5" htmlFor={field.id}>{field.label}</label>
          {field.type === "textarea" ? (
            <textarea
              id={field.id} name={field.id} rows={3}
              className="w-full px-4 py-2.5 rounded-xl border border-[#ddd4be] bg-[#f5f0e8] text-sm text-[#1a1a18] focus:outline-none focus:ring-2 focus:ring-[#b8922a]/30 resize-none"
            />
          ) : field.type === "select" ? (
            <select
              id={field.id} name={field.id}
              className="w-full px-4 py-2.5 rounded-xl border border-[#ddd4be] bg-[#f5f0e8] text-sm text-[#1a1a18] focus:outline-none focus:ring-2 focus:ring-[#b8922a]/30 cursor-pointer"
            >
              <option value="">Select an experience…</option>
              {field.options?.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          ) : (
            <input
              id={field.id} name={field.id} type="text"
              className="w-full px-4 py-2.5 rounded-xl border border-[#ddd4be] bg-[#f5f0e8] text-sm text-[#1a1a18] focus:outline-none focus:ring-2 focus:ring-[#b8922a]/30"
            />
          )}
        </div>
      ))}

      <div>
        <label className="block text-xs font-medium text-[#1a1a18] mb-1.5" htmlFor="message">Message</label>
        <textarea
          id="message" name="message" rows={5} placeholder="Tell us a little about yourself and your enquiry..."
          className="w-full px-4 py-2.5 rounded-xl border border-[#ddd4be] bg-[#f5f0e8] text-sm text-[#1a1a18] placeholder-[#4a4a42]/40 focus:outline-none focus:ring-2 focus:ring-[#b8922a]/30 resize-none"
        />
      </div>

      {/* Honeypot field for spam protection. */}
      <input name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <button
        type="submit"
        disabled={loading}
        className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] disabled:opacity-60 transition-colors cursor-pointer"
      >
        <Send size={15} /> {loading ? "Sending…" : "Send enquiry"}
      </button>
    </form>
  );
}
