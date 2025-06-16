import React from 'react';
import { MdArrowOutward } from 'react-icons/md';

function Contact() {
  return (
    <div className='relative pt-10 md:pt-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 md:px-8'>
        {/* Header */}
        <div className='mb-8 md:mb-12 text-left md:ml-24'>
          <h1 className='text-4xl sm:text-5xl md:text-6xl font-light mb-2 font-[Neue_Machina] tracking-tight text-white'>
            CONTACT
          </h1>
        </div>

        {/* Three-Column Layout - Left aligned on mobile, spaced on desktop */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-6 md:gap-x-12 mb-20 max-w-5xl mx-auto'>
          {/* Contact Info */}
          <div className='text-left'>
            <div className='space-y-4 md:space-y-6'>
              <div>
                <p className='text-base md:text-lg font-medium text-gray-400 mb-2'>Email</p>
                <a 
                  href='mailto:bojackabs@gmail.com'
                  className='text-lg md:text-xl font-medium text-white hover:text-purple-400 transition-colors duration-300 break-words'
                >
                  bojackabs@gmail.com
                </a>
              </div>
              
              <div>
                <p className='text-base md:text-lg font-medium text-gray-400 mb-2'>Location</p>
                <p className='text-lg md:text-xl font-medium text-white'>Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Socials */}
          <div className='flex flex-col md:items-center'>
            <h2 className='text-base md:text-lg font-medium text-gray-400 mb-4 text-left mr-10'>
              Socials
            </h2>
            <div className='space-y-2 md:space-y-2'>
              <a 
                href='https://github.com/abs-coder' 
                target='_blank' 
                rel='noreferrer' 
                className='flex items-center gap-1 text-lg md:text-xl font-medium text-white hover:text-purple-400 transition-colors duration-300 underline'
              >
                GitHub <MdArrowOutward className='text-xl md:text-2xl' />
              </a>
              
              <a 
                href='https://www.linkedin.com/in/abs-coder/' 
                target='_blank' 
                rel='noreferrer' 
                className='flex items-center gap-1 text-lg md:text-xl font-medium text-white hover:text-purple-400 transition-colors duration-300 underline'
              >
                LinkedIn <MdArrowOutward className='text-xl md:text-2xl' />
              </a>
              
              <a 
                href='https://twitter.com/abs_coder' 
                target='_blank' 
                rel='noreferrer' 
                className='flex items-center gap-1 text-lg md:text-xl font-medium text-white hover:text-purple-400 transition-colors duration-300 underline'
              >
                Twitter <MdArrowOutward className='text-xl md:text-2xl' />
              </a>
            </div>
          </div>

          {/* About */}
          <div className="flex justify-start md:justify-end">
            <div className='mt-4 md:mt-10 text-left md:text-left'>
              <div className='text-lg md:text-xl font-medium text-gray-300'>
                Designed & Developed <br/>by 
                <span className='text-purple-500'> Abs</span>
                <br />
                <span className='text-gray-400 text-lg md:text-xl'>© 2025</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact