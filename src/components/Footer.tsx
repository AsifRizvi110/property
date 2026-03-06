import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold text-white tracking-tight">DHA<span className="text-yellow-500">Estate</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Your trusted partner for premium real estate in DHA Karachi. We specialize in luxury houses, flats, and commercial properties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors"><Twitter className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="text-slate-400 hover:text-yellow-500 transition-colors"><Linkedin className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/buy" className="text-slate-400 hover:text-yellow-500 transition-colors text-sm">Buy a Property</Link></li>
              <li><Link to="/rent" className="text-slate-400 hover:text-yellow-500 transition-colors text-sm">Rent a Property</Link></li>
              <li><Link to="/sell" className="text-slate-400 hover:text-yellow-500 transition-colors text-sm">Sell your Property</Link></li>
              <li><Link to="/new-projects" className="text-slate-400 hover:text-yellow-500 transition-colors text-sm">New Projects</Link></li>
              <li><Link to="/trending" className="text-slate-400 hover:text-yellow-500 transition-colors text-sm">Trending Listings</Link></li>
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Property Types</h3>
            <ul className="space-y-3">
              <li><Link to="/buy/house" className="text-slate-400 hover:text-yellow-500 transition-colors text-sm">Luxury Houses</Link></li>
              <li><Link to="/buy/flat" className="text-slate-400 hover:text-yellow-500 transition-colors text-sm">Modern Flats</Link></li>
              <li><Link to="/buy/land" className="text-slate-400 hover:text-yellow-500 transition-colors text-sm">Commercial Land</Link></li>
              <li><Link to="/buy/land" className="text-slate-400 hover:text-yellow-500 transition-colors text-sm">Residential Plots</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">123 Main Boulevard, Phase 6, DHA, Karachi, Pakistan</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-yellow-500 shrink-0" />
                <span className="text-slate-400 text-sm">+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-yellow-500 shrink-0" />
                <span className="text-slate-400 text-sm">info@dhaestate.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DHA Estate. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-slate-500 hover:text-white text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
