import React from 'react';
import { ShoppingBag, Instagram, MapPin, Search, Globe, Tag, Sparkles, Clock, Bell } from 'lucide-react';
import { INSTAGRAM_INFO } from '../data/instagramPosts';

export default function Navbar({ 
  lang, 
  setLang, 
  searchQuery, 
  setSearchQuery, 
  shoppingList, 
  setIsCartOpen,
  setIsVipOpen 
}) {
  const totalItemsCount = shoppingList.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="sticky top-0 z-40 w-full glass-nav">
      {/* Top Banner Bar */}
      <div className="bg-gradient-to-r from-red-600 via-amber-500 to-red-600 text-white text-xs font-semibold py-1.5 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2">
            <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-extrabold uppercase tracking-wider animate-pulse">
              📍 El Sereno, CA
            </span>
            <span>
              {lang === 'en' 
                ? '5123 E Huntington Dr • Open Today 8:00 AM - 8:00 PM' 
                : '5123 E Huntington Dr • Abierto Hoy 8:00 AM - 8:00 PM'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsVipOpen(true)}
              className="flex items-center gap-1 hover:text-amber-200 transition-colors cursor-pointer bg-black/20 hover:bg-black/30 px-2.5 py-0.5 rounded-full"
            >
              <Bell className="w-3 h-3 text-amber-300" />
              <span>{lang === 'en' ? 'Get 99¢ Deal Alerts' : 'Alertas de Ofertas 99¢'}</span>
            </button>

            <a 
              href={INSTAGRAM_INFO.fullUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-amber-200 transition-colors"
            >
              <Instagram className="w-3.5 h-3.5 text-pink-300" />
              <span className="font-bold">{INSTAGRAM_INFO.handle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-red-600 via-amber-500 to-yellow-400 p-0.5 shadow-lg shadow-red-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-black text-amber-400 text-xl tracking-tighter">
              99¢
            </div>
          </div>
          <div>
            <a href="#" className="flex items-center gap-1 text-xl md:text-2xl font-black tracking-tight text-white hover:text-amber-400 transition-colors">
              SUPER DISCOUNT <span className="text-amber-400">.99</span>
            </a>
            <p className="text-[11px] text-slate-400 font-medium tracking-wide">
              {lang === 'en' ? 'El Sereno Neighborhood Bargains' : 'Tu Tienda de Descuentos en El Sereno'}
            </p>
          </div>
        </div>

        {/* Center Search Input */}
        <div className="hidden md:flex flex-1 max-w-md relative">
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'en' ? 'Search deals (Pine-Sol, Takis, Piñatas, 99¢)...' : 'Buscar ofertas (Fabuloso, Takis, Piñatas)...'}
            className="w-full bg-slate-900/90 border border-slate-700/80 focus:border-amber-500 text-white rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-amber-500/20 transition-all placeholder:text-slate-500"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Language Toggle */}
          <button 
            onClick={() => setLang(lang === 'en' ? 'es' : 'en')}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-xs font-semibold text-slate-200 transition-all cursor-pointer"
            title="Toggle Language / Cambiar Idioma"
          >
            <Globe className="w-3.5 h-3.5 text-cyan-400" />
            <span>{lang === 'en' ? 'ESPAÑOL' : 'ENGLISH'}</span>
          </button>

          {/* Shopping List Button */}
          <button 
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-bold text-sm px-4 py-2 rounded-xl transition-all shadow-md shadow-red-600/30 active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-4 h-4" />
            <span className="hidden sm:inline">
              {lang === 'en' ? 'My Store List' : 'Mi Lista'}
            </span>
            {totalItemsCount > 0 && (
              <span className="bg-yellow-300 text-slate-950 text-xs font-black px-2 py-0.5 rounded-full min-w-[20px] text-center shadow-sm">
                {totalItemsCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
          <input 
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'en' ? 'Search 99¢ deals...' : 'Buscar ofertas...'}
            className="w-full bg-slate-900 border border-slate-700 text-white rounded-lg py-2 pl-9 pr-4 text-xs focus:outline-none focus:border-amber-500"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
        </div>
      </div>
    </header>
  );
}
