'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, ShieldCheck, ShoppingBag, ArrowRight, Star, Sparkles, Droplets } from 'lucide-react';

export default function GastroPage() {
  return (
    <div className="min-h-screen">
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 py-4 px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-serif font-bold text-brand-primary flex items-center gap-2">
            <Leaf /> GastroBalance
          </div>
          <button className="bg-brand-primary text-white px-6 py-2 rounded-full text-sm font-bold">
            TIENDA
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-40 pb-20 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
            <span className="text-brand-secondary font-bold tracking-widest text-xs uppercase mb-4 block">100% Funcional</span>
            <h1 className="text-6xl lg:text-8xl font-serif leading-tight mb-8">
              Tu digestión <br /> en <span className="italic text-brand-primary">armonía.</span>
            </h1>
            <p className="text-xl text-gray-500 mb-10 max-w-md leading-relaxed">
              Galletas artesanales creadas para proteger tu sistema digestivo con el poder de la naturaleza.
            </p>
            <button className="bg-brand-text text-white px-10 py-5 rounded-full flex items-center gap-3 hover:bg-brand-primary transition-all">
              COMPRAR MI PACK <ArrowRight size={20} />
            </button>
          </motion.div>
          <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} className="relative">
            <div className="w-full h-[500px] bg-brand-accent/30 rounded-[3rem] overflow-hidden">
               <img src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1000" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* INFO */}
      <section className="py-24 bg-white px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { icon: <ShieldCheck />, title: "Protección Gástrica", desc: "Ingredientes que cuidan tu mucosa." },
            { icon: <Droplets />, title: "Súper Fibras", desc: "Linaza y chía de alta pureza." },
            { icon: <Sparkles />, title: "Cero Irritantes", desc: "Sin conservantes ni químicos." }
          ].map((f, i) => (
            <div key={i} className="text-center p-8 bg-brand-bg rounded-[2rem]">
              <div className="text-brand-primary mb-6 flex justify-center">{f.icon}</div>
              <h3 className="text-xl font-serif mb-4">{f.title}</h3>
              <p className="text-gray-500 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTO */}
      <section className="py-24 px-8 bg-brand-bg">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[4rem] p-12 flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
               <img src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1000" className="rounded-[3rem]" />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-serif mb-6 text-brand-text">Pack Alivio Ancestral</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">Nuestra fórmula maestra con Avena, Linaza y Miel. Perfecta para un snack ligero que no irrita.</p>
              <div className="text-3xl font-bold mb-8">$25.00 USD</div>
              <button className="w-full bg-brand-primary text-white py-5 rounded-full font-bold flex items-center justify-center gap-2">
                <ShoppingBag size={20} /> AÑADIR AL CARRITO
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-20 text-center text-gray-400 text-xs tracking-widest uppercase">
        © 2024 GastroBalance • Bienestar Real
      </footer>
    </div>
  );
}
