import React from 'react'
import Button from '../components/Button'
import Image from 'next/image'
import dottedEffect from "@/public/portfolio-wave-effects.png"

export default function Banner() {
  return (
    <div className="h-[550px] relative flex justify-center items-center">
      <div className="text-center space-y-10">
        <h1 className="text-7xl lg:w-full w-10/12 mx-auto font-work_sans font-extrabold">Hey, I'm <span className="text-[#f1491c]">Sahik</span></h1>
        <div className="out-stroke uppercase lg:text-6xl text-2xl font-bold lg:w-4/6 w-10/12 mx-auto font-poppins" >Full Stack Developer Crafting Web Solution</div>
        <Button />
      </div>
      <div className="absolute bottom-0 w-full">
        <Image className='object-cover w-full h-full' src={dottedEffect} alt='dotted design' />

      </div>
    </div >
  )
}
