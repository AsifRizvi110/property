/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import Rent from './pages/Rent';
import NewProjects from './pages/NewProjects';
import Buy from './pages/Buy';
import Flat from './pages/Flat';
import House from './pages/House';
import Land from './pages/Land';
import Sell from './pages/Sell';
import Trending from './pages/Trending';
import PropertyDetail from './pages/PropertyDetail';
import NotFound from './pages/NotFound';
//whatsapp
import FloatingWhatsApp from './components/FloatingWhatsApp';
import AllHouses from './components/AllHouses';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen font-sans text-slate-900 bg-white">
        <Navbar />
        <main className="grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rent" element={<Rent />} />
            <Route path="/new-projects" element={<NewProjects />} />
            
            {/* Buy Routes */}
            <Route path="/buy" element={<Buy />} />
            <Route path="/buy/flat" element={<Flat />} />
            {/* <Route path="/buy/house" element={<House />} /> */}
            <Route path="/buy/land" element={<Land />} />
            
            <Route path="/sell" element={<Sell />} />
            <Route path="/trending" element={<Trending />} />
            <Route path="/property/:id" element={<PropertyDetail />} />
            <Route path="/buy/house" element={<AllHouses />} />
            <Route path="/" element={<Home />} />
            
            
            {/* 404 Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}
