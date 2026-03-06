import { Link } from "react-router-dom";
import { properties } from "../data/properties";
import HeroCarousel from "../components/HeroCarousel";
import PropertyCard from "../components/PropertyCard";
import { Flame, Star, Building2, Home as HomeIcon, Map } from "lucide-react";

export default function Home() {
  const featuredHouses = properties
    .filter((p) => p.type === "house")
    .slice(0, 3);
  const trendingProperties = properties.filter((p) => p.isTrending).slice(0, 3);
  const newProjects = properties.filter((p) => p.isNewProject).slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50">
      <HeroCarousel />

      {/* Featured Houses Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Featured Houses
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Discover our hand-picked selection of premium houses available for
            sale and rent in DHA Karachi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredHouses.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/buy/house"
            className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 shadow-sm text-base font-medium rounded-md text-slate-700 bg-white hover:bg-slate-50 transition-colors"
          >
            View All Houses
          </Link>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 flex items-center gap-3 mb-2">
                <Flame className="w-8 h-8 text-red-500" />
                Trending Now
              </h2>
              <p className="text-slate-600">
                The most viewed properties this week.
              </p>
            </div>
            <Link
              to="/trending"
              className="hidden md:inline-flex items-center text-yellow-600 font-semibold hover:text-yellow-700"
            >
              See All Trending &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trendingProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Property Types Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Explore Property Types
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Find exactly what you're looking for by browsing our specialized
            categories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link
            to="/buy/house"
            className="group relative rounded-2xl overflow-hidden bg-slate-900 h-64 shadow-md hover:shadow-xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800"
              alt="Houses"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <HomeIcon className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Houses</h3>
              <p className="text-slate-300">Luxury villas and family homes</p>
            </div>
          </Link>

          <Link
            to="/buy/flat"
            className="group relative rounded-2xl overflow-hidden bg-slate-900 h-64 shadow-md hover:shadow-xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800"
              alt="Flats"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <Building2 className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Flats</h3>
              <p className="text-slate-300">Modern apartments and penthouses</p>
            </div>
          </Link>

          <Link
            to="/buy/land"
            className="group relative rounded-2xl overflow-hidden bg-slate-900 h-64 shadow-md hover:shadow-xl transition-all"
          >
            <img
              src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
              alt="Land"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-linear-to-t from-slate-900 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <Map className="w-10 h-10 text-yellow-500 mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Land</h3>
              <p className="text-slate-300">Commercial and residential plots</p>
            </div>
          </Link>
        </div>
      </section>

      {/* New Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold flex items-center gap-3 mb-2">
                <Star className="w-8 h-8 text-yellow-500 fill-current" />
                New Projects
              </h2>
              <p className="text-slate-400">
                Exclusive new developments in DHA Karachi.
              </p>
            </div>
            <Link
              to="/new-projects"
              className="hidden md:inline-flex items-center text-yellow-500 font-semibold hover:text-yellow-400"
            >
              View All Projects &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newProjects.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-yellow-500 relative overflow-hidden">
        {/* Abstract background shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-yellow-400 opacity-50 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-600 opacity-30 blur-3xl"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            List Your Property in DHA Karachi
          </h2>
          <p className="text-xl text-slate-800 mb-10 max-w-2xl mx-auto">
            Reach thousands of potential buyers and tenants. Our expert agents
            will help you get the best value for your property.
          </p>
          <Link
            to="/sell"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white bg-slate-900 hover:bg-slate-800 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1"
          >
            Start Selling Today
          </Link>
          {/* Whatsapp */}
          <div className="flex flex-wrap justify-center gap-4">
            {/* <Link
              to="/contact"
              className="bg-amber-600 hover:bg-amber-700 text-white px-10 py-4 rounded-xl text-lg font-bold transition-all shadow-xl hover:shadow-amber-600/40">
              Start Application
            </Link> */}
            {/* <a
              href="https://wa.me/923333120502"
              target="_blank"
              className=" whatsap bg-white hover:bg-slate-100 text-slate-950 px-10 py-4 rounded-xl text-lg font-bold transition-all"
            >
              Chat on WhatsApp
            </a> */}
          </div>
        </div>
      </section>
    </div>
  );
}
