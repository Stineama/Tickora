import { ArrowLeft, CreditCard } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../useCart";
import { generateTicketId } from "../generateTicketId";

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, cartTotal, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const purchasedTickets = cartItems.map((item) => ({
      ...item,
      ticketId: generateTicketId(item.ticketType),
      totalPaid: item.price * item.quantity,
    }));

    const purchaseData = {
      buyer: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        fullName: `${formData.firstName} ${formData.lastName}`,
      },
      tickets: purchasedTickets,
    };

    // Accumulate purchased tickets instead of replacing
    let allPurchasedTickets = [];
    try {
      const storedPurchase = localStorage.getItem("tickora-all-purchases");
      if (storedPurchase) {
        allPurchasedTickets = JSON.parse(storedPurchase);
      }
    } catch (e) {
      // Ignore parsing errors
    }
    allPurchasedTickets = [...allPurchasedTickets, ...purchasedTickets];
    localStorage.setItem(
      "tickora-all-purchases",
      JSON.stringify(allPurchasedTickets)
    );

    // Also store the last purchase data for backward compatibility
    localStorage.setItem(
      "tickora-last-purchase",
      JSON.stringify(purchaseData)
    );

    clearCart();
    navigate("/success", { state: purchaseData });
  };

  if (cartItems.length === 0) {
    return (
      <section className="min-h-screen bg-black px-6 pb-20 pt-32 text-white lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10">
            <Link
              to="/ticket"
              className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-pink-300"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Cart
            </Link>
          </div>
          <div className="rounded-3xl border border-dashed border-white/15 bg-white/5 p-10 text-center backdrop-blur-md">
            <p className="text-lg font-semibold">Your cart is empty</p>
            <p className="mt-2 text-sm text-white/55">
              Add some tickets before proceeding to checkout.
            </p>
            <Link
              to="/events"
              className="mt-8 inline-flex rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              Browse Events
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black px-6 pb-20 pt-32 text-white lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10">
          <Link
            to="/ticket"
            className="inline-flex items-center gap-2 text-sm text-white/60 transition hover:text-pink-300"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Cart
          </Link>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-pink-300">
            Checkout
          </p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">
            Buyer Information
          </h1>
          <p className="mt-4 max-w-2xl text-white/65">
            Please provide your details to complete the purchase.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1fr_22rem]">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
              <h2 className="text-xl font-bold">Personal Details</h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-white/70"
                  >
                    First Name <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`mt-2 w-full rounded-xl border bg-black/30 px-4 py-3 text-white placeholder-white/30 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400 ${
                      errors.firstName ? "border-red-500" : "border-white/10"
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-white/70"
                  >
                    Last Name <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`mt-2 w-full rounded-xl border bg-black/30 px-4 py-3 text-white placeholder-white/30 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400 ${
                      errors.lastName ? "border-red-500" : "border-white/10"
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.lastName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/70"
                  >
                    Email Address <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-2 w-full rounded-xl border bg-black/30 px-4 py-3 text-white placeholder-white/30 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400 ${
                      errors.email ? "border-red-500" : "border-white/10"
                    }`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-white/70"
                  >
                    Phone Number <span className="text-pink-400">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`mt-2 w-full rounded-xl border bg-black/30 px-4 py-3 text-white placeholder-white/30 focus:border-pink-400 focus:outline-none focus:ring-1 focus:ring-pink-400 ${
                      errors.phone ? "border-red-500" : "border-white/10"
                    }`}
                    placeholder="+234 800 123 4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-400">{errors.phone}</p>
                  )}
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 py-4 font-semibold text-white transition hover:scale-[1.02]"
            >
              <CreditCard className="h-5 w-5" />
              Complete Purchase
            </button>
          </form>

          <aside className="h-fit rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
            <h2 className="text-xl font-bold">Order Summary</h2>

            <div className="mt-6 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-xl border border-white/5 bg-black/20 p-3"
                >
                  <img
                    src={item.image}
                    alt={item.eventName}
                    className="h-16 w-16 rounded-lg object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="truncate text-sm font-semibold">
                      {item.eventName}
                    </p>
                    <p className="text-sm text-white/55">
                      {item.ticketLabel} × {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">
                    NGN {(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-white/65">
              <div className="flex justify-between">
                <span>Tickets</span>
                <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
              </div>
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>NGN {cartTotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
              <span className="text-white/65">Total</span>
              <span className="text-2xl font-black">
                NGN {cartTotal.toLocaleString()}
              </span>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

export default Checkout;