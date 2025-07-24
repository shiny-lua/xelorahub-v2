"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import { portfolioItems } from "@/data/PortfolioItems";

// Import Swiper core styles only
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ClientPortfolioPage = ({ n }) => {
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log("Project ID:", n);
    const fetchProject = () => {
      const projectId = parseInt(n);
      const foundProject = portfolioItems.find((item) => item.id === projectId);
      console.log("Found Project:", foundProject);
      setProject(foundProject);
      setIsLoading(false);
    };

    fetchProject();
  }, [n]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#059652]"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Link
          href="/portfolio"
          className="bg-[#059652] text-white px-6 py-3 rounded-full hover:bg-[#047a42] transition-colors duration-300"
        >
          Back to Portfolio
        </Link>
      </div>
    );
  }

  // Create an array of images for the slider
  const images = [project.image];
  // If there are additional images in the project, add them
  if (project.images) {
    images.push(...project.images);
  }

  return (
    <section className="bg-[#f8f9fa] pb-16">
      <div className="container mx-auto px-4">
        <div className="w-full text-center text-4xl font-bold py-8">
          {project.title}
        </div>
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="lg:col-span-8">
            <motion.div
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
                speed={1000}
                effect="fade"
                className="relative group"
              >
                {images.map((image, index) => (
                  <SwiperSlide
                    key={index}
                    className="transition-opacity duration-500"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg">
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-700"
                        priority={index === 0}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 66vw"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </motion.div>
          </div>

          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                Project Information
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-700">
                  <strong className="min-w-[100px]">Category:</strong>
                  <span className="capitalize">{project.category}</span>
                </li>
                {project.client && (
                  <li className="flex items-center text-gray-700">
                    <strong className="min-w-[100px]">Client:</strong>
                    <span>{project.client}</span>
                  </li>
                )}
                {project.date && (
                  <li className="flex items-center text-gray-700">
                    <strong className="min-w-[100px]">Date:</strong>
                    <span>{project.date}</span>
                  </li>
                )}
                {project.link && (
                  <li className="flex items-center text-gray-700">
                    <strong className="min-w-[100px]">URL:</strong>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#059652] hover:text-[#047a42] transition-colors duration-300"
                    >
                      Visit Website
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <motion.div
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-gray-800">
                {project.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center px-6 py-3 bg-[#059652] text-white rounded-full hover:bg-[#047a42] transition-colors duration-300"
          >
            Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientPortfolioPage;
