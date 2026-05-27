import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import vrImg from "../assets/vr-tourism.jpg";
import heroImg from "../assets/hero-elephants.jpg";

export const Route = createFileRoute("/vr-demo")({
  component: VRDemoPage,
  head: () => ({
    meta: [
      { title: "VR Experience — Sample & Lodge Demos | Duras AI" },
      { name: "description", content: "Preview Duras AI's immersive VR safari experience and request a demo for your lodge or tourism business." },
    ],
  }),
});

function VRDemoPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section className="bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-5 py-20 md:py-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="font-mono text-xs uppercase tracking-widest text-sky-brand">VR Experience</span>
            <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight">Botswana, without a single footprint.</h1>
            <p className="mt-5 text-white/80 text-lg max-w-xl">A 30–60 second taste of our immersive drone-captured safari. Watch on any phone, no headset required.</p>
          </div>
          <div className="rounded-3xl overflow-hidden aspect-video bg-elephant flex items-center justify-center relative">
            <img src={heroImg} alt="VR safari preview" width={1920} height={1080} className="absolute inset-0 h-full w-full object-cover opacity-70" />
            <button className="relative h-20 w-20 rounded-full bg-savanna text-charcoal flex items-center justify-center text-2xl shadow-2xl hover:scale-105 transition" aria-label="Play VR teaser">
              ▶
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20">
        <h2 className="text-3xl font-bold text-elephant">Inside the experience</h2>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[heroImg, vrImg, heroImg, vrImg, heroImg, vrImg].map((src, i) => (
            <div key={i} className="aspect-video rounded-2xl overflow-hidden">
              <img src={src} alt={`VR experience still ${i + 1}`} loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-black/5">
        <div className="max-w-5xl mx-auto px-5 py-20 grid lg:grid-cols-[2fr_1fr] gap-10">
          <div>
            <h2 className="text-3xl font-bold text-elephant">Request a demo for your lodge</h2>
            <p className="mt-3 text-elephant/75">We'll send a private preview link and license pricing within 48 hours.</p>
            {submitted ? (
              <div className="mt-8 rounded-2xl bg-acacia/10 border border-acacia/20 p-6 text-acacia font-semibold">
                Demo request received. Watch your inbox.
              </div>
            ) : (
              <form
                className="mt-8 grid gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
              >
                <input required maxLength={100} placeholder="Your name" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" />
                <input required type="email" maxLength={200} placeholder="Email address" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" />
                <input required maxLength={150} placeholder="Lodge / business name" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" />
                <textarea maxLength={500} rows={4} placeholder="Tell us about your guests" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" />
                <button className="inline-flex justify-center rounded-full bg-sky-brand text-white font-semibold px-6 py-3 hover:bg-sky-brand/90 transition">Request demo</button>
              </form>
            )}
          </div>
          <aside className="rounded-2xl bg-offwhite border border-black/5 p-6">
            <h3 className="font-display font-bold text-elephant">Scan for mobile preview</h3>
            <p className="mt-2 text-sm text-elephant/70">Point your phone camera at the code to open the VR teaser.</p>
            <div className="mt-4 aspect-square w-full rounded-xl bg-white border border-dashed border-black/15 flex items-center justify-center text-elephant/40 text-xs">
              QR code
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}