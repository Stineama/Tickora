import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div
      className="overflow-hidden rounded-3xl border border-white/10 bg-white/5
      shadow-lg shadow-black/40 backdrop-blur-md transition duration-300 hover:scale-[1.02]"
    >
      <div className="h-52 overflow-hidden">
        <img
          src={event.image}
          alt={event.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="p-5">
        <span className="rounded-full bg-purple-500/20 px-3 py-1 text-xs text-purple-300">
          {event.category}
        </span>

        <h2 className="mt-3 text-xl font-bold text-white">{event.name}</h2>

        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <MapPin size={14} />
            {event.location}
          </div>

          <div className="flex items-center gap-1">
            <Calendar size={14} />
            {event.date}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs text-gray-400">From</p>
            <h3 className="font-semibold text-white">
              NGN {event.regularPrice.toLocaleString()}
            </h3>
          </div>

          <Link to={`/events/${event.id}`}>
            <button
              className="rounded-xl bg-linear-to-r from-purple-500 to-pink-500 px-4 py-2
              font-semibold text-white transition hover:scale-105"
            >
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default EventCard;
