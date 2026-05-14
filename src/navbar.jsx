import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useCart } from "./useCart";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { cartCount } = useCart();
    const navLinkClass = ({ isActive }) =>
        `transition duration-300 hover:text-purple-400 ${
            isActive ? "text-purple-400" : "text-white"
        }`;
    const mobileNavLinkClass = ({ isActive }) =>
        `transition duration-300 hover:text-purple-400 ${
            isActive ? "text-purple-400" : "text-white"
        }`;

    return (
        <nav className="w-full fixed top-0 left-0 z-50 bg-black/70 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-6 lg:px-10">

                <div className="flex items-center justify-between h-20">

                    <Link to="/" className="flex items-center gap-2">
                        <div className="relative w-11 h-11 rounded-2xl bg-linear-to-br from-purple-500 via-pink-500 to-purple-700 flex 
                        items-center justify-center shadow-lg shadow-purple-500/40 overflow-hidden">

                            <div className="absolute inset-0 bg-white/10"></div>
                            <span className="text-white text-xl font-extrabold tracking-wide">T</span>
                        </div>

                        <h1 className="text-2xl font-bold text-white tracking-wide">
                            Tickora
                            </h1>
                            </Link>

                    <ul className="hidden md:flex items-center gap-10 text-white font-medium">
                        <li>
                            <NavLink to="/" end className={navLinkClass}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/events" className={navLinkClass}>
                                Events
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/ticket" className={navLinkClass}>
                                Ticket
                            </NavLink>
                        </li>

                    </ul>

                    <div className="hidden md:flex items-center gap-5">

                        <Link to="/ticket" className="relative">
                            <ShoppingCart className="w-6 h-6 text-white transition hover:text-purple-400" />

                            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        </Link>

                        <Link to="/ticket" className="bg-linear-to-r from-purple-500 to-pink-500 px-5 py-2 rounded-xl text-white font-semibold
                        hover:scale-105 transition duration-300 shadow-lg shadow-purple-500/20">
                            Get Tickets
                        </Link>
                    </div>

                    <div className="flex items-center gap-4 md:hidden">
                        <Link to="/ticket" className="relative">
                            <ShoppingCart className="w-6 h-6 text-white transition hover:text-purple-400" />
                            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                {cartCount}
                            </span>
                        </Link>
                        <button className="text-white" onClick={() => setMenuOpen(!menuOpen)}>
                            {menuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {menuOpen && (
                <div className="md:hidden bg-[#0d0d0d0d] border-t border-white/10 px-6 py-6">
                    <ul className="flex flex-col gap-6 text-white font-medium">

                        <li>
                            <NavLink to="/" end onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/events" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>
                                Events
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/ticket" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>
                                Ticket
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/about" onClick={() => setMenuOpen(false)} className={mobileNavLinkClass}>
                                About
                            </NavLink>
                        </li>

                    <Link to="/ticket" onClick={() => setMenuOpen(false)} className="bg-linear-to-r from-purple-500 to-pink-500 py-3 rounded-xl text-center text-white font-semibold">
                            Get Tickets
                    </Link>
                    </ul>
                </div>
            )}
            </nav>
    );
}

export default Navbar;
