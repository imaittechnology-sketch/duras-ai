import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import heroImg from "../assets/hero-elephants.jpg";
import aiImg from "../assets/ai-detection.jpg";
import vrImg from "../assets/vr-tourism.jpg";
import bookingImg from "../assets/direct-booking.jpg";


export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Duras AI — AI & VR for Conservation in Botswana" },
      { name: "description", content: "Duras AI uses AI, drones and VR to predict elephant movement, alert communities, and power sustainable tourism." },
    ],
  }),
});

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Aerial view of elephants walking across the Botswana savanna at golden hour"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/70 via-charcoal/40 to-charcoal/80" />
        <div className="relative max-w-7xl mx-auto px-5 py-28 md:py-40">
          <span className="inline-flex items-center gap-2 rounded-full bg-savanna/90 text-charcoal px-3 py-1 text-xs font-semibold uppercase tracking-wider">
            <span className="h-1.5 w-1.5 rounded-full bg-charcoal" />
            Winner — Orange Summer Challenge 2025
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight max-w-4xl leading-[1.05]">
            Protecting communities. <span className="text-savanna">Protecting elephants.</span> Using AI and VR.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-white/85 leading-relaxed">
            Duras AI is a Botswana-born deep tech startup. We use artificial intelligence and drone monitoring to predict elephant movement and prevent human-wildlife conflict — while creating virtual reality experiences that promote sustainable tourism without disturbing nature.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/solution" className="inline-flex items-center justify-center rounded-full bg-savanna px-6 py-3 text-sm font-semibold text-charcoal hover:bg-savanna/90 transition">
              Explore our solution →
            </Link>
            <Link to="/partnerships" className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition">
              Partner with us
            </Link>
            <Link to="/vr-demo" className="inline-flex items-center justify-center rounded-full bg-sky-brand px-6 py-3 text-sm font-semibold text-white hover:bg-sky-brand/90 transition">
              Experience VR
            </Link>
          </div>
        </div>
      </section>

      {/* Achievement badges */}
      <section className="bg-white border-b border-black/5">
        <div className="max-w-7xl mx-auto px-5 py-8 grid grid-cols-2 sm:grid-cols-4 gap-6 items-center">
          {[
            { k: "180+", v: "Applications competed against" },
            { k: "P50K", v: "Orange Summer Challenge prize" },
            { k: "2025", v: "Aspire Seed Fund recipient" },
            { k: "🇧🇼", v: "Built in Gaborone, Botswana" },
          ].map((b) => (
            <div key={b.v} className="text-center sm:text-left">
              <div className="text-2xl md:text-3xl font-display font-bold text-elephant">{b.k}</div>
              <div className="text-xs md:text-sm text-elephant/70 mt-1">{b.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Two-pillar */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="max-w-3xl">
          <span className="text-xs font-mono uppercase tracking-widest text-acacia">Our two pillars</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-elephant tracking-tight">
            One platform. Two missions. Shared impact.
          </h2>
          <p className="mt-4 text-elephant/75 leading-relaxed">
            We pair real-time AI detection in the field with immersive VR storytelling for the world — and let one fund the other.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <article className="group rounded-3xl bg-white border border-black/5 overflow-hidden shadow-sm hover:shadow-xl transition">
            <img src={aiImg} alt="Drone-detected elephants with AI bounding boxes" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="p-7">
              <div className="flex items-center gap-2 text-acacia font-mono text-xs uppercase tracking-widest">
                <span className="h-2 w-2 rounded-full bg-acacia animate-pulse" /> Pillar 01
              </div>
              <h3 className="mt-2 text-2xl font-bold text-elephant">AI Elephant Detection</h3>
              <p className="mt-3 text-elephant/75 leading-relaxed">
                Drones capture footage of elephant corridors. Our AI detects elephants in real-time, predicts their movement, and sends SMS alerts to communities — before conflict occurs.
              </p>
              <Link to="/solution" className="mt-5 inline-flex text-acacia font-semibold text-sm hover:underline">How it works →</Link>
            </div>
          </article>
          <article className="group rounded-3xl bg-white border border-black/5 overflow-hidden shadow-sm hover:shadow-xl transition">
            <img src={vrImg} alt="Guest experiencing a VR safari at a lodge" width={1280} height={960} loading="lazy" className="aspect-[4/3] w-full object-cover" />
            <div className="p-7">
              <div className="flex items-center gap-2 text-sky-brand font-mono text-xs uppercase tracking-widest">
                <span className="h-2 w-2 rounded-full bg-sky-brand animate-pulse" /> Pillar 02
              </div>
              <h3 className="mt-2 text-2xl font-bold text-elephant">VR Sustainable Tourism</h3>
              <p className="mt-3 text-elephant/75 leading-relaxed">
                The same drone footage becomes immersive VR. Lodges license our experiences for guests; global tourists see Botswana without disturbing it. Revenue subsidises AI access for low-income farmers.
              </p>
              <Link to="/vr-demo" className="mt-5 inline-flex text-sky-brand font-semibold text-sm hover:underline">See the demo →</Link>
            </div>
          </article>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-5 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-elephant tracking-tight max-w-2xl">From the corridor to the cloud, in seconds.</h2>
          <div className="mt-10 grid md:grid-cols-4 gap-5">
            {[
              { n: "01", t: "Drone capture", d: "UAVs fly known elephant corridors with high-res cameras." },
              { n: "02", t: "AI detection", d: "Computer vision identifies and counts elephants in real time." },
              { n: "03", t: "Movement prediction", d: "Models forecast direction, speed and likely conflict zones." },
              { n: "04", t: "Community alert", d: "SMS warnings reach farmers and rangers minutes ahead." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl border border-black/5 bg-offwhite p-6">
                <div className="font-mono text-xs text-savanna">{s.n}</div>
                <div className="mt-2 font-display font-bold text-elephant">{s.t}</div>
                <p className="mt-2 text-sm text-elephant/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Booking */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <img
              src={bookingImg}
              alt="Safari lodge direct booking platform on laptop and phone with elephants in the background"
              width={1280}
              height={960}
              loading="lazy"
              className="rounded-3xl w-full object-cover shadow-lg"
            />
          </div>
          <div className="order-1 lg:order-2">
            <span className="text-xs font-mono uppercase tracking-widest text-sky-brand">For lodges & camps</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-elephant tracking-tight">
              Direct booking. Fair commission.
            </h2>
            <p className="mt-4 text-elephant/75 leading-relaxed">
              Stop losing revenue to online travel agencies. Duras AI's direct booking engine lets safari lodges and eco-camps take reservations on their own terms — with commissions as low as 8-10% instead of the industry standard 30-50%.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              <div className="rounded-2xl bg-offwhite border border-black/5 p-5">
                <div className="text-3xl font-display font-bold text-sky-brand">8-10%</div>
                <div className="text-sm text-elephant/70 mt-1">Commission with Duras AI</div>
              </div>
              <div className="rounded-2xl bg-offwhite border border-black/5 p-5">
                <div className="text-3xl font-display font-bold text-elephant/40 line-through">30-50%</div>
                <div className="text-sm text-elephant/70 mt-1">Typical OTA commission</div>
              </div>
            </div>

            <ul className="mt-8 space-y-3 text-sm text-elephant/80">
              {[
                "Keep guest relationships and data",
                "Integrated with VR pre-arrival experiences",
                "Instant payouts — no 60-day holds",
                "Built-in conservation fee transparency",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 h-4 w-4 rounded-full bg-savanna/30 text-savanna flex items-center justify-center text-[10px] shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            <Link to="/partnerships" className="mt-8 inline-flex items-center justify-center rounded-full bg-sky-brand px-6 py-3 text-sm font-semibold text-white hover:bg-sky-brand/90 transition">
              Join as a lodge partner →
            </Link>
          </div>
        </div>
      </section>

      {/* Impact preview */}
      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-acacia">Why it matters</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-elephant tracking-tight">A national problem. A local solution.</h2>
            <p className="mt-4 text-elephant/75 leading-relaxed">
              Botswana is home to the world's largest elephant population. With more than a hundred thousand elephants and growing rural settlements, conflict is rising. Technology — built locally — can change the equation.
            </p>
            <Link to="/impact" className="mt-6 inline-flex items-center text-acacia font-semibold hover:underline">See full impact →</Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "25,672", v: "Conflict incidents in 3 years" },
              { k: "28", v: "Human lives lost to elephants" },
              { k: "132K+", v: "Elephants in Botswana" },
              { k: "10%", v: "Of GDP from tourism" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl bg-elephant text-white p-6">
                <div className="text-3xl md:text-4xl font-display font-bold text-savanna">{s.k}</div>
                <div className="text-sm text-white/80 mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-acacia text-white">
        <div className="max-w-7xl mx-auto px-5 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Build the future of coexistence with us.</h2>
            <p className="mt-2 text-white/85 max-w-xl">Whether you run a lodge, lead a community, or fund conservation — there's a way to partner.</p>
          </div>
          <Link to="/partnerships" className="inline-flex shrink-0 rounded-full bg-savanna text-charcoal font-semibold px-6 py-3 hover:bg-white transition">
            Become a partner →
          </Link>
        </div>
      </section>
    </>
  );
}
