"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import {
  TbBrandTwitter,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbMail,
  TbPhone,
  TbMenu2,
  TbX,
  TbWorld,
} from "react-icons/tb";
import { fadeInUp, staggerContainer, scaleOnHover, scaleOnHoverActive } from "../../lib/animations";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [currentLang, setCurrentLang] = useState('en');

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > lastScrollY) { // scrolling down
          setIsVisible(false);
        } else { // scrolling up
          setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
  ];

  return (
    <motion.header 
      id="header" 
      className="header fixed top-0 left-0 right-0 z-50 bg-white shadow-md"
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -50 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      role="banner"
    >
      <motion.div 
        className="topbar bg-[#464646] text-white py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-16 flex justify-center md:justify-between items-center">
          <motion.div 
            className="contact-info flex items-center space-x-3 md:space-x-6"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="flex items-center"
              variants={fadeInUp}
            >
              <TbMail className="w-4 h-4 mr-2" aria-hidden="true" />
              <a 
                href="mailto:suriyabegumuspayo@gmail.com"
                className="hover:text-white/80 transition-colors duration-300"
                aria-label="Email us"
              >
                suriyabegumuspayo@gmail.com
              </a>
            </motion.div>
            <motion.div 
              className="flex items-center"
              variants={fadeInUp}
            >
              <TbPhone className="w-4 h-4 mr-2" aria-hidden="true" />
              <a 
                href="tel:+34603814470"
                className="hover:text-white/80 transition-colors duration-300"
                aria-label="Call us"
              >
                +1 (401) 206-0308
              </a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="social-links hidden md:flex items-center space-x-3"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {[
              { href: "https://x.com", icon: TbBrandTwitter, label: "Twitter" },
              { href: "https://www.facebook.com", icon: TbBrandFacebook, label: "Facebook" },
              { href: "https://www.instagram.com/", icon: TbBrandInstagram, label: "Instagram" },
              { href: "https://www.linkedin.com", icon: TbBrandLinkedin, label: "LinkedIn" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="w-8 h-8 flex items-center justify-center hover:bg-white/20 rounded transition-colors duration-300"
                variants={fadeInUp}
                whileHover={scaleOnHoverActive}
                whileTap={{ scale: 0.95 }}
                aria-label={`Visit our ${social.label} page`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon className="w-4 h-4" aria-hidden="true" />
              </motion.a>
            ))}
            <motion.div className="relative ml-4">
              <button
                className="flex items-center space-x-1 hover:text-white/80 transition-colors duration-300"
                onClick={() => setCurrentLang(currentLang === 'en' ? 'es' : 'en')}
                aria-label="Change language"
              >
                <TbWorld className="w-4 h-4" aria-hidden="true" />
                <span className="uppercase text-sm">{currentLang}</span>
              </button>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <motion.div 
        className="branding bg-white border-b border-gray-200"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <div className="container mx-auto px-4 md:px-16 flex items-center justify-between">
          <motion.div
            whileHover={scaleOnHover}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="logo flex items-center" aria-label="Go to homepage">
              <Image src="/img/logo/logo.png" alt="XELORAHUB" width={100} height={100} className="w-auto h-auto" priority />
            </Link>
          </motion.div>

          <motion.nav 
            id="navmenu" 
            className="navmenu hidden lg:block"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            role="navigation"
            aria-label="Main navigation"
          >
            <ul className="flex space-x-8">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/portfolio", label: "Portfolio" },
                { href: "/team", label: "Team" },
                { href: "/contact", label: "Contact" }
              ].map((item, index) => (
                <motion.li key={index} variants={fadeInUp}>
                  <Link 
                    href={item.href}
                    className="text-gray-700 hover:text-[#059652] font-medium transition-colors duration-300 relative group"
                    aria-current={item.href === "/" ? "page" : undefined}
                  >
                    {item.label}
                    <motion.div
                      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#059652] group-hover:w-full transition-all duration-300"
                      whileHover={{ width: "100%" }}
                      aria-hidden="true"
                    />
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.nav>

          <motion.button 
            className="mobile-nav-toggle lg:hidden p-2"
            whileHover={scaleOnHoverActive}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <TbX className="w-6 h-6 text-gray-700" aria-hidden="true" />
            ) : (
              <TbMenu2 className="w-6 h-6 text-gray-700" aria-hidden="true" />
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            className="lg:hidden fixed inset-0 bg-white z-40 pt-[200px]"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <nav className="container mx-auto px-4" role="navigation" aria-label="Mobile navigation">
              <ul className="flex flex-col space-y-4">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About" },
                  { href: "/services", label: "Services" },
                  { href: "/portfolio", label: "Portfolio" },
                  { href: "/team", label: "Team" },
                  { href: "/contact", label: "Contact" }
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={item.href}
                      className="text-2xl font-medium text-gray-800 hover:text-[#059652] transition-colors duration-300 block"
                      onClick={() => setIsMenuOpen(false)}
                      aria-current={item.href === "/" ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 flex flex-col space-y-4">
                <div className="flex justify-center space-x-4">
                  {[
                    { href: "https://x.com", icon: TbBrandTwitter, label: "Twitter" },
                    { href: "https://www.facebook.com", icon: TbBrandFacebook, label: "Facebook" },
                    { href: "https://www.instagram.com/", icon: TbBrandInstagram, label: "Instagram" },
                    { href: "https://www.linkedin.com", icon: TbBrandLinkedin, label: "LinkedIn" }
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-[#059652] hover:text-white transition-colors duration-300"
                      whileHover={scaleOnHoverActive}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit our ${social.label} page`}
                    >
                      <social.icon className="w-5 h-5" aria-hidden="true" />
                    </motion.a>
                  ))}
                </div>
                <div className="text-center">
                  <a href="mailto:suriyabegumuspayo@gmail.com" className="text-gray-600 hover:text-[#059652] transition-colors duration-300">
                    suriyabegumuspayo@gmail.com
                  </a>
                  <br />
                  <a href="tel:+34603814470" className="text-gray-600 hover:text-[#059652] transition-colors duration-300">
                    +1 (401) 206-0308
                  </a>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 