'use client'
import { windsong } from './fonts';
import { useState } from 'react';
import Image from 'next/image';
import { InstagramLogo, Envelope, GithubLogo, ArrowRight, WhatsappLogo, ImageBroken, LinkedinLogo } from '@phosphor-icons/react';
import Sidenav from '@/components/sidenav';

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
    return <div className="h-screen relative w-screen snap-start snap-always md:flex md:pl-16">
        <div className='h-full w-full md:w-1/2 aspect-square object-cover hidden md:flex items-center justify-center relative'>
            <Image src="/image-header.jpg" width={0} height={0} alt='Muhammad Ilham Mutaqin' unoptimized className='h-1/2 md:h-3/4 w-60 aspect-square object-cover rounded-full'/>
            <div className='h-24 w-24 absolute rounded-full bg-orange-200 top-48 md:top-16 left-24 md:left-48'></div>
            <div className='h-36 w-36 absolute rounded-full bg-slate-300 bottom-48 md:bottom-16 right-16 md:right-36'></div>
        </div>
        <div className='absolute md:relative md:w-1/2 top-0 h-full w-full p-8 md:p-16'>
            <div className='w-4/5 md:-ml-28'>
                <h2 className='tracking-widest uppercase font-semibold text-orange-500 text-sm'>Hi, Everyone! I&apos;m</h2>
                <h1 className='text-4xl md:text-6xl font-bold mt-2'>Muhammad Ilham Mutaqin</h1>
                <div className='border-b-8 border-orange-500 w-24 mt-4 md:w-32'></div>
            </div>
            <div className='w-3/4 md:w-3/5 absolute right-1/2 translate-x-1/2 bottom-8 md:right-16 md:bottom-24 md:translate-x-0'>
                <h3 className='uppercase tracking-widest tracking font-semibold text-orange-500 text-sm'>Introducing</h3>
                <p className='mt-4 md:mt-8 text-sm'>Proficient in developing websites and Android applications. Also, interested in the world of game development and design.</p>
                <div className='mt-8 flex items-center gap-5'>
                    <form action="/CV_Muhammad Ilham Mutaqin.pdf">
                        <button className='border-black rounded-md px-4 py-2 tracking-wider transition ease-in-out hover:text-orange-500 duration-300 text-sm' style={{border: "1px solid"}}>Download CV</button>
                    </form>
                    <div className='border-black h-6' style={{borderLeft: ".5px solid"}}></div>
                    <div className='flex gap-5'>
                        <LinkedinLogo size={25} weight='light' className='transition ease-in-out hover:scale-110 duration-300 hover:text-orange-500' onClick={() => {location.href = 'https://linkedin.com/in/mutaqinmi'}}/>
                        <Envelope size={25} weight='light' className='transition ease-in-out hover:scale-110 duration-300 hover:text-orange-500' onClick={() => {location.href = 'mailto:mutaqinmi2586@gmail.com'}}/>
                        <GithubLogo size={25} weight='light' className='transition ease-in-out hover:scale-110 duration-300 hover:text-orange-500' onClick={() => {location.href = 'https://github.com/mutaqinmi'}}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

function Portfolio(){
    const [index, setIndex] = useState(0);
    const description = () => {
        switch (index){
            case 0:
                return <span>eSPW, is a full android application, web and API. This application provides services for buying and selling student-made products that are sold at school.</span>
            case 1:
                return <span>Xpens, is an application UI design for managing finances. This application has features such as income and expense reports, transaction history, and financial plans.</span>
            case 2:
                return <span>Aplikasi Pembayaran SPP, is a desktop application for financial payments in schools. This application is just like any other payment application, which is to manage students who have paid or not.</span>
            case 3:
                return <span>Aplikasi Peminjaman Alat, is a web application to record tools that will be borrowed by students such as laptops or other warehouse equipment.</span>
        }
    }
    const source = () => {
        switch (index){
            case 0:
                return 'https://espw.my.id'
            case 1:
                return 'https://www.figma.com/design/yp5fWFsOisWNlTJCoobFln/Xpens?t=MRBduvAFi7dRoeuL-1'
            case 2:
                return 'https://github.com/mutaqinmi/aplikasi-spp'
            case 3:
                return 'https://github.com/mutaqinmi/aplikasi-jurusan-jsver'
            default:
                return ''
        }
    }
    const image = () => {
        switch (index){
            case 0:
                return <div className='relative h-full w-full'>
                    <Image src="/espw-1.png" width={0} height={0} alt='eSPW' unoptimized className='h-auto w-44 object-cover z-10 shadow-xl shadow-grey-500 rounded-3xl absolute bottom-1/2 translate-y-1/3 right-1/2 translate-x-1/3'/>
                    <Image src="/espw-2.png" width={0} height={0} alt='eSPW' unoptimized className='h-auto w-44 object-cover shadow-2xl shadow-grey-500 rounded-3xl absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/3'/>
                </div>
            case 1:
                return <div className='w-44 h-44 bg-blue-200 rounded-full flex flex-col items-center justify-center p-8'><ImageBroken size={32}/><span className='text-sm text-center mt-2'>Preview not available!</span></div>
            case 2:
                return <div className='w-44 h-44 bg-blue-200 rounded-full flex flex-col items-center justify-center p-8'><ImageBroken size={32}/><span className='text-sm text-center mt-2'>Preview not available!</span></div>
            case 3:
                return <div className='w-44 h-44 bg-blue-200 rounded-full flex flex-col items-center justify-center p-8'><ImageBroken size={32}/><span className='text-sm text-center mt-2'>Preview not available!</span></div>
        }
    }

    return <div className="h-screen w-screen relative snap-start snap-always md:flex md:pl-16">
        <div className='h-full w-full hidden md:flex justify-center items-center'>
            {image()}
        </div>
        <div className='absolute md:relative top-0 h-full w-full p-8 z-50'>
            <div className='w-full md:-ml-14 md:mt-8'>
                <h2 className='tracking-widest uppercase font-semibold text-orange-500 text-sm'>Portfolio</h2>
                <h1 className='text-4xl md:text-6xl font-bold mt-2'>Unveils an<br/><span className={`text-7xl md:text-9xl ${windsong.className}`}>Arts</span></h1>
                <div className='border-b-8 border-orange-500 w-24 mt-4'></div>
            </div>
            <div className='absolute md:bottom-24 bottom-8 md:right-24 right-1/2 md:translate-x-0 translate-x-1/2 w-4/5 md:w-3/5 text-sm'>
                <div>
                    <button className={`transition ease-in-out hover:text-orange-500 duration-300 p-2 tracking-widest text-lg ${index === 0 ? 'text-orange-500 border-b-4 border-orange-500 font-bold' : 'border-none text-lg text-slate-500 font-normal'}`} onClick={() => {setIndex(0)}}>01</button>
                    <button className={`transition ease-in-out hover:text-orange-500 duration-300 p-2 tracking-widest text-lg ${index === 1 ? 'text-orange-500 border-b-4 border-orange-500 font-bold' : 'border-none text-lg text-slate-500 font-normal'}`} onClick={() => {setIndex(1)}}>02</button>
                    <button className={`transition ease-in-out hover:text-orange-500 duration-300 p-2 tracking-widest text-lg ${index === 2 ? 'text-orange-500 border-b-4 border-orange-500 font-bold' : 'border-none text-lg text-slate-500 font-normal'}`} onClick={() => {setIndex(2)}}>03</button>
                    <button className={`transition ease-in-out hover:text-orange-500 duration-300 p-2 tracking-widest text-lg ${index === 3 ? 'text-orange-500 border-b-4 border-orange-500 font-bold' : 'border-none text-lg text-slate-500 font-normal'}`} onClick={() => {setIndex(3)}}>04</button>
                </div>
                <p className='mt-8'>{description()}</p>
                <button className='float-end mt-4 flex gap-4 items-center justify-center transition ease-in-out duration-300 hover:translate-x-2 text-sm' onClick={() => {location.href = source()}}>
                    <span className='text-black uppercase tracking-widest'>View Source</span>
                    <ArrowRight className='text-black'/>
                </button>
            </div>
        </div>
    </div>
}

function Skills(){
    return <div className="h-screen w-screen snap-start snap-always md:flex relative md:pl-16">
        <div className='h-full w-full md:w-1/2 hidden md:flex justify-center items-center flex-col gap-y-4'>
            <Chart label='HTML & CSS' value={85} color='bg-blue-200'/>
            <Chart label='JavaScript' value={75} color='bg-red-200'/>
            <Chart label='Python' value={60} color='bg-orange-200'/>
            <Chart label='PHP' value={65} color='bg-purple-200'/>
            <Chart label='Flutter' value={70} color='bg-green-200'/>
        </div>
        <div className='absolute md:relative top-0 w-full h-full p-8 md:w-1/2'>
            <div className='w-full md:-ml-20 md:mt-10'>
                <h2 className='tracking-widest uppercase font-semibold text-orange-500 text-sm'>Skills</h2>
                <h1 className='text-4xl md:text-6xl font-bold mt-2'>Skill Showcase of My Expertise</h1>
                <div className='border-b-8 border-orange-500 w-24 mt-4'></div>
            </div>
            <div className='absolute w-4/5 bottom-8 left-1/2 -translate-x-1/2 text-sm md:bottom-16 md:w-3/5'>
                <h3 className='uppercase tracking-widest tracking font-semibold text-orange-500'>Great works, born of talent</h3>
                <p className='mt-4 md:mt-8'>I am capable of creating and developing web applications using several frameworks such as React, Fastify, Django, and Laravel. In addition, I am also a little familiar with Flutter and desktop applications with C#. In addition, I can also understand Figma, Adobe Illustrator, and Blender.</p>
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
    return <div className="h-screen md:flex md:pl-16 w-screen snap-start snap-always relative">
        <div className='relative h-full w-full'>
            <Image src="/image-footer.jpg" width={0} height={0} alt='Muhammad Ilham Mutaqin' unoptimized className='h-screen w-auto aspect-square object-cover saturate-0 opacity-50 hidden md:flex'/>
            <p className='absolute bottom-8 left-8'>&#169; {year} by <span className='underline'>Muhammad Ilham Mutaqin</span></p>
        </div>
        <div className='absolute top-0 pr-16 w-full h-full p-8 md:relative'>
            <div className='w-full md:-ml-28'>
                <h2 className='tracking-widest uppercase font-semibold text-orange-500 text-sm'>Contact Me</h2>
                <h1 className='text-4xl md:text-6xl font-bold mt-2'>Let&apos;s Be Friend!</h1>
                <div className='border-b-8 border-orange-500 w-24 mt-4'></div>
            </div>
            <div className='absolute bottom-36 md:bottom-20 left-8 md:left-36 text-sm'>
                <h3 className='uppercase tracking-widest tracking font-semibold text-orange-500'>Information</h3>
                <div className='mt-10 flex flex-col gap-8'>
                    <button className='flex items-center justify-start gap-4 transition ease-in-out duration-300 hover:text-orange-500' onClick={() => {location.href = 'https://linkedin.com/in/mutaqinmi'}}>
                        <LinkedinLogo size={30}/>
                        <p>Muhammad Ilham Mutaqin</p>
                    </button>
                    <button className='flex items-center justify-start gap-4 transition ease-in-out duration-300 hover:text-orange-500' onClick={() => {location.href = 'mailto:mutaqinmi2586@gmail.com'}}>
                        <Envelope size={30}/>
                        <p>mutaqinmi2586@gmail.com</p>
                    </button>
                    <button className='flex items-center justify-start gap-4 transition ease-in-out duration-300 hover:text-orange-500' onClick={() => {location.href = 'https://github.com/mutaqinmi'}}>
                        <GithubLogo size={30}/>
                        <p>mutaqinmi</p>
                    </button>
                    <button className='flex items-center justify-start gap-4 transition ease-in-out duration-300 hover:text-orange-500' onClick={() => {location.href = 'https://wa.me/6285155114492'}}>
                        <WhatsappLogo size={30}/>
                        <p>(+62) 851 - 5511 - 4492</p>
                    </button>
                    <button className='flex items-center justify-start gap-4 transition ease-in-out duration-300 hover:text-orange-500' onClick={() => {location.href = 'https://instagram.com/mutaqinmi'}}>
                        <InstagramLogo size={30}/>
                        <p>@mutaqinmi</p>
                    </button>
                </div>
            </div>
        </div>
    </div>
}