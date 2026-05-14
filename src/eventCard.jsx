import { Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

function EventCard({ event }) {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5
      shadow-lg shadow-black/40 backdrop-blur-md transition duration-300 hover:scale-[1.02]"
    >
      <div className="h-36 shrink-0 overflow-hidden md:h-52">
        <img
          src={event.image}
          alt={event.name}
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col p-3 md:p-5">
        <span className="inline-block w-fit rounded-full bg-purple-500/20 px-2 py-0.5 text-[10px] text-purple-300 md:px-3 md:py-1 md:text-xs">
          {event.category}
        </span>

        <h2 className="mt-2 line-clamp-2 text-sm font-bold text-white md:mt-3 md:text-xl">{event.name}</h2>

        <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-gray-400 md:mt-3 md:text-sm">
          <div className="flex items-center gap-0.5">
            <MapPin size={12} />
            <span className="line-clamp-1">{event.location}</span>
          </div>

          <div className="flex items-center gap-0.5">
            <Calendar size={12} />
            <span className="line-clamp-1">{event.date}</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-between gap-2 pt-3 md:mt-auto md:gap-4 md:pt-5">
          <div>
            <p className="text-[10px] text-gray-400">From</p>
            <h3 className="text-xs font-semibold text-white md:text-sm">
              ₦{event.regularPrice.toLocaleString()}
            </h3>
          </div>

          <Link to={`/events/${event.id}`}>
            <button
              className="rounded-lg bg-linear-to-r from-purple-500 to-pink-500 px-3 py-1.5
              text-xs font-semibold text-white transition hover:scale-105 md:rounded-xl md:px-4 md:py-2 md:text-sm"
            >
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}


export default EventCard;
