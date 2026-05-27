import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About — Founder, Team & Story | Duras AI" },
      { name: "description", content: "The story behind Duras AI: founder Nathan Tshamba, our team, and milestones including the Orange Summer Challenge win." },
    ],
  }),
});

function AboutPage() {
  return (
    <>
      <section className="bg-elephant text-white">
        <div className="max-w-7xl mx-auto px-5 py-20 md:py-28">
          <span className="font-mono text-xs uppercase tracking-widest text-savanna">About Duras AI</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">Built in Botswana, for Botswana — then for the world.</h1>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-5 py-20">
        <h2 className="text-3xl font-bold text-elephant">Founder story</h2>
        <div className="mt-6 prose prose-lg max-w-none text-elephant/80 space-y-5 leading-relaxed">
          <p>Duras AI was founded by <strong className="text-elephant">Nathan Tshamba</strong>, a Botswana-based technologist and social entrepreneur. The idea came from witnessing the devastating impact of human-elephant conflict on rural communities — destroyed crops, lost livelihoods and lives lost on both sides.</p>
          <p>Nathan realised technology could offer a third path. With AI and drones, communities could be alerted before elephants arrive. With virtual reality, the same wildlife could be shared with the world — without disturbing it.</p>
          <p>In 2025, Duras AI won the Orange Summer Challenge national finale, selected from 180+ applications. Nathan also received Aspire Seed Fund support from the Harvard-affiliated Aspire Institute.</p>
          <p>Today, Duras AI is building a future where humans and elephants coexist safely — and where conservation technology is developed locally, owned locally, and benefits everyone.</p>
        </div>
      </section>

      <section className="bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-5 py-16">
          <h2 className="text-3xl font-bold text-elephant">Milestones</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-5">
            {[
              { y: "2025", t: "Orange Summer Challenge", d: "National finale winner, selected from 180+ applications. P50,000 prize." },
              { y: "2025", t: "Aspire Seed Fund", d: "Selected by the Harvard-affiliated Aspire Institute." },
              { y: "2026", t: "Field pilots", d: "Drone and AI pilots launching across northern Botswana." },
            ].map((m) => (
              <div key={m.t} className="rounded-2xl bg-offwhite border border-black/5 p-6">
                <div className="font-mono text-xs text-savanna">{m.y}</div>
                <div className="mt-2 font-display font-bold text-elephant">{m.t}</div>
                <p className="mt-2 text-sm text-elephant/70">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20">
        <h2 className="text-3xl font-bold text-elephant">Team</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { n: "Nathan Tshamba", r: "Founder & CEO" },
            { n: "Open role", r: "AI/ML Engineer" },
            { n: "Open role", r: "Drone Operations Lead" },
          ].map((p) => (
            <div key={p.r} className="rounded-2xl border border-black/5 bg-white p-6">
              <div className="h-16 w-16 rounded-full bg-elephant/10 flex items-center justify-center font-display font-bold text-elephant">
                {p.n.split(" ").map((w) => w[0]).join("").slice(0, 2)}
              </div>
              <div className="mt-4 font-display font-bold text-elephant">{p.n}</div>
              <div className="text-sm text-elephant/70">{p.r}</div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-sm text-elephant/60">Interested in joining? <Link to="/contact" className="text-acacia font-semibold">Reach out →</Link></p>
      </section>
    </>
  );
}