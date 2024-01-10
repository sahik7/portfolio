import Image from 'next/image'
import React from 'react'
import ReactLogo from "@/public/react.png"
import TypescriptLogo from "@/public/typescript.png"
import ReduxLogo from "@/public/redux.png"
import JavascriptLogo from "@/public/javascript.png"
import CSSLogo from "@/public/css.png"
import HtmlLogo from "@/public/html.png"
import TailwindLogo from "@/public/tailwind.png"
import NextLogo from "@/public/next.png"
import ExpressLogo from "@/public/express.png"
import DockerLogo from "@/public/docker.png"
import MongoDbLogo from "@/public/mongoDB.png"
import PrismaLogo from "@/public/prisma.png"
import NodejsLogo from "@/public/nodejs.png"
import PostgresqlLogo from "@/public/postgresql.png"
import MongooseLogo from "@/public/mongoose.png"

export default function Technologies() {
    return (
        <div id='technologies' className="mt-32">
            <h1 className="font-poppins font-bold out-stroke lg:ml-6 lg:text-8xl text-5xl text-center lg:text-left">Technologies</h1>
            <div className="w-8/12 mx-auto">
                <h2 className="lg:my-28 my-10 uppercase font-poppins lg:text-4xl text-2xl font-bold">Front end</h2>
                <div className="lg:gap-x-44 gap-x-20 grid lg:grid-cols-4 md:grid-cols-3 md:gap-x-48 grid-cols-2  lg:gap-y-32 gap-y-10">
                    <Image src={CSSLogo} alt="css-logo" />
                    <Image src={TypescriptLogo} alt="typescript-logo" />
                    <Image src={ReduxLogo} alt="redux-logo" />
                    <Image src={NextLogo} alt="next-logo" />
                    <Image src={ReactLogo} alt="react-logo" />
                    <Image src={TailwindLogo} alt="tailwind-logo" />
                    <Image src={HtmlLogo} alt="html-logo" />
                    <Image src={JavascriptLogo} alt="javascript-logo" />
                </div>
            </div>
            <div className="w-8/12 mx-auto">
                <h2 className="lg:my-28 my-10 uppercase font-poppins  lg:text-4xl text-2xl font-bold">Back end</h2>
                <div className="lg:gap-x-44 gap-x-20 grid lg:grid-cols-4 grid-cols-2  md:grid-cols-3 md:gap-x-48  lg:gap-y-32 gap-y-10">
                    <Image src={ExpressLogo} alt="express-logo" />
                    <Image src={DockerLogo} alt="docker-logo" />
                    <Image src={MongoDbLogo} alt="mongodb-logo" />
                    <Image src={PrismaLogo} alt="prisma-logo" />
                    <Image src={NodejsLogo} alt="nodejs-logo" />
                    <Image src={PostgresqlLogo} alt="nodejs-logo" />
                    <Image src={MongooseLogo} alt="nodejs-logo" />
                </div>
            </div>
        </div>
    )
}
