import events from "./events";
import EventCard from "./eventCard";

function FeaturedEvents() {
  return (
    <section className="bg-black text-white py-20">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">


          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold">
                Featured Events
            </h2>

            <p className="mt-4 text-gray-400">
                Explore top trending events across Nigeria, handpicked for you.
            </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {events.slice(0, 6).map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>


        </div>

    </section>

    );
  }
  
  export default FeaturedEvents;
