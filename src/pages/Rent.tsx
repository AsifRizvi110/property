import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';

export default function Rent() {
  const rentProperties = properties.filter(p => p.category === 'rent');

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Properties for Rent</h1>
          <p className="text-lg text-slate-600">
            Find the perfect rental home in DHA Karachi. Browse our selection of houses and flats.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rentProperties.length > 0 ? (
            rentProperties.map(property => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <div className="col-span-full text-center py-20">
              <p className="text-xl text-slate-500">No rental properties available at the moment.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
