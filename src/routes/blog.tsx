import { createFileRoute } from "@tanstack/react-router";
import orangePitch from "@/assets/blog/orange-pitch.jpg";
import orangeDemo from "@/assets/blog/orange-demo.jpg";
import oscStage from "@/assets/blog/osc-winner-stage.jpg";
import oscBanner from "@/assets/blog/osc-winner-banner.jpg";
import expoBooth from "@/assets/blog/expo-booth.jpg";
import aspireSeedFund from "@/assets/blog/aspire-seed-fund.jpg";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog & News | Duras AI" },
      { name: "description", content: "Field updates, partnerships, and conservation technology insights from Duras AI." },
    ],
  }),
});

const posts = [
  {
    t: "Featured by Orange: Conservation spotlight",
    d: "Orange highlights Duras AI as a flagship conservation solution — AI-powered drones reducing human-elephant conflict, supporting eco-tourism, and protecting biodiversity in Botswana.",
    c: "Feature",
    date: "May 2026",
    img: orangePitch,
  },
  {
    t: "Live demo at Orange Money showcase",
    d: "Our team walked Orange leadership through the Duras AI drone prototype and detection workflow during the Orange Money innovation showcase.",
    c: "Event",
    date: "May 2026",
    img: orangeDemo,
  },
  {
    t: "Duras AI wins Orange Summer Challenge 2025",
    d: "From 180 applicants to first place — P50,000 and a spot in the Orange Digital Center programme to scale our human-elephant conflict prevention work.",
    c: "Milestone",
    date: "Dec 2025",
    img: oscStage,
  },
  {
    t: "#OSC2025 Winner — backed by AWS, Meta & partners",
    d: "Orange Summer Challenge 2025 Winner, supported by AWS, Meta, UniPod, The Hashgraph Association, Dar Blockchain, Startup Lab and Orange Digital Center.",
    c: "Milestone",
    date: "Dec 2025",
    img: oscBanner,
  },
  {
    t: "Duras AI on the expo floor",
    d: "Showcasing the drone prototype and our 24/7 surveillance, real-time alerts, humane deterrence and data intelligence platform to farmers, partners and visitors.",
    c: "Event",
    date: "Apr 2026",
    img: expoBooth,
  },
  { t: "Inside our first Chobe field test", d: "What we learned flying drones over elephant corridors at dawn.", c: "Field notes", date: "May 2026" },
  { t: "How VR licensing funds farmer alerts", d: "Breaking down the cross-subsidy model that powers our work.", c: "Model", date: "Apr 2026" },
  { t: "Winning the Orange Summer Challenge", d: "The 180-applicant journey and what comes next.", c: "Milestone", date: "Dec 2025" },
  { t: "Designing alerts in Setswana", d: "Why language and timing matter as much as accuracy.", c: "Product", date: "Mar 2026" },
];

function BlogPage() {
  return (
    <>
      <section className="bg-elephant text-white">
        <div className="max-w-7xl mx-auto px-5 py-20">
          <span className="font-mono text-xs uppercase tracking-widest text-savanna">Blog & News</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight max-w-2xl">Field notes from Botswana.</h1>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-6">
        {posts.map((p) => (
          <article key={p.t} className="rounded-3xl bg-white border border-black/5 p-7 hover:shadow-lg transition">
            {"img" in p && p.img ? (
              <div className="mb-5 -mx-1 overflow-hidden rounded-2xl aspect-[16/9] bg-elephant/5">
                <img src={p.img} alt={p.t} loading="lazy" className="w-full h-full object-cover" />
              </div>
            ) : null}
            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-acacia">
              <span>{p.c}</span>
              <span className="text-elephant/40">•</span>
              <span className="text-elephant/60">{p.date}</span>
            </div>
            <h2 className="mt-3 text-2xl font-display font-bold text-elephant">{p.t}</h2>
            <p className="mt-3 text-elephant/70">{p.d}</p>
            <a href="#" className="mt-5 inline-flex text-acacia font-semibold text-sm hover:underline">Read more →</a>
          </article>
        ))}
      </section>
    </>
  );
}