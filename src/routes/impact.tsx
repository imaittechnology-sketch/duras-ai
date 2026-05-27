import { createFileRoute } from "@tanstack/react-router";
import communityImg from "../assets/community.jpg";

export const Route = createFileRoute("/impact")({
  component: ImpactPage,
  head: () => ({
    meta: [
      { title: "Impact — Communities, Elephants, Economy | Duras AI" },
      { name: "description", content: "The human-elephant conflict problem in Botswana and the change Duras AI creates for communities, wildlife and the economy." },
    ],
  }),
});

function ImpactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img src={communityImg} alt="Rural Botswana village at sunset" width={1280} height={960} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-charcoal/65" />
        <div className="relative max-w-7xl mx-auto px-5 py-24 md:py-32">
          <span className="font-mono text-xs uppercase tracking-widest text-savanna">Our impact</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold text-white tracking-tight max-w-3xl">Lives, crops and wildlife — saved by seconds of warning.</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-elephant tracking-tight">The problem</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { k: "25,672", v: "Human-wildlife conflict incidents in Botswana (3 years)" },
            { k: "28", v: "Human deaths caused by elephants" },
            { k: "132,000+", v: "Botswana's elephant population — the world's largest" },
            { k: "10%", v: "Tourism's contribution to Botswana's GDP" },
          ].map((s) => (
            <div key={s.v} className="rounded-2xl border border-black/5 bg-white p-6">
              <div className="text-3xl md:text-4xl font-display font-bold text-elephant">{s.k}</div>
              <div className="mt-2 text-sm text-elephant/70 leading-relaxed">{s.v}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-elephant tracking-tight">The change we create</h2>
            <p className="mt-4 text-elephant/75 leading-relaxed max-w-xl">
              We move communities from reactive defence to proactive protection — and turn wildlife from a threat into a shared asset.
            </p>
          </div>
          <div className="grid gap-4">
            {[
              { c: "bg-acacia", t: "Crops protected", d: "Maize, sorghum and vegetable fields kept standing through harvest season." },
              { c: "bg-savanna", t: "Lives saved", d: "Earlier warnings reduce nighttime encounters between people and herds." },
              { c: "bg-sky-brand", t: "Elephants preserved", d: "Less retaliatory killing as conflict drops in pilot areas." },
              { c: "bg-elephant", t: "Women in tech", d: "Internship and training pathways with BIUST and UB." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl bg-offwhite border border-black/5 p-5 flex gap-4">
                <span className={`mt-1 h-3 w-3 rounded-full ${b.c}`} />
                <div>
                  <div className="font-display font-bold text-elephant">{b.t}</div>
                  <p className="text-sm text-elephant/70 mt-1">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-elephant tracking-tight">Where we work</h2>
        <p className="mt-3 text-elephant/75 max-w-2xl">Pilot regions and elephant corridors across northern Botswana.</p>
        <div className="mt-10 grid md:grid-cols-3 gap-5">
          {[
            { r: "Chobe", d: "Highest elephant density worldwide; major crop-raiding hotspot." },
            { r: "Okavango Delta", d: "Tourism-rich corridor — ideal VR capture region." },
            { r: "Boteti & Tuli", d: "Emerging conflict zones with expanding farming." },
          ].map((p) => (
            <div key={p.r} className="rounded-2xl bg-white border border-black/5 p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-savanna">Pilot region</div>
              <h3 className="mt-2 font-display font-bold text-xl text-elephant">{p.r}</h3>
              <p className="mt-2 text-sm text-elephant/70">{p.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}