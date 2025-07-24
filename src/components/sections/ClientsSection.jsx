"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedSection from "../ui/AnimatedSection";
import { clientsData } from "../../data/clientsData";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ClientsSection = () => {
  return (
    <AnimatedSection id="clients" className="section clients py-16">
      {/* Section Title */}
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
          Our <span className="text-[#059652]">Clients</span>
        </motion.h2>
        <motion.p 
          className="text-gray-600 leading-relaxed text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          XELORAHUB consistently delivers exceptional results, transforming our
          complex needs into seamless solutions. Their dedication to
          innovation and quality is unmatched. The team tackles every
          challenge with precision and expertise, ensuring our digital
          operations run smoothly and efficiently. We trust XELORAHUB to handle
          all our technical requirements, and they continuously exceed our
          expectations.
        </motion.p>
      </motion.div>
      {/* End Section Title */}

      <motion.div
        className="container mx-auto px-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            spaceBetween={40}
            slidesPerView="auto"
            pagination={{
              clickable: true,
              el: ".swiper-pagination-clients",
              bulletClass: "swiper-pagination-bullet-custom",
              bulletActiveClass: "swiper-pagination-bullet-active-custom",
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={600}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 40,
              },
              480: {
                slidesPerView: 3,
                spaceBetween: 60,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 80,
              },
              992: {
                slidesPerView: 6,
                spaceBetween: 120,
              },
            }}
            className="w-full clients-swiper"
          >
            {clientsData.map((client) => (
              <SwiperSlide
                key={client.id}
                className="flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.1,
                    filter: "brightness(1.2)",
                    transition: { duration: 0.3 }
                  }}
                  className="w-full flex justify-center"
                >
                  <Image
                    src={client.src}
                    alt={client.alt}
                    width={120}
                    height={80}
                    className="w-full h-auto max-w-[120px] opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="swiper-pagination-clients flex justify-center mt-8"></div>
        </div>
      </motion.div>
    </AnimatedSection>
  );
};

export default ClientsSection;