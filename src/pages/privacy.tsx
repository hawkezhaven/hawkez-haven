import { Link } from "react-router-dom";

export default function PrivacyPage() {
  return (
    <div className="bg-[#f5f0e8] min-h-screen py-20 md:py-28">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-3xl border border-[#ddd4be]/60 shadow-sm p-8 md:p-12 lg:p-16 text-[#4a4a42] leading-relaxed">
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">Privacy &amp; trust</p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl text-[#1a1a18]">Privacy Statement</h1>
          <p className="mt-5 text-sm text-[#6b675d]">Last updated: September 2026</p>

          <p className="mt-8">Hawkez Haven – Second Chances respects your privacy. This statement explains what personal information we collect, why we collect it, how we use it, and how you can contact us about your information.</p>

          <h2 className="mt-10 font-serif text-2xl text-[#1a1a18]">What information we collect</h2>
          <p className="mt-3">When you contact us, enquire about a horse, book an education experience, volunteer, foster, adopt, sponsor, or otherwise communicate with us, we may collect information such as your name, email address, phone number, location or other details you choose to provide about yourself, your experience and your enquiry.</p>
          <p className="mt-3">We may also receive transaction information when you use a payment provider or purchase a gift card or other service. Payment details are handled by the relevant payment provider rather than being stored by Hawkez Haven as full card details.</p>

          <h2 className="mt-10 font-serif text-2xl text-[#1a1a18]">Why we use your information</h2>
          <ul className="mt-3 list-disc pl-6 space-y-2">
            <li>To respond to enquiries and communicate with you.</li>
            <li>To assess and manage adoption, foster, volunteer, sponsorship and education enquiries.</li>
            <li>To arrange bookings, payments and gift cards where applicable.</li>
            <li>To provide services and keep appropriate records.</li>
            <li>To protect our website, horses, visitors and systems from misuse.</li>
            <li>To meet legal, accounting or other legitimate obligations.</li>
          </ul>

          <h2 className="mt-10 font-serif text-2xl text-[#1a1a18]">Who may process your information</h2>
          <p className="mt-3">We use service providers to operate our website and communications, including website hosting, our enquiry/backend services, email delivery, mapping and payment services. Those providers may process information on our behalf to provide their services. We do not sell your personal information.</p>

          <h2 className="mt-10 font-serif text-2xl text-[#1a1a18]">Storage, security and retention</h2>
          <p className="mt-3">We take reasonable steps to protect personal information from loss, misuse, unauthorised access, disclosure or alteration. Information is retained only for as long as we reasonably need it for the purpose it was collected, ongoing relationships, legitimate business records or legal obligations.</p>

          <h2 className="mt-10 font-serif text-2xl text-[#1a1a18]">Your privacy rights</h2>
          <p className="mt-3">Under New Zealand privacy law, you can ask us for access to personal information we hold about you and ask us to correct information that is inaccurate or incomplete. You can also ask questions about how your information is collected or used.</p>

          <h2 className="mt-10 font-serif text-2xl text-[#1a1a18]">Contact us</h2>
          <p className="mt-3">For privacy questions or an access/correction request, contact Hawkez Haven at <a className="text-[#8c6e1e] underline" href="mailto:hawkezhaven@gmail.com">hawkezhaven@gmail.com</a> or 020 4053 6441.</p>
          <p className="mt-3">Hawkez Haven is based at 117 North Street, Ashhurst, Manawatū 4810, New Zealand.</p>

          <p className="mt-10 pt-8 border-t border-[#ddd4be]/60 text-sm"><Link className="text-[#8c6e1e] underline" to="/terms">Read our Terms of Use</Link> · <Link className="text-[#8c6e1e] underline" to="/contact">Contact Hawkez Haven</Link></p>
        </article>
      </main>
    </div>
  );
}
