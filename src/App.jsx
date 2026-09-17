import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DealCatalog from './components/DealCatalog';
import InstagramFeed from './components/InstagramFeed';
import StoreLocator from './components/StoreLocator';
import Footer from './components/Footer';
import ShoppingListModal from './components/ShoppingListModal';
import VipClubModal from './components/VipClubModal';

export default function App() {
  const [lang, setLang] = useState('en'); // 'en' | 'es'
  const [searchQuery, setSearchQuery] = useState('');
  const [shoppingList, setShoppingList] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isVipOpen, setIsVipOpen] = useState(false);

  const handleExploreDeals = () => {
    const catalogElement = document.getElementById('deals-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      
      {/* Navigation Bar */}
      <Navbar 
        lang={lang}
        setLang={setLang}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        shoppingList={shoppingList}
        setIsCartOpen={setIsCartOpen}
        setIsVipOpen={setIsVipOpen}
      />

      {/* Hero Banner Section */}
      <Hero 
        lang={lang}
        onExploreDeals={handleExploreDeals}
        setIsVipOpen={setIsVipOpen}
      />

      {/* Main Deals Catalog */}
      <DealCatalog 
        lang={lang}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
      />

      {/* Instagram Feed Spotlight for @superdiscount.99 */}
      <InstagramFeed 
        lang={lang}
      />

      {/* Store Location & Hours Section */}
      <StoreLocator 
        lang={lang}
      />

      {/* Footer */}
      <Footer 
        lang={lang}
      />

      {/* Shopping List Modal */}
      <ShoppingListModal 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        shoppingList={shoppingList}
        setShoppingList={setShoppingList}
        lang={lang}
      />

      {/* VIP Club Modal */}
      <VipClubModal 
        isOpen={isVipOpen}
        onClose={() => setIsVipOpen(false)}
        lang={lang}
      />

    </div>
  );
}
