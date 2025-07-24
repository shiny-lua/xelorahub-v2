"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  TbBrandTwitter,
  TbBrandFacebook,
  TbBrandInstagram,
  TbBrandLinkedin,
  TbChevronRight,
} from "react-icons/tb";
import { staggerContainer, fadeInUp, scaleOnHoverActive } from "../../lib/animations";

const Footer = () => {
  return (
    <motion.footer 
      id="footer" 
      className="footer relative bg-[#3c3c3c]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div 
        className="footer-newsletter bg-[#464646] py-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto px-16">
          <div className="flex justify-center text-center">
            <div className="max-w-2xl">
              <motion.h4 
                className="text-2xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Stay Ahead with{" "}
                <motion.span
                  className="text-[#059652]"
                  animate={{ 
                    textShadow: [
                      "0 0 5px rgba(5, 150, 82, 0.3)",
                      "0 0 10px rgba(5, 150, 82, 0.6)",
                      "0 0 5px rgba(5, 150, 82, 0.3)"
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  XELORAHUB!
                </motion.span>
              </motion.h4>
              <motion.p 
                className="text-white/90 mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Subscribe to the XELORAHUB newsletter and be the first to receive
                exciting updates on our latest innovations, products, and
                services. Stay informed and keep your business at the forefront
                of technology.
              </motion.p>
              <motion.form
                action="/api/newsletter"
                method="post"
                className="newsletter-form"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
                  <motion.input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                    required
                    whileFocus={{ 
                      scale: 1.02,
                      borderColor: "rgba(255, 255, 255, 0.8)",
                      transition: { duration: 0.2 }
                    }}
                  />
                  <motion.button
                    type="submit"
                    className="px-6 py-3 bg-[#059652] text-white font-semibold rounded-lg hover:bg-[#059652]/80 cursor-pointer transition-colors duration-300"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 20px rgba(5, 150, 82, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </motion.form>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div 
        className="container mx-auto px-16 py-12 footer-top"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <motion.div 
            className="footer-about"
            variants={fadeInUp}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center mb-4">
                <span className="text-2xl font-bold text-gray-400">XELORAHUB</span>
              </Link>
            </motion.div>
            <div className="footer-contact">
              <motion.p 
                className="text-gray-200 mb-2"
                whileHover={{ x: 5, color: "#059652" }}
                transition={{ duration: 0.2 }}
              >
                3218 TIMBERLARK DR
              </motion.p>
              <p className="text-gray-200 mb-2">HOUSTON, TX 77339</p>
              <p className="text-gray-200 mb-4">United States of America</p>
              <motion.p 
                className="text-gray-200 mb-2"
                whileHover={{ x: 5, color: "#059652" }}
                transition={{ duration: 0.2 }}
              >
                <strong className="text-gray-200">Phone:</strong>{" "}
                <span>+1 (401) 206-0308</span>
              </motion.p>
              <motion.p 
                className="text-gray-200"
                whileHover={{ x: 5, color: "#059652" }}
                transition={{ duration: 0.2 }}
              >
                <strong className="text-gray-200">Email:</strong>{" "}
                <span>suriyabegumuspayo@gmail.com</span>
              </motion.p>
            </div>
          </motion.div>

          <motion.div 
            className="footer-links"
            variants={fadeInUp}
          >
            <h4 className="text-lg font-bold mb-4 text-gray-400">Useful Links</h4>
            <ul className="space-y-2 text-gray-200">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About us" },
                { href: "/services", label: "Services" },
                { href: "/contact", label: "Contact" }
              ].map((link, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center"
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
                    <TbChevronRight className="w-4 h-4 text-[#059652] mr-2" />
                  </motion.div>
                  <Link
                    href={link.href}
                    className="hover:text-[#059652] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="footer-links"
            variants={fadeInUp}
          >
            <h4 className="text-lg font-bold mb-4 text-gray-400">Our Services</h4>
            <ul className="space-y-2">
              {[
                { href: "/web-development", label: "Web Development" },
                { href: "/digital-marketing", label: "Digital Marketing" },
                { href: "/software-development", label: "Software Development" },
                { href: "/cloud-solution", label: "Cloud AI Solutions" }
              ].map((service, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2 + 0.5
                    }}
                  >
                    <TbChevronRight className="w-4 h-4 text-[#059652] mr-2" />
                  </motion.div>
                  <Link
                    href={service.href}
                    className="text-gray-200 hover:text-[#059652] transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-bold mb-4 text-gray-400">Follow Us</h4>
            <motion.p 
              className="text-gray-200 mb-4 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Stay connected with XELORAHUB for the latest updates and insights in
              technology. Follow us on our social media channels and join our
              community of innovators and tech enthusiasts.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                { href: "https://x.com", icon: TbBrandTwitter },
                { href: "https://facebook.com", icon: TbBrandFacebook },
                { href: "https://instagram.com", icon: TbBrandInstagram },
                { href: "https://linkedin.com", icon: TbBrandLinkedin }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-[#059652] text-white rounded-full flex items-center justify-center hover:bg-[#059652]/80 transition-colors duration-300"
                  variants={fadeInUp}
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    boxShadow: "0 8px 15px rgba(5, 150, 82, 0.4)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="container mx-auto px-16 py-6 text-center border-t border-gray-200"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.p 
          className="text-gray-200"
          animate={{ 
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <strong className="text-gray-200 mx-1">© 2025 XELORAHUB LLC | Contact: Suriya Begum – suriyabegumuspayo@gmail.com. All rights reserved.</strong>
        </motion.p>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;