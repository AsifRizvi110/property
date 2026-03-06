import { CheckCircle2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';

export default function Sell() {
  const [isSubmitted, setIsSubmitted] = useState(false);


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setIsSubmitted(true);
      emailjs
    .sendForm(
      'service_kgihxvc',
      'template_wlek45k',
      e.currentTarget,
      'IveXZ-Jq2g8-lO7Up'
    )
    .then(() => {
      setIsSubmitted(true);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
    });
};

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Sell Your Property</h1>
          <p className="text-xl text-slate-600">
            List your property with DHA Estate and reach thousands of potential buyers.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-white rounded-2xl p-12 shadow-sm border border-slate-100 text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Submitted!</h2>
            <p className="text-lg text-slate-600 mb-8">
              Thank you for choosing DHA Estate. One of our expert agents will contact you shortly to discuss listing your property.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-8 py-3 bg-slate-900 text-white font-semibold rounded-lg hover:bg-slate-800 transition-colors"
            >
              Submit Another Property
            </button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-slate-100">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Details */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                    <input type="text" id="firstName" name="firstName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                    <input type="text" id="lastName" name="lastName" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                    <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all" />
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-6 border-b border-slate-100 pb-4">Property Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="propertyType" className="block text-sm font-medium text-slate-700 mb-2">Property Type</label>
                    <select id="propertyType" name="propertyType" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all bg-white">
                      <option value="">Select Type</option>
                      <option value="house">House</option>
                      <option value="flat">Flat</option>
                      <option value="land">Land</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="phase" className="block text-sm font-medium text-slate-700 mb-2">DHA Phase</label>
                    <select id="phase" name="phase" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all bg-white">
                      <option value="">Select Phase</option>
                      <option value="phase1">Phase 1</option>
                      <option value="phase2">Phase 2</option>
                      <option value="phase4">Phase 4</option>
                      <option value="phase5">Phase 5</option>
                      <option value="phase6">Phase 6</option>
                      <option value="phase7">Phase 7</option>
                      <option value="phase8">Phase 8</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-2">Property Address</label>
                    <input type="text" id="address" name= "address" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all" />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">Additional Details</label>
                    <textarea id="description" name="description" rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 outline-none transition-all"></textarea>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="submit"
                  className="w-full py-4 bg-yellow-500 text-slate-900 font-bold text-lg rounded-xl hover:bg-yellow-400 transition-colors shadow-md hover:shadow-lg"
                >
                  Submit Property Details
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
