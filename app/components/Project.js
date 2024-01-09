import Image from 'next/image'
import React from 'react'
import funland1 from "@/public/funland-Img-1.jpg"
import funland2 from "@/public/funland-Img-2.jpg"
import funland3 from "@/public/funland-Img-3.jpg"

export default function Project() {
    return (
        <div>
            <div className='font-work_sans lg:flex space-y-10'>
                <div className='lg:w-1/2'>
                    <h1 className='lg:text-4xl text-3xl font-bold'>Vehicle Funland</h1>
                    <p className='mt-2 text-xl font-light ml-1'>Single Page Application</p>
                </div>
                <div className='lg:w-1/3'>
                    <p className='inline-block py-1 rounded-md px-4 border-[1px] border-[#f1491c] mr-2 mb-2'>React</p>
                    <p className='inline-block py-1 rounded-md px-4 border-[1px] border-[#f1491c] mr-2 mb-2'>React</p>
                    <p className='inline-block py-1 rounded-md px-4 border-[1px] border-[#f1491c] mr-2 mb-2'>React</p>
                    <p className='inline-block py-1 rounded-md px-4 border-[1px] border-[#f1491c] mr-2 mb-2'>React</p>
                    <p className='inline-block py-1 rounded-md px-4 border-[1px] border-[#f1491c] mr-2 mb-2'>React</p>
                </div>
            </div>
            <div>
                <Image className='mt-10' src={funland1} />
                <div className='flex mt-5 space-x-5'>
                    <div>
                        <Image src={funland2} />
                    </div>
                    <div>
                        <Image src={funland3} />
                    </div>
                </div>
            </div>
        </div>
    )
}
