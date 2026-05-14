import { ShieldCheck, Ticket, Zap } from "lucide-react";

function About() {
    return (
        <section className="relative bg-black text-white py-24 overflow-hidden">

            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <span className="bg-white/10 border border-white/10 px-4 py-2 rounded-full text-sm text-purple-300">
                            About Tickora
                        </span>

                        <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                            Modern Ticketing
                            <span className="bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                                {" "}Made Seamless
                            </span>

                        </h2>

                        <p className="mt-6 text-lg text-gray-400 leading-relaxed">
                            Tickora helps users discover, book, and manage premium event experiences effortlessly. From concerts
                            to conferences to festivals and exhibitions, we provide fast and secure digital ticketing for every occasion.
                        </p>


                        <div className="grid grid-cols-2 gap-6 mt-10">

                           <div className=" bg-white/5 border border-white/10 rounded-3xl p-6">
                            <h3 className="text-3xl font-bold">
                                120+
                             </h3>
                                <p className="mt-2 text-gray-400">
                                    Events Hosted
                                </p>
                            </div>


                            <div className="bg-white/5 border border-white/10 pt-6 rounded-3xl">
                                <h3 className="text-3xl font-bold">
                                    50K+
                                </h3>

                                <p className="mt-2 text-gray-400">
                                 Tickets Sold
                                </p>
                            </div>

                    </div>
                 </div>


                    <div className="grid gap-6">

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl
                        hover:-translate-y-1.25 transition duration-300">

                            <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <Ticket size={28} />
                            </div>

                            <h3 className="text-2xl font-bold mt-6">
                                Easy Booking
                            </h3>

                            <p className="mt-4 text-gray-400">
                                Book tickets in seconds with a smooth and user-friendly experience designed for speed and convenience.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl
                        hover:-translate-y-1.25 transition duration-300">

                            <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <ShieldCheck size={28} />
                            </div>

                            <h3 className="text-2xl font-bold mt-6">
                                Secure Tickets
                            </h3>

                            <p className="mt-4 text-gray-400">
                                Every ticket comes with unique QR verification to ensure authenticity and eliminate ticket fraud, giving you peace of mind.
                            </p>
                        </div>

                        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl
                        hover:-translate-y-1.25 transition duration-300">

                            <div className="w-14 h-14 rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                                <Zap size={28} />
                            </div>

                            <h3 className="text-2xl font-bold mt-6">
                                Fast Experience
                            </h3>

                            <p className="mt-4 text-gray-400 leading-relaxed">
                                Enjoy lightning-fast browsing, instant ticket generation and a premium digital experience.
                            </p>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default About;