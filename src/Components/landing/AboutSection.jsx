import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Target } from 'lucide-react';

const features = [
  "Rutas especializadas Villavicencio - Puerto Gaitán - Liviney",
  "Amplio inventario de productos ferreteros y agropecuarios",
  "Materiales de construcción de alta calidad",
  "Entregas puntuales y servicio personalizado"
];

const values = [
  {
    icon: Award,
    title: "Excelencia",
    description: "Compromiso con los más altos estándares de calidad en cada operación."
  },
  {
    icon: Users,
    title: "Confianza",
    description: "Relaciones duraderas basadas en transparencia y cumplimiento."
  },
  {
    icon: Target,
    title: "Innovación",
    description: "Tecnología de punta para optimizar cada proceso logístico."
  }
];

export default function AboutSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-[#0a0a0a] via-[#0f0f15] to-[#0a0a0a]" id="nosotros">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main visual container */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-blue-500/20 animate-spin-slow" style={{ animationDuration: '20s' }} />
              
              {/* Middle ring */}
              <div className="absolute inset-8 rounded-full border border-cyan-500/30" />
              
              {/* Center content */}
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-blue-900/40 to-cyan-900/20 backdrop-blur-sm flex items-center justify-center border border-blue-500/30">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                    100%
                  </div>
                  <div className="text-gray-400 text-sm uppercase tracking-widest">
                    Compromiso<br/>Garantizado
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-10 right-10 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg shadow-blue-500/25"
              >
                <Award className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 w-16 h-16 rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-700 flex items-center justify-center shadow-lg shadow-cyan-500/25"
              >
                <Target className="w-8 h-8 text-white" />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent" />
              <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
                Sobre Nosotros
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Líderes en{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
                transporte
              </span>{' '}
              y comercialización
            </h2>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              Comercializadora del Llano conecta Villavicencio con Puerto Gaitán y Liviney, 
              ofreciendo transporte de carga confiable y comercialización de productos 
              ferreteros, agropecuarios y materiales de construcción para toda la región.
            </p>

            {/* Features list */}
            <div className="space-y-4 mb-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Values */}
            <div className="grid grid-cols-3 gap-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center p-4 rounded-xl bg-gray-900/50 border border-gray-800/50 hover:border-blue-500/30 transition-colors"
                >
                  <value.icon className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                  <h4 className="text-white font-semibold text-sm">{value.title}</h4>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}