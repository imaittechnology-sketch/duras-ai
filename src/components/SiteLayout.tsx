import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "../assets/durasai-logo.png.asset.json";

const nav = [
  { to: "/", label: "Home" },
  { to: "/solution", label: "Solution" },
  { to: "/impact", label: "Impact" },
  { to: "/partnerships", label: "Partnerships" },
  { to: "/vr-demo", label: "VR Demo" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export function SiteLayout() {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col bg-offwhite text-charcoal">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-black/5">
        <div className="max-w-7xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logoAsset.url} alt="Duras AI logo" className="h-10 w-auto" />
          </Link>
          <nav className="hidden lg:flex items-center gap-7">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-elephant hover:text-savanna transition-colors"
                activeProps={{ className: "text-sm font-medium text-savanna" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Link
            to="/partnerships"
            className="hidden lg:inline-flex items-center justify-center rounded-full bg-savanna px-4 py-2 text-sm font-semibold text-charcoal hover:bg-savanna/90 transition"
          >
            Partner with us
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="lg:hidden text-elephant p-2"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        {open && (
          <div className="lg:hidden border-t border-black/5 bg-white">
            <div className="px-5 py-4 flex flex-col gap-3">
              {nav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className="text-base font-medium text-elephant py-1"
                >
                  {n.label}
                </Link>
              ))}
              <Link
                to="/partnerships"
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex justify-center rounded-full bg-savanna px-4 py-2.5 text-sm font-semibold text-charcoal"
              >
                Partner with us
              </Link>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="bg-elephant text-white/90 mt-20">
        <div className="max-w-7xl mx-auto px-5 py-14 grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <img src={logoAsset.url} alt="Duras AI" className="h-10 w-auto brightness-0 invert" />
            <p className="mt-4 max-w-md text-sm text-white/70 leading-relaxed">
              AI for conservation. VR for sustainable tourism. Protecting both communities and elephants — built in Botswana.
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Explore</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {nav.slice(0, 5).map((n) => (
                <li key={n.to}><Link to={n.to} className="hover:text-savanna">{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Contact</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>imaittechnology@africanimpactinitiative.com</li>
              <li>Gaborone, Botswana</li>
              <li className="flex gap-3 pt-2">
                <a href="#" aria-label="LinkedIn" className="hover:text-savanna">LinkedIn</a>
                <a href="#" aria-label="YouTube" className="hover:text-savanna">YouTube</a>
                <a href="#" aria-label="X" className="hover:text-savanna">X</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 py-5 text-xs text-white/60 flex flex-col sm:flex-row justify-between gap-2">
            <span>© 2026 Duras AI. All rights reserved.</span>
            <span>Made in Gaborone, Botswana 🇧🇼</span>
          </div>
        </div>
      </footer>
    </div>
  );
}