"use client";

import { motion } from "framer-motion";

const LoadingSpinner = () => (
  <motion.div
    className="fixed inset-0 bg-white z-50 flex items-center justify-center"
    initial={{ opacity: 1 }}
    exit={{ 
      opacity: 0,
      transition: { duration: 0.5, ease: "easeInOut" }
    }}
  >
    <motion.div
      className="w-16 h-16 border-4 border-[#059652]/20 border-t-[#059652] rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </motion.div>
);

export default LoadingSpinner; 