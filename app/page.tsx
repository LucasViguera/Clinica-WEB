'use client';

import React, { useState } from 'react';
import { Calendar, Clock, ChevronLeft, ChevronRight, X, Star } from 'lucide-react';
// --- DATOS ---
const doctores = [
  {
    id: 1,
    nombre: "Dra. Elena Chen",
    especialidad: "Acupuntura",
    experiencia: "Especialista en dolor crónico y equilibrio energético.",
    imagen: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 2,
    nombre: "Dr. Marcos Silva",
    especialidad: "Hierbas Medicinales",
    experiencia: "Terapias naturales, infusiones personalizadas y detox.",
    imagen: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 3,
    nombre: "Dr. Lucas Vidal",
    especialidad: "Homeopatía",
    experiencia: "Enfoque holístico para la ansiedad y el control de estrés.",
    imagen: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

const promociones = [
  { id: 1, texto: "✨ 20% OFF en tu primera sesión de Reiki" },
  { id: 2, texto: "🌿 Pack Relax: 3 Sesiones de Acupuntura con 15% descuento" }
];

const reseñas = [
  { id: 1, cliente: "Laura C.", texto: "El ambiente es súper relajante y los tratamientos muy efectivos." },
  { id: 2, cliente: "Pedro M.", texto: "El Dr. Silva cambió mi calidad de vida con su enfoque natural." }
];

export default function WellnessApp() {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [doctorSeleccionado, setDoctorSeleccionado] = useState<any>(null);
  const [promoIndex, setPromoIndex] = useState(0);

  const nextPromo = () => setPromoIndex((prev) => (prev + 1) % promociones.length);
  const prevPromo = () => setPromoIndex((prev) => (prev - 1 + promociones.length) % promociones.length);

  const abrirReserva = (doctor: any) => {
    setDoctorSeleccionado(doctor);
    setModalAbierto(true);
  };

  const handleReserva = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`¡Reserva confirmada con ${doctorSeleccionado.nombre}!`);
    setModalAbierto(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#F9F6F2] text-[#4A403A] text-base">
      
      {/* --- NAVBAR LIMPIO Y PROFESIONAL --- */}
      <nav className="sticky top-0 z-50 w-full bg-[#F9F6F2]/95 backdrop-blur-md border-b border-[#5D4E44]/10 shadow-sm transition-all">
        {/* Contenedor Flex: Separa Logo (izq) y Menú (der) */}
        <div className="max-w-7xl mx-auto px-6 h-24 flex justify-between items-center">
          
          {/* 1. IZQUIERDA: LOGO + TEXTO */}
          <div className="flex items-center gap-4 cursor-pointer hover:opacity-80 transition group">
            {/* LOGO RESTRINGIDO: h-16 (64px) evita que sea gigante */}
            <img 
              src="/logo.png" 
              alt="Lotus Logo" 
              className="h-16 w-auto object-contain"
            />
            
            <div className="flex flex-col justify-center">
              <span className="font-serif text-xl font-bold text-[#5D4E44] leading-none tracking-wide">
                Wellness
              </span>
              <span className="text-[10px] font-sans font-bold text-[#C5A880] tracking-[0.25em] uppercase mt-1">
                Clinic
              </span>
            </div>
          </div>

          {/* 2. DERECHA: ENLACES LIMPIOS (Sin hamburguesa) */}
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs font-bold text-[#5D4E44] uppercase tracking-widest hover:text-[#C5A880] transition-colors relative group">
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C5A880] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#especialistas" className="text-xs font-bold text-[#5D4E44] uppercase tracking-widest hover:text-[#C5A880] transition-colors relative group">
              Especialistas
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C5A880] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contacto" className="text-xs font-bold text-[#5D4E44] uppercase tracking-widest hover:text-[#C5A880] transition-colors relative group">
              Contacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#C5A880] transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            {/* Botón Agendar destacado */}
            <button className="ml-2 bg-[#5D4E44] text-white px-6 py-2.5 rounded-full text-xs font-bold tracking-widest hover:bg-[#4a3e36] transition shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              AGENDAR
            </button>
          </div>
        </div>
      </nav>

      {/* --- HERO --- */}
      <div className="pt-20 pb-16 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-serif text-[#5D4E44] mb-6">
          Equilibrio <span className="text-[#C5A880] italic">Natural</span>
        </h1>
        <p className="text-stone-600 text-lg max-w-xl mx-auto leading-relaxed">
          Un refugio dedicado a la medicina integrativa. Restaura tu vitalidad y bienestar con nuestros expertos.
        </p>
      </div>

      {/* --- ESPECIALISTAS --- */}
      <section className="px-6 mb-24" id="especialistas">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctores.map((doc) => (
              <div key={doc.id} className="bg-white rounded-3xl p-8 shadow-lg shadow-stone-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-stone-100 flex flex-col items-center text-center">
                <div className="p-1.5 rounded-full border-2 border-dashed border-[#C5A880] mb-6">
                  <img src={doc.imagen} alt={doc.nombre} className="w-28 h-28 rounded-full object-cover" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#5D4E44] mb-2">{doc.nombre}</h3>
                <span className="text-sm font-bold text-[#C5A880] uppercase tracking-widest mb-4">
                  {doc.especialidad}
                </span>
                <p className="text-stone-600 text-base mb-8 leading-relaxed px-2">
                  {doc.experiencia}
                </p>
                <button 
                  onClick={() => abrirReserva(doc)}
                  className="mt-auto bg-[#F9F6F2] text-[#5D4E44] border-2 border-[#5D4E44]/20 px-8 py-3 rounded-full text-xs font-bold tracking-widest hover:bg-[#5D4E44] hover:text-white transition-all w-full hover:border-transparent"
                >
                  RESERVAR CITA
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROMOCIONES --- */}
      <section className="bg-[#5D4E44] py-10 mb-24">
        <div className="max-w-3xl mx-auto px-6 relative flex items-center justify-between text-white">
            <button onClick={prevPromo} className="hover:text-[#C5A880] transition p-2"><ChevronLeft size={32}/></button>
            <div className="text-center px-4">
              <span className="block text-xs text-[#C5A880] font-bold tracking-widest uppercase mb-2">Oferta Especial</span>
              <p className="font-serif italic text-xl md:text-2xl animate-fade-in leading-relaxed">{promociones[promoIndex].texto}</p>
            </div>
            <button onClick={nextPromo} className="hover:text-[#C5A880] transition p-2"><ChevronRight size={32}/></button>
        </div>
      </section>

      {/* --- CONTACTO --- */}
      <section className="px-6 mb-24" id="contacto">
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl shadow-stone-200 overflow-hidden border border-stone-100">
          <div className="grid md:grid-cols-2">
            <div className="p-12 bg-[#FCFBFA] border-b md:border-b-0 md:border-r border-stone-100">
              <h3 className="text-2xl font-serif text-[#5D4E44] mb-8">Pacientes Felices</h3>
              <div className="space-y-8">
                {reseñas.map((res) => (
                  <div key={res.id} className="relative pl-6 border-l-4 border-[#C5A880]">
                    <p className="italic text-stone-700 mb-3 font-serif text-lg leading-relaxed">"{res.texto}"</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-[#5D4E44] text-sm uppercase tracking-wider">{res.cliente}</span>
                      <div className="flex text-[#C5A880] gap-0.5">
                        {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-12">
              <h3 className="text-2xl font-serif text-[#5D4E44] mb-2">Contáctanos</h3>
              <p className="text-stone-500 text-base mb-8">Responderemos a la brevedad.</p>
              <form className="space-y-5">
                <input type="email" placeholder="Tu Email" className="w-full p-4 rounded-xl border border-stone-200 bg-[#F9F6F2] text-base focus:bg-white focus:ring-2 focus:ring-[#C5A880] focus:border-transparent outline-none transition" />
                <textarea placeholder="Mensaje" rows={3} className="w-full p-4 rounded-xl border border-stone-200 bg-[#F9F6F2] text-base focus:bg-white focus:ring-2 focus:ring-[#C5A880] focus:border-transparent outline-none transition"></textarea>
                <button className="w-full bg-[#C5A880] text-white py-4 rounded-xl font-bold tracking-widest hover:bg-[#b0946e] transition shadow-md text-sm uppercase">
                  ENVIAR MENSAJE
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODAL --- */}
      {modalAbierto && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-stone-900/60 backdrop-blur-sm" onClick={() => setModalAbierto(false)}></div>
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl z-10 animate-in zoom-in-95 duration-200">
            <button onClick={() => setModalAbierto(false)} className="absolute top-4 right-4 bg-stone-100 p-2 rounded-full text-stone-500 hover:text-red-500 transition"><X size={24} /></button>
            <h3 className="text-2xl font-serif text-[#5D4E44] mb-2 text-center">Reservar Turno</h3>
            <p className="text-stone-600 text-base mb-8 text-center">Especialista: <span className="font-bold text-[#5D4E44] block text-xl mt-1">{doctorSeleccionado?.nombre}</span></p>
            <form onSubmit={handleReserva} className="space-y-5">
              <div className="relative">
                <Calendar className="absolute left-4 top-4 text-[#C5A880] w-5 h-5" />
                <input type="date" required className="w-full pl-12 p-4 bg-[#F9F6F2] rounded-xl outline-none text-base text-stone-700 border border-stone-200 focus:border-[#C5A880]" />
              </div>
              <div className="relative">
                <Clock className="absolute left-4 top-4 text-[#C5A880] w-5 h-5" />
                <input type="time" required className="w-full pl-12 p-4 bg-[#F9F6F2] rounded-xl outline-none text-base text-stone-700 border border-stone-200 focus:border-[#C5A880]" />
              </div>
              <button className="w-full bg-[#5D4E44] text-white py-4 rounded-xl font-bold tracking-widest hover:bg-[#4a3e36] transition shadow-lg mt-4 text-sm uppercase">Confirmar Cita</button>
            </form>
          </div>
        </div>
      )}

      {/* --- WHATSAPP --- */}
      <a 
        href="https://wa.me/12345678" 
        target="_blank" 
        className="fixed z-[9999] transition-transform hover:-translate-y-1 cursor-pointer"
        style={{ position: 'fixed', bottom: '30px', right: '30px' }}
      >
        <div className="bg-[#25D366] p-3 rounded-full border border-black shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-105">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </a>
    </div>
  );
}