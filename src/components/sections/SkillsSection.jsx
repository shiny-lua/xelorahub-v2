"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import AnimatedSection from "../ui/AnimatedSection";
import { staggerContainer, slideInLeft, slideInRight } from "../../lib/animations";
import { skillsData } from "@/data/SkillsData";

const ProgressBar = ({ skill, delay = 0 }) => {
  const [progress, setProgress] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setProgress(skill.percentage);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isInView, skill.percentage, delay]);

  return (
    <motion.div
      ref={ref}
      className="mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-800 font-medium">{skill.name}</span>
        <span className="text-[#059652] font-semibold">{skill.percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-[#059652] to-[#047a42] rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ 
            duration: 1.5, 
            delay: delay * 0.1,
            ease: [0.22, 1, 0.36, 1]
          }}
        />
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  return (
    <AnimatedSection id="skills" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore the technologies and expertise that power XELORAHUB's digital innovation.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="order-1 lg:order-1"
            variants={slideInLeft}
          >
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/img/skills.jpg"
                alt="XELORAHUB Skills"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-2 lg:order-2"
            variants={slideInRight}
          >
            <motion.h3 
              className="text-3xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Empowering Brands with{" "}
              <motion.span
                className="text-[#059652]"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Advanced Tech
              </motion.span>
            </motion.h3>
            
            <motion.p 
              className="italic text-lg mb-8 text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our team blends creative vision with technical mastery to craft
              future-ready solutions across industries.
            </motion.p>
            
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {skillsData.map((skill, index) => (
                <ProgressBar
                  key={skill.id}
                  skill={skill}
                  delay={index}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default SkillsSection; 