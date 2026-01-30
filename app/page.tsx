'use client';

import React, { useState } from 'react';
import { Calendar, Clock, MessageCircle, Star, ChevronLeft, ChevronRight, X, Phone, MapPin, Menu } from 'lucide-react';

// Datos de ejemplo (Sin cambios)
const doctores = [
  {
    id: 1,
    nombre: "Dra. Elena Chen",
    especialidad: "Acupuntura",
    experiencia: "Especialista en dolor crónico.",
    imagen: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 2,
    nombre: "Dr. Marcos Silva",
    especialidad: "Hierbas Medicinales",
    experiencia: "Terapias naturales y detox.",
    imagen: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=400&h=400"
  },
  {
    id: 3,
    nombre: "Dr. Lucas Vidal",
    especialidad: "Homeopatía",
    experiencia: "Ansiedad y control de estrés.",
    imagen: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=400&h=400"
  }
];

const promociones = [
  { id: 1, texto: "✨ 20% OFF en tu primera sesión de Reiki" },
  { id: 2, texto: "🌿 Pack Relax: 3 Sesiones de Acupuntura con 15% descuento" }
];

const reseñas = [
  { id: 1, cliente: "Laura C.", texto: "El ambiente es súper relajante y los tratamientos muy efectivos." },
  { id: 2, cliente: "Pedro M.", texto: "El Dr. Silva cambió mi calidad de vida. Muy recomendado." }
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
    <div className="min-h-screen flex flex-col font-sans bg-[#F9F6F2] text-[#4A403A]">
      
      {/* --- 1. NAVBAR PROFESIONAL --- */}
      {/* sticky top-0 y backdrop-blur para que flote elegante */}
      <nav className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-md border-b border-stone-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 bg-[#5D4E44] text-white rounded-full flex items-center justify-center font-serif text-xl shadow-md">W</div>
            <span className="text-xl font-serif font-bold text-[#5D4E44] tracking-wide">Wellness Clinic</span>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-widest text-stone-500 uppercase">
            <a href="#" className="hover:text-[#C5A880] transition-colors">Inicio</a>
            <a href="#" className="hover:text-[#C5A880] transition-colors">Especialistas</a>
            <a href="#contacto" className="hover:text-[#C5A880] transition-colors">Contacto</a>
            {/* Botón CTA en el Navbar */}
            <button className="bg-[#5D4E44] text-white px-6 py-2.5 rounded-full hover:bg-[#4a3e36] transition shadow-md">
              Agendar
            </button>
          </div>

          {/* Menú Móvil (Icono) */}
          <button className="md:hidden text-[#5D4E44]">
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* --- 2. INTRODUCCIÓN (HERO) --- */}
      {/* Añadimos mucho padding (py-20) para que respire */}
      <div className="pt-20 pb-10 px-6 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif text-[#5D4E44] mb-6 leading-tight">
          Recupera tu equilibrio <br/> <span className="text-[#C5A880]">Cuerpo y Mente</span>
        </h1>
        <p className="text-stone-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Un espacio dedicado a la medicina integrativa y el bienestar holístico. 
          Conecta con profesionales expertos en restaurar tu vitalidad.
        </p>
      </div>

      {/* --- 3. SECCIÓN DOCTORES (MÓDULO 1) --- */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Título de sección discreto */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-[1px] bg-[#C5A880] flex-grow opacity-50"></div>
            <h2 className="text-2xl font-serif text-[#5D4E44]">Nuestros Especialistas</h2>
            <div className="h-[1px] bg-[#C5A880] flex-grow opacity-50"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctores.map((doc) => (
              <div key={doc.id} className="bg-white rounded-[2rem] p-8 shadow-xl shadow-stone-200/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-stone-100 flex flex-col items-center group relative overflow-hidden">
                
                {/* Decoración de fondo */}
                <div className="absolute top-0 left-0 w-full h-24 bg-[#FDFBF7] z-0"></div>

                <div className="relative z-10 p-1.5 rounded-full border-2 border-white bg-white shadow-md mb-6">
                  <img src={doc.imagen} alt={doc.nombre} className="w-32 h-32 rounded-full object-cover" />
                </div>
                
                <h3 className="relative z-10 text-xl font-serif font-bold text-[#5D4E44] mb-2">{doc.nombre}</h3>
                <span className="relative z-10 bg-[#F9F6F2] text-[#5D4E44] px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6 border border-stone-200">
                  {doc.especialidad}
                </span>
                <p className="relative z-10 text-stone-500 text-sm mb-8 leading-relaxed px-2 text-center">
                  {doc.experiencia}
                </p>
                
                <button 
                  onClick={() => abrirReserva(doc)}
                  className="relative z-10 mt-auto bg-[#5D4E44] text-white px-8 py-3 rounded-xl text-xs font-bold tracking-widest hover:bg-[#C5A880] transition-colors shadow-lg w-full md:w-auto"
                >
                  RESERVAR CITA
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- 4. PROMOCIONES (MÓDULO FLOTANTE) --- */}
      <section className="py-10 px-6">
        <div className="max-w-4xl mx-auto bg-[#5D4E44] text-white rounded-2xl py-6 px-8 shadow-2xl relative overflow-hidden flex items-center justify-between">
            {/* Patrón de fondo sutil */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent"></div>
            
            <button onClick={prevPromo} className="relative z-10 hover:text-[#C5A880] hover:scale-110 transition p-2"><ChevronLeft size={28} /></button>
            <div className="text-center relative z-10">
              <p className="text-xs text-[#C5A880] font-bold tracking-widest uppercase mb-1">Promoción del Mes</p>
              <p className="font-serif italic text-xl md:text-2xl animate-fade-in">{promociones[promoIndex].texto}</p>
            </div>
            <button onClick={nextPromo} className="relative z-10 hover:text-[#C5A880] hover:scale-110 transition p-2"><ChevronRight size={28} /></button>
        </div>
      </section>

      {/* --- 5. INFO & CONTACTO (MÓDULO COMBINADO) --- */}
      <section className="py-16 px-6" id="contacto">
        {/* Usamos un contenedor GRANDE con bordes redondeados para agrupar esto */}
        <div className="max-w-7xl mx-auto bg-white rounded-[3rem] shadow-xl shadow-stone-200 overflow-hidden border border-stone-100">
          <div className="grid md:grid-cols-2">
            
            {/* Columna Izquierda: Reseñas */}
            <div className="p-12 md:p-20 border-b md:border-b-0 md:border-r border-stone-100 bg-[#FCFBFA]">
              <h3 className="text-3xl font-serif text-[#5D4E44] mb-10">Lo que dicen nuestros pacientes</h3>
              <div className="space-y-10">
                {reseñas.map((res) => (
                  <div key={res.id} className="relative pl-6 border-l-2 border-[#C5A880]">
                    <div className="flex text-[#C5A880] gap-1 mb-2">
                      {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
                    </div>
                    <p className="italic text-stone-600 mb-3 font-serif text-lg leading-relaxed">"{res.texto}"</p>
                    <p className="font-bold text-[#5D4E44] text-xs uppercase tracking-wider">— {res.cliente}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Columna Derecha: Formulario */}
            <div className="p-12 md:p-20">
              <h3 className="text-3xl font-serif text-[#5D4E44] mb-2">Contáctanos</h3>
              <p className="text-stone-400 text-sm mb-8">Estamos aquí para responder tus dudas.</p>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-xs font-bold text-[#5D4E44] uppercase mb-2 ml-1">Tu Correo</label>
                  <input type="email" placeholder="ejemplo@correo.com" className="w-full p-4 rounded-xl border border-stone-200 bg-[#F9F6F2] focus:bg-white focus:ring-2 focus:ring-[#C5A880] focus:border-transparent outline-none transition" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#5D4E44] uppercase mb-2 ml-1">Tu Mensaje</label>
                  <textarea placeholder="¿En qué podemos ayudarte?" rows={3} className="w-full p-4 rounded-xl border border-stone-200 bg-[#F9F6F2] focus:bg-white focus:ring-2 focus:ring-[#C5A880] focus:border-transparent outline-none transition"></textarea>
                </div>
                <button className="w-full bg-[#5D4E44] text-white py-4 rounded-xl font-bold tracking-widest hover:bg-[#C5A880] transition shadow-lg text-xs uppercase">
                  Enviar Mensaje
                </button>
              </form>

              <div className="mt-10 flex flex-col md:flex-row gap-6 text-stone-500 text-sm pt-8 border-t border-stone-100">
                 <span className="flex items-center gap-2"><Phone size={18} className="text-[#C5A880]"/> 11-1234-5678</span>
                 <span className="flex items-center gap-2"><MapPin size={18} className="text-[#C5A880]"/> Palermo, Buenos Aires</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer Simple */}
      <footer className="py-8 text-center text-stone-400 text-xs uppercase tracking-widest">
        © 2024 Wellness Clinic. Todos los derechos reservados.
      </footer>

      {/* --- MODAL (POP-UP) --- */}
      {modalAbierto && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-[#2d2a26]/80 backdrop-blur-sm" onClick={() => setModalAbierto(false)}></div>
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full relative shadow-2xl z-10 animate-in zoom-in-95 duration-200">
            <button onClick={() => setModalAbierto(false)} className="absolute top-4 right-4 bg-stone-100 p-2 rounded-full text-stone-500 hover:text-red-500 transition"><X size={20} /></button>
            <h3 className="text-2xl font-serif text-[#5D4E44] mb-2 text-center">Reservar Turno</h3>
            <p className="text-stone-500 text-sm mb-6 text-center">Especialista: <span className="font-bold text-[#5D4E44] block text-lg">{doctorSeleccionado?.nombre}</span></p>
            <form onSubmit={handleReserva} className="space-y-4">
              <div className="relative">
                <Calendar className="absolute left-3 top-3.5 text-[#C5A880] w-4 h-4" />
                <input type="date" required className="w-full pl-10 p-3 bg-[#FDFBF7] rounded-xl outline-none focus:ring-2 focus:ring-[#C5A880]/50 text-stone-700 border border-stone-200" />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-3.5 text-[#C5A880] w-4 h-4" />
                <input type="time" required className="w-full pl-10 p-3 bg-[#FDFBF7] rounded-xl outline-none focus:ring-2 focus:ring-[#C5A880]/50 text-stone-700 border border-stone-200" />
              </div>
              <button className="w-full bg-[#5D4E44] text-white py-3.5 rounded-xl font-bold tracking-widest hover:bg-[#4a3e36] transition shadow-lg mt-2 text-xs uppercase">Confirmar Cita</button>
            </form>
          </div>
        </div>
      )}

      {/* --- WHATSAPP (BOTÓN FIXED) --- */}
      <a 
        href="https://wa.me/12345678" 
        target="_blank" 
        className="fixed z-[9999] transition-transform hover:-translate-y-1 cursor-pointer"
        style={{ position: 'fixed', bottom: '30px', right: '30px' }}
      >
        <div className="bg-[#25D366] p-4 rounded-full border border-black shadow-xl hover:shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105">
          <svg width="42" height="42" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </div>
      </a>

    </div>
  );
}