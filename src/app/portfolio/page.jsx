"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { BiLinkExternal, BiZoomIn } from "react-icons/bi";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { portfolioItems, categories } from "@/data/PortfolioItems";

const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredItems, setFilteredItems] = useState(portfolioItems);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    let filtered = portfolioItems;

    if (activeFilter !== "all") {
      filtered = filtered.filter((item) => item.category === activeFilter);
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (item) =>
          item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [activeFilter, searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <div className="pt-32">
      <section id="portfolio" className="portfolio section py-5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Portfolio</h2>
            <p className="text-lg text-gray-600">
              Explore our diverse range of successful projects across various
              technologies and industries
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <input
              type="text"
              className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex justify-center mb-8 px-4">
            <ul className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <li key={category.id}>
                  <button
                    className={`px-4 py-2 rounded-full cursor-pointer text-sm md:text-base whitespace-nowrap transition-colors duration-200 ${
                      activeFilter === category.id
                        ? "bg-[#059652] text-white"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                    }`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <motion.div
            layout
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  variants={itemVariants}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                  whileHover={{ scale: 1.02 }}
                  className="bg-white border border-[#059652]/30 rounded-lg shadow-md overflow-hidden"
                >
                  <div className="relative group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <motion.div 
                      className="absolute inset-0 bg-black/40 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center justify-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setIsOpen(true);
                            setPhotoIndex(index);
                          }}
                          className="text-white text-3xl bg-[#059652] rounded-full p-2 cursor-pointer"
                        >
                          <BiZoomIn className="text-white text-xl" />
                        </motion.button>
                        <motion.button  
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          className="text-white text-3xl bg-[#059652] rounded-full p-2 cursor-pointer"
                        >
                          <Link
                            href={`/portfolio/${item.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <BiLinkExternal className="text-white text-xl" />
                          </Link>
                        </motion.button>
                      </div>
                    </motion.div>
                  </div>
                  <motion.div 
                    className="p-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <h5 className="text-lg font-semibold mb-2">{item.title}</h5>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    {(item.client || item.date) && (
                      <div className="mt-3">
                        {item.client && (
                          <small className="text-gray-500 block">
                            Client: {item.client}
                          </small>
                        )}
                        {item.date && (
                          <small className="text-gray-500 block">
                            Date: {item.date}
                          </small>
                        )}
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-5">
              <h4 className="text-xl font-semibold">No projects found</h4>
              <p className="text-gray-500">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={filteredItems.map(item => ({ src: item.image }))}
          index={photoIndex}
          plugins={[Zoom, Thumbnails]}
          animation={{ fade: 400 }}
          carousel={{ finite: false, preload: 2 }}
          zoom={{
            maxZoomPixelRatio: 3,
            scrollToZoom: true
          }}
          thumbnails={{
            position: "bottom"
          }}
          on={{
            view: ({ index }) => setPhotoIndex(index)
          }}
          styles={{
            container: { backgroundColor: "rgba(0, 0, 0, .9)" },
            root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .9)" }
          }}
        />
      )}
    </div>
  );
};

export default PortfolioPage;
