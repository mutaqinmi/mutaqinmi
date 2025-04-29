'use client';
import { AndroidLogo, ArrowCircleUpRight, Desktop, Globe, RocketLaunch } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const projects = [
    {
        name: "eSPW",
        description: "eSPW is a student-driven marketplace application designed to support student entrepreneurship by enabling the buying and selling of goods within the school community.",
        link: "https://espw.mutaqin.me/",
        platform: {
            android: true,
            web: true,
            desktop: false,
        }
    },
    {
        name: "Xpens",
        description: "Xpens is a financial management app designed to simplify tracking expenses and income, making money management easier than ever.",
        link: "https://xpens.mutaqin.me/",
        platform: {
            android: false,
            web: true,
            desktop: false,
        }
    },
    {
        name: "Pinisi Studio",
        description: "This application serves as the landing page for Pinisi Studio, a company specializing in application development services.",
        link: "https://pinisi.dev/",
        platform: {
            android: false,
            web: true,
            desktop: false,
        }
    },
    {
        name: "E-Cash",
        description: "E-Cash is an application designed to assist cashiers in recording customer purchases and processing transactions.",
        link: "https://ecash.mutaqin.me/",
        platform: {
            android: false,
            web: true,
            desktop: false,
        }
    },
    {
        name: "CGM App",
        description: "CGM App is a community management application designed to record and track community dues within a housing complex.",
        link: "https://cgmapp.mutaqin.me/",
        platform: {
            android: false,
            web: true,
            desktop: false,
        }
    },
    {
        name: "Untolded",
        description: "Untolded is a 2D platformer story game about a high school student unraveling a mystery hidden within their school.",
        link: "https://cdn.mutaqin.me/files/untolded_release_apk_v1.4.2.apk",
        platform: {
            android: true,
            web: false,
            desktop: false,
        }
    },
    {
        name: "Pop It!",
        description: "Pop It! is a casual and fun game where players collect bubbles scattered throughout the level, aiming for the highest score while enjoying a simple yet satisfying gameplay experience.",
        link: "https://cdn.mutaqin.me/files/pop-it!.zip",
        platform: {
            android: false,
            web: false,
            desktop: true,
        }
    },
]

export default function Portfolio(){
    const router = useRouter();
    const [index, setIndex] = useState(0);

    return <div className='flex h-screen w-full flex-col items-center justify-center relative p-4'>
        <span className='uppercase absolute right-4 top-4 text-8xl leading-none font-bold text-gray-100 select-none -z-10 hidden md:flex'>portfolio</span>
        <span className='uppercase absolute left-2 bottom-2 text-9xl leading-none font-bold text-gray-100 select-none -z-10 hidden md:flex'><RocketLaunch weight='fill'/></span>
        <div className='w-3/4 h-5/6 relative flex flex-col items-start justify-between'>
            <div className='w-full flex items-start justify-between'>
                <div>
                    <h2 className='font-bold md:text-5xl text-3xl mt-2'>My Projects</h2>
                    <div className='md:mt-6 mt-4 border-4 border-amber-400 md:w-48 w-24'></div>
                </div>
                <div className='w-fit flex flex-col gap-4 mt-6'>
                    {projects[index].platform.android ? <AndroidLogo size={24}/> : null}
                    {projects[index].platform.web ? <Globe size={24}/> : null}
                    {projects[index].platform.desktop ? <Desktop size={24}/> : null}
                </div>
            </div>
            <div className='flex md:flex-row flex-col-reverse md:items-end items-stretch justify-between'>
                <div className='w-fit mt-6 flex gap-4 flex-wrap items-center justify-center'>
                    {projects.map((project, projectIndex) => {
                        return <button key={projectIndex} className={`${index === projectIndex ? "bg-amber-400 border-2 border-amber-400 p-2 aspect-square leading-none rounded-full" : "bg-transparent border-2 border-black p-2 rounded-full"}`} onClick={() => setIndex(projectIndex)}>{index === projectIndex ? (projectIndex + 1).toString().padStart(2, "0") : ""}</button>
                    })}
                </div>
                <div className='md:w-2/5 w-full'>
                    <button onClick={() => router.push(projects[index].link)} className='w-fit text-xl font-semibold mb-4 flex gap-2 justify-center items-center py-1 px-0 hover:text-amber-400 transition-all ease-in-out duration-100'>{projects[index].name}<ArrowCircleUpRight size={24}/></button>
                    <p>{projects[index].description}</p>
                </div>
            </div>
        </div>
    </div>
}