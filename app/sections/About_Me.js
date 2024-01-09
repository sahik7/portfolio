import Image from 'next/image'
import React from 'react'
import Profile from "@/public/profile-img.png"

export default function About_Me() {
    return (
        <div id='about-me' className="mt-32">
            <h1 className="font-poppins out-stroke lg:ml-6 font-bold lg:text-8xl text-5xl  text-center lg:text-left">About Me</h1>
            <div className="lg:flex w-10/12  mx-auto items-center justify-evenly lg:py-32 lg:mt-0 mt-10">
                <div className="relative">
                    <Image className="mx-auto" src={Profile} width={200}
                        height={200} alt='Profile Picture' />
                    <div className='hidden lg:block absolute top-0 border-2 h-[199px] w-[199px] border-[#f1491c]'></div>
                </div>
                <div className="lg:w-3/5 text-justify lg:text-left lg:mt-0 mt-10">
                    <p className="font-poppins">I am a junior full stack developer, have experience creating web application by utilizing the stack and other resources.
                        Looking forward to grow my skills and knowledge by working with great people and make my contribution to your project. feel free to contact. </p>
                </div>
            </div>
        </div>
    )
}
