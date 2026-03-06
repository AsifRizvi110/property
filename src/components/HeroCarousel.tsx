import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1920",
    title: "Luxury Living in DHA Karachi",
    subtitle: "Discover premium houses, flats, and commercial properties in the most sought-after neighborhoods.",
  },
  {
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1920",
    title: "Find Your Dream Home",
    subtitle: "Explore our exclusive collection of modern villas and family homes tailored for your lifestyle.",
  },
  {
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1920",
    title: "Invest in Prime Real Estate",
    subtitle: "Secure your future with high-yield commercial and residential plots in DHA's growing phases.",
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative h-[80vh] min-h-\[600px\] w-full overflow-hidden group mt-20">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Image Overlay */}
          <div className="absolute inset-0 bg-slate-900/40 z-10" />

          {/* Image */}
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-\[10000ms] ease-out"
            style={{ transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)' }}
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center justify-center text-center px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-lg transform transition-all duration-700 translate-y-0 opacity-100">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-slate-200 mb-10 max-w-2xl mx-auto drop-shadow-md">
                {slide.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/buy"
                  className="px-8 py-4 bg-yellow-500 text-slate-900 font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 w-full sm:w-auto text-center"
                >
                  View Properties
                </Link>
                <Link
                  to="/sell"
                  className="px-8 py-4 bg-white/10 backdrop-blur-md text-white border border-white/30 font-semibold rounded-lg hover:bg-white/20 transition-colors duration-300 w-full sm:w-auto text-center"
                >
                  List Your Property
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-opacity opacity-0 group-hover:opacity-100 hidden md:block"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-opacity opacity-0 group-hover:opacity-100 hidden md:block"
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-yellow-500 w-8 h-3'
                : 'bg-white/50 w-3 h-3 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}