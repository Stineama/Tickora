import { Calendar, MapPin } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useCart } from "./useCart";
import events from "./events";

function EventDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const event = events.find((eventItem) => eventItem.id === Number(id));

  const [ticketType, setTicketType] = useState("regular");
  const [quantity, setQuantity] = useState(1);

  if (!event) {
    return (
      <section className="min-h-screen bg-black px-6 pt-32 text-white">
        <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h1 className="text-3xl font-bold">Event not found</h1>
          <Link
            to="/events"
            className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-black"
          >
            Back to Events
          </Link>
        </div>
      </section>
    );
  }

  const price = ticketType === "regular" ? event.regularPrice : event.vipPrice;
  const total = price * quantity;
  const ticketLabel = ticketType === "regular" ? "Regular" : "VIP";

  function handleAddToCart() {
    addToCart({
      id: `${event.id}-${ticketType}`,
      eventId: event.id,
      eventName: event.name,
      image: event.image,
      location: event.location,
      date: event.date,
      ticketType,
      ticketLabel,
      quantity,
      price,
    });

    navigate("/ticket");
  }

  return (
    <section className="min-h-screen bg-black pb-20 pt-28 text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:px-10">
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <img
            src={event.image}
            alt={event.name}
            className="h-full min-h-96 w-full object-cover"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
            {event.category}
          </p>
          <h1 className="mt-3 text-4xl font-bold">{event.name}</h1>
          <p className="mt-3 text-gray-400">{event.description}</p>

          <div className="mt-5 flex flex-wrap gap-4 text-gray-300">
            <p className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-purple-300" />
              {event.location}
            </p>
            <p className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-pink-300" />
              {event.date}
            </p>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 font-semibold">Ticket Type</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <button
                onClick={() => setTicketType("regular")}
                className={`rounded-xl border px-5 py-3 text-left transition ${
                  ticketType === "regular"
                    ? "border-purple-400 bg-purple-500 text-white"
                    : "border-white/20 text-gray-300 hover:bg-white/5"
                }`}
              >
                <span className="block font-semibold">Regular</span>
                <span className="text-sm">NGN {event.regularPrice.toLocaleString()}</span>
              </button>

              <button
                onClick={() => setTicketType("vip")}
                className={`rounded-xl border px-5 py-3 text-left transition ${
                  ticketType === "vip"
                    ? "border-pink-400 bg-pink-500 text-white"
                    : "border-white/20 text-gray-300 hover:bg-white/5"
                }`}
              >
                <span className="block font-semibold">VIP</span>
                <span className="text-sm">NGN {event.vipPrice.toLocaleString()}</span>
              </button>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 font-semibold">Quantity</h3>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity((current) => Math.max(1, current - 1))}
                className="rounded-xl border border-white/20 px-4 py-2 text-gray-300"
              >
                -
              </button>

              <span className="min-w-8 text-center text-xl">{quantity}</span>

              <button
                onClick={() => setQuantity((current) => current + 1)}
                className="rounded-xl border border-white/20 bg-white/10 px-4 py-2"
              >
                +
              </button>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-gray-400">Total Price</p>
            <h2 className="mt-2 text-3xl font-bold">
              NGN {total.toLocaleString()}
            </h2>
          </div>

          <button
            onClick={handleAddToCart}
            className="mt-8 w-full rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 py-4 font-semibold transition hover:scale-[1.02]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
}

export default EventDetails;
