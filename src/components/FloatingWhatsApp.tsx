import React from 'react';
import { MessageCircle } from 'lucide-react';

const FloatingWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/923333120502"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-60 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-[0_10px_30px_rgba(34,197,94,0.4)] transition-all hover:scale-110 active:scale-95 group flex items-center justify-center overflow-hidden"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold text-sm whitespace-nowrap">
        Chat with Us
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
