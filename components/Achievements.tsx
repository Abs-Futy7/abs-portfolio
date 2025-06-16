"use client"
import { achievements } from '@/data'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'
import { motion } from 'framer-motion'

function Achievements() {
  return (
    <div className='py-14 px-4 md:px-8 lg:px-12 max-w-7xl mx-auto'>
      <motion.h1 
        className='text-4xl md:text-5xl font-light text-center my-12 font-[Neue_Machina] tracking-tight text-white'
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        MY <span className='text-purple-500 font-light'>ACHIEVEMENTS</span>
      </motion.h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-4'>
        {achievements.map((achievement, index) => (
          <motion.div 
            key={index} 
            className='bg-black/40 backdrop-blur-sm border border-purple-500/30 rounded-lg overflow-hidden flex flex-col h-full hover:border-purple-500/80 transition-all duration-300'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className='relative'>
              <img 
                src={achievement.img} 
                alt={achievement.name} 
                className='w-full h-48 object-cover' 
              />
              <div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent'></div>
              {/*gradient overlay disi*/}
            </div>
            
            <div className='p-5 flex flex-col flex-grow'>
              <h2 className='text-xl font-medium text-white/90 mb-2 line-clamp-2 font-[Helvetica]'>{achievement.name}</h2>
              <p className='text-gray-300 text-sm mb-4 flex-grow'>{achievement.subtitle}</p>
              
              <a 
                href={achievement.link} 
                className='inline-flex items-center px-4 py-2 mt-auto bg-orange-500/20 text-orange-400 text-sm font-medium rounded-full hover:bg-orange-500/40 transition-colors duration-300'
              >
                View Details <FiExternalLink className='ml-2' />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Achievements