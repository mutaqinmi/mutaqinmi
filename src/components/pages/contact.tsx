'use client';
import { Envelope, GithubLogo, InstagramLogo, LinkedinLogo, PaperPlaneTilt, WhatsappLogo } from '@phosphor-icons/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Contact(){
    const router = useRouter();

    return <div className='flex h-screen w-full flex-col items-center justify-center relative p-4'>
        <span className='uppercase absolute right-4 top-4 text-9xl leading-none font-bold text-gray-100 select-none -z-10 hidden md:flex'><PaperPlaneTilt weight='fill'/></span>
        <span className='uppercase absolute left-2 bottom-2 text-8xl leading-none font-bold text-gray-100 select-none -z-10 hidden md:flex'>contact</span>
        <div className='w-3/4 h-5/6 relative flex flex-col items-start justify-between'>
            <div className='self-end flex flex-col items-end'>
                <h2 className='font-bold md:text-5xl text-3xl mt-2'>Follow Me</h2>
                <div className='md:mt-6 mt-4 border-4 border-amber-400 md:w-48 w-24'></div>
            </div>
            <div className='w-full flex md:flex-row flex-col justify-between md:items-end items-start md:gap-0 gap-10'>
                <div className='flex flex-col gap-4'>
                    <div className='mb-4 flex gap-2'>
                        <div className='md:p-2 p-1 bg-amber-400 rounded-full'></div>
                        <div className='md:p-2 p-1 bg-amber-400 rounded-full'></div>
                        <div className='md:p-2 p-1 bg-amber-400 rounded-full'></div>
                    </div>
                    <button onClick={() => router.push('https://linkedin.com/in/mutaqinmi')} className='flex gap-4 items-center justify-start p-2 hover:bg-amber-400 hover:rounded-md transition-all ease-in-out duration-300'>
                        <LinkedinLogo size={32}/>
                        <span>Muhammad Ilham Mutaqin</span>
                    </button>
                    <button onClick={() => router.push('mailto:contact@mutaqin.me')} className='flex gap-4 items-center justify-start p-2 hover:bg-amber-400 hover:rounded-md transition-all ease-in-out duration-300'>
                        <Envelope size={32}/>
                        <span>contact@mutaqin.me</span>
                    </button>
                    <button onClick={() => router.push('https://github.com/mutaqinmi')} className='flex gap-4 items-center justify-start p-2 hover:bg-amber-400 hover:rounded-md transition-all ease-in-out duration-300'>
                        <GithubLogo size={32}/>
                        <span>mutaqinmi</span>
                    </button>
                    <button onClick={() => router.push('https://wa.me/6285155114492')} className='flex gap-4 items-center justify-start p-2 hover:bg-amber-400 hover:rounded-md transition-all ease-in-out duration-300'>
                        <WhatsappLogo size={32}/>
                        <span>(+62) 851-5511-4492</span>
                    </button>
                    <button onClick={() => router.push('https://instagram.com/mutaqinmi')} className='flex gap-4 items-center justify-start p-2 hover:bg-amber-400 hover:rounded-md transition-all ease-in-out duration-300'>
                        <InstagramLogo size={32}/>
                        <span>@mutaqinmi</span>
                    </button>
                </div>
                <span className='text-xs'>&#169; {new Date().getFullYear()} by <Link href={'/'} className='underline'>Muhammad Ilham Mutaqin</Link></span>
            </div>
        </div>
    </div>
}