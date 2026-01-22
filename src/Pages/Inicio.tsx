import React, { useState, useEffect } from 'react';
import { Truck, Package, MapPin, Zap, Menu, X, ArrowRight, CheckCircle } from 'lucide-react';

export default function ComercializadoraLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: <Package className="w-12 h-12" />,
      title: "Comercialización de Productos",
      description: "Ferreteros, agropecuarios, materiales de construcción y más"
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Transporte de Carga",
      description: "Rutas especializadas Villavicencio - Liviney y Puerto Gaitán"
    },
    {
      icon: <MapPin className="w-12 h-12" />,
      title: "Logística Integral",
      description: "Soluciones completas que combinan transporte y comercialización"
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Cobertura Regional",
      description: "Conectando Villavicencio con toda la región del Meta"
    }
  ];

  return (
    <div className="bg-zinc-950 text-slate-100 min-h-screen font-sans overflow-x-hidden antialiased">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrollY > 50 ? 'bg-zinc-950/80 backdrop-blur-xl border-b border-blue-900/30' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/40">
                <Truck className="w-6 h-6 text-white stroke-[2.5]" />
              </div>
              <span className="text-xl font-semibold tracking-tight text-slate-50">
                Comercializadora del Llano
              </span>
            </div>
            
            <div className="hidden md:flex space-x-10">
              <a href="#servicios" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium tracking-wide">Servicios</a>
              <a href="#cobertura" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium tracking-wide">Cobertura</a>
              <a href="#contacto" className="text-slate-400 hover:text-blue-400 transition-colors duration-300 text-sm font-medium tracking-wide">Contacto</a>
            </div>

            <button 
              className="md:hidden text-blue-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-zinc-900/95 backdrop-blur-xl border-t border-blue-900/30 animate-fade-in">
            <div className="px-4 py-6 space-y-4">
              <a href="#servicios" className="block py-2 text-slate-300 hover:text-blue-400 transition-colors">Servicios</a>
              <a href="#cobertura" className="block py-2 text-slate-300 hover:text-blue-400 transition-colors">Cobertura</a>
              <a href="#contacto" className="block py-2 text-slate-300 hover:text-blue-400 transition-colors">Contacto</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Refined Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
          <div className="absolute inset-0">
            <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full filter blur-[120px]"></div>
            <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-blue-500/8 rounded-full filter blur-[100px]"></div>
          </div>
          {/* Subtle grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        </div>

        {/* Colombia Map - More Subtle */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-[0.15] hidden lg:block">
          <svg viewBox="0 0 400 500" className="w-full h-full">
            <path 
              d="M200,50 L250,80 L280,120 L290,180 L280,240 L250,300 L220,350 L180,380 L140,350 L110,300 L100,240 L110,180 L140,120 L170,80 Z"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="2"
              className="opacity-40"
              style={{
                filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.3))'
              }}
            />
            <defs>
              <linearGradient id="neonGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Truck Animation - More Subtle */}
        <div className="absolute bottom-32 left-0 w-full overflow-hidden opacity-[0.08]">
          <div className="animate-slide-right">
            <Truck className="w-40 h-40 text-blue-600" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight">
              <span className="block text-slate-50">Conectamos</span>
              <span className="block bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 bg-clip-text text-transparent">
                el Meta
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
              Comercialización de productos ferreteros, agropecuarios y materiales de construcción. Transporte especializado Villavicencio - Liviney - Puerto Gaitán.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-8">
              <a 
                href="https://wa.me/573177777460?text=Hola,%20quiero%20cotizar%20un%20servicio"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-10 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-blue-900/40"
              >
                <span className="relative z-10 flex items-center gap-2 tracking-wide">
                  Cotiza por WhatsApp
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </a>
              
              <button className="px-10 py-4 border border-slate-700 text-slate-200 font-semibold rounded-xl hover:bg-slate-800/50 hover:border-blue-700 transition-all duration-300 transform hover:scale-[1.02] tracking-wide">
                Contáctanos
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-20 max-w-5xl mx-auto">
              {[
                { number: "15+", label: "Años de experiencia" },
                { number: "3", label: "Rutas principales" },
                { number: "500+", label: "Clientes activos" },
                { number: "24/7", label: "Disponibilidad" }
              ].map((stat, i) => (
                <div key={i} className="bg-zinc-900/40 backdrop-blur-sm border border-blue-900/30 rounded-2xl p-6 hover:border-blue-800/50 hover:bg-zinc-900/60 transition-all duration-300">
                  <div className="text-4xl font-bold bg-gradient-to-br from-blue-500 to-blue-700 bg-clip-text text-transparent">{stat.number}</div>
                  <div className="text-sm text-slate-500 mt-2 font-medium tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-32 bg-gradient-to-b from-zinc-950 to-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in">
            <h2 className="text-5xl sm:text-6xl font-bold mb-6 tracking-tight">
              Nuestros <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Servicios</span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              Soluciones logísticas diseñadas para optimizar tu cadena de suministro
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <div 
                key={i}
                className="group relative bg-zinc-900/50 backdrop-blur-sm border border-blue-900/30 rounded-2xl p-8 hover:border-blue-800/50 hover:bg-zinc-900/70 transition-all duration-500 transform hover:-translate-y-1"
                style={{animationDelay: `${i * 100}ms`}}
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-600/50 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-t-2xl"></div>
                
                <div className="text-blue-500 mb-6 transform group-hover:scale-105 transition-transform duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4 text-slate-100 tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-semibold tracking-wide">Conoce más</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section id="cobertura" className="py-32 bg-zinc-950 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full filter blur-[120px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-8 tracking-tight">
                Cobertura <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Regional</span>
              </h2>
              <p className="text-xl text-slate-400 mb-10 font-light leading-relaxed">
                Rutas especializadas Villavicencio - Liviney - Puerto Gaitán con entregas confiables y puntuales.
              </p>

              <div className="space-y-5">
                {[
                  "Comercialización de productos ferreteros",
                  "Materiales de construcción y agropecuarios",
                  "Transporte de carga especializado",
                  "Cobertura regional garantizada"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 group">
                    <CheckCircle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" strokeWidth={2} />
                    <span className="text-slate-300 text-lg font-light">{item}</span>
                  </div>
                ))}
              </div>

              <button className="mt-10 px-9 py-4 bg-zinc-900 border border-blue-900/50 text-slate-200 font-semibold rounded-xl hover:bg-zinc-800 hover:border-blue-800 transition-all duration-300 transform hover:scale-[1.02] tracking-wide">
                Ver rutas
              </button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-zinc-900/40 backdrop-blur-sm rounded-3xl border border-blue-900/30 p-10 flex items-center justify-center">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  <path 
                    d="M200,50 L250,80 L280,120 L290,180 L280,240 L250,300 L220,350 L180,380 L140,350 L110,300 L100,240 L110,180 L140,120 L170,80 Z"
                    fill="rgba(59, 130, 246, 0.05)"
                    stroke="url(#mapGradient)"
                    strokeWidth="3"
                    style={{
                      filter: 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.3))'
                    }}
                  />
                  {/* Location markers */}
                  {[[200, 150], [180, 220], [220, 280], [200, 340]].map((pos, i) => (
                    <circle 
                      key={i}
                      cx={pos[0]} 
                      cy={pos[1]} 
                      r="5" 
                      fill="#3b82f6"
                      className="animate-pulse"
                      style={{
                        animationDelay: `${i * 400}ms`,
                        filter: 'drop-shadow(0 0 6px rgba(59, 130, 246, 0.6))'
                      }}
                    />
                  ))}
                  <defs>
                    <linearGradient id="mapGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#2563eb" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-blue-700/5"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl sm:text-6xl font-bold mb-8 tracking-tight leading-tight">
            ¿Listo para optimizar tu <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">logística</span>?
          </h2>
          <p className="text-xl text-slate-400 mb-12 font-light max-w-2xl mx-auto leading-relaxed">
            Contáctanos hoy y descubre cómo podemos impulsar tu negocio con soluciones de transporte y comercialización especializadas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <a
              href="https://wa.me/573177777460?text=Hola,%20quiero%20solicitar%20una%20cotización"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-lg rounded-xl hover:shadow-2xl hover:shadow-blue-900/40 transform hover:scale-[1.02] transition-all duration-300 tracking-wide"
            >
              Solicitar cotización
            </a>
            <a
              href="https://wa.me/573177777460"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 border border-slate-700 text-slate-200 font-semibold text-lg rounded-xl hover:bg-slate-800/50 hover:border-blue-700 transition-all duration-300 transform hover:scale-[1.02] tracking-wide"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-blue-900/20 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-5">
                <div className="w-11 h-11 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-xl flex items-center justify-center shadow-lg shadow-blue-900/40">
                  <Truck className="w-6 h-6 text-white stroke-[2.5]" />
                </div>
                <span className="font-semibold text-lg tracking-tight">Comercializadora del Llano</span>
              </div>
              <p className="text-slate-400 font-light leading-relaxed">
                Conectando a Colombia con eficiencia y confianza desde hace más de 15 años.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-slate-200 tracking-wide">Enlaces rápidos</h4>
              <ul className="space-y-3 text-slate-400 font-light">
                <li><a href="#servicios" className="hover:text-blue-400 transition-colors duration-300">Servicios</a></li>
                <li><a href="#cobertura" className="hover:text-blue-400 transition-colors duration-300">Cobertura</a></li>
                <li><a href="#contacto" className="hover:text-blue-400 transition-colors duration-300">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-slate-200 tracking-wide">Contacto</h4>
              <ul className="space-y-3 text-slate-400 font-light">
                <li className="flex items-center gap-2">
                  <span className="text-green-500">●</span>
                  <a href="https://wa.me/573177777460" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors duration-300">
                    WhatsApp: 317 777 7460
                  </a>
                </li>
                <li>info@comercializadoradellano.co</li>
                <li>Villavicencio, Meta</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-900/20 pt-10 text-center text-slate-500 font-light text-sm tracking-wide">
            <p>© 2026 Comercializadora del Llano. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-right {
          from {
            transform: translateX(-100%);
          }
          to {
            transform: translateX(100vw);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-right {
          animation: slide-right 20s linear infinite;
        }
      `}</style>
    </div>
  );
}