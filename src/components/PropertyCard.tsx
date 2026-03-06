import { Link } from 'react-router-dom';
import { MapPin, DoorOpen, Droplet, Maximize, Flame, Star } from 'lucide-react';
import { Property } from '../data/properties';
import { FC } from 'react';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard: FC<PropertyCardProps> = ({ property }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-slate-100 group flex flex-col h-full">
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
        />
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full uppercase tracking-wider">
            For {property.category}
          </span>
          {property.isTrending && (
            <span className="px-3 py-1 bg-red-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full flex items-center gap-1 shadow-sm">
              <Flame className="w-3 h-3" /> Trending
            </span>
          )}
          {property.isNewProject && (
            <span className="px-3 py-1 bg-yellow-500/90 backdrop-blur-sm text-slate-900 text-xs font-semibold rounded-full flex items-center gap-1 shadow-sm">
              <Star className="w-3 h-3 fill-current" /> New
            </span>
          )}
        </div>
        
        {/* Price Tag */}
        <div className="absolute bottom-4 left-4">
          <span className="px-4 py-2 bg-white/95 backdrop-blur-sm text-slate-900 font-bold rounded-lg shadow-sm">
            {property.price}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col grow">
        <h3 className="text-xl font-bold text-slate-900 mb-2 line-clamp-1 group-hover:text-yellow-600 transition-colors">
          {property.title}
        </h3>
        
        <div className="flex items-center text-slate-500 mb-6 text-sm">
          <MapPin className="w-4 h-4 mr-1 shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>

        {/* Features */}
        <div className="grid grid-cols-3 gap-4 py-4 border-t border-b border-slate-100 mb-6 mt-auto">
          <div className="flex flex-col items-center justify-center text-slate-600">
            <DoorOpen className="w-5 h-5 mb-1 text-slate-400" />
            <span className="text-xs font-medium">{property.beds} Beds</span>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-600 border-l border-r border-slate-100">
            <Droplet className="w-5 h-5 mb-1 text-slate-400" />
            <span className="text-xs font-medium">{property.baths} Baths</span>
          </div>
          <div className="flex flex-col items-center justify-center text-slate-600">
            <Maximize className="w-5 h-5 mb-1 text-slate-400" />
            <span className="text-xs font-medium">{property.area}</span>
          </div>
        </div>

        {/* Action */}
        <Link
          to={`/property/${property.id}`}
          className="w-full py-3 px-4 bg-slate-50 text-slate-900 font-semibold rounded-xl text-center hover:bg-slate-900 hover:text-white transition-colors duration-300 border border-slate-200 hover:border-slate-900"
        >
          More Details
        </Link>
      </div>
    </div>
  );
}
export default PropertyCard;
