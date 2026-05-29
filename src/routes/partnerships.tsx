import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import aspireSeedFund from "@/assets/blog/aspire-seed-fund.jpg";

export const Route = createFileRoute("/partnerships")({
  component: PartnershipsPage,
  head: () => ({
    meta: [
      { title: "Partnerships — Lodges, NGOs, Government, Investors | Duras AI" },
      { name: "description", content: "Partner with Duras AI: lodge VR licensing, conservation collaborations, academic research and impact investment." },
    ],
  }),
});

const tiers = [
  {
    tag: "For conservation partners",
    color: "bg-acacia",
    title: "NGOs, DWNP & rangers",
    bullets: ["Data sharing & field access", "Joint pilots in priority corridors", "Predictive analytics dashboards"],
  },
  {
    tag: "For tourism partners",
    color: "bg-sky-brand",
    title: "Lodges, BTO, HATAB",
    bullets: ["VR licensing & co-branding", "Mobile-ready guest experiences", "Annual license from P500 – P2,000"],
  },
  {
    tag: "For academic partners",
    color: "bg-savanna",
    title: "BIUST, UB & researchers",
    bullets: ["Research collaboration", "Student internships", "Open dataset contributions"],
  },
  {
    tag: "For investors & donors",
    color: "bg-elephant",
    title: "Impact capital",
    bullets: ["Blended-finance opportunities", "Clear impact metrics", "Scaleable, revenue-backed model"],
  },
];

function PartnershipsPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="bg-elephant text-white">
        <div className="max-w-7xl mx-auto px-5 py-20 md:py-28">
          <span className="font-mono text-xs uppercase tracking-widest text-savanna">Partnerships</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">Coexistence is a team sport.</h1>
          <p className="mt-5 max-w-2xl text-white/80 text-lg">
            Whether you steward land, host travellers, fund impact or do research — there's a way to build with us.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20 grid md:grid-cols-2 gap-5">
        {tiers.map((t) => (
          <div key={t.title} className="rounded-3xl bg-white border border-black/5 p-7 shadow-sm hover:shadow-lg transition">
            <div className={`inline-flex items-center text-white text-xs font-mono uppercase tracking-widest ${t.color} rounded-full px-3 py-1`}>{t.tag}</div>
            <h3 className="mt-4 text-2xl font-bold text-elephant">{t.title}</h3>
            <ul className="mt-4 space-y-2 text-sm text-elephant/75">
              {t.bullets.map((b) => (
                <li key={b} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-savanna" />{b}</li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-5 py-16">
          <h2 className="text-xl font-display font-bold text-elephant">Trusted by partners across Botswana</h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Orange Botswana", "Aspire Institute", "BIUST", "DWNP", "HATAB"].map((p) => (
              <div key={p} className="h-20 rounded-xl border border-dashed border-black/15 flex items-center justify-center text-elephant/55 text-sm font-mono">{p}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center rounded-3xl bg-elephant text-white overflow-hidden">
          <div className="aspect-[4/3] md:aspect-auto md:h-full">
            <img src={aspireSeedFund} alt="Aspire Leaders Seed Fund winner" className="w-full h-full object-cover" />
          </div>
          <div className="p-8 md:p-12">
            <span className="font-mono text-xs uppercase tracking-widest text-savanna">Partner spotlight</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Backed by the Aspire Institute</h2>
            <p className="mt-4 text-white/80">
              Duras AI was selected as a 2025 Aspire Leaders Seed Fund Round 2 winner — one of a handful of grassroots ventures
              chosen from over 80 global applicants to receive catalytic funding and mentorship from Harvard-affiliated leaders.
            </p>
            <a
              href="https://www.aspireleaders.org/2026/04/powering-the-future-celebrating-our-2025-seed-fund-round-2-winners/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-savanna text-charcoal font-semibold px-5 py-2.5 hover:bg-savanna/90 transition"
            >
              Read the announcement →
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-5 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-elephant tracking-tight">Partner enquiry</h2>
        <p className="mt-3 text-elephant/75">Tell us about your organisation and we'll get back within 3 working days.</p>
        {submitted ? (
          <div className="mt-8 rounded-2xl bg-acacia/10 border border-acacia/20 p-6 text-acacia font-semibold">
            Thanks — we've received your enquiry. We'll be in touch soon.
          </div>
        ) : (
          <form
            className="mt-8 grid gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            <div className="grid md:grid-cols-2 gap-4">
              <input required maxLength={100} placeholder="Your name" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" />
              <input required type="email" maxLength={200} placeholder="Email address" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" />
            </div>
            <input maxLength={150} placeholder="Organisation" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" />
            <select className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" defaultValue="">
              <option value="" disabled>Partnership type…</option>
              <option>Conservation</option>
              <option>Tourism / Lodge</option>
              <option>Academic / Research</option>
              <option>Investor / Donor</option>
            </select>
            <textarea required maxLength={1000} rows={5} placeholder="Tell us about your interest" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" />
            <button className="inline-flex justify-center rounded-full bg-savanna text-charcoal font-semibold px-6 py-3 hover:bg-savanna/90 transition">Send enquiry</button>
          </form>
        )}
        <p className="mt-6 text-sm text-elephant/60">Prefer email? <Link to="/contact" className="text-acacia font-semibold">Contact us directly →</Link></p>
      </section>
    </>
  );
}