"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TbPackage,
  TbCurrencyBitcoin,
  TbCpu,
  TbDeviceMobile,
  TbCode,
  TbPalette,
  TbArrowRight,
} from "react-icons/tb";
import AnimatedSection from "../ui/AnimatedSection";
import { servicesData } from "../../data/servicesData";
import { staggerContainer } from "../../lib/animations";

const iconComponents = {
  TbPackage: TbPackage,
  TbCurrencyBitcoin: TbCurrencyBitcoin,
  TbCpu: TbCpu,
  TbDeviceMobile: TbDeviceMobile,
  TbCode: TbCode,
  TbPalette: TbPalette,
};

const ServicesSection = () => {
  return (
    <AnimatedSection id="services" className="section services py-16 bg-gray-50">
      <div className="container mx-auto px-16">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-4 text-gray-800"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our <span className="text-[#059652]">Services</span>
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            We offer comprehensive digital solutions that transform ideas into powerful, scalable, and user-centric products.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {servicesData.map((service, index) => {
            const IconComponent = iconComponents[service.icon];
            return (
              <motion.div
                key={service.id}
                className="service-item relative bg-white px-8 py-12 border border-[#059652]/20 rounded-lg shadow-md overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                {/* Background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-[#059652]/5 via-blue-500/5 to-purple-500/5 opacity-0"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ 
                    scale: 1,
                    opacity: 1,
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                  }}
                />
                
                {/* Icon with floating animation */}
                <motion.div 
                  className="icon mb-6 text-4xl text-[#059652] relative z-10"
                  initial={{ opacity: 0, scale: 0.5, y: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  animate={{ 
                    y: [0, -5, 0],
                  }}
                  viewport={{ once: true }}
                  transition={{ 
                    opacity: { delay: 0.2 + index * 0.1, duration: 0.5 },
                    scale: { delay: 0.2 + index * 0.1, duration: 0.5 },
                    y: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }
                  }}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <IconComponent />
                </motion.div>
                
                <motion.h3 
                  className="text-xl font-bold mb-4 text-gray-800 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={service.link}
                    className="stretched-link hover:text-[#059652] transition-colors duration-300"
                  >
                    {service.title}
                  </Link>
                </motion.h3>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  {service.description}
                </motion.p>
                
                {/* Animated bottom border */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#059652] via-blue-500 to-purple-500"
                  initial={{ width: "0%" }}
                  whileHover={{ 
                    width: "100%",
                    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
                  }}
                />
                
                {/* Hover arrow */}
                <motion.div
                  className="absolute top-6 right-6 opacity-0 text-[#059652]"
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ 
                    opacity: 1, 
                    x: 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  <TbArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default ServicesSection; 