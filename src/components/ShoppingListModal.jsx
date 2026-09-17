import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, Printer, Check, Copy, ShoppingBag, MapPin, Tag } from 'lucide-react';

export default function ShoppingListModal({ 
  isOpen, 
  onClose, 
  shoppingList, 
  setShoppingList, 
  lang 
}) {
  const [copiedNotice, setCopiedNotice] = useState(false);

  if (!isOpen) return null;

  const updateQuantity = (id, delta) => {
    setShoppingList(prev => 
      prev.map(item => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const removeItem = (id) => {
    setShoppingList(prev => prev.filter(item => item.id !== id));
  };

  const clearList = () => {
    setShoppingList([]);
  };

  const subtotal = shoppingList.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const totalOriginal = shoppingList.reduce((acc, item) => acc + ((item.originalPrice || item.price * 1.5) * item.quantity), 0);
  const totalSavings = Math.max(0, totalOriginal - subtotal);

  // Copy checklist to clipboard
  const handleCopyList = () => {
    const listText = shoppingList.map(item => `- ${item.name} (${item.quantity}x) @ $${item.price.toFixed(2)} ea`).join('\n');
    const fullText = `🛒 SUPER DISCOUNT .99 - STORE SHOPPING LIST\n📍 5123 E Huntington Dr, El Sereno CA 90032\n\n${listText}\n\nEstimated Total: $${subtotal.toFixed(2)}\nEstimated Savings: $${totalSavings.toFixed(2)}\nFollow @superdiscount.99 on Instagram!`;

    navigator.clipboard.writeText(fullText);
    setCopiedNotice(true);
    setTimeout(() => setCopiedNotice(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="p-5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-red-600 text-white font-black text-sm">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-lg">
                {lang === 'en' ? 'My Store Shopping List' : 'Mi Lista de Compras'}
              </h3>
              <p className="text-xs text-slate-400">
                5123 E Huntington Dr, El Sereno
              </p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body: List items */}
        <div className="p-5 overflow-y-auto flex-1 space-y-3 divide-y divide-slate-800/60">
          {shoppingList.length === 0 ? (
            <div className="text-center py-12 space-y-3">
              <ShoppingBag className="w-12 h-12 text-slate-600 mx-auto" />
              <p className="text-slate-300 font-bold text-sm">
                {lang === 'en' ? 'Your store shopping list is empty' : 'Tu lista de compras está vacía'}
              </p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                {lang === 'en' 
                  ? 'Click "+ Add to List" on any product deal to plan your savings before your visit!' 
                  : '¡Agrega ofertas a tu lista para calcular tus ahorros antes de visitarnos!'}
              </p>
            </div>
          ) : (
            shoppingList.map(item => (
              <div key={item.id} className="pt-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-12 h-12 rounded-lg object-cover bg-slate-950 shrink-0" 
                  />
                  <div className="min-w-0">
                    <h4 className="font-bold text-white text-xs truncate">
                      {lang === 'en' ? item.name : item.nameEs}
                    </h4>
                    <span className="text-amber-400 font-black text-xs">
                      ${item.price.toFixed(2)} <span className="text-[10px] text-slate-500 font-normal">each</span>
                    </span>
                  </div>
                </div>

                {/* Quantity Controller */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center border border-slate-700 rounded-lg bg-slate-950 p-1">
                    <button 
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 text-slate-400 hover:text-white rounded"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-2 text-xs font-extrabold text-white">
                      {item.quantity}
                    </span>
                    <button 
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 text-slate-400 hover:text-white rounded"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button 
                    onClick={() => removeItem(item.id)}
                    className="p-1.5 text-slate-500 hover:text-red-400 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer: Total & Actions */}
        {shoppingList.length > 0 && (
          <div className="p-5 bg-slate-950 border-t border-slate-800 space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-sm font-bold text-slate-300">
                <span>{lang === 'en' ? 'Estimated Store Subtotal:' : 'Subtotal Estimado:'}</span>
                <span className="text-amber-400 text-lg font-black">${subtotal.toFixed(2)}</span>
              </div>
              {totalSavings > 0 && (
                <div className="flex justify-between items-center text-xs font-bold text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <span>🎉 {lang === 'en' ? 'Estimated Store Savings:' : 'Ahorros Estimados:'}</span>
                  <span>-${totalSavings.toFixed(2)}</span>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <button 
                onClick={handleCopyList}
                className="flex-1 flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all cursor-pointer border border-slate-700"
              >
                {copiedNotice ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-amber-400" />}
                <span>{copiedNotice ? (lang === 'en' ? 'Copied to Clipboard!' : '¡Copiado!') : (lang === 'en' ? 'Copy Shopping Checklist' : 'Copiar Lista')}</span>
              </button>

              <button 
                onClick={clearList}
                className="px-3 py-2.5 text-xs font-bold text-slate-400 hover:text-red-400 border border-slate-800 rounded-xl hover:bg-slate-900"
              >
                {lang === 'en' ? 'Clear' : 'Vaciar'}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
