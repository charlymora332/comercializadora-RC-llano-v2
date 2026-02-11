import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, MapPin, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#0a0a0a] overflow-hidden flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(168, 85, 247, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-[100px] animate-pulse" />

      {/* Colombia Map Stylized */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full opacity-30 md:opacity-50">
        <svg viewBox="0 0 400 500" className="w-full h-full">
          <defs>
            <linearGradient id="mapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="50%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#93C5FD" />
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          {/* Simplified Colombia shape */}
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
            d="M200,50 
               C250,60 280,80 300,120
               C320,160 310,200 290,240
               C270,280 280,320 300,360
               C320,400 280,450 240,470
               C200,490 160,480 130,450
               C100,420 80,380 90,340
               C100,300 80,260 100,220
               C120,180 100,140 120,100
               C140,60 170,40 200,50Z"
            fill="none"
            stroke="url(#mapGradient)"
            strokeWidth="2"
            filter="url(#glow)"
          />
          {/* Route lines */}
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
            d="M150,150 L200,200 L180,280 L220,350"
            fill="none"
            stroke="#3B82F6"
            strokeWidth="2"
            strokeDasharray="8 4"
            filter="url(#glow)"
          />
          {/* City points */}
          {[
            { cx: 150, cy: 150 },
            { cx: 200, cy: 200 },
            { cx: 180, cy: 280 },
            { cx: 220, cy: 350 }
          ].map((point, i) => (
            <motion.circle
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 2 + i * 0.3 }}
              cx={point.cx}
              cy={point.cy}
              r="6"
              fill="#3B82F6"
              filter="url(#glow)"
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-cyan-400" />
            <span className="text-blue-400 text-sm font-medium tracking-widest uppercase">
              Transporte & Comercialización
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-6"
          >
            <span className="text-white">Comercializadora</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
              del Llano
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            Transporte de carga y comercialización de productos ferreteros, agropecuarios 
            y materiales de construcción. Villavicencio - Puerto Gaitán - Liviney.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold px-8 py-6 text-lg rounded-full shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40 hover:scale-105"
            >
              <Truck className="w-5 h-5 mr-2" />
                <a href="https://wa.link/mh1ifh" target="_blank">
                Solicitar Cotización
              </a>
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-blue-500/50 text-blue-400 hover:bg-blue-500/10 hover:border-blue-400 px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              <MapPin className="w-5 h-5 mr-2" />
              <a href="https://maps.app.goo.gl/dZeLFbGDa2wCx24KA" target="_blank" rel="noopener noreferrer">
                Ver Cobertura
              </a>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 flex items-center gap-8"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-500 text-sm">Operando 24/7</span>
            </div>
            <div className="h-4 w-px bg-gray-700" />
            <span className="text-gray-500 text-sm">+15 años de experiencia</span>
            <div className="h-4 w-px bg-gray-700 hidden sm:block" />
            <span className="text-gray-500 text-sm hidden sm:block">Cobertura nacional</span>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="flex flex-col items-center text-gray-500"
        >
          <span className="text-xs mb-2 tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}