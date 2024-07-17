'use client'
import { anton, windsong } from './fonts';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { InstagramLogo, Envelope, GithubLogo, ArrowRight, WhatsappLogo } from '@phosphor-icons/react';

export default function Page(){
    return <>
        <Sidenav/>
        <About/>
        <Portfolio/>
        <Skills/>
        <Contact/>
    </>
}

function About(){
    return <div className="h-screen pl-16 flex w-full snap-start snap-always">
        <div className='h-screen w-auto aspect-square object-cover flex items-center justify-center relative'>
            <Image src="/image-header.jpg" width={0} height={0} alt='Muhammad Ilham Mutaqin' unoptimized className='h-5/6 w-80 aspect-square object-cover rounded-full'/>
            <div className='h-32 w-32 absolute rounded-full bg-orange-200 top-8 left-40'></div>
            <div className='h-52 w-52 absolute rounded-full bg-slate-300 bottom-12 right-12'></div>
        </div>
        <div className='relative pr-16 w-full'>
            <h1 className={`absolute bottom-28 -right-12 rotate-90 text-9xl uppercase opacity-15 -z-10 ${anton.className}`}>About</h1>
            <div className='-ml-24 mt-20 w-full'>
                <h2 className='tracking-widest uppercase font-semibold text-orange-500'>Hi, Everyone! I'm</h2>
                <h1 className='text-6xl font-bold mt-2'>Muhammad Ilham Mutaqin</h1>
                <div className='border-b-8 border-orange-500 w-40 mt-8'></div>
            </div>
            <div className='ml-24 mt-20'>
                <h3 className='uppercase tracking-widest tracking font-semibold text-orange-500'>Introducing</h3>
                <p className='mt-10'>Proficient in developing websites and Android applications. Also, interested in the world of game development and design.</p>
                <div className='mt-8 flex items-center gap-5'>
                    <button className='border-black rounded-md px-4 py-2 tracking-wider transition ease-in-out hover:bg-black hover:text-white duration-300' style={{border: "1px solid"}}>Download CV</button>
                    <div className='border-black h-6' style={{borderLeft: ".5px solid"}}></div>
                    <div className='flex gap-5'>
                        <InstagramLogo size={30} weight='light' className='transition ease-in-out hover:scale-110 duration-300' onClick={() => {location.href = 'https://instagram.com/mutaqinmi'}}/>
                        <Envelope size={30} weight='light' className='transition ease-in-out hover:scale-110 duration-300' onClick={() => {location.href = 'mailto:mutaqinmi2586@gmail.com'}}/>
                        <GithubLogo size={30} weight='light' className='transition ease-in-out hover:scale-110 duration-300' onClick={() => {location.href = 'https://github.com/mutaqinmi'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function Portfolio(){
    const [index, setIndex] = useState(0);
    const description = () => {
        if(index === 0){
            return <span>eSPW, is a full android application, web and API. This application provides services for buying and selling student-made products that are sold at school.</span>
        } else if (index === 1){
            return <span>Xpens, is an application UI design for managing finances. This application has features such as income and expense reports, transaction history, and financial plans.</span>
        } else if (index === 2){
            return <span>Aplikasi Pembayaran SPP, is a desktop application for financial payments in schools. This application is just like any other payment application, which is to manage students who have paid or not.</span>
        } else {
            return <span>Aplikasi Peminjaman Alat, is a web application to record tools that will be borrowed by students such as laptops or other warehouse equipment.</span>
        }
    }
    const source = () => {
        if(index === 0){
            return 'https://github.com/mutaqinmi/e-spw'
        } else if (index === 1){
            return 'https://www.figma.com/design/yp5fWFsOisWNlTJCoobFln/Xpens?t=MRBduvAFi7dRoeuL-1'
        } else if (index === 2){
            return 'https://github.com/mutaqinmi/aplikasi-spp'
        } else {
            return 'https://github.com/mutaqinmi/aplikasi-jurusan-jsver'
        }
    }
    const image = () => {
        if(index === 0){
            return <div>
                <Image src="/espw-1.png" width={0} height={0} alt='eSPW' unoptimized className='h-auto w-52 object-cover absolute top-1/2 -translate-y-64 left-24 z-10 shadow-2xl shadow-slate-400 rounded-3xl'/>
                <Image src="/espw-2.png" width={0} height={0} alt='eSPW' unoptimized className='h-auto w-52 object-cover absolute top-1/2 -translate-y-60 left-52 shadow-2xl shadow-slate-400 rounded-3xl'/>
            </div>  
        } else if (index === 1){
            return <div>
                <div className='w-36 h-36 rounded-full bg-blue-200 absolute top-56 left-14'></div>
                <div className='w-80 h-40 bg-red-200 absolute top-72 left-32'></div>
            </div>
        } else if (index === 2){
            return <div>
                <div className='w-36 h-36 rounded-full bg-blue-200 absolute top-72 left-14'></div>
                <div className='w-80 h-40 bg-red-200 absolute top-56 left-32'></div>
            </div>
        } else {
            return <div>
                <div className='w-36 h-36 rounded-full bg-blue-200 absolute top-56 left-14'></div>
                <div className='w-80 h-40 bg-red-200 absolute top-72 left-32'></div>
            </div>
        }
    }

    return <div className="h-screen pl-16 flex w-full snap-start snap-always">
        <div className='relative h-screen w-auto aspect-square'>
            {image()}
            <button className='absolute bottom-8 right-8 flex gap-4 items-center justify-center transition ease-in-out duration-300 hover:translate-x-2' onClick={() => {location.href = source()}}>
                <span className='text-black uppercase tracking-widest'>View Project</span>
                <ArrowRight className='text-black'/>
            </button>
        </div>
        <div className='relative pr-16 w-full'>
            <h1 className={`absolute bottom-52 -right-36 rotate-90 text-9xl uppercase opacity-15 -z-10 ${anton.className}`}>Portfolio</h1>
            <div className='-ml-32 mt-20 w-full'>
                <h2 className='tracking-widest uppercase font-semibold text-orange-500'>Portfolio</h2>
                <h1 className='text-6xl font-bold mt-2'>Unveils an<br/><span className={`text-9xl ${windsong.className}`}>Arts</span></h1>
                <div className='border-b-8 border-orange-500 w-40 mt-8'></div>
            </div>
            <div className='ml-24 mt-20'>
                <div>
                    <button className={`transition ease-in-out hover:text-orange-500 duration-300 p-2 tracking-widest text-xl ${index === 0 ? 'text-orange-500 border-b-4 border-orange-500 font-bold' : 'border-none text-xl text-slate-500 font-normal'}`} onClick={() => {setIndex(0)}}>01</button>
                    <button className={`transition ease-in-out hover:text-orange-500 duration-300 p-2 tracking-widest text-xl ${index === 1 ? 'text-orange-500 border-b-4 border-orange-500 font-bold' : 'border-none text-xl text-slate-500 font-normal'}`} onClick={() => {setIndex(1)}}>02</button>
                    <button className={`transition ease-in-out hover:text-orange-500 duration-300 p-2 tracking-widest text-xl ${index === 2 ? 'text-orange-500 border-b-4 border-orange-500 font-bold' : 'border-none text-xl text-slate-500 font-normal'}`} onClick={() => {setIndex(2)}}>03</button>
                    <button className={`transition ease-in-out hover:text-orange-500 duration-300 p-2 tracking-widest text-xl ${index === 3 ? 'text-orange-500 border-b-4 border-orange-500 font-bold' : 'border-none text-xl text-slate-500 font-normal'}`} onClick={() => {setIndex(3)}}>04</button>
                </div>
                <p className='mt-10'>{description()}</p>
            </div>
        </div>
    </div>
}

function Skills(){
    return <div className="h-screen pl-16 flex w-full snap-start snap-always">
        <div className='h-screen w-auto aspect-square object-cover relative'>
            <div className='w-10/12 absolute top-1/2 -translate-y-1/2 left-16 flex flex-col gap-y-4'>
                <Chart label='HTML & CSS' value={85} color='bg-blue-200'/>
                <Chart label='JavaScript' value={75} color='bg-red-200'/>
                <Chart label='Python' value={60} color='bg-orange-200'/>
                <Chart label='PHP' value={65} color='bg-purple-200'/>
                <Chart label='Flutter' value={70} color='bg-green-200'/>
            </div>
        </div>
        <div className='relative pr-16 w-full'>
            <h1 className={`absolute bottom-28 -right-12 rotate-90 text-9xl uppercase opacity-15 -z-10 ${anton.className}`}>Skills</h1>
            <div className='-ml-24 mt-20 w-full'>
                <h2 className='tracking-widest uppercase font-semibold text-orange-500'>Skills</h2>
                <h1 className='text-6xl font-bold mt-2'>Skill Showcase of My Expertise</h1>
                <div className='border-b-8 border-orange-500 w-40 mt-8'></div>
            </div>
            <div className='ml-16 mt-28'>
                <h3 className='uppercase tracking-widest tracking font-semibold text-orange-500'>Great works, born of talent</h3>
                <p className='mt-10'>I am capable of creating and developing web applications using several frameworks such as React, Fastify, Django, and Laravel. In addition, I am also a little familiar with Flutter and desktop applications with C#. In addition, I can also understand Figma, Adobe Illustrator, and Blender.</p>
            </div>
        </div>
    </div>
}

function Chart(props: {label: string; value: number; color: string}){
    return <div className='w-5/6'>
        <div className={`h-8 rounded-full relative ${props.color}`} style={{width: `${props.value}%`}}>
            <p className='text-nowrap text-sm absolute top-1/2 -translate-y-1/2 right-4'>{`${props.value}%`}</p>
        </div>
        <p className='text-nowrap mt-1 text-sm'>{props.label}</p>
    </div>
}

function Contact(){
    const year = new Date().getFullYear();
    return <div className="h-screen pl-16 flex w-full snap-start snap-always">
        <div className='relative h-screen w-auto aspect-square'>
            <Image src="/image-footer.jpg" width={0} height={0} alt='Muhammad Ilham Mutaqin' unoptimized className='h-screen w-auto aspect-square object-cover saturate-0 opacity-50'/>
            <p className='absolute bottom-8 left-10'>&#169; {year} by <span className='underline'>mutaqinmi</span></p>
        </div>
        <div className='relative pr-16 w-full'>
            <h1 className={`absolute bottom-44 -right-24 rotate-90 text-9xl uppercase opacity-15 -z-10 ${anton.className}`}>Contact</h1>
            <div className='-ml-24 mt-20 w-full'>
                <h2 className='tracking-widest uppercase font-semibold text-orange-500'>Contact Me</h2>
                <h1 className='text-6xl font-bold mt-2'>Let's Be Friend!</h1>
                <div className='border-b-8 border-orange-500 w-40 mt-8'></div>
            </div>
            <div className='ml-24 mt-20'>
                <h3 className='uppercase tracking-widest tracking font-semibold text-orange-500'>Information</h3>
                <div className='mt-10 flex flex-col gap-8'>
                    <button className='flex items-center justify-start gap-4 transition ease-in-out duration-300 hover:text-orange-500' onClick={() => {location.href = 'https://instagram.com/mutaqinmi'}}>
                        <InstagramLogo size={30}/>
                        <p>@mutaqinmi</p>
                    </button>
                    <button className='flex items-center justify-start gap-4 transition ease-in-out duration-300 hover:text-orange-500' onClick={() => {location.href = 'https://wa.me/6285155114492'}}>
                        <WhatsappLogo size={30}/>
                        <p>(+62) 851 - 5511 - 4492</p>
                    </button>
                    <button className='flex items-center justify-start gap-4 transition ease-in-out duration-300 hover:text-orange-500' onClick={() => {location.href = 'mailto:mutaqinmi2586@gmail.com'}}>
                        <Envelope size={30}/>
                        <p>mutaqinmi2586@gmail.com</p>
                    </button>
                    <button className='flex items-center justify-start gap-4 transition ease-in-out duration-300 hover:text-orange-500' onClick={() => {location.href = 'https://github.com/mutaqinmi'}}>
                        <GithubLogo size={30}/>
                        <p>mutaqinmi</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
}

function Sidenav(){
    const [scrollY, setScrollY] = useState(0);
    const [screenHeight, setScreenHeight] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setScreenHeight(window.innerHeight);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return <div className="h-screen w-16 bg-white fixed md:flex items-center justify-center hidden">
        <div className="flex gap-1 flex-col">
            <Dot active={scrollY + screenHeight >= screenHeight * 1 && scrollY < screenHeight * 1 ? true : false} click={() => {window.scrollTo(0, 0)}}/>
            <Dot active={scrollY + screenHeight >= screenHeight * 2 && scrollY < screenHeight * 2 ? true : false} click={() => {window.scrollTo(0, screenHeight * 1)}}/>
            <Dot active={scrollY + screenHeight >= screenHeight * 3 && scrollY < screenHeight * 3 ? true : false} click={() => {window.scrollTo(0, screenHeight * 2)}}/>
            <Dot active={scrollY + screenHeight >= screenHeight * 4 && scrollY < screenHeight * 4 ? true : false} click={() => {window.scrollTo(0, screenHeight * 3)}}/>
        </div>
    </div>
}

function Dot(props: {active: boolean; click?: () => void}){
    return <div className={`w-4 h-4 rounded-full ${props.active ? "bg-orange-500 border-none" : "bg-white border-2 border-black"}`} onClick={props.click}></div>
}