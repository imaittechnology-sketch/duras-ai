import { createFileRoute, Link } from "@tanstack/react-router";
import aiImg from "../assets/ai-detection.jpg";
import vrImg from "../assets/vr-tourism.jpg";

export const Route = createFileRoute("/solution")({
  component: SolutionPage,
  head: () => ({
    meta: [
      { title: "Our Solution — AI Detection & VR Tourism | Duras AI" },
      { name: "description", content: "How Duras AI combines drone-based AI elephant detection with immersive VR tourism to fund conservation." },
    ],
  }),
});

function SolutionPage() {
  return (
    <>
      <section className="bg-elephant text-white">
        <div className="max-w-7xl mx-auto px-5 py-20 md:py-28">
          <span className="font-mono text-xs uppercase tracking-widest text-savanna">Our technology</span>
          <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight max-w-3xl">Two pillars. One mission. Built for Botswana.</h1>
          <p className="mt-5 max-w-2xl text-white/80 text-lg leading-relaxed">
            We pair real-time AI in the field with immersive VR for the world — using revenue from tourism to fund protection for communities.
          </p>
        </div>
      </section>

      {/* Pillar 1 */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <img src={aiImg} alt="AI overlay on drone footage of elephants" width={1280} height={960} loading="lazy" className="rounded-3xl w-full object-cover" />
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-acacia">Pillar 01</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-elephant tracking-tight">AI Elephant Detection</h2>
            <p className="mt-4 text-elephant/75 leading-relaxed">
              Our system combines aerial drone surveillance with computer-vision models trained on Botswana's elephant corridors. Within seconds of detection, predictive models forecast movement vectors and push SMS alerts to communities in the path of the herd.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-elephant/85">
              {[
                "Drone capture across known elephant corridors",
                "Real-time computer-vision detection & counting",
                "Predictive movement & conflict-zone modelling",
                "Multilingual SMS alerts to farmers and rangers",
              ].map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-acacia" />{x}</li>
              ))}
            </ul>
            <div className="mt-7 rounded-2xl bg-acacia/10 border border-acacia/20 p-5 text-sm text-elephant/80">
              <strong className="text-acacia">In the field:</strong> A herd of 18 elephants is detected 6 km from a maize-farming village at 04:12. By 04:14, 47 farmers receive an SMS in Setswana. By dawn, crops are still standing.
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-black/10 max-w-7xl mx-auto" />

      {/* Pillar 2 */}
      <section className="max-w-7xl mx-auto px-5 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <span className="font-mono text-xs uppercase tracking-widest text-sky-brand">Pillar 02</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-bold text-elephant tracking-tight">VR Sustainable Tourism</h2>
            <p className="mt-4 text-elephant/75 leading-relaxed">
              The drone footage we capture for conservation doubles as cinematic VR content. Lodges license the experiences for guests, global tourists access Botswana from anywhere, and a share of every license fee funds AI alerts for low-income farmers.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-elephant/85">
              {[
                "3–5 minute immersive VR experiences",
                "Mobile-compatible — no headset required",
                "Annual licensing for lodges & tour operators",
                "Cross-subsidy model funds farmer alerts",
              ].map((x) => (
                <li key={x} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-brand" />{x}</li>
              ))}
            </ul>
          </div>
          <img src={vrImg} alt="Guest at a lodge using a VR safari headset" width={1280} height={960} loading="lazy" className="order-1 lg:order-2 rounded-3xl w-full object-cover" />
        </div>
      </section>

      {/* Integrated model */}
      <section className="bg-white border-y border-black/5">
        <div className="max-w-7xl mx-auto px-5 py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-elephant tracking-tight max-w-3xl">The integrated model</h2>
          <p className="mt-4 text-elephant/75 max-w-2xl">One drone fleet. Two outputs. Self-funding conservation.</p>
          <div className="mt-10 grid md:grid-cols-3 gap-5">
            <div className="rounded-2xl bg-offwhite border border-black/5 p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-elephant/60">Capture</div>
              <h3 className="mt-2 font-display font-bold text-xl text-elephant">Shared drone fleet</h3>
              <p className="mt-2 text-sm text-elephant/70">One flight serves both pillars — slashing cost per output.</p>
            </div>
            <div className="rounded-2xl bg-acacia text-white p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-white/70">Protect</div>
              <h3 className="mt-2 font-display font-bold text-xl">AI alerts to farmers</h3>
              <p className="mt-2 text-sm text-white/85">Delivered free or low-cost to rural Botswana.</p>
            </div>
            <div className="rounded-2xl bg-sky-brand text-white p-6">
              <div className="font-mono text-xs uppercase tracking-widest text-white/70">Fund</div>
              <h3 className="mt-2 font-display font-bold text-xl">VR licensing to lodges</h3>
              <p className="mt-2 text-sm text-white/85">Revenue subsidises AI access — no donor dependency.</p>
            </div>
          </div>
          <div className="mt-10">
            <Link to="/partnerships" className="inline-flex items-center rounded-full bg-savanna text-charcoal font-semibold px-6 py-3 hover:bg-savanna/90 transition">Ready to partner? →</Link>
          </div>
        </div>
      </section>
    </>
  );
}