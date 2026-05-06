/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShoppingBag, Menu as MenuIcon, ArrowRight, Instagram, Facebook, Twitter, Leaf, Flame, Coffee } from 'lucide-react';
import { useState } from 'react';

const PRODUCTS = [
  {
    id: 1,
    name: 'Espresso Signature',
    price: '3.50€',
    category: 'Classic',
    description: 'Notes intenses de cacao noir et noisettes grillées. Un corps sirupeux.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 2,
    name: 'Cappuccino Velouté',
    price: '4.80€',
    category: 'Milk-Based',
    description: 'Une mousse de lait onctueuse micro-bullée associée à notre espresso.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 3,
    name: 'Cold Brew Infusion',
    price: '5.50€',
    category: 'Iced',
    description: 'Infusé à froid pendant 18h pour une douceur maximale.',
    image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 4,
    name: 'V60 Origine Unique',
    price: '6.50€',
    category: 'Specialty',
    description: 'Extraction lente par filtration. Grains du moment sélectionnés.',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
  }
];

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-surface/80 border-b border-outline-variant/10">
    <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-gutter flex justify-between items-center h-20">
      <div className="text-2xl font-serif font-bold text-primary tracking-tight">L'Artisan Café</div>
      <div className="hidden md:flex items-center gap-8 text-[14px] font-semibold uppercase tracking-widest text-on-surface-variant">
        <a href="#" className="text-primary border-b-2 border-primary pb-1">Menu</a>
        <a href="#" className="hover:text-primary transition-colors">Savoir-faire</a>
        <a href="#" className="hover:text-primary transition-colors">Localisation</a>
        <a href="#" className="hover:text-primary transition-colors">Contact</a>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 hover:bg-surface-container rounded-full transition-colors">
          <ShoppingBag className="w-5 h-5 text-primary" />
        </button>
        <button className="md:hidden p-2">
          <MenuIcon className="w-6 h-6 text-primary" />
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-surface">
    <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-gutter w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10"
      >
        <span className="text-secondary font-semibold uppercase tracking-[0.3em] text-sm block mb-4">Artisanal Brew</span>
        <h1 className="text-6xl md:text-8xl text-primary font-bold leading-[1] mb-8 font-serif">
          L'Éveil des <br /> <span className="text-secondary italic">Sensations</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-md mb-10 leading-relaxed">
          Découvrez l'excellence d'une torréfaction artisanale où chaque grain est une promesse de voyage olfactif.
        </p>
        <div className="flex flex-wrap gap-4">
          <button className="px-10 py-4 bg-primary text-surface rounded-full font-semibold hover:bg-primary-container transition-all shadow-soft-coffee">
            Explorer le Menu
          </button>
          <button className="px-10 py-4 border border-primary text-primary rounded-full font-semibold hover:bg-primary/5 transition-all">
            Notre Histoire
          </button>
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative"
      >
        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=1200" 
            alt="Coffee Craft" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute -top-10 -right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      </motion.div>
    </div>
  </section>
);

const ProductCard = ({ product }: { product: typeof PRODUCTS[0] }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="bg-surface-container-low p-4 rounded-2xl shadow-soft-coffee group cursor-pointer"
  >
    <div className="aspect-[4/5] rounded-xl overflow-hidden mb-6 bg-surface-container border border-outline-variant/10">
      <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
    </div>
    <div className="px-2 pb-2">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-primary font-serif">{product.name}</h3>
        <span className="text-secondary font-bold">{product.price}</span>
      </div>
      <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">{product.description}</p>
      <button className="w-full py-3 rounded-full bg-surface-container-highest text-primary font-semibold hover:bg-primary hover:text-surface transition-all text-sm uppercase tracking-widest">
        Ajouter au Panier
      </button>
    </div>
  </motion.div>
);

const Process = () => (
  <section className="py-section-padding bg-surface-container-low">
    <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-gutter">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl text-primary font-bold mb-4">La Torréfaction pas à pas</h2>
        <p className="text-on-surface-variant italic font-serif">Un équilibre délicat entre température et temps.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        <div className="p-10 bg-surface rounded-3xl shadow-soft-coffee border border-outline-variant/10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mb-8">
            <Leaf className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-4">Le Sourcing</h3>
          <p className="text-on-surface-variant leading-relaxed">Nous sélectionnons nos grains auprès de petits producteurs engagés en Éthiopie et Colombie.</p>
        </div>
        <div className="p-10 bg-primary-container text-surface rounded-3xl shadow-soft-coffee flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-on-primary-container rounded-full flex items-center justify-center mb-8">
            <Flame className="w-8 h-8 text-primary-container" />
          </div>
          <h3 className="text-2xl font-bold text-surface mb-4">La Torréfaction</h3>
          <p className="text-on-primary-container leading-relaxed">Une cuisson lente entre 12 et 15 minutes pour révéler les sucres naturels sans amertume.</p>
        </div>
        <div className="p-10 bg-surface rounded-3xl shadow-soft-coffee border border-outline-variant/10 flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary-fixed rounded-full flex items-center justify-center mb-8">
            <Coffee className="w-8 h-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold text-primary mb-4">L'Art du Barista</h3>
          <p className="text-on-surface-variant leading-relaxed">Extraction précise par nos experts pour garantir une tasse parfaite à chaque visite.</p>
        </div>
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-section-padding bg-secondary-container/20">
    <div className="max-w-2xl mx-auto px-margin-mobile text-center">
      <h2 className="text-4xl text-primary font-bold mb-6">Restez Informé</h2>
      <p className="text-on-surface-variant mb-10 text-lg leading-relaxed">
        Suivez nos aventures et recevez nos conseils de dégustation directement dans votre boîte mail.
      </p>
      <form className="flex flex-col md:flex-row gap-2">
        <input 
          type="email" 
          placeholder="votre@email.com" 
          className="flex-grow px-8 py-4 rounded-full bg-surface border-none focus:ring-2 focus:ring-primary/20 shadow-inner outline-none text-on-surface"
        />
        <button className="px-10 py-4 bg-primary text-surface rounded-full font-bold hover:opacity-90 transition-opacity">
          S'abonner
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-surface border-t border-outline-variant/20 py-20">
    <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-gutter grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-1 md:col-span-2">
        <div className="text-2xl font-serif font-bold text-primary mb-6">L'Artisan Café</div>
        <p className="text-on-surface-variant max-w-sm leading-relaxed mb-8">
          Torréfacteur indépendant depuis 2012, dédié à l'art du café de spécialité et au respect des terroirs.
        </p>
        <div className="flex gap-4">
          <Instagram className="w-5 h-5 text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
          <Facebook className="w-5 h-5 text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
          <Twitter className="w-5 h-5 text-on-surface-variant hover:text-primary cursor-pointer transition-colors" />
        </div>
      </div>
      <div>
        <h4 className="font-bold text-primary uppercase tracking-widest text-sm mb-6">Navigation</h4>
        <ul className="space-y-4 text-on-surface-variant">
          <li><a href="#" className="hover:text-primary transition-colors font-medium">Menu</a></li>
          <li><a href="#" className="hover:text-primary transition-colors font-medium">Savoir-faire</a></li>
          <li><a href="#" className="hover:text-primary transition-colors font-medium">Nos Boutiques</a></li>
          <li><a href="#" className="hover:text-primary transition-colors font-medium">Boutique en ligne</a></li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold text-primary uppercase tracking-widest text-sm mb-6">Contact</h4>
        <ul className="space-y-4 text-on-surface-variant font-medium">
          <li>12 Rue de la Torréfaction</li>
          <li>75003 Paris, France</li>
          <li>bonjour@lartisan.coffee</li>
          <li>+33 (0)1 23 45 67 89</li>
        </ul>
      </div>
    </div>
    <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-gutter pt-8 border-t border-outline-variant/10 text-center text-sm text-on-surface-variant font-medium">
      © 2024 L'Artisan Café — Fait avec passion pour les amateurs de café.
    </div>
  </footer>
);

export default function App() {
  const [activeCategory, setActiveCategory] = useState('Tous');
  const categories = ['Tous', 'Classic', 'Milk-Based', 'Iced', 'Specialty'];

  const filteredProducts = activeCategory === 'Tous' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Menu Section */}
      <section className="py-section-padding bg-surface">
        <div className="max-w-container-max-width mx-auto px-margin-mobile md:px-gutter">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="text-4xl md:text-5xl text-primary font-bold mb-4">Notre Menu</h2>
              <p className="text-on-surface-variant italic font-serif">Une sélection méticuleuse pour chaque moment de la journée.</p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto">
              {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all whitespace-nowrap text-sm tracking-wide ${
                    activeCategory === cat 
                      ? 'bg-primary text-surface shadow-soft-coffee' 
                      : 'bg-surface-container-high text-on-surface-variant hover:bg-outline-variant'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter"
          >
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </motion.div>

          <div className="mt-16 flex justify-center">
            <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
              Voir tout le menu <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      <Process />
      <Newsletter />
      <Footer />
    </div>
  );
}
