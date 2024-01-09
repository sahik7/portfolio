import React from 'react'
import Project from '../components/Project'

export default function Projects() {
    return (
        <div id='projects' className="mt-32">
            <h1 className="font-poppins out-stroke lg:ml-6 lg:text-8xl text-5xl font-bold text-center lg:text-left">Projects</h1>
            <div className='w-9/12 mx-auto mt-32 space-y-40'>
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}
