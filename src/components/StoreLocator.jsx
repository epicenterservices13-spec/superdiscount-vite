import React from 'react';
import { MapPin, Clock, Phone, Navigation, Car, Bus, CheckCircle2, Instagram } from 'lucide-react';
import { INSTAGRAM_INFO } from '../data/instagramPosts';

export default function StoreLocator({ lang }) {
  // Store status calculation
  const now = new Date();
  const currentHour = now.getHours();
  const isOpen = currentHour >= 8 && currentHour < 20;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('5123 E Huntington Dr, Los Angeles, CA 90032')}`;

  return (
    <section id="store-location" className="py-14 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Store Info Card */}
          <div className="lg:col-span-6 glass-panel bg-slate-900/90 rounded-3xl p-6 sm:p-8 border border-slate-800 flex flex-col justify-between space-y-6">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span>{lang === 'en' ? 'Brick & Mortar Store Location' : 'Ubicación de la Tienda Física'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {lang === 'en' ? 'Visit Super Discount .99 in El Sereno' : 'Visita Super Discount .99 en El Sereno'}
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                {lang === 'en'
                  ? 'We are located on historic Huntington Drive in the heart of El Sereno! Easy parking, huge selection, and warm community service.'
                  : '¡Estamos ubicados en la histórica Huntington Drive en el corazón de El Sereno! Fácil estacionamiento, gran selección y servicio comunitario.'}
              </p>

              {/* Status Badge */}
              <div className="flex items-center gap-3 py-2">
                <span className={`px-3 py-1 rounded-full text-xs font-black tracking-wider uppercase flex items-center gap-1.5 border ${
                  isOpen 
                    ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' 
                    : 'bg-amber-500/20 text-amber-300 border-amber-500/30'
                }`}>
                  <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-emerald-400 animate-pulse' : 'bg-amber-400'}`}></span>
                  {isOpen ? (lang === 'en' ? 'OPEN TODAY UNTIL 8:00 PM' : 'ABIERTO HOY HASTA LAS 8:00 PM') : (lang === 'en' ? 'OPENS AT 8:00 AM' : 'ABRE A LAS 8:00 AM')}
                </span>
              </div>

              {/* Info Table */}
              <div className="space-y-4 pt-2 border-t border-slate-800 text-sm">
                
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-red-500/10 text-red-400 shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wide">
                      {lang === 'en' ? 'Address' : 'Dirección'}
                    </h4>
                    <p className="text-slate-200 font-semibold">5123 E Huntington Dr</p>
                    <p className="text-xs text-slate-400">El Sereno, Los Angeles, CA 90032</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400 shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wide">
                      {lang === 'en' ? 'Store Hours' : 'Horario de Atención'}
                    </h4>
                    <p className="text-slate-200 text-xs font-medium">Monday – Saturday: <strong className="text-white">8:00 AM – 8:00 PM</strong></p>
                    <p className="text-slate-200 text-xs font-medium">Sunday: <strong className="text-white">9:00 AM – 7:00 PM</strong></p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-pink-500/10 text-pink-400 shrink-0 mt-0.5">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-xs uppercase tracking-wide">
                      {lang === 'en' ? 'Instagram Inquiries' : 'Consultas por Instagram'}
                    </h4>
                    <a 
                      href={INSTAGRAM_INFO.fullUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-pink-400 hover:text-pink-300 font-bold text-xs underline"
                    >
                      {INSTAGRAM_INFO.handle} (DM for inventory checks!)
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
              <a 
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex justify-center items-center gap-2 bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white font-extrabold text-sm px-5 py-3 rounded-xl shadow-lg shadow-red-600/25 transition-all text-center"
              >
                <Navigation className="w-4 h-4" />
                <span>{lang === 'en' ? 'Get Directions (Google Maps)' : 'Obtener Indicaciones'}</span>
              </a>
            </div>

          </div>

          {/* Right Interactive Map / Neighborhood Preview Card */}
          <div className="lg:col-span-6 bg-slate-900 rounded-3xl border border-slate-800 overflow-hidden relative flex flex-col justify-between min-h-[380px]">
            
            {/* Map Visual Representation */}
            <div className="absolute inset-0 bg-slate-950 opacity-90">
              <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            {/* Custom Map Graphic */}
            <div className="relative z-10 p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="bg-slate-950/90 text-amber-400 border border-amber-500/30 text-xs font-black px-3 py-1 rounded-lg backdrop-blur-md">
                    🗺️ EL SERENO MAP PREVIEW
                  </span>
                  <span className="text-xs text-slate-400 font-semibold">
                    Huntington Dr & Van Horne Ave
                  </span>
                </div>

                {/* Map Pin Banner */}
                <div className="bg-slate-950/95 border-2 border-amber-500/60 p-5 rounded-2xl shadow-2xl backdrop-blur-md max-w-sm space-y-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white font-black text-xs shadow-lg">
                      99¢
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white text-sm">Super Discount .99</h3>
                      <p className="text-xs text-amber-300 font-semibold">5123 E Huntington Dr</p>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 pt-1 border-t border-slate-800">
                    Located next to local shops, convenient parking lot behind store.
                  </p>
                </div>
              </div>

              {/* Transit & Amenities list */}
              <div className="grid grid-cols-2 gap-3 pt-6">
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center gap-2">
                  <Car className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs text-slate-300 font-medium">Free Store Parking</span>
                </div>
                <div className="bg-slate-950/80 p-3 rounded-xl border border-slate-800 flex items-center gap-2">
                  <Bus className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-300 font-medium">Metro Bus Line 78</span>
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
