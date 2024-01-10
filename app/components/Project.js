import Image from 'next/image'
import React from 'react'

export default function Project({ project }) {
    console.log(project);
    const { title, type, techs, img1, img2, img3 } = project
    return (
        <div>
            <div className='font-work_sans lg:flex space-y-10 lg:space-y-0'>
                <div className='lg:w-1/2'>
                    <h1 className='lg:text-4xl text-3xl font-bold'>{title}</h1>
                    <p className='mt-2 text-xl font-light ml-1'>{type}</p>
                </div>
                <div className='lg:w-1/3'>
                    {techs.map(tech => <p className='lg:inline-block py-1 rounded-md px-4 border-[1px] border-[#f1491c] mr-2 mb-2'>{tech}</p>)}
                </div>
            </div>
            <div>
                <Image className='mt-10' src={img1} width={1059} height={107} />
                <div className='flex mt-5 space-x-5'>
                    <div>
                        <Image src={img2} width={342} height={107} />
                    </div>
                    <div>
                        <Image src={img3} width={690} height={107} />
                    </div>
                </div>
            </div>
        </div>
    )
}
