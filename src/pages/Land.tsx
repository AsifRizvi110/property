import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import { Map } from 'lucide-react';

export default function Land() {
  const land = properties.filter(p => p.type === 'land' && p.category === 'buy');

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 flex items-center gap-4">
          <Map className="w-10 h-10 text-slate-900" />
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">Land for Sale</h1>
            <p className="text-lg text-slate-600">
              Commercial and residential plots for investment in DHA Karachi.
            </p>
          </div>
          
          
        </div>
        

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {land.length > 0 ? (
            land.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-slate-500">No land available for sale at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
