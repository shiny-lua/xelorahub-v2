"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "../ui/AnimatedSection";
import { staggerContainer, fadeInUp } from "../../lib/animations";
import { contactInfo, mapConfig } from "@/data/ContactData";

const ContactInfoItem = ({ item, delay = 0 }) => (
  <motion.div
    className="group"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5 }}
  >
    <div className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
      <motion.div
        className="flex justify-center mb-4"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-gradient-to-r from-[#059652] to-[#047a42] rounded-full p-4">
          <item.icon className="text-2xl text-white" />
        </div>
      </motion.div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-[#059652] transition-colors duration-300">
        {item.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed">
        {item.description}
      </p>
    </div>
  </motion.div>
);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      setMessage({ type: 'success', text: 'Your message has been sent. Thank you!' });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: 'There was an error sending your message. Please try again.' 
      });
      console.error('Contact form error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
      viewport={{ once: true }}
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#059652] focus:border-transparent transition-all duration-300"
            />
          </motion.div>
          
          <motion.div
            whileFocus={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#059652] focus:border-transparent transition-all duration-300"
            />
          </motion.div>
        </div>
        
        <motion.div
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#059652] focus:border-transparent transition-all duration-300"
          />
        </motion.div>
        
        <motion.div
          whileFocus={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={6}
            placeholder="Message"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#059652] focus:border-transparent transition-all duration-300 resize-none"
          />
        </motion.div>
        
        <div className="text-center">
          {isLoading && (
            <div className="text-[#059652] mb-4">
              <div className="inline-block animate-spin rounded-full h-6 w-6 border-b-2 border-[#059652]"></div>
              <span className="ml-2">Sending...</span>
            </div>
          )}
          
          {message.text && (
            <div className={`mb-4 p-3 rounded-lg ${
              message.type === 'success' 
                ? 'bg-green-100 text-green-700' 
                : 'bg-red-100 text-red-700'
            }`}>
              {message.text}
            </div>
          )}
          
          <motion.button
            type="submit"
            disabled={isLoading}
            className="bg-gradient-to-r from-[#059652] to-[#047a42] text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

const ContactSection = () => {
  return (
    <AnimatedSection id="contact" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get in touch with our team. We're here to help bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="lg:col-span-6">
            <ContactInfoItem item={contactInfo[0]} delay={0.2} />
          </div>
          <div className="lg:col-span-3">
            <ContactInfoItem item={contactInfo[1]} delay={0.3} />
          </div>
          <div className="lg:col-span-3">
            <ContactInfoItem item={contactInfo[2]} delay={0.4} />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-lg"
          >
            <iframe
              src={mapConfig.embedUrl}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={mapConfig.title}
              className="w-full h-full"
            />
          </motion.div>
          
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

export default ContactSection; 