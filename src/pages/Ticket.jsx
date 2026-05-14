import { ArrowUp, Minus, Plus, Trash2, AlertTriangle, X } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { useCart } from "../useCart";

function getPurchasedTickets() {
  try {
    // Get all accumulated purchased tickets
    const storedPurchases = sessionStorage.getItem("tickora-all-purchases");
    if (storedPurchases) {
      return JSON.parse(storedPurchases);
    }
  } catch {
    return [];
  }
  return [];
}

function Ticket() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [purchasedTickets, setPurchasedTickets] = useState([]);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [ticketToCancel, setTicketToCancel] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    function handleScroll() {
      setShowBackToTop(window.scrollY > 500);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    // Fetch purchased tickets
    setPurchasedTickets(getPurchasedTickets());

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function openCancelModal(ticket) {
    setTicketToCancel(ticket);
    setShowCancelModal(true);
  }

  function closeCancelModal() {
    setShowCancelModal(false);
    setTicketToCancel(null);
  }

  function handleCancelTicket() {
    if (!ticketToCancel) return;

    try {
      // Get current purchases
      const storedPurchases = sessionStorage.getItem("tickora-all-purchases");
      const purchases = storedPurchases ? JSON.parse(storedPurchases) : [];

      // Filter out the cancelled ticket
      const updatedPurchases = purchases.filter(
        (t) => t.id !== ticketToCancel.id,
      );

      // Update sessionStorage
      sessionStorage.setItem(
        "tickora-all-purchases",
        JSON.stringify(updatedPurchases),
      );

      // Update state
      setPurchasedTickets(updatedPurchases);

      // Close modal
      closeCancelModal();
    } catch (error) {
      console.error("Error cancelling ticket:", error);
    }
  }
  const { cartItems, cartTotal, clearCart, removeFromCart, updateQuantity } =
    useCart();

  function handleCheckout() {
    if (cartItems.length === 0) {
      return;
    }
    navigate("/checkout");
  }

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

        {/* Purchased Tickets Section */}
        {purchasedTickets.length > 0 && (
          <div className="mb-12">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-green-300">
                  Your Tickets
                </p>
                <h2 className="mt-2 text-2xl font-bold">Purchased Tickets</h2>
              </div>
            </div>
            <div className="space-y-6">
              {purchasedTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md"
                >
                  <div className="grid md:grid-cols-3">
                    <div className="p-6 md:col-span-2">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full bg-green-500/20 px-4 py-2 text-sm text-green-300">
                          {ticket.ticketLabel} Ticket
                        </span>
                        <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60">
                          Purchased
                        </span>
                      </div>

                      <h2 className="mt-4 text-2xl font-bold">
                        {ticket.eventName}
                      </h2>

                      <div className="mt-4 space-y-2 text-sm text-white/65">
                        <p>
                          {ticket.location} | {ticket.date}
                        </p>
                        <p>Quantity: {ticket.quantity}</p>
                        <p>
                          Total Paid: NGN {ticket.totalPaid.toLocaleString()}
                        </p>
                        <p className="break-all text-xs">
                          Ticket ID: {ticket.ticketId}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center bg-white p-6">
                      <QRCodeCanvas value={ticket.ticketId} size={140} />
                    </div>
                  </div>

                  {/* Cancel Button */}
                  <div className="border-t border-white/10 p-4">
                    <button
                      onClick={() => openCancelModal(ticket)}
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/20"
                    >
                      <Trash2 className="h-4 w-4" />
                      Cancel Ticket
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Cancel Ticket Modal */}
        {showCancelModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              onClick={closeCancelModal}
            />

            {/* Modal Content */}
            <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
              {/* Close Button */}
              <button
                onClick={closeCancelModal}
                className="absolute right-4 top-4 rounded-full p-2 text-white/50 transition hover:bg-white/10 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Warning Icon */}
              <div className="mb-6 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500/20">
                  <AlertTriangle className="h-8 w-8 text-red-400" />
                </div>
              </div>

              {/* Warning Message */}
              <h3 className="mb-4 text-center text-2xl font-bold text-white">
                Cancel Ticket?
              </h3>

              <div className="mb-6 space-y-3 rounded-2xl bg-black/20 p-4 text-sm">
                {ticketToCancel && (
                  <>
                    <div className="flex justify-between">
                      <span className="text-white/60">Event:</span>
                      <span className="font-semibold text-white">
                        {ticketToCancel.eventName}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Ticket Type:</span>
                      <span className="font-semibold text-white">
                        {ticketToCancel.ticketLabel}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Quantity:</span>
                      <span className="font-semibold text-white">
                        {ticketToCancel.quantity}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Total Paid:</span>
                      <span className="font-semibold text-green-300">
                        NGN {ticketToCancel.totalPaid.toLocaleString()}
                      </span>
                    </div>
                  </>
                )}
              </div>

              <div className="mb-6 rounded-xl border border-red-500/30 bg-red-500/10 p-4">
                <p className="text-sm text-red-300">
                  <strong>Warning:</strong> This action cannot be undone. Your
                  ticket will be permanently cancelled and you will lose access
                  to this event.
                </p>
              </div>

              <p className="mb-6 text-center text-sm text-white/60">
                Are you sure you want to proceed?
              </p>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <button
                  onClick={closeCancelModal}
                  className="flex-1 rounded-xl border border-white/20 bg-white/5 px-4 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Keep Ticket
                </button>
                <button
                  onClick={handleCancelTicket}
                  className="flex-1 rounded-xl bg-red-500 px-4 py-3 font-semibold text-white transition hover:bg-red-600"
                >
                  Yes, Cancel Ticket
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Cart Items Section */}
        {cartItems.length === 0 && purchasedTickets.length === 0 ? (
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
          cartItems.length > 0 && (
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
                      <h2 className="mt-2 text-2xl font-bold">
                        {item.eventName}
                      </h2>
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
                    <span>
                      {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
                    </span>
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

                <button
                  onClick={handleCheckout}
                  className="mt-6 w-full rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 py-4 font-semibold transition hover:scale-[1.02]"
                >
                  Confirm Purchase
                </button>
                <button
                  onClick={clearCart}
                  className="mt-3 w-full rounded-2xl border border-white/10 py-3 font-semibold text-white/70 transition hover:bg-white/10 hover:text-white"
                >
                  Clear Cart
                </button>
              </aside>
            </div>
          )
        )}
      </div>
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-black/60 text-white shadow-2xl shadow-purple-500/20 backdrop-blur-md transition duration-300 hover:-translate-y-1 hover:border-pink-300/60 hover:text-pink-200 ${
          showBackToTop
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>
      <Footer />
    </section>
  );
}

export default Ticket;
