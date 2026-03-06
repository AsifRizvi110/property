import { Link } from 'react-router-dom';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { Home, Building2, Map } from 'lucide-react';

export default function Buy() {
  const buyProperties = properties.filter(p => p.category === 'buy');

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Buy Property in DHA Karachi</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our extensive listings of houses, flats, and land available for sale.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <Link to="/buy/house" className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-50 transition-colors">
              <Home className="w-10 h-10 text-slate-900 group-hover:text-yellow-600 transition-colors" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Houses</h2>
            <p className="text-slate-500">Luxury villas and family homes in prime locations.</p>
          </Link>
          
          <Link to="/buy/flat" className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-50 transition-colors">
              <Building2 className="w-10 h-10 text-slate-900 group-hover:text-yellow-600 transition-colors" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Flats</h2>
            <p className="text-slate-500">Modern apartments and penthouses with premium amenities.</p>
          </Link>

          <Link to="/buy/land" className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-slate-100 group text-center">
            <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-50 transition-colors">
              <Map className="w-10 h-10 text-slate-900 group-hover:text-yellow-600 transition-colors" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-3">Land</h2>
            <p className="text-slate-500">Commercial and residential plots for investment.</p>
          </Link>
        </div>

        {/* All Buy Properties */}
        <div>
          <h2 className="text-3xl font-bold text-slate-900 mb-8">All Properties for Sale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {buyProperties.length > 0 ? (
              buyProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))
            ) : (
              <div className="col-span-full text-center py-20">
                <p className="text-xl text-slate-500">No properties available for sale at the moment.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
