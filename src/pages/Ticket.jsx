import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../useCart";

function Ticket() {
  const {
    cartItems,
    cartTotal,
    clearCart,
    removeFromCart,
    updateQuantity,
  } = useCart();

  return (
    <section className="min-h-screen bg-black px-6 pb-20 pt-32 text-white lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
            Your tickets
          </p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">Ticket Cart</h1>
          <p className="mt-4 max-w-2xl text-white/65">
            Review your selected tickets before checkout.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-10 text-center backdrop-blur-md">
            <p className="text-lg font-semibold">No tickets added yet</p>
            <p className="mt-2 text-sm text-white/55">
              Explore events and add your preferred passes.
            </p>
            <Link
              to="/events"
              className="mt-8 inline-flex rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              Browse Events
            </Link>
          </div>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[1fr_22rem]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:grid-cols-[9rem_1fr_auto]"
                >
                  <img
                    src={item.image}
                    alt={item.eventName}
                    className="h-36 w-full rounded-2xl object-cover sm:h-full"
                  />

                  <div>
                    <p className="text-sm font-semibold text-pink-300">
                      {item.ticketLabel} Ticket
                    </p>
                    <h2 className="mt-2 text-2xl font-bold">{item.eventName}</h2>
                    <p className="mt-2 text-sm text-white/55">
                      {item.location} | {item.date}
                    </p>
                    <p className="mt-3 font-semibold">
                      NGN {item.price.toLocaleString()} each
                    </p>
                  </div>

                  <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                    <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/30 p-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="rounded-xl p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="min-w-6 text-center font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="rounded-xl p-2 text-white/70 transition hover:bg-white/10 hover:text-white"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="font-bold">
                        NGN {(item.price * item.quantity).toLocaleString()}
                      </p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-3 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-pink-300"
                      >
                        <Trash2 className="h-4 w-4" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <aside className="h-fit rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h2 className="text-2xl font-bold">Order Summary</h2>

              <div className="mt-6 space-y-3 border-b border-white/10 pb-6 text-sm text-white/65">
                <div className="flex justify-between">
                  <span>Tickets</span>
                  <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>NGN {cartTotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between">
                <span className="text-white/65">Total</span>
                <span className="text-2xl font-black">
                  NGN {cartTotal.toLocaleString()}
                </span>
              </div>

              <button className="mt-6 w-full rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 py-4 font-semibold transition hover:scale-[1.02]">
                Checkout
              </button>
              <button
                onClick={clearCart}
                className="mt-3 w-full rounded-2xl border border-white/10 py-3 font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
              >
                Clear Cart
              </button>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}

export default Ticket;
