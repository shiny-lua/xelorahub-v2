"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { BsTwitterX, BsFacebook, BsInstagram, BsLinkedin } from "react-icons/bs";
import AnimatedSection from "../ui/AnimatedSection";
import { staggerContainer, fadeInUp } from "../../lib/animations";
import { teamMembers } from "@/data/TeamData";

const SocialLinks = ({ social }) => (
  <div className="flex justify-center space-x-3 mt-4">
    <motion.a
      href={social.twitter}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#059652] hover:text-white transition-all duration-300"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <BsTwitterX className="text-sm" />
    </motion.a>
    <motion.a
      href={social.facebook}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#059652] hover:text-white transition-all duration-300"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <BsFacebook className="text-sm" />
    </motion.a>
    <motion.a
      href={social.instagram}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#059652] hover:text-white transition-all duration-300"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <BsInstagram className="text-sm" />
    </motion.a>
    <motion.a
      href={social.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 hover:bg-[#059652] hover:text-white transition-all duration-300"
      whileHover={{ scale: 1.1, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <BsLinkedin className="text-sm" />
    </motion.a>
  </div>
);

const TeamMember = ({ member, delay = 0 }) => (
  <motion.div
    className="group"
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    transition={{ delay }}
    whileHover={{ y: -10 }}
  >
    <div className="bg-white cursor-pointer rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center h-full">
      <div className="relative w-24 h-24 mx-auto mb-4">
        <motion.div
          className="relative w-full h-full rounded-full overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover"
            sizes="96px"
          />
        </motion.div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-xl font-semibold text-gray-800 mb-1 group-hover:text-[#059652] transition-colors duration-300">
          {member.name}
        </h4>
        <p className="text-[#059652] font-medium text-sm mb-3">
          {member.position}
        </p>
        <p className="text-gray-600 text-sm leading-relaxed">
          {member.bio}
        </p>
      </div>
      
      <SocialLinks social={member.social} />
    </div>
  </motion.div>
);

const TeamSection = ({ 
  title = "Our Team", 
  subtitle = "Meet the talented professionals behind XELORAHUB's success",
  members = teamMembers 
}) => {
  return (
    <AnimatedSection id="team" className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {members.map((member, index) => (
            <TeamMember
              key={member.id}
              member={member}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

export default TeamSection; 