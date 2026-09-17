import React from 'react';
import { Tag, MapPin, Instagram, Sparkles, Flame, CheckCircle, ArrowRight, Clock } from 'lucide-react';
import { INSTAGRAM_INFO } from '../data/instagramPosts';

export default function Hero({ lang, onExploreDeals, setIsVipOpen }) {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-6 pb-12 md:py-16 border-b border-slate-800">
      {/* Background Decorative Lighting */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-red-600/15 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Neighborhood Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 text-xs font-semibold text-amber-400 shadow-inner">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <MapPin className="w-3.5 h-3.5 text-red-500" />
              <span>
                {lang === 'en' 
                  ? 'El Sereno’s Favorite Brick & Mortar Store' 
                  : 'La Tienda de Descuentos Favorita de El Sereno'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15]">
              {lang === 'en' ? (
                <>
                  Big Savings for <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-amber-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
                    El Sereno Families & Neighbors!
                  </span>
                </>
              ) : (
                <>
                  Grandes Ahorros para la <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-amber-400 via-red-500 to-yellow-400 bg-clip-text text-transparent">
                    Comunidad de El Sereno!
                  </span>
                </>
              )}
            </h1>

            {/* Description */}
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
              {lang === 'en' 
                ? 'Your local neighborhood one-stop bargain shop for household cleaning products, snacks, Mexican candy, party piñatas, cookware, and daily 99¢ specials. Drop by 5123 E Huntington Dr!' 
                : 'Tu tienda local para productos de limpieza del hogar, botanas, dulces mexicanos, piñatas para fiestas, artículos de cocina y especiales diarios a 99¢. ¡Visítanos en 5123 E Huntington Dr!'}
            </p>

            {/* Instagram Spotlight Card */}
            <div className="p-3.5 rounded-2xl glass-panel bg-slate-900/60 border border-slate-800 flex items-center justify-between gap-4 max-w-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-0.5">
                  <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center">
                    <Instagram className="w-5 h-5 text-pink-400" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-bold text-white">{INSTAGRAM_INFO.handle}</span>
                    <span className="bg-pink-500/20 text-pink-300 text-[10px] font-bold px-1.5 py-0.2 rounded">
                      Official IG
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    {lang === 'en' ? 'Daily deal drops & new inventory arrivals' : 'Llegadas de productos y ofertas diarias'}
                  </p>
                </div>
              </div>
              <a 
                href={INSTAGRAM_INFO.fullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-bold text-pink-400 hover:text-pink-300 underline shrink-0"
              >
                {lang === 'en' ? 'Follow on IG →' : 'Seguir en IG →'}
              </a>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button 
                onClick={onExploreDeals}
                className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-extrabold text-sm px-6 py-3 rounded-xl shadow-lg shadow-red-600/30 transition-all active:scale-95 cursor-pointer"
              >
                <Flame className="w-4 h-4 text-yellow-300" />
                <span>{lang === 'en' ? 'Browse Weekly Deals' : 'Ver Ofertas de la Semana'}</span>
              </button>

              <button 
                onClick={() => setIsVipOpen(true)}
                className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-bold text-sm px-5 py-3 rounded-xl transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-amber-400" />
                <span>{lang === 'en' ? 'Get 99¢ Text VIP Alerts' : 'Alertas VIP por Texto'}</span>
              </button>
            </div>

            {/* Guarantees / Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>{lang === 'en' ? 'Open 7 Days A Week' : 'Abierto 7 Días a la Semana'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                <span>{lang === 'en' ? 'Free Store Parking' : 'Estacionamiento Gratis'}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-cyan-400" />
                <span>{lang === 'en' ? 'Accepts EBT & Cards' : 'Aceptamos Tarjetas y EBT'}</span>
              </div>
            </div>

          </div>

          {/* Right Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl shadow-amber-500/10 group">
              <img 
                src="/images/hero_storefront.jpg" 
                alt="Super Discount .99 Storefront in El Sereno" 
                className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

              {/* Overlay Badge */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel bg-slate-950/90 border border-slate-700 flex justify-between items-center">
                <div>
                  <span className="text-[10px] font-black uppercase text-amber-400 tracking-wider">
                    {lang === 'en' ? 'Store Address' : 'Ubicación'}
                  </span>
                  <p className="text-sm font-bold text-white">5123 E Huntington Dr</p>
                  <p className="text-xs text-slate-400">El Sereno, Los Angeles, CA 90032</p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 font-extrabold text-xs border border-emerald-500/30">
                    ● OPEN NOW
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Animated Deal Marquee Ticker */}
      <div className="mt-8 bg-slate-900/90 border-y border-slate-800 py-2.5 overflow-hidden">
        <div className="marquee-track flex items-center gap-8 text-xs font-extrabold tracking-wider text-amber-300">
          <span>⚡ TOP RAMEN 5-PACK: $0.99</span>
          <span>•</span>
          <span>🧼 FABULOSO LAVENDER 33oz: $1.99</span>
          <span>•</span>
          <span>🪅 HANDMADE STAR PIÑATAS: $8.99</span>
          <span>•</span>
          <span>🌶️ TAKIS FUEGO 9.9oz: $2.49</span>
          <span>•</span>
          <span>🧹 MICROFIBER TOWELS 4-PACK: $0.99</span>
          <span>•</span>
          <span>📸 FOLLOW @SUPERDISCOUNT.99 ON INSTAGRAM</span>
          <span>•</span>
          <span>⚡ TOP RAMEN 5-PACK: $0.99</span>
          <span>•</span>
          <span>🧼 FABULOSO LAVENDER 33oz: $1.99</span>
          <span>•</span>
          <span>🪅 HANDMADE STAR PIÑATAS: $8.99</span>
          <span>•</span>
          <span>🌶️ TAKIS FUEGO 9.9oz: $2.49</span>
        </div>
      </div>
    </section>
  );
}
