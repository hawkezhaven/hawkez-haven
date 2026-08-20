import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PayPalButton from "@/components/PayPalButton.tsx";
import PayPalOrderButton from "@/components/PayPalOrderButton.tsx";

const SHOP_SECTIONS = [
  {
    id: "feed",
    title: "Feed & Hay",
    subtitle: "The simplest gift is often the most important.",
    desc: "Hay is the heart of every horse's day. Your gift fills a belly, warms a spirit and keeps a horse ready to heal.",
    items: [
      { name: "Buy a Bale of Hay", desc: "A bale of hay to help keep our horses fed — a simple, direct contribution to their daily care.", amount: 15 },
      { name: "Help Buy a Bale of Baleage", desc: "A contribution toward purchasing baleage for our herd. Baleage costs can vary, and every contribution helps us get there.", amount: 50 },
      { name: "Feed a Horse for a Week", desc: "A week's worth of chaff, feed and hay makes a real difference, especially during rehabilitation.", amount: 90 },
      { name: "Winter Feed Appeal", desc: "Winter grass disappears fast in New Zealand. Help us keep every horse full and warm when the paddocks are bare.", amount: 150 },
    ],
  },
  {
    id: "vet",
    title: "Veterinary & Health",
    subtitle: "Health is where recovery begins.",
    desc: "From the first intake exam to ongoing dental and parasite management, veterinary care is the foundation of every second chance.",
    items: [
      { name: "Vet Visit", desc: "A routine check-up, vaccination or dental float keeps our horses healthy and comfortable.", amount: 80 },
      { name: "Emergency Vet Fund", desc: "When a horse arrives injured or falls ill overnight, this fund lets us act immediately — no delays.", amount: 200 },
      { name: "Dental Care", desc: "Proper dental work prevents weight loss, behavioural issues and long-term pain.", amount: 120 },
      { name: "Worming Treatment", desc: "Regular drenching protects horses from internal parasites that drain condition and cause colic.", amount: 30 },
      { name: "Medication Fund", desc: "From joint support to antibiotics — this fund covers ongoing prescriptions for horses with chronic needs.", amount: 60 },
    ],
  },
  {
    id: "farrier",
    title: "Hoof Care",
    subtitle: "No hoof, no horse.",
    desc: "Regular, skilled hoof care prevents lameness, corrects neglect and keeps every horse comfortable on their feet.",
    items: [
      { name: "Sponsor a Hoof Trim", desc: "Help cover the cost of a hoof trim, keeping our horses' feet tidy, balanced and comfortable.", amount: 60 },
      { name: "Sponsor a Farrier Visit", desc: "Help cover professional hoof care, keeping our horses balanced, comfortable and sound.", amount: 160 },
      { name: "Hoof Rehabilitation Fund", desc: "Helps toward specialised care for horses arriving with neglected, damaged or compromised hooves — the work that restores comfort and soundness from the ground up.", amount: 200 },
      { name: "Hoof Boots", desc: "Protective boots for horses with sensitive soles or transitioning out of shoes.", amount: 75 },
    ],
  },
  {
    id: "comfort",
    title: "Comfort & Equipment",
    subtitle: "The small things that say 'you matter'.",
    desc: "A warm rug on a frosty morning, fresh water always available — these comforts help a horse feel at home.",
    items: [
      { name: "Winter Rug (Jammas)", desc: "A warm, waterproof rug for a horse who struggles to hold condition through a cold, wet New Zealand winter.", amount: 120 },
      { name: "Buckets / Water Bladder", desc: "Fresh water, always. Helps cover buckets and water storage so every horse stays hydrated and healthy.", amount: 25 },
      { name: "Hay Nets / Feed Bins", desc: "Helps provide hay nets and feed bins to slow feeding, reduce waste and keep our horses occupied and content.", amount: 25 },
      { name: "Bug Off / Salt Block", desc: "Fly spray and salt blocks help keep our horses comfortable, healthy and free from pests throughout the year.", amount: 35 },
    ],
  },
];

export default function SupportPage() {
  return (
    <div className="bg-[#f5f0e8]">
      <section className="bg-[#1a1a18] text-[#f5f0e8] py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-[#b8922a]">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <span className="text-[0.65rem] tracking-[0.18em] uppercase font-medium">Support a Second Chance</span>
          </div>
          <h1 className="mt-6 font-serif text-5xl md:text-6xl text-[#f5f0e8] leading-tight max-w-3xl">Be part of every journey.</h1>
          <p className="mt-6 text-lg text-[#f5f0e8]/70 max-w-2xl leading-relaxed">
            Every dollar goes straight into the paddock — feed, farrier, vet, or the quiet comfort of knowing someone cares.
          </p>
        </div>
      </section>

      {SHOP_SECTIONS.map(section => (
        <section key={section.id} id={section.id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-[#ddd4be]">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-2">
              <span className="block h-px w-8 bg-[#b8922a]" />
              <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#b8922a]">{section.title}</p>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a18]">{section.subtitle}</h2>
            <p className="mt-2 text-[#4a4a42] max-w-2xl">{section.desc}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {section.items.map(item => (
              <div key={item.name} className="bg-white rounded-2xl p-6 border border-[#ddd4be]/50 flex flex-col shadow-sm">
                <h3 className="font-serif text-xl text-[#1a1a18] mb-2">{item.name}</h3>
                <p className="text-sm text-[#4a4a42] leading-relaxed flex-1">{item.desc}</p>
                <div className="mt-4">
                  <span className="font-serif text-2xl text-[#b8922a]">${item.amount}</span>
                  <PayPalOrderButton amount={item.amount} itemName={item.name} />
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="max-w-xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="block h-px w-8 bg-[#b8922a]" />
            <p className="text-[0.65rem] tracking-[0.18em] uppercase font-medium text-[#4a4a42]">Give what feels right</p>
            <span className="block h-px w-8 bg-[#b8922a]" />
          </div>
          <div className="bg-white rounded-2xl p-8 border border-[#ddd4be]/50 shadow-sm">
            <PayPalButton containerId="support-page" />
          </div>
        </div>
      </section>

      <section className="bg-[#ede5d4] py-16">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h3 className="font-serif text-2xl text-[#1a1a18] mb-3">NZ Bank Transfer</h3>
          <p className="text-sm text-[#4a4a42] mb-6">Prefer to pay directly? Use these details to transfer from any NZ bank. Please use your name or "Donation" as the reference.</p>
          <div className="bg-white rounded-2xl border border-[#ddd4be]/50 p-6 text-left space-y-4">
            {[
              { label: "Account Name", value: "HAWKEZ HAVEN; S/C" },
              { label: "Account Owner", value: "HEATHER RANKIN" },
              { label: "Account Number", value: "38-9022-0346505-06" },
              { label: "Reference", value: "Your name or \"Donation\"" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p className="text-[0.6rem] tracking-widest uppercase text-[#4a4a42]/60 mb-1">{label}</p>
                <p className="font-serif text-lg text-[#1a1a18] select-all">{value}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#4a4a42]/70">Tap any field to select and copy.</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h2 className="font-serif text-3xl text-[#1a1a18] mb-4">Become part of every horse's journey.</h2>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <Link to="/sponsorship" className="inline-flex items-center gap-2 px-7 py-3 bg-[#b8922a] text-white text-sm font-medium rounded-full hover:bg-[#8c6e1e] transition-colors cursor-pointer">
            Sponsor a Horse <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3 border border-[#1a1a18] text-[#1a1a18] text-sm font-medium rounded-full hover:bg-[#1a1a18] hover:text-[#f5f0e8] transition-colors cursor-pointer">
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}