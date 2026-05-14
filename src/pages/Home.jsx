import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import About from "../About";
import FeaturedEvents from "../FeaturedEvents";
import Hero from "../hero";

function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowBackToTop(window.scrollY > 500);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <>
      <Hero />
      <FeaturedEvents />
      <About />

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
    </>
  );
}

export default Home;
