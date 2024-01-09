import Image from 'next/image'
import React from 'react'
import Github from '@/public/github.png'
import LinkedIn from '@/public/linkedin.png'

export default function Contact_Me() {
    return (
        <div id='contact-me' className="mt-32">
            <h1 className="font-poppins out-stroke  font-bold lg:ml-6 lg:text-8xl text-5xl  text-center lg:text-left">Get In Touch</h1>
            <div className="py-28">
                <p className='font-poppins text-center text-lg w-5/6 mx-auto lg-w-full'>Feel free to reach out to me using the contact details below</p>
                <div className="relative">
                    <div className="lg:flex justify-between items-center lg:absolute lg:-top-3 lg:left-48 mt-10 h-[100px] w-5/6 lg:w-2/3 lg:p-10 mx-auto bg-[#f1491c]"><p className="font-poppins text-lg lg:text-left text-center lg:py-0 py-2">sahikahsan7@gmail.com</p>
                        <div className="justify-center flex lg:gap-6 gap-x-4">
                            <a target="_blank" href="https://github.com/sahik7"><Image src={Github} alt='github link' /></a>
                            <a target="_blank" href="https://www.linkedin.com/in/sahik-ahsan/"><Image src={LinkedIn} alt='linkedin link' /></a>
                        </div>
                    </div>
                    <div className="hidden lg:block md:block mt-10 h-[100px] w-2/3 mx-auto border-2 border-[#f1491c]">
                    </div>
                    <p className='font-poppins text-center text-lg mt-24'>Ring Road, Mohammadpur, Dhaka, Bangladesh</p>
                </div>
            </div>
        </div>
    )
}
