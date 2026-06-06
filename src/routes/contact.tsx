import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact Duras AI — Gaborone, Botswana" },
      { name: "description", content: "Reach Duras AI by email or contact form. Based in Gaborone, Botswana." },
    ],
  }),
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [newsletter, setNewsletter] = useState(false);
  return (
    <>
      <section className="bg-elephant text-white">
        <div className="max-w-7xl mx-auto px-5 py-20">
          <span className="font-mono text-xs uppercase tracking-widest text-savanna">Contact</span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight max-w-2xl">Let's talk coexistence.</h1>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 py-20 grid lg:grid-cols-[1.2fr_1fr] gap-12">
        <div>
          <h2 className="text-2xl font-bold text-elephant">Send us a message</h2>
          {submitted ? (
            <div className="mt-6 rounded-2xl bg-acacia/10 border border-acacia/20 p-6 text-acacia font-semibold">
              Thanks for getting in touch — we'll respond shortly.
            </div>
          ) : (
            <form
              className="mt-6 grid gap-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="grid md:grid-cols-2 gap-4">
                <input required maxLength={100} placeholder="Your name" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" />
                <input required type="email" maxLength={200} placeholder="Email address" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" />
              </div>
              <input maxLength={150} placeholder="Organisation (optional)" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" />
              <textarea required maxLength={1000} rows={6} placeholder="Your message" className="rounded-xl border border-black/10 bg-white px-4 py-3 text-sm" />
              <button className="inline-flex justify-center rounded-full bg-savanna text-charcoal font-semibold px-6 py-3 hover:bg-savanna/90 transition">Send message</button>
            </form>
          )}
        </div>
        <aside className="space-y-5">
          <div className="rounded-2xl bg-white border border-black/5 p-6">
            <div className="font-mono text-xs uppercase tracking-widest text-savanna">Email</div>
            <div className="mt-1 text-elephant font-display font-bold">imaittechnology@africanimpactinitiative.com</div>
          </div>
          <div className="rounded-2xl bg-white border border-black/5 p-6">
            <div className="font-mono text-xs uppercase tracking-widest text-savanna">Office</div>
            <div className="mt-1 text-elephant font-display font-bold">Gaborone, Botswana</div>
          </div>
          <div className="rounded-2xl bg-white border border-black/5 p-6">
            <div className="font-mono text-xs uppercase tracking-widest text-savanna">Social</div>
            <div className="mt-2 flex gap-3 text-elephant">
              <a href="https://www.linkedin.com/company/duras-ai/" target="_blank" rel="noopener noreferrer" className="hover:text-savanna">LinkedIn</a>
              <a href="#" className="hover:text-savanna">YouTube</a>
              <a href="#" className="hover:text-savanna">X</a>
            </div>
          </div>
          <div className="rounded-2xl bg-acacia text-white p-6">
            <div className="font-display font-bold">Stay in the loop</div>
            <p className="text-sm text-white/85 mt-1">Quarterly field updates. No spam.</p>
            {newsletter ? (
              <div className="mt-4 text-sm font-semibold">You're subscribed ✓</div>
            ) : (
              <form className="mt-4 flex gap-2" onSubmit={(e) => { e.preventDefault(); setNewsletter(true); }}>
                <input required type="email" maxLength={200} placeholder="you@email.com" className="flex-1 rounded-full bg-white text-elephant px-4 py-2 text-sm" />
                <button className="rounded-full bg-savanna text-charcoal font-semibold px-4 py-2 text-sm">Join</button>
              </form>
            )}
          </div>
        </aside>
      </section>
    </>
  );
}