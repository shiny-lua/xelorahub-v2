"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { staggerContainer, fadeInUp } from "../../lib/animations";
import { statsData } from "@/data/StatsData";

const CounterAnimation = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime = null;
      const startValue = 0;
      const endValue = end;
      
      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        
        const currentCount = Math.floor(progress * (endValue - startValue) + startValue);
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
};

const StatsItem = ({ icon: Icon, number, title, subtitle, delay = 0 }) => (
  <motion.div
    className="group"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -10 }}
  >
    <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
      <motion.div
        className="flex justify-center mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="text-4xl text-[#059652] group-hover:text-[#047a42] transition-colors duration-300" />
      </motion.div>
      
      <div className="text-4xl font-bold text-gray-800 mb-2">
        <CounterAnimation end={number} />
      </div>
      
      <div className="text-gray-600">
        <p className="font-semibold text-lg mb-1">{title}</p>
        <p className="text-sm opacity-80">{subtitle}</p>
      </div>
    </div>
  </motion.div>
);

const StatsSection = () => {
  

  return (
    <AnimatedSection id="stats" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {statsData.map((stat, index) => (
            <StatsItem
              key={index}
              icon={stat.icon}
              number={stat.number}
              title={stat.title}
              subtitle={stat.subtitle}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default StatsSection; 