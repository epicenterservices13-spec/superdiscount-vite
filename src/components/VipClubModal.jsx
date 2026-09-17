import React, { useState } from 'react';
import { X, Bell, CheckCircle2, Instagram, Sparkles, Phone } from 'lucide-react';
import { INSTAGRAM_INFO } from '../data/instagramPosts';

export default function VipClubModal({ isOpen, onClose, lang }) {
  const [submitted, setSubmitted] = useState(false);
  const [phoneOrEmail, setPhoneOrEmail] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phoneOrEmail) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setPhoneOrEmail('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-md overflow-hidden shadow-2xl relative">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-white">
              {lang === 'en' ? 'You are on the VIP Deal List!' : '¡Ya estás en la lista VIP!'}
            </h3>
            <p className="text-xs text-slate-300">
              {lang === 'en' 
                ? 'We will text you whenever fresh 99¢ doorbreakers and piñatas arrive at 5123 E Huntington Dr!' 
                : '¡Te enviaremos un mensaje cuando lleguen nuevas ofertas a 99¢ y piñatas a El Sereno!'}
            </p>
            <div className="pt-2">
              <button 
                onClick={handleReset}
                className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs rounded-xl shadow-lg"
              >
                {lang === 'en' ? 'Back to Store' : 'Volver a la Tienda'}
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-gradient-to-tr from-red-600 via-amber-500 to-yellow-400 text-slate-950 font-black">
                <Bell className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-wider text-amber-400">
                  {lang === 'en' ? 'El Sereno VIP Club' : 'Club VIP El Sereno'}
                </span>
                <h3 className="text-xl font-extrabold text-white">
                  {lang === 'en' ? 'Get 99¢ Weekly Deal Drops' : 'Recibe Ofertas Semanales de 99¢'}
                </h3>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              {lang === 'en' 
                ? 'Be the first to know when new shipments of household goods, piñatas, and 99¢ doorbreakers land at Super Discount .99!' 
                : '¡Sé el primero en saber cuando lleguen nuevos envíos de artículos del hogar, piñatas y ofertas a 99¢!'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <div>
                <label className="block text-[11px] font-bold text-slate-400 mb-1">
                  {lang === 'en' ? 'Cell Phone Number or Email' : 'Número de Teléfono o Correo'}
                </label>
                <div className="relative">
                  <input 
                    type="text"
                    required
                    value={phoneOrEmail}
                    onChange={(e) => setPhoneOrEmail(e.target.value)}
                    placeholder="(323) 555-0199 or name@gmail.com"
                    className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl py-3 pl-10 pr-4 text-xs focus:outline-none focus:border-amber-500"
                  />
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <button 
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-red-600 to-amber-500 hover:from-red-500 hover:to-amber-400 text-white font-extrabold text-xs rounded-xl shadow-lg shadow-red-600/30 transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>{lang === 'en' ? 'Join El Sereno VIP List' : 'Unirse a la Lista VIP'}</span>
              </button>
            </form>

            {/* Instagram Plug */}
            <div className="pt-3 border-t border-slate-800 text-center text-[11px] text-slate-400">
              {lang === 'en' ? 'Prefer Instagram?' : '¿Prefieres Instagram?'} {' '}
              <a 
                href={INSTAGRAM_INFO.fullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 hover:text-pink-300 font-bold underline inline-flex items-center gap-1"
              >
                <Instagram className="w-3 h-3" />
                <span>Follow {INSTAGRAM_INFO.handle}</span>
              </a>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
