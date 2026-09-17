import React, { useState } from 'react';
import { PRODUCT_CATEGORIES, PRODUCTS } from '../data/products';
import { Plus, Check, Star, Tag, ShoppingBag, Flame, Filter, Zap } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function DealCatalog({ 
  lang, 
  searchQuery, 
  setSearchQuery, 
  shoppingList, 
  setShoppingList 
}) {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [showOnlyDoorbreakers, setShowOnlyDoorbreakers] = useState(false);
  const [addedItemNotice, setAddedItemNotice] = useState(null);

  // Filter logic
  const filteredProducts = PRODUCTS.filter(prod => {
    // Search filter
    const matchesSearch = 
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.nameEs.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.description.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    let matchesCategory = true;
    if (selectedCategory === 'under-99') {
      matchesCategory = prod.price <= 0.99;
    } else if (selectedCategory !== 'all') {
      matchesCategory = prod.category === selectedCategory;
    }

    // Doorbreaker filter
    const matchesDoorbreaker = showOnlyDoorbreakers ? prod.isDoorbreaker : true;

    return matchesSearch && matchesCategory && matchesDoorbreaker;
  });

  // Add product to shopping list
  const handleAddToList = (product) => {
    setShoppingList(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, quantity: 1 }];
      }
    });

    // Trigger celebratory confetti for 99 cent items!
    if (product.price <= 0.99) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#fbbf24', '#ef4444', '#10b981']
      });
    }

    setAddedItemNotice(product.id);
    setTimeout(() => setAddedItemNotice(null), 1500);
  };

  return (
    <section id="deals-catalog" className="py-12 bg-slate-950 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-bold mb-2">
              <Flame className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Weekly In-Store Specials' : 'Ofertas Semanales En Tienda'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {lang === 'en' ? 'Browse Neighborhood Bargains' : 'Explora Ofertas de El Sereno'}
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              {lang === 'en' 
                ? 'Add items to your Store Shopping List to total your savings before visiting 5123 E Huntington Dr!' 
                : '¡Agrega artículos a tu lista para calcular tus ahorros antes de visitarnos en 5123 E Huntington Dr!'}
            </p>
          </div>

          {/* Quick Filter Toggle */}
          <button 
            onClick={() => setShowOnlyDoorbreakers(!showOnlyDoorbreakers)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all border cursor-pointer ${
              showOnlyDoorbreakers 
                ? 'bg-amber-500 border-yellow-300 text-slate-950 shadow-lg shadow-amber-500/30' 
                : 'bg-slate-900 border-slate-700 text-slate-300 hover:border-amber-500/50'
            }`}
          >
            <Zap className={`w-4 h-4 ${showOnlyDoorbreakers ? 'text-slate-950' : 'text-amber-400'}`} />
            <span>
              {lang === 'en' ? 'Show ONLY 99¢ Specials' : 'Ver SOLO Especiales a 99¢'}
            </span>
          </button>
        </div>

        {/* Category Pills Navigation */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {PRODUCT_CATEGORIES.map(cat => (
            <button 
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`shrink-0 px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer border ${
                selectedCategory === cat.id 
                  ? 'bg-gradient-to-r from-red-600 to-amber-500 text-white border-amber-400 shadow-md shadow-red-600/20' 
                  : 'bg-slate-900/90 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700'
              }`}
            >
              {lang === 'en' ? cat.label : cat.labelEs}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/40 rounded-2xl border border-slate-800">
            <Tag className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">
              {lang === 'en' ? 'No deals found' : 'No se encontraron ofertas'}
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              {lang === 'en' ? 'Try adjusting your search query or category filters.' : 'Intenta ajustar tu búsqueda o filtros.'}
            </p>
            <button 
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); setShowOnlyDoorbreakers(false); }}
              className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-bold rounded-lg"
            >
              {lang === 'en' ? 'Reset All Filters' : 'Restablecer Filtros'}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => {
              const isInCart = shoppingList.some(item => item.id === product.id);
              const cartItem = shoppingList.find(item => item.id === product.id);

              return (
                <div 
                  key={product.id}
                  className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-slate-700 hover:shadow-xl transition-all duration-300 group"
                >
                  <div>
                    {/* Image Header with Badges */}
                    <div className="relative h-48 overflow-hidden bg-slate-950">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>

                      {/* Tag Badge */}
                      <div className="absolute top-3 left-3 flex flex-col gap-1 items-start">
                        {product.isDoorbreaker ? (
                          <span className="badge-deal">
                            ⚡ 99¢ SPECIAL
                          </span>
                        ) : (
                          <span className="bg-slate-900/90 text-amber-300 border border-amber-500/30 text-[10px] font-extrabold px-2 py-0.5 rounded-md backdrop-blur-md">
                            {product.tag}
                          </span>
                        )}
                      </div>

                      {/* Stock Status */}
                      <div className="absolute bottom-2 right-3 text-[10px] font-bold text-slate-300 bg-slate-950/80 px-2 py-0.5 rounded backdrop-blur-md border border-slate-800">
                        {product.stockStatus}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 space-y-2">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span className="capitalize font-semibold text-slate-400">
                          {product.category}
                        </span>
                        <div className="flex items-center gap-1 text-amber-400 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          <span>{product.rating}</span>
                          <span className="text-slate-500 text-[11px]">({product.reviewCount})</span>
                        </div>
                      </div>

                      <h3 className="text-base font-bold text-white line-clamp-2 group-hover:text-amber-300 transition-colors">
                        {lang === 'en' ? product.name : product.nameEs}
                      </h3>

                      <p className="text-xs text-slate-400 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Price & CTA */}
                  <div className="p-4 pt-0 border-t border-slate-800/60 mt-3 flex items-center justify-between gap-2">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-amber-400">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-xs text-slate-500 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] text-emerald-400 font-extrabold uppercase tracking-wider">
                        In-Store Price
                      </span>
                    </div>

                    <button 
                      onClick={() => handleAddToList(product)}
                      className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        addedItemNotice === product.id
                          ? 'bg-emerald-500 text-slate-950 font-black scale-105'
                          : isInCart 
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500 hover:text-slate-950'
                          : 'bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-500 hover:to-amber-500 text-white shadow-md'
                      }`}
                    >
                      {addedItemNotice === product.id ? (
                        <>
                          <Check className="w-4 h-4 stroke-[3]" />
                          <span>{lang === 'en' ? 'Added!' : '¡Agregado!'}</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-4 h-4" />
                          <span>
                            {isInCart 
                              ? `${cartItem.quantity} in list`
                              : lang === 'en' ? 'Add to List' : 'Agregar'}
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
