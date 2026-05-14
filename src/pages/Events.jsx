import { ChevronDown, Search } from "lucide-react";
import { useMemo, useState } from "react";
import EventCard from "../eventCard";
import events from "../events";
import Navbar from "../navbar";
import Footer from "../footer";

function Events() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");
  const [sort, setSort] = useState("Newest");

  const categories = useMemo(
    () => ["All", ...new Set(events.map((event) => event.category))],
    []
  );

  const filteredEvents = useMemo(() => {
    return events
      .filter((event) => {
        const query = search.trim().toLowerCase();
        const matchesSearch =
          query === "" ||
          event.name.toLowerCase().includes(query) ||
          event.location.toLowerCase().includes(query) ||
          event.category.toLowerCase().includes(query);

        const matchesCategory =
          category === "All" || event.category === category;
        const matchesLocation =
          location === "All" || event.location.includes(location);

        return matchesSearch && matchesCategory && matchesLocation;
      })
      .sort((a, b) => {
        if (sort === "Price: Low to High") {
          return a.regularPrice - b.regularPrice;
        }

        if (sort === "Price: High to Low") {
          return b.regularPrice - a.regularPrice;
        }

        if (sort === "Oldest") {
          return new Date(a.date) - new Date(b.date);
        }

        return new Date(b.date) - new Date(a.date);
      });
  }, [category, location, search, sort]);

  return (
    <>
      <section className="min-h-screen bg-black pb-20 pt-28 text-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="mb-10">
            <h1 className="text-4xl font-bold md:text-5xl">All Events</h1>
            <p className="mt-3 max-w-2xl text-gray-400">
              Explore top trending events across Nigeria, handpicked for you.
            </p>
          </div>

          <div className="mb-10 grid grid-cols-2 gap-3 rounded-3xl border border-white/10 bg-white/5 p-3 backdrop-blur-md md:gap-4 md:p-4 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <label className="col-span-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-3 py-2.5 md:col-span-1 md:px-4 md:py-3">
              <Search className="h-4 w-4 text-pink-300 md:h-5 md:w-5" />
              <input
                type="text"
                placeholder="Search events, category, or location"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="w-full bg-transparent text-xs text-white outline-none placeholder:text-white/40 md:text-sm"
              />
            </label>

            <div className="relative">
              <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full appearance-none rounded-2xl border border-white/10 bg-black/30 px-3 py-2.5 pr-9 text-xs text-white outline-none focus:border-pink-300/50 focus:ring-2 focus:ring-pink-300/20 transition-all md:px-4 md:py-3 md:text-sm md:pr-10"
              >
                <option value="All">All Categories</option>
                {categories
                  .filter((c) => c !== "All")
                  .map((option) => (
                    <option key={option} value={option} className="bg-black">
                      {option}
                    </option>
                  ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50 md:right-3 md:h-5 md:w-5" />
            </div>

            <div className="relative">
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full appearance-none rounded-2xl border border-white/10 bg-black/30 px-3 py-2.5 pr-9 text-xs text-white outline-none transition-all duration-300 hover:border-white/20 focus:border-pink-300/50 focus:ring-2 focus:ring-pink-300/20 md:px-4 md:py-3 md:text-sm md:pr-10"
              >
                <option value="All" className="bg-black">
                  All Locations
                </option>
                <option value="Lagos" className="bg-black">
                  Lagos
                </option>
                <option value="Abuja" className="bg-black">
                  Abuja
                </option>
                <option value="Port Harcourt" className="bg-black">
                  Port Harcourt
                </option>
                <option value="Ibadan" className="bg-black">
                  Ibadan
                </option>
                <option value="Benin City" className="bg-black">
                  Benin City
                </option>
                <option value="Osogbo" className="bg-black">
                  Osogbo
                </option>
                <option value="Abeokuta" className="bg-black">
                  Abeokuta
                </option>
                <option value="Oyo" className="bg-black">
                  Oyo
                </option>
                <option value="Calabar" className="bg-black">
                  Calabar
                </option>
                <option value="Enugu" className="bg-black">
                  Enugu
                </option>
              </select>

              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50 md:right-3 md:h-5 md:w-5" />
            </div>

            <div className="relative">
              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="w-full appearance-none rounded-2xl border border-white/10 bg-black/30 px-3 py-2.5 pr-9 text-xs text-white outline-none focus:border-pink-300/50 focus:ring-2 focus:ring-pink-300/20 transition-all md:px-4 md:py-3 md:text-sm md:pr-10"
              >
                <option value="Newest" className="bg-black">
                  Newest
                </option>
                <option value="Oldest" className="bg-black">
                  Oldest
                </option>
                <option value="Price: Low to High" className="bg-black">
                  Price: Low to High
                </option>
                <option value="Price: High to Low" className="bg-black">
                  Price: High to Low
                </option>
              </select>
              <ChevronDown className="pointer-events-none absolute right-2 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50 md:right-3 md:h-5 md:w-5" />
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between gap-4">
            <p className="text-sm text-white/55">
              Showing {filteredEvents.length} of {events.length} events
            </p>
            {(search || category !== "All" || location !== "All") && (
              <button
                onClick={() => {
                  setSearch("");
                  setCategory("All");
                  setLocation("All");
                }}
                className="text-sm font-semibold text-pink-300 transition hover:text-pink-200"
              >
                Clear filters
              </button>
            )}
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
              {filteredEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
              <h2 className="text-2xl font-bold">No events found</h2>
              <p className="mt-2 text-white/55">
                Try a different search, category, or location.
              </p>
            </div>
          )}
        </div>
      </section>
        <Footer />
    </>
  );
}

export default Events;
