import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Mail, MessageCircle } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-32 bg-[#0a0a0a] overflow-hidden" id='contacto'>
      {/* Dynamic background */}
      <div className="absolute inset-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-cyan-900/20" />
        
        {/* Animated grid lines */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
        
        {/* Glowing orbs */}
        <motion.div
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0]
          }}
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-blue-300 text-sm font-medium">Disponibles 24/7 para atenderte</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            ¿Listo para{' '}
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              transformar
            </span>
            <br />
            tu negocio?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12"
          >
            Contáctanos hoy para transportar tu carga o adquirir productos ferreteros, 
            agropecuarios y materiales de construcción en la región del Meta.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center gap-4 mb-16"
          >
            <Button 
              size="lg"
              className="group bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-500 hover:from-blue-600 hover:via-blue-700 hover:to-cyan-600 text-white font-bold px-10 py-7 text-lg rounded-full shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:shadow-blue-500/50 hover:scale-105"
            >
              Solicitar Cotización Gratis
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              className="border-gray-700 text-white hover:bg-white/5 hover:border-gray-600 px-10 py-7 text-lg rounded-full transition-all duration-300"
            >
              <Phone className="w-5 h-5 mr-2" />
              Llamar Ahora
            </Button>
          </motion.div>

          {/* Contact options */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-8"
          >
            <a href="tel:+573177777460" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
                <Phone className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-gray-500">Teléfono</div>
                <div className="font-medium">+57 317 777 7460</div>
              </div>
            </a>
            
            <a href="mailto:Comercializadorarcdelllano@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-cyan-500/50 transition-colors">
                <Mail className="w-5 h-5 text-cyan-400" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-gray-500">Email</div>
                <div className="font-medium">Comercializadorarcdelllano@gmail.com</div>
              </div>
            </a>
            
            <a href="https://wa.link/mh1ifh" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center group-hover:border-green-500/50 transition-colors">
                <MessageCircle className="w-5 h-5 text-green-400" />
              </div>
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider text-gray-500">WhatsApp</div>
                <div className="font-medium">317 777 7460</div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}