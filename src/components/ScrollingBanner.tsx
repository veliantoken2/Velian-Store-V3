import React from 'react';
import { Star, Zap, Shield, Clock, Award, Headphones, Download, CreditCard } from 'lucide-react';

const ScrollingBanner = () => {
  const bannerItems = [
    { icon: Star, text: "Produk Digital Premium", color: "text-yellow-400" },
    { icon: Download, text: "Download Instan", color: "text-green-400" },
    { icon: Shield, text: "Pembayaran Aman", color: "text-blue-400" },
    { icon: Headphones, text: "Support 24/7", color: "text-purple-400" },
    { icon: Award, text: "Garansi Uang Kembali", color: "text-cyan-400" },
    { icon: Zap, text: "Update Gratis Selamanya", color: "text-orange-400" },
    { icon: CreditCard, text: "Berbagai Metode Pembayaran", color: "text-pink-400" },
    { icon: Clock, text: "Akses Seumur Hidup", color: "text-indigo-400" },
  ];

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 border-b border-blue-500/20">
      {/* Fixed height for consistent banner size */}
      <div className="h-10 sm:h-12 flex items-center">
        <div className="flex animate-scroll">
          {/* First set */}
          {bannerItems.map((item, index) => (
            <div key={`first-${index}`} className="flex items-center space-x-1 sm:space-x-2 mx-3 sm:mx-6 whitespace-nowrap group">
              <div className="p-1 sm:p-1.5 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                <item.icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <span className="font-medium text-white text-xs sm:text-sm group-hover:text-cyan-300 transition-colors duration-300">
                {item.text}
              </span>
            </div>
          ))}
          {/* Duplicate for seamless scroll */}
          {bannerItems.map((item, index) => (
            <div key={`second-${index}`} className="flex items-center space-x-1 sm:space-x-2 mx-3 sm:mx-6 whitespace-nowrap group">
              <div className="p-1 sm:p-1.5 bg-white/10 rounded-lg group-hover:bg-white/20 transition-all duration-300">
                <item.icon className={`w-4 h-4 ${item.color}`} />
              </div>
              <span className="font-medium text-white text-xs sm:text-sm group-hover:text-cyan-300 transition-colors duration-300">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      {/* Gradient overlays */}
      <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-slate-900 to-transparent pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-slate-900 to-transparent pointer-events-none"></div>
      
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default ScrollingBanner;