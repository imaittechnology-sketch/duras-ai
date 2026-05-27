import { createFileRoute } from "@tanstack/react-router";

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