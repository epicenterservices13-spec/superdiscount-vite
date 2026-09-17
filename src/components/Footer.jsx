import React from 'react';
import { Tag, Instagram, MapPin, Heart, ArrowUp } from 'lucide-react';
import { INSTAGRAM_INFO } from '../data/instagramPosts';

export default function Footer({ lang }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 py-12 text-xs">
      <div className="max-w-7xl mx-auto px-4 space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-red-600 flex items-center justify-center font-black text-white text-xs">
                99¢
              </div>
              <span className="text-lg font-extrabold text-white tracking-tight">
                SUPER DISCOUNT <span className="text-amber-400">.99</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              {lang === 'en'
                ? 'Your local neighborhood brick & mortar bargain hub in El Sereno! Serving East Los Angeles with quality household cleaning supplies, snacks, fiesta piñatas, and daily 99¢ deals.'
                : 'Tu tienda local de ofertas en El Sereno. Sirviendo a East Los Angeles con artículos de limpieza, botanas, piñatas para fiestas y especiales diarios a 99¢.'}
            </p>
            <div className="flex items-center gap-2 text-amber-400 font-bold">
              <MapPin className="w-4 h-4 text-red-500" />
              <span>5123 E Huntington Dr, El Sereno, Los Angeles, CA 90032</span>
            </div>
          </div>

          {/* Instagram Spotlight */}
          <div className="md:col-span-4 space-y-2">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">
              {lang === 'en' ? 'Official Instagram' : 'Instagram Oficial'}
            </h4>
            <p className="text-slate-400 text-xs">
              {lang === 'en' ? 'Follow us for daily unboxing videos, deal alerts, and story highlights!' : '¡Síguenos para videos de unboxing diarios y alertas de ofertas!'}
            </p>
            <a 
              href={INSTAGRAM_INFO.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-extrabold text-pink-400 hover:text-pink-300 pt-1"
            >
              <Instagram className="w-4 h-4" />
              <span>{INSTAGRAM_INFO.handle}</span>
            </a>
          </div>

          {/* Navigation & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end space-y-4">
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-300 font-bold transition-all cursor-pointer"
            >
              <ArrowUp className="w-4 h-4 text-amber-400" />
              <span>{lang === 'en' ? 'Back to Top' : 'Volver Arriba'}</span>
            </button>
            <div className="text-right">
              <p className="text-slate-500 text-[11px]">Mon-Sat: 8am-8pm | Sun: 9am-7pm</p>
              <p className="text-slate-500 text-[11px]">Accepts EBT & All Major Credit Cards</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} Super Discount .99 (El Sereno, CA). All rights reserved.</p>
          <div className="flex items-center gap-1">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 fill-red-500 text-red-500" />
            <span>for the El Sereno Community</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
