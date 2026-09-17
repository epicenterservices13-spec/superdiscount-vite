import React, { useState } from 'react';
import { INSTAGRAM_INFO, INSTAGRAM_POSTS } from '../data/instagramPosts';
import { Instagram, Heart, MessageCircle, ExternalLink, Play, Sparkles, CheckCircle2 } from 'lucide-react';

export default function InstagramFeed({ lang }) {
  const [likedPosts, setLikedPosts] = useState({});

  const toggleLike = (id) => {
    setLikedPosts(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-14 bg-slate-900 border-t border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Instagram Profile Card Header */}
        <div className="p-6 md:p-8 rounded-3xl glass-panel bg-slate-950/80 border border-slate-800 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* Profile Avatar & Info */}
            <div className="flex items-center gap-4 text-center md:text-left">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 p-1 shadow-lg shadow-pink-500/20">
                  <div className="w-full h-full bg-slate-950 rounded-full flex items-center justify-center overflow-hidden">
                    <Instagram className="w-9 h-9 text-pink-400" />
                  </div>
                </div>
                <div className="absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full border-2 border-slate-950">
                  <CheckCircle2 className="w-3.5 h-3.5 fill-blue-500 text-white" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-center md:justify-start gap-2">
                  <h3 className="text-xl font-extrabold text-white">{INSTAGRAM_INFO.handle}</h3>
                  <span className="bg-pink-500/20 text-pink-300 text-xs font-bold px-2 py-0.5 rounded-full border border-pink-500/30">
                    Official Page
                  </span>
                </div>
                <p className="text-xs text-slate-300 mt-1 max-w-md whitespace-pre-line leading-relaxed">
                  {INSTAGRAM_INFO.bio}
                </p>
                <div className="flex items-center justify-center md:justify-start gap-4 mt-2 text-xs font-bold text-slate-400">
                  <span><strong className="text-white">{INSTAGRAM_INFO.followers}</strong> followers</span>
                  <span>•</span>
                  <span><strong className="text-white">{INSTAGRAM_INFO.postsCount}</strong> posts</span>
                </div>
              </div>
            </div>

            {/* Follow CTA Button */}
            <div className="shrink-0">
              <a 
                href={INSTAGRAM_INFO.fullUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-red-500 to-amber-500 hover:from-pink-500 hover:to-amber-400 text-white font-extrabold text-sm px-6 py-3 rounded-2xl shadow-lg shadow-pink-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <Instagram className="w-4 h-4" />
                <span>{lang === 'en' ? 'Follow @superdiscount.99' : 'Seguir @superdiscount.99'}</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1" />
              </a>
            </div>

          </div>
        </div>

        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Live Social Updates' : 'Actualizaciones en Instagram'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            {lang === 'en' ? 'Fresh Drops on Instagram' : 'Últimas Publicaciones en Instagram'}
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-1">
            {lang === 'en' 
              ? 'Check out recent shipment unboxings, customer favorites, and exclusive deals from our store!' 
              : '¡Mira los envíos recién llegados y las ofertas exclusivas de nuestra tienda!'}
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INSTAGRAM_POSTS.map(post => {
            const isLiked = likedPosts[post.id];
            const currentLikes = isLiked ? post.likes + 1 : post.likes;

            return (
              <div 
                key={post.id}
                className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden flex flex-col justify-between hover:border-pink-500/40 transition-all duration-300 group shadow-lg"
              >
                <div>
                  {/* Image Container with Reel Overlay */}
                  <div className="relative h-64 overflow-hidden bg-slate-900">
                    <img 
                      src={post.image} 
                      alt="Super Discount Instagram Post"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>

                    {/* Reel badge if video */}
                    {post.type === 'reel' && (
                      <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md text-white p-2 rounded-full border border-white/20">
                        <Play className="w-4 h-4 fill-white text-white" />
                      </div>
                    )}

                    {/* Store Tag */}
                    <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-pink-300 border border-pink-500/30 text-[10px] font-bold px-2 py-0.5 rounded-md">
                      @superdiscount.99
                    </div>
                  </div>

                  {/* Caption & Post Meta */}
                  <div className="p-4 space-y-3">
                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                      {post.caption}
                    </p>
                    <p className="text-[10px] text-slate-500 font-semibold">{post.timeAgo}</p>
                  </div>
                </div>

                {/* Footer Interactions */}
                <div className="p-4 pt-2 border-t border-slate-900 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-4">
                    <button 
                      onClick={() => toggleLike(post.id)}
                      className={`flex items-center gap-1.5 font-bold transition-colors cursor-pointer ${
                        isLiked ? 'text-red-500' : 'text-slate-400 hover:text-red-400'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500' : ''}`} />
                      <span>{currentLikes}</span>
                    </button>

                    <div className="flex items-center gap-1 text-slate-400 font-bold">
                      <MessageCircle className="w-4 h-4" />
                      <span>{post.comments}</span>
                    </div>
                  </div>

                  <a 
                    href={INSTAGRAM_INFO.fullUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-bold text-pink-400 hover:text-pink-300 flex items-center gap-1"
                  >
                    <span>View Post</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
