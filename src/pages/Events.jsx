import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import EventCard from "../eventCard";
import events from "../events";

function Events() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [location, setLocation] = useState("All");
  const [sort, setSort] = useState("Newest");

  const categories = useMemo(
    () => ["All", ...new Set(events.map((event) => event.category))],
    []
  );

  const locations = useMemo(
    () => ["All", ...new Set(events.map((event) => event.location))],
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
          location === "All" || event.location === location;

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
    <section className="min-h-screen bg-black pb-20 pt-28 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold md:text-5xl">All Events</h1>
          <p className="mt-3 max-w-2xl text-gray-400">
            Explore top trending events across Nigeria, handpicked for you.
          </p>
        </div>

        <div className="mb-10 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <label className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3">
            <Search className="h-5 w-5 text-pink-300" />
            <input
              type="text"
              placeholder="Search events, category, or location"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/40"
            />
          </label>

          <select
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none"
          >
            {categories.map((option) => (
              <option key={option} value={option} className="bg-black">
                {option === "All" ? "All Categories" : option}
              </option>
            ))}
          </select>

          <select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none"
          >
            {locations.map((option) => (
              <option key={option} value={option} className="bg-black">
                {option === "All" ? "All Locations" : option}
              </option>
            ))}
          </select>

          <select
            value={sort}
            onChange={(event) => setSort(event.target.value)}
            className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none"
          >
            <option className="bg-black">Newest</option>
            <option className="bg-black">Oldest</option>
            <option className="bg-black">Price: Low to High</option>
            <option className="bg-black">Price: High to Low</option>
          </select>
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
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}

export default Events;
