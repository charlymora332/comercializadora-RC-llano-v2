import React from 'react';
import { motion } from 'framer-motion';
import { Truck, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const footerLinks = {
  servicios: [
    { label: 'Transporte de Carga', href: '#servicios' },
    { label: 'Productos Ferreteros', href: '#servicios' },
    { label: 'Productos Agropecuarios', href: '#servicios' },
    { label: 'Materiales de Construcción', href: '#servicios' }
  ],
  empresa: [
    { label: 'Sobre Nosotros', href: '#nosotros' },
    { label: 'Nuestra Flota', href: '#' },
    { label: 'Certificaciones', href: '#' },
    { label: 'Trabaja con Nosotros', href: '#' }
  ],
  soporte: [
    { label: 'Rastrear Envío', href: '#' },
    { label: 'Preguntas Frecuentes', href: '#' },
    { label: 'Términos y Condiciones', href: '#' },
    { label: 'Política de Privacidad', href: '#' }
  ]
};

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' }
];

export default function Footer() {
  return (
    <footer className="relative bg-[#050505] border-t border-gray-900">
      {/* Top decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent " />
      
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 items-center">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                  <Truck className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-lg">Comercializadora</h3>
                  <p className="text-blue-400 text-sm font-medium">del Llano</p>
                </div>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
                Transporte de carga y comercialización de productos ferreteros, 
                agropecuarios y materiales de construcción en la región del Meta.
              </p>
              

      
            </motion.div>
          </div>


           <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
             

              {/* Contact Info */}
              <div className="space-y-3">
                <a href="https://maps.app.goo.gl/dZeLFbGDa2wCx24KA" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm" target="_blank" rel="noopener noreferrer">
                  <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Villavicencio, Meta - Colombia</span>
                </a>
                <a href="tel:+573177777460" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm" target='_blank'>
                  <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>+57 317 777 7460</span>
                </a>
                <a href="mailto:Comercializadorarcdelllano@gmail.com" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors text-sm" target='_blank'>
                  <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                  <span>Comercializadorarcdelllano@gmail.com</span>
                </a>
              </div>
            </motion.div>
          </div>
          

          {/* Links Columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}

          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Soporte</h4>
            <ul className="space-y-3">
              {footerLinks.soporte.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div> */}
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-900 flex flex-col md:flex-row justify-center items-center  gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Comercializadora del Llano. Todos los derechos reservados.
          </p>
          
          {/* Social Links */}
          {/* <div className="flex items-center gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-10 h-10 rounded-lg bg-gray-900 border border-gray-800 flex items-center justify-center text-gray-400 hover:text-white hover:border-blue-500/50 transition-all"
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
}