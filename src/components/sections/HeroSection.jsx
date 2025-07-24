"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import {
  TbCube3dSphere,
  TbCpu,
  TbLink,
  TbArrowRight,
} from "react-icons/tb";
import { heroSlides, featuredItems } from "../../data/heroData";
import { staggerContainer, scaleOnHoverActive } from "../../lib/animations";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const iconComponents = {
  TbCube3dSphere: TbCube3dSphere,
  TbCpu: TbCpu,
  TbLink: TbLink,
};

const HeroSection = () => {
  const heroRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <section id="hero" className="hero section pt-20" ref={heroRef}>
      <div className="relative w-full h-[700px] overflow-hidden">
        <motion.div
          style={{ y: backgroundY }}
          className="absolute inset-0"
        >
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{
              clickable: true,
              el: ".swiper-pagination-custom",
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            speed={1000}
            className="w-full h-full carousel-fade"
          >
            {heroSlides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="relative w-full h-full flex items-center justify-center bg-cover bg-center bg-no-repeat">
                  <Image
                    src={slide.background}
                    alt={slide.alt}
                    fill
                    className="absolute inset-0 object-cover opacity-40"
                    priority={slide.id === 1}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-white/10"></div>

                  {/* Content */}
                  <motion.div 
                    className="relative z-10 text-center text-[#545454] px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto carousel-container"
                    style={{ y: textY }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <motion.h2 
                        className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                      >
                        {slide.title.split(" ").map((word, index) => {
                          const spanWords = [
                            "XELORAHUB",
                            "3D",
                            "VR",
                            "Blockchain",
                            "Full",
                            "Stack",
                            "Mobile",
                            "AI",
                          ];
                          const isSpanWord = spanWords.some((spanWord) =>
                            word.includes(spanWord)
                          );
                          return (
                            <motion.span
                              key={index}
                              className={isSpanWord ? "text-[#059652]" : ""}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                            >
                              {word}{" "}
                            </motion.span>
                          );
                        })}
                      </motion.h2>

                      <motion.p 
                        className="text-sm sm:text-base lg:text-lg mb-4 text-[#545454] max-w-2xl mx-auto leading-relaxed text-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                      >
                        {slide.description}
                      </motion.p>

                      <motion.p 
                        className="text-lg font-bold mb-8 text-[#545454]"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                      >
                        {slide.tagline}
                      </motion.p>

                      <motion.div 
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                      >
                        <motion.div
                          whileHover={scaleOnHoverActive}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Link
                            href="/about"
                            className="bg-[#059652] hover:bg-[#059652]/70 text-white font-semibold py-3 px-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm min-w-[160px] btn-get-started"
                          >
                            {slide.primaryCTA}
                          </Link>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>

        <motion.div 
          className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm carousel-control-prev"
          whileHover={scaleOnHoverActive}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronLeft className="w-6 h-6 text-[#1f1e1e]" />
        </motion.div>

        <motion.div 
          className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 backdrop-blur-sm carousel-control-next"
          whileHover={scaleOnHoverActive}
          whileTap={{ scale: 0.9 }}
        >
          <FaChevronRight className="w-6 h-6 text-[#1f1e1e]" />
        </motion.div>

        <div className="swiper-pagination-custom absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3"></div>
      </div>

      <motion.div 
        className="container mx-auto px-16 py-32 z-10"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {featuredItems.map((item, index) => {
            const IconComponent = iconComponents[item.icon];
            return (
              <motion.div
                key={item.id}
                className="featured-item relative bg-white px-8 py-12 border border-[#059652]/20 rounded shadow overflow-hidden group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1] 
                }}
                whileHover={{ 
                  y: -10,
                  scale: 1.02,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                  transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                }}
              >
                {/* Background gradient animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#059652]/5 to-transparent opacity-0 group-hover:opacity-100"
                  initial={{ scale: 0, rotate: 180 }}
                  whileHover={{ 
                    scale: 1, 
                    rotate: 0,
                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                  }}
                />
                
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
                
                <motion.h4 
                  className="text-xl font-bold mb-4 text-gray-800 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href="#"
                    className="stretched-link hover:text-[#059652] transition-colors duration-300"
                  >
                    {item.title}
                  </Link>
                </motion.h4>
                
                <motion.p 
                  className="text-gray-600 leading-relaxed w-2/3 relative z-10"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                >
                  {item.description}
                </motion.p>
                
                {/* Hover effect line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-[#059652] to-blue-500"
                  initial={{ width: "0%" }}
                  whileHover={{ 
                    width: "100%",
                    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      <style jsx>{`
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .swiper-pagination-bullet-custom {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active-custom {
          background: white;
          transform: scale(1.2);
        }

        .swiper-pagination-bullet-custom:hover {
          background: rgba(255, 255, 255, 0.8);
        }

        .carousel-fade .swiper-slide {
          transition: opacity 1s ease-in-out;
        }

        .stretched-link::after {
          position: absolute;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 1;
          content: "";
        }
      `}</style>
    </section>
  );
};

export default HeroSection; 