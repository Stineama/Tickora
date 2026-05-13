import { ArrowRight, CalendarDays, MapPin, Search, Ticket } from "lucide-react";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1800&q=80"
          alt="A packed concert audience with stage lights"
          className="h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0.88)_36%,rgba(0,0,0,0.48)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-linear-to-t from-black to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-32 lg:grid-cols-[1.04fr_0.96fr] lg:items-end lg:px-10 lg:pb-24 lg:pt-24">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/80 backdrop-blur-md">
            <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(52,211,153,0.9)]" />
            Discover live experiences across Nigeria
          </div>

          <h1 className="max-w-3xl text-5xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-linear-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent drop-shadow-[0_2px_24px_rgba(217,70,239,0.28)]">
              Book the events people
            </span>
            <span className="text-white"> will talk about.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Find concerts, conferences, festivals, and workshops with fast
            checkout, secure QR tickets, and seats that are ready before the
            lights come up.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-white/90">
              Explore Events
              <ArrowRight className="h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-4 font-bold text-white backdrop-blur-md transition duration-300 hover:-translate-y-0.5 hover:bg-white/15">
              <Ticket className="h-5 w-5" />
              Sell Tickets
            </button>
          </div>

          <div className="mt-10 grid max-w-2xl gap-3 rounded-3xl border border-white/15 bg-black/45 p-3 backdrop-blur-xl sm:grid-cols-[1fr_1fr_auto]">
            <label className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-white/80">
              <Search className="h-5 w-5 text-pink-300" />
              <span className="text-sm">Search events</span>
            </label>
            <label className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3 text-white/80">
              <MapPin className="h-5 w-5 text-purple-300" />
              <span className="text-sm">Lagos, Nigeria</span>
            </label>
            <button className="rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 px-5 py-3 text-sm font-bold text-white transition duration-300 hover:scale-[1.02]">
              Find
            </button>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <p className="bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-3xl font-black text-transparent drop-shadow-[0_1px_14px_rgba(217,70,239,0.25)]">
                50K+
              </p>
              <p className="mt-1 text-sm text-white/55">Tickets sold</p>
            </div>
            <div>
              <p className="bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-3xl font-black text-transparent drop-shadow-[0_1px_14px_rgba(217,70,239,0.25)]">
                120+
              </p>
              <p className="mt-1 text-sm text-white/55">Events hosted</p>
            </div>
            <div>
              <p className="bg-linear-to-r from-purple-300 to-pink-300 bg-clip-text text-3xl font-black text-transparent drop-shadow-[0_1px_14px_rgba(217,70,239,0.25)]">
                98%
              </p>
              <p className="mt-1 text-sm text-white/55">Happy guests</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:justify-self-end">
          <div className="overflow-hidden rounded-4xl border border-white/15 bg-white/10 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=900&q=80"
                alt="Festival crowd at night"
                className="h-104 w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent" />
              <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-sm font-bold text-white shadow-lg shadow-black/20 backdrop-blur-md">
                Featured
              </div>
              <div className="absolute bottom-5 left-5 right-5">
                <p className="text-sm font-medium text-pink-200">
                  Live Concert
                </p>
                <h2 className="mt-1 text-3xl font-black">
                  Lagos Music Festival
                </h2>
              </div>
            </div>

            <div className="grid gap-3 p-3 sm:grid-cols-[1fr_1fr_auto]">
              <div className="rounded-2xl bg-black/35 p-4">
                <p className="flex items-center gap-2 text-sm text-white/55">
                  <CalendarDays className="h-4 w-4" />
                  Date
                </p>
                <p className="mt-2 font-bold">June 24</p>
              </div>
              <div className="rounded-2xl bg-black/35 p-4">
                <p className="text-sm text-white/55">From</p>
                <p className="mt-2 font-bold">NGN 15,000</p>
              </div>
              <button className="rounded-2xl bg-white px-5 py-4 font-black text-black transition duration-300 hover:bg-pink-100 sm:px-6">
                Buy
              </button>
            </div>

            <div className="mx-3 mb-2 rounded-2xl border border-white/10 bg-black/35 p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm text-white/55">Selling fast</p>
                <p className="text-sm font-bold text-pink-200">72% booked</p>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[72%] rounded-full bg-linear-to-r from-purple-400 to-pink-400" />
              </div>
              <p className="mt-3 text-sm font-semibold text-white/80">
                VIP passes are moving quickly
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
