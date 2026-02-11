import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Package, Globe, Shield, Clock, BarChart3 } from 'lucide-react';

const services = [
  {
    icon: Truck,
    title: "Transporte de Carga",
    description: "Transporte terrestre Villavicencio - Puerto Gaitán - Liviney. Flota moderna con rastreo GPS.",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: Package,
    title: "Productos Ferreteros",
    description: "Comercialización de herramientas, materiales y productos de ferretería al por mayor y menor.",
    color: "from-cyan-500 to-cyan-700"
  },
  {
    icon: Globe,
    title: "Productos Agropecuarios",
    description: "Insumos agrícolas, alimentos para animales, fertilizantes y todo para el campo.",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: Shield,
    title: "Materiales de Construcción",
    description: "Cemento, varillas, arena, bloques y todos los materiales para tu obra.",
    color: "from-cyan-500 to-cyan-700"
  },
  {
    icon: Clock,
    title: "Entregas Rápidas",
    description: "Servicio express en nuestras rutas principales con tiempos garantizados.",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: BarChart3,
    title: "Logística Integral",
    description: "Soluciones completas de transporte y distribución para tu negocio.",
    color: "from-cyan-500 to-cyan-700"
  }
];

export default function ServicesSection() {
  return (
    <section className="relative py-32 bg-[#0a0a0a]" id="servicios">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
      
      <div className="relative container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-purple-500" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
              Nuestros Servicios
            </span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-blue-500" />
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Soluciones{' '}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Integrales
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Transporte de carga y comercialización de productos para impulsar tu negocio 
            en la región del Meta y más allá.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative h-full bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-800/50 overflow-hidden transition-all duration-500 hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:via-transparent group-hover:to-cyan-500/5 transition-all duration-500" />
                
                {/* Geometric accent */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl group-hover:from-blue-500/20 transition-all duration-500" />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} p-0.5 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="w-full h-full rounded-xl bg-gray-950 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="relative text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="relative text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Arrow indicator */}
                {/* <div className="relative mt-6 flex items-center gap-2 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-sm font-medium">Conocer más</span>
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}