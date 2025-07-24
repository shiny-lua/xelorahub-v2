"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TbArrowRight } from "react-icons/tb";
import AnimatedSection from "../ui/AnimatedSection";
import { staggerContainer, slideInLeft, slideInRight, fadeInUp } from "../../lib/animations";

const AboutSection = () => {
  return (
    <AnimatedSection id="about" className="section about py-16">
      <div className="container mx-auto px-16">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div 
            className="order-1 lg:order-2"
            variants={slideInRight}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/img/about.jpg"
                alt="About XELORAHUB"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="order-2 lg:order-1 content"
            variants={slideInLeft}
          >
            <motion.h3 
              className="text-3xl font-bold mb-6 text-gray-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Innovating the Future with{" "}
              <motion.span
                className="text-[#059652]"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                XELORAHUB
              </motion.span>
            </motion.h3>
            
            <motion.p 
              className="italic text-lg mb-6 text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We help ambitious businesses unlock new possibilities through
              immersive tech, decentralized systems, and intelligent
              automation.
            </motion.p>
            
            <motion.ul 
              className="space-y-4 mb-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                "Expertise in 3D web and VR development that transforms digital engagement.",
                "Custom blockchain and smart contract solutions for secure, decentralized apps.",
                "AI-powered web and mobile platforms built for scalability, speed, and smart automation."
              ].map((text, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start"
                  variants={fadeInUp}
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <TbArrowRight className="text-[#059652] mt-1 mr-3 flex-shrink-0" />
                  </motion.div>
                  <span className="text-gray-600 leading-relaxed">
                    {text}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.p 
              className="text-gray-600 leading-relaxed text-justify"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              At XELORAHUB, we blend creativity and code to build forward-thinking
              digital products. Whether you're exploring immersive 3D
              environments, launching a Web3 project, or integrating AI into
              your business, our team delivers tailor-made solutions that
              scale. We're not just building apps — we're building digital
              ecosystems designed for the future.
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default AboutSection;