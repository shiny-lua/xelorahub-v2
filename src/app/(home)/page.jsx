"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { trackUserIP } from "@/utils/tracking";
import LoadingSpinner from "@/components/ui/LoadingSpinner";
import Header from "@/components/sections/Header";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ClientsSection from "@/components/sections/ClientsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <AnimatePresence mode="wait">
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header />
          <HeroSection />
          <AboutSection />
          <ServicesSection />
          <ClientsSection />
          <TestimonialsSection />
          <Footer />
        </motion.div>
    </AnimatePresence>
  );
}
