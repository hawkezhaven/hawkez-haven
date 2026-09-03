import { Link } from "react-router-dom";

export default function TermsPage() {
  return (
    <div className="bg-[#f5f0e8] min-h-screen py-20 md:py-28">
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <article className="bg-white rounded-3xl border border-[#ddd4be]/60 shadow-sm p-8 md:p-12 lg:p-16 text-[#4a4a42] leading-relaxed">
          <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">Website terms</p>
          <h1 className="mt-4 font-serif text-4xl md:text-5xl text-[#1a1a18]">Terms of Use</h1>
          <p className="mt-5 text-sm text-[#6b675d]">Last updated: September 2026</p>

          <p className="mt-8">These terms apply to your use of the Hawkez Haven website and to enquiries, bookings and purchases made through or in connection with it. By using the website, you agree to use it lawfully and respectfully.</p>

          <h2 className="mt-10 font-serif text-2xl text-[#1a1a18]">Website information</h2>
          <p className="mt-3">We aim to keep information about horses, services, prices, availability and rescue work accurate and current. Horse availability, suitability, prices and programme details can change, and information on the website does not guarantee that a particular horse, service or date will be available.</p>

          <h2 className="mt-10 font-serif text-2xl text-[#1a1a18]">Enquiries and bookings</h2>
          <p className="mt-3">Submitting an enquiry is not a confirmed booking or an offer of a horse. A booking is confirmed only when Hawkez Haven has confirmed the arrangement with you and any required payment has been received. We may ask for additional information to make sure an experience, horse or activity is appropriate and safe.</p>

          <h2 className="mt-10 font-serif text-2xl text-[#1a1a18]">Horse welfare and safety</h2>
          <p className="mt-3">Hawkez Haven is a working horse property. Visitors must follow reasonable safety instructions, staff directions and horse-handling requirements. Activities may be changed, postponed or cancelled when horse welfare, weather, property conditions or safety require it.</p>
          <p className="mt-3">No horse is guaranteed to participate in a particular experience. We match horses and activities according to suitability on the day.</p>

          <h2 className="mt-10 font-serif text-2xl text-[#1a1a18]">Payments, gift cards and donations</h2>
          <p className="mt-3">Payment methods and any applicable conditions are shown at the time of booking or purchase. Third-party payment providers may have their own terms. Gift card conditions, expiry or transfer rules will be stated with the relevant gift card. Donations are voluntary contributions to support Hawkez Haven and its horses.</p>

          <h2 className="mt-10 font-serif text-2xl text-[#1a1a18]">Cancellations and changes</h2>
          <p className="mt-3">If you need to change or cancel a booking, please contact us as soon as possible. We will work with you on a reasonable alternative where possible. Hawkez Haven may also need to change or cancel a session where horse welfare or safety makes the planned activity unsuitable.</p>

          <h2 className="mt-10 font-serif text-2xl text-[#1a1a18]">Intellectual property</h2>
          <p className="mt-3">Unless otherwise stated, the Hawkez Haven name, branding, photographs, written content and other original website material belong to Hawkez Haven or are used with permission. Please do not copy, reproduce or commercially reuse this material without permission.</p>

          <h2 className="mt-10 font-serif text-2xl text-[#1a1a18]">External services and links</h2>
          <p className="mt-3">The website may link to third-party services such as payment, mapping or social media platforms. Those services operate under their own terms and privacy policies. Hawkez Haven is not responsible for the content or operation of third-party websites.</p>

          <h2 className="mt-10 font-serif text-2xl text-[#1a1a18]">Contact</h2>
          <p className="mt-3">Questions about these terms can be sent to <a className="text-[#8c6e1e] underline" href="mailto:hawkezhaven@gmail.com">hawkezhaven@gmail.com</a> or 020 4053 6441.</p>
          <p className="mt-3">Hawkez Haven is based at 117 North Street, Ashhurst, Manawatū 4810, New Zealand.</p>

          <p className="mt-10 pt-8 border-t border-[#ddd4be]/60 text-sm"><Link className="text-[#8c6e1e] underline" to="/privacy">Read our Privacy Statement</Link> · <Link className="text-[#8c6e1e] underline" to="/contact">Contact Hawkez Haven</Link></p>
        </article>
      </main>
    </div>
  );
}
