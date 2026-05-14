import { CheckCircle, User } from "lucide-react";
import { QRCodeCanvas } from "qrcode.react";
import { Link, useLocation } from "react-router-dom";

function getStoredPurchase() {
  try {
    const storedPurchase = sessionStorage.getItem("tickora-last-purchase");
    if (storedPurchase) {
      return JSON.parse(storedPurchase);
    }
    return null;
  } catch {
    return null;
  }
}

function Success() {
  const location = useLocation();
  const purchaseData = location.state || getStoredPurchase();
  const buyer = purchaseData?.buyer;
  const generatedTickets = purchaseData?.tickets || [];

  return (
    <section className="min-h-screen bg-black pb-20 pt-28 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-green-500 bg-green-500/20">
            <CheckCircle className="h-12 w-12 text-green-300" />
          </div>

          <h1 className="mt-8 text-5xl font-bold">Payment Successful!</h1>
          <p className="mt-4 text-gray-400">
            Your tickets have been generated successfully.
          </p>
          {buyer && (
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/70">
              <User className="h-4 w-4 text-pink-300" />
              <span>
                Ticket purchased by <strong className="text-white">{buyer.fullName}</strong>
              </span>
            </div>
          )}
        </div>

        {generatedTickets.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <h2 className="text-2xl font-bold">No tickets to show</h2>
            <p className="mt-2 text-white/55">
              Your cart is empty. Browse events to add tickets.
            </p>
            <Link
              to="/events"
              className="mt-8 inline-flex rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white"
            >
              Browse Events
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-8">
              {generatedTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
                >
                  <div className="grid md:grid-cols-3">
                    <div className="p-8 md:col-span-2">
                      <span className="rounded-full bg-purple-500/20 px-4 py-2 text-sm text-purple-300">
                        {ticket.ticketLabel} Ticket
                      </span>

                      <h2 className="mt-5 text-3xl font-bold">
                        {ticket.eventName}
                      </h2>

                      <div className="mt-6 space-y-3 text-gray-300">
                        <p>Quantity: {ticket.quantity}</p>
                        <p>Total Paid: NGN {ticket.totalPaid.toLocaleString()}</p>
                        <p className="break-all">Ticket ID: {ticket.ticketId}</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center bg-white p-8">
                      <QRCodeCanvas value={ticket.ticketId} size={180} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/ticket"
                className="inline-flex rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 px-8 py-4 font-semibold transition hover:scale-105"
              >
                View Tickets
              </Link>
              <Link
                to="/events"
                className="inline-flex rounded-2xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10 hover:scale-105"
              >
                Browse More Events
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Success;
