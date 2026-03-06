import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Rent', path: '/rent' },
    { name: 'New Projects', path: '/new-projects' },
  ];

  const buyDropdownLinks = [
    { name: 'Buy Overview', path: '/buy' },
    { name: 'Flat', path: '/buy/flat' },
    { name: 'House', path: '/buy/house' },
    { name: 'Land', path: '/buy/land' },
  ];

  const rightLinks = [
    { name: 'Sell', path: '/sell' },
    { name: 'Trending', path: '/trending' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-slate-900 tracking-tight">DHA<span className="text-yellow-500">Estate</span></span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                  isActive(link.path) ? 'text-yellow-500' : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Dropdown */}
            <div className="relative group">
              <button
                className={`flex items-center text-sm font-medium transition-colors hover:text-yellow-500 ${
                  isActive('/buy') ? 'text-yellow-500' : 'text-slate-700'
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                Buy <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-200 ${
                  isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  {buyDropdownLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`block px-4 py-2 text-sm hover:bg-slate-50 hover:text-yellow-500 ${
                        location.pathname === link.path ? 'text-yellow-500 bg-slate-50' : 'text-slate-700'
                      }`}
                      role="menuitem"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {rightLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-yellow-500 ${
                  isActive(link.path) ? 'text-yellow-500' : 'text-slate-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-yellow-500 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 visible' : 'max-h-0 opacity-0 invisible overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t border-slate-100">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(link.path) ? 'text-yellow-500 bg-slate-50' : 'text-slate-700 hover:text-yellow-500 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="px-3 py-2">
            <div className="text-base font-medium text-slate-900 mb-2">Buy</div>
            <div className="pl-4 space-y-1 border-l-2 border-slate-100">
              {buyDropdownLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-sm font-medium ${
                    location.pathname === link.path ? 'text-yellow-500 bg-slate-50' : 'text-slate-600 hover:text-yellow-500 hover:bg-slate-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {rightLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(link.path) ? 'text-yellow-500 bg-slate-50' : 'text-slate-700 hover:text-yellow-500 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
    
  );
}
