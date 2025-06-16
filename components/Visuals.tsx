import React from 'react'
import { MovingCards } from './ui/MovingCards'
import ButtonMaagic from './ui/ButtonMaagic';
import { FaBehanceSquare } from 'react-icons/fa';
import { visualSrc1, visualSrc2 } from '@/data';

function Visuals() {
  return (
    <div className="h-[50rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden py-6">
      <h1 className="text-5xl font-extralight text-center my-10 font-[Neue_Machina] tracking-tight">
        MY <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">VISUALS</span>
      </h1>
      
        <MovingCards
        items={visualSrc1}
        direction="right"
        speed="slow"
      />
      <MovingCards
        items={visualSrc2}
        direction="left"
        speed="slow"
      />
      <ButtonMaagic
          title="Visit Behance Portfolio"
          icon={<FaBehanceSquare className='text-xl ml-2' />}
          otherClasses="hover:bg-purple-500/20 bg-purple-500/10 text-purple-500 font-medium"
          position="right"
          href="https://www.behance.net/_A_BS_750"
        />

    </div>
  )
}

export default Visuals

