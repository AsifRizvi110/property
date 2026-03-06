import { useParams, Link } from 'react-router-dom';
import { properties } from '../data/properties';
import { ArrowLeft, MapPin, DoorOpen, Droplet, Maximize, Phone, Mail, CheckCircle2 } from 'lucide-react';
import agentPhoto from '../assets/asifphoto2.jpg';


export default function PropertyDetail() {
  const { id } = useParams<{ id: string }>();
  const property = properties.find(p => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Property Not Found</h1>
        <p className="text-lg text-slate-600 mb-8">The property you are looking for does not exist or has been removed.</p>
        <Link to="/" className="px-6 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors">
          Return Home
        </Link>
      </div>
    );
  }

  const features = [
    "Prime Location in DHA",
    "24/7 Security System",
    "Modern Architecture",
    "Spacious Parking",
    "High-quality Fittings",
    "Near Commercial Area",
    "Servant Quarters",
    "Backup Generator Ready"
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to={-1 as any} className="inline-flex items-center text-slate-600 hover:text-slate-900 font-medium mb-8 transition-colors">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Listings
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-[500px] object-cover"
              />
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 bg-slate-900 text-white text-xs font-semibold rounded-full uppercase tracking-wider">
                      For {property.category}
                    </span>
                    <span className="px-3 py-1 bg-yellow-100 text-yellow-800 text-xs font-semibold rounded-full uppercase tracking-wider">
                      {property.type}
                    </span>
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{property.title}</h1>
                  <div className="flex items-center text-slate-500 text-lg">
                    <MapPin className="w-5 h-5 mr-2 text-yellow-500" />
                    {property.location}
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <div className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">{property.price}</div>
                  <div className="text-slate-500">Estimated Price</div>
                </div>
              </div>

              {/* Key Features Bar */}
              <div className="grid grid-cols-3 gap-6 py-6 border-y border-slate-100 mb-8">
                <div className="flex flex-col items-center justify-center text-slate-700">
                  <DoorOpen className="w-8 h-8 mb-2 text-slate-400" />
                  <span className="text-lg font-bold text-slate-900">{property.beds}</span>
                  <span className="text-sm font-medium text-slate-500">Bedrooms</span>
                </div>
                <div className="flex flex-col items-center justify-center text-slate-700 border-l border-r border-slate-100">
                  <Droplet className="w-8 h-8 mb-2 text-slate-400" />
                  <span className="text-lg font-bold text-slate-900">{property.baths}</span>
                  <span className="text-sm font-medium text-slate-500">Bathrooms</span>
                </div>
                <div className="flex flex-col items-center justify-center text-slate-700">
                  <Maximize className="w-8 h-8 mb-2 text-slate-400" />
                  <span className="text-lg font-bold text-slate-900">{property.area}</span>
                  <span className="text-sm font-medium text-slate-500">Area</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="text-2xl font-bold text-slate-900 mb-4">Description</h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {property.description}
                </p>
              </div>
            </div>

            {/* Features List */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Property Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center text-slate-700">
                    <CheckCircle2 className="w-5 h-5 mr-3 text-yellow-500 shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 sticky top-24">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Contact Agent</h3>
              
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-slate-200 rounded-full overflow-hidden mr-4">
                  <img src={agentPhoto} alt="Agent" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900">Syed Asif Rizvi</div>
                  <div className="text-slate-500">Senior Property Consultant</div>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <a href="tel:+923333120502" className="flex items-center justify-center w-full py-3 px-4 bg-slate-50 text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors border border-slate-200">
                  <Phone className="w-5 h-5 mr-2" />
                  +92 333 3120502
                </a>
                <a href="mailto:ali@dhaestate.com" className="flex items-center justify-center w-full py-3 px-4 bg-slate-50 text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-colors border border-slate-200">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Agent
                </a>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all" />
                </div>
                <div>
                  <input type="tel" placeholder="Your Phone" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all" />
                </div>
                <div>
                  <textarea rows={4} placeholder="I am interested in this property..." className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-yellow-500 text-slate-900 font-bold rounded-xl hover:bg-yellow-400 transition-colors shadow-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
