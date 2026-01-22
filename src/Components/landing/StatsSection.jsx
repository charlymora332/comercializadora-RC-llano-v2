import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const stats = [
  { value: 15000, suffix: '+', label: 'Envíos Mensuales', prefix: '' },
  { value: 32, suffix: '', label: 'Departamentos', prefix: '' },
  { value: 98.5, suffix: '%', label: 'Entregas a Tiempo', prefix: '' },
  { value: 500, suffix: '+', label: 'Clientes Activos', prefix: '' }
];

function AnimatedCounter({ value, suffix, prefix, isInView }) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isInView) return;
    
    const duration = 2000;
    const steps = 60;
    const stepValue = value / steps;
    const stepDuration = duration / steps;
    
    let current = 0;
    const timer = setInterval(() => {
      current += stepValue;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepDuration);
    
    return () => clearInterval(timer);
  }, [isInView, value]);
  
  const displayValue = Number.isInteger(value) 
    ? Math.floor(count).toLocaleString() 
    : count.toFixed(1);
  
  return (
    <span>
      {prefix}{displayValue}{suffix}
    </span>
  );
}

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <section ref={ref} className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>
      
      {/* Glowing orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-[100px]" />
      
      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="relative inline-block">
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-br from-purple-500/10 to-amber-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent mb-2">
                  <AnimatedCounter {...stat} isInView={isInView} />
                </h3>
              </div>
              <p className="text-gray-400 text-sm md:text-base font-medium tracking-wide">
                {stat.label}
              </p>
              
              {/* Decorative line */}
              <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="mt-4 h-0.5 w-12 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}