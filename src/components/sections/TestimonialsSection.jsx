"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TbStar, TbQuote } from "react-icons/tb";
import AnimatedSection from "../ui/AnimatedSection";
import { testimonialsData } from "../../data/testimonialsData";
import { staggerContainer } from "../../lib/animations";

const TestimonialsSection = () => {
  return (
    <AnimatedSection
      id="testimonials"
      className="testimonials section py-16 bg-gray-50"
    >
      <motion.div
        className="container mx-auto px-16 section-title mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-bold text-center mb-6 text-gray-800"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Client <span className="text-[#059652]">Testimonials</span>
        </motion.h2>
        <motion.p 
          className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          Our clients share their experiences and success stories with XELORAHUB's
          innovative solutions.
        </motion.p>
      </motion.div>
      {/* End Section Title */}

      <div className="container mx-auto px-16">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonialsData.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="testimonial-item bg-white border border-[#059652]/20 p-8 rounded-xl shadow-lg overflow-hidden group relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1] 
              }}
              whileHover={{ 
                y: -5,
                scale: 1.02,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)",
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
            >
              {/* Background gradient animation */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[#059652]/5 via-blue-500/5 to-transparent opacity-0"
                initial={{ scale: 0.8, opacity: 0 }}
                whileHover={{ 
                  scale: 1,
                  opacity: 1,
                  transition: { duration: 0.4 }
                }}
              />
              
              <div className="flex flex-col items-center text-center relative z-10">
                <div className="flex items-start justify-start w-full">
                  <motion.div
                    whileHover={{ 
                      scale: 1.1,
                      rotate: [0, -5, 5, 0],
                      transition: { duration: 0.5 }
                    }}
                    className="relative"
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="w-20 h-20 rounded-full object-cover mb-2 border-4 border-[#059652]/20 mr-4"
                    />
                    {/* Animated ring around image */}
                    <motion.div
                      className="absolute inset-0 border-2 border-[#059652]/30 rounded-full"
                      animate={{ 
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  </motion.div>
                  <div className="flex flex-col items-start">
                    <motion.h3 
                      className="text-xl font-bold mb-1 text-gray-800"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    >
                      {testimonial.name}
                    </motion.h3>
                    <motion.h4 
                      className="text-sm text-[#059652] font-medium mb-2 uppercase tracking-wide"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    >
                      {testimonial.title}
                    </motion.h4>
                    <motion.div 
                      className="flex"
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    >
                      {[...Array(testimonial.rating)].map((_, starIndex) => (
                        <motion.div
                          key={starIndex}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: 0.5 + starIndex * 0.1 + index * 0.1,
                            type: "spring",
                            stiffness: 200,
                            duration: 0.5
                          }}
                        >
                          <TbStar className="w-4 h-4 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </div>
                <motion.div 
                  className="relative mt-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    animate={{ 
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5
                    }}
                  >
                    <TbQuote className="absolute -top-2 -left-2 w-6 h-6 text-[#059652]/30" />
                  </motion.div>
                  <p className="text-gray-600 leading-relaxed italic px-4">
                    {testimonial.quote}
                  </p>
                  <motion.div
                    animate={{ 
                      rotate: [0, -5, 5, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.5 + 1
                    }}
                  >
                    <TbQuote className="absolute -bottom-2 -right-2 w-6 h-6 text-[#059652]/30 rotate-180" />
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Hover effect border */}
              <motion.div
                className="absolute inset-0 border-2 border-[#059652]/20 rounded-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileHover={{ 
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3 }
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default TestimonialsSection; 