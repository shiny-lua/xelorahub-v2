"use client";

import { motion } from "framer-motion";
import AnimatedSection from "../ui/AnimatedSection";
import { staggerContainer, fadeInUp } from "../../lib/animations";
import { achievementsData } from "@/data/AchievementsData";

const AchievementItem = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    className="group"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -5 }}
  >
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full border border-gray-100">
      <motion.div
        className="flex items-center mb-4"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="bg-gradient-to-r from-[#059652] to-[#047a42] rounded-full p-3 mr-4">
          <Icon className="text-2xl text-white" />
        </div>
        <h4 className="text-xl font-semibold text-gray-800 group-hover:text-[#059652] transition-colors duration-300">
          {title}
        </h4>
      </motion.div>
      
      <p className="text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  </motion.div>
);

const AchievementsSection = () => {
  return (
    <AnimatedSection id="achievements" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            XELORAHUB may be young, but we're already making waves. Here's what we've accomplished so far—and we're just getting started.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {achievementsData.map((achievement, index) => (
            <AchievementItem
              key={index}
              icon={achievement.icon}
              title={achievement.title}
              description={achievement.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default AchievementsSection; 