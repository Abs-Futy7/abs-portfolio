"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import { GoArrowDown } from 'react-icons/go';
import { MdOutlineSecurity } from 'react-icons/md';
import { SiMaterialdesignicons } from 'react-icons/si';
import { ctfSkills, visualSkills, webDevSkills } from '@/data';

function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  return (
    <div className='relative min-h-screen py-20 overflow-hidden'>
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* About Me Header */}
        <motion.h1 
          className="text-center text-5xl md:text-6xl font-light mb-16 font-[Neue_Machina] tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ABOUT <span className="text-purple-500 font-normal">ME </span>
          <GoArrowDown className='inline-block animate-bounce'/>
        </motion.h1>
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Experience & Education */}
          <motion.div 
            className="text-center lg:text-left space-y-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Experience Section */}
            <div className='text-left'>
              <div className="flex items-center gap-3 mb-5">
                <FaBriefcase className="text-purple-500 text-2xl" />
                <h2 className="text-2xl md:text-3xl font-medium text-white/90">Experience</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-purple-500/50 pl-4">
                  <h3 className="text-xl font-medium text-white/90">Associate Secretary – Faculty of Science <span className='bg-green-400/30 py-1 px-2 rounded-full text-sm text-green-400'>Feb 2025 – Present</span></h3>
                  <p className="text-gray-400">Dhaka University Career Club, Dhaka </p>
                </div>
                
                <div className="border-l-2 border-purple-500/30 pl-4">
                  <h3 className="text-lg font-medium text-white/90">Graphics & Visual Branding Lead <span className='bg-red-400/30 py-1 px-2 rounded-full text-sm text-red-400'>Jun 2022 – Jul 2023</span></h3>
                  <p className="text-gray-400">Notre Dame English Club</p>
                </div>

                <div className="border-l-2 border-purple-500/30 pl-4">
                  <h3 className="text-lg font-medium text-white/90">President of Publications <span className='bg-red-400/30 py-1 px-2 rounded-full text-sm text-red-400'>Jun 2022 – Jul 2023</span></h3>
                  <p className="text-gray-400">Notre Dame Information Technology Club</p>
                </div>
              </div>
            </div>
            
            {/* Education Section */}
            <div className="mt-10 text-left">
              <div className="flex items-center gap-3 mb-5">
                <FaGraduationCap className="text-purple-500 text-2xl" />
                <h2 className="text-2xl md:text-3xl font-medium text-white/90">Education</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-2 border-purple-500/50 pl-4">
                  <h3 className="text-xl font-medium text-white/90">B.Sc. in Computer Science and Engineering <span className='bg-green-400/30 py-1 px-2 rounded-full text-sm text-green-400'>Aug 2023 – Present</span></h3>
                  <p className="text-gray-400 font-bold">University of Dhaka</p>
                </div>
                
                <div className="border-l-2 border-purple-500/30 pl-4">
                  <h3 className="text-lg font-medium text-white/90">HSC <span className='bg-red-400/30 py-1 px-2 rounded-full text-sm text-red-400'>Jun 2021 – Jul 2022</span></h3>
                  <p className="text-gray-400 font-bold">Notre Dame College, Dhaka</p>
                </div>

                <div className="border-l-2 border-purple-500/30 pl-4">
                  <h3 className="text-lg font-medium text-white/90">SSC <span className='bg-red-400/30 py-1 px-2 rounded-full text-sm text-red-400'>Jun 2019 – Jul 2020</span></h3>
                  <p className="text-gray-400 font-bold">BMARPC</p>
                </div>
              </div>
            </div>
            
          </motion.div>
          
          {/* Right Side - Skills Cards */}
          <motion.div 
            className="space-y-8 cursor-pointer"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Web Development Card */}
            <motion.div 
              className="bg-black/40 backdrop-blur-sm border border-orange-500/30 rounded-lg p-6 hover:border-orange-500/80 transition-all duration-300"
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start gap-4 ">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <FaCode className="text-orange-500 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white/90 mb-2">Web Development</h3>
                  <p className="text-gray-400 mb-2">
                    Building modern, responsive, and accessible websites with clean code and intuitive structure
                  </p>
                  
                  <motion.div 
                    className="overflow-hidden"
                    animate={{ 
                      height: hoveredCard === 1 ? 'auto' : 0,
                      opacity: hoveredCard === 1 ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pt-2 border-t border-orange-500/30">
                      <ul className="flex flex-wrap gap-2 mt-2">
                        {webDevSkills.map((skill) => (
                          <li key={skill} className="bg-orange-500/30 text-orange-400 px-2 rounded-lg text-md">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* CTF & Cybersecurity Card */}
            <motion.div 
              className="bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg p-6 hover:border-purple-500/80 transition-all duration-300"
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <MdOutlineSecurity className="text-purple-500 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white/90 mb-2">Capture The Flag (CTF) & Cybersecurity</h3>
                  <p className="text-gray-400 mb-2">
                    Active participant in national and international CTF competitions. Specializing in problem-solving across web exploits, reverse engineering, and cryptography.
                  </p>
                  
                  <motion.div 
                    className="overflow-hidden"
                    animate={{ 
                      height: hoveredCard === 2 ? 'auto' : 0,
                      opacity: hoveredCard === 2 ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pt-2 border-t border-purple-500/30">
                      <ul className="flex flex-wrap gap-2 mt-2">
                        {ctfSkills.map((skill) => (
                          <li key={skill} className="bg-purple-500/30 text-purple-400 px-2 rounded-lg text-md">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
            
            {/* Visual Design Card with hover-reveal skills */}
            <motion.div 
              className="bg-black/40 backdrop-blur-sm border border-blue-500/30 rounded-lg p-6 hover:border-blue-500/80 transition-all duration-300"
              whileHover={{ y: -5 }}
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="flex items-start gap-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <SiMaterialdesignicons className="text-blue-500 text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-medium text-white/90 mb-2">Visual Design & Branding</h3>
                  <p className="text-gray-400 mb-2">
                    Designing compelling digital graphics, UI/UX interfaces, and brand visuals with a keen eye for detail and storytelling.
                  </p>
                  
                  <motion.div 
                    className="overflow-hidden"
                    animate={{ 
                      height: hoveredCard === 3 ? 'auto' : 0,
                      opacity: hoveredCard === 3 ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="pt-2 border-t border-blue-500/30">
                      <ul className="flex flex-wrap gap-2 mt-2">
                        {visualSkills.map((skill) => (
                          <li key={skill} className="bg-blue-500/30 text-blue-400 px-2 rounded-lg text-md">
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default About;