import { properties } from '../data/properties';
import PropertyCard from './PropertyCard';

export default function AllHouses() {
  // Filter all houses
  const allHouses = properties.filter(p => p.type === 'house');
  
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-8">All Houses for Sale</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allHouses.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </div>
  );
}