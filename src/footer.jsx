import { Mail, MapPin, Phone } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M5 4h4.2l3.7 5.2L17.4 4H20l-5.8 6.8L21 20h-4.2l-4.1-5.8L7.7 20H5l6.4-7.4L5 4Zm3.1 2 9.7 12h1L9.1 6h-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <path
        d="M14 8.2V6.7c0-.7.5-1.2 1.2-1.2H17V2.3c-.8-.1-1.7-.2-2.7-.2-2.7 0-4.5 1.6-4.5 4.4v1.7H7v3.6h2.8V22H14V11.8h2.8l.5-3.6H14Z"
        fill="currentColor"
      />
    </svg>
  );
}

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-purple-400/20 bg-[#050208] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-pink-400/70 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(168,85,247,0.16),transparent_34%),radial-gradient(circle_at_top_right,rgba(236,72,153,0.12),transparent_30%)]" />

      <div className="relative mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-linear-to-br from-purple-500 via-pink-500 to-purple-700 shadow-lg shadow-purple-500/30">
                <div className="absolute inset-0 bg-white/10" />
                <span className="relative text-xl font-extrabold tracking-wide">
                  T
                </span>
              </div>
              <span className="text-2xl font-bold tracking-wide">Tickora</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Discover events, book secure tickets, and manage your passes in
              one smooth experience.
            </p>

            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="rounded-full border border-white/15 bg-white/7 p-3 text-white/70 shadow-inner shadow-white/5 transition hover:border-pink-400/60 hover:bg-pink-400/10 hover:text-pink-300"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="rounded-full border border-white/15 bg-white/7 p-3 text-white/70 shadow-inner shadow-white/5 transition hover:border-pink-400/60 hover:bg-pink-400/10 hover:text-pink-300"
              >
                <XIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="rounded-full border border-white/15 bg-white/7 p-3 text-white/70 shadow-inner shadow-white/5 transition hover:border-pink-400/60 hover:bg-pink-400/10 hover:text-pink-300"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-bold">Explore</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <NavLink to="/" className="transition hover:text-pink-300">
                Home
              </NavLink>
              <NavLink to="/events" className="transition hover:text-pink-300">
                Events
              </NavLink>
              <NavLink to="/ticket" className="transition hover:text-pink-300">
                Ticket
              </NavLink>
            </div>
          </div>

          <div>
            <h2 className="font-bold">Support</h2>
            <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
              <a href="#" className="transition hover:text-pink-300">
                Help Center
              </a>
              <a href="#" className="transition hover:text-pink-300">
                Refund Policy
              </a>
              <a href="#" className="transition hover:text-pink-300">
                Sell Tickets
              </a>
              <a href="#" className="transition hover:text-pink-300">
                Contact Us
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-white/12 bg-white/6 p-5 shadow-2xl shadow-black/20 backdrop-blur-md">
            <h2 className="font-bold">Stay in the loop</h2>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Get updates on new concerts, tech events, festivals, and special
              ticket drops.
            </p>

            <div className="mt-5 flex overflow-hidden rounded-2xl border border-white/10 bg-black/35">
              <input
                type="email"
                placeholder="Email address"
                className="min-w-0 flex-1 bg-transparent px-4 py-3 text-sm text-white outline-none placeholder:text-white/35"
              />
              <button className="bg-linear-to-r from-purple-500 to-pink-500 px-4 text-sm font-semibold">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 border-t border-white/12 pt-8 text-sm text-white/55 md:grid-cols-[1fr_auto] md:items-center">
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4 text-pink-300" />
              hello@tickora.com
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-pink-300" />
              +234 800 000 0000
            </span>
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-pink-300" />
              Lagos, Nigeria
            </span>
          </div>

          <p>&copy; {year} Tickora. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
