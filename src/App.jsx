import './App.css'
import EventDetails from './EventDetails';
import Footer from './footer';
import Navbar from './navbar'
import Events from './pages/Events';
import Home from './pages/Home';
import Ticket from './pages/Ticket';
import { Route, Routes } from 'react-router-dom';

function App() {
return (
  <div className="bg-black min-h-screen">
    <Navbar />

    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/events" element={<Events />} />
    <Route path="/ticket" element={<Ticket />} />
    <Route path="/events/:id" element={<EventDetails />} />
  </Routes>
    <Footer />

  </div>
);
}

export default App;
