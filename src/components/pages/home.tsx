'use client';
import { Envelope, GithubLogo, LinkedinLogo, Sparkle } from '@phosphor-icons/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home(){
    const router = useRouter();
    return <div className='flex h-screen w-full flex-col items-center justify-center relative p-4'>
        <span className='uppercase absolute right-4 top-4 text-9xl leading-none font-bold text-gray-100 select-none -z-10 hidden md:flex'><Sparkle weight='fill'/></span>
        <span className='uppercase absolute left-2 bottom-2 text-8xl leading-none font-bold text-gray-100 select-none -z-10 hidden md:flex'>about</span>
        <div className='flex md:flex-row flex-col md:gap-20 gap-10 md:items-stretch items-center'>
            <Image src={"https://cdn.mutaqin.me/files/profile-picture.jpg"} width={1000} height={1000} alt='Muhammad Ilham Mutaqin' className='md:w-80 w-32 md:h-[30rem] h-48 self-center object-cover shadow-[-35px_-35px_0px_rgba(0,0,0,1)] shadow-amber-400 rounded-lg'/>
            <div className='md:w-[30rem] w-5/6 flex flex-col items-end justify-between'>
                <div>
                    <p className='md:text-normal text-sm'>Hi, everyone! I&apos;m ...</p>
                    <h1 className='font-bold md:text-5xl text-3xl mt-2'>Muhammad Ilham Mutaqin</h1>
                    <div className='md:mt-6 mt-4 border-4 border-amber-400 md:w-48 w-24'></div>
                </div>
                <div className='w-3/4 self-end md:mt-0 mt-8'>
                    <div className='md:mb-6 mb-4 flex gap-2'>
                        <div className='md:p-2 p-1 bg-amber-400 rounded-full'></div>
                        <div className='md:p-2 p-1 bg-amber-400 rounded-full'></div>
                        <div className='md:p-2 p-1 bg-amber-400 rounded-full'></div>
                    </div>
                    <p className='md:text-normal text-sm'>Proficient in developing websites and Android applications. Also, interested in the world of game development and design.</p>
                    <div className='flex gap-4 mt-6'>
                        <LinkedinLogo size={32} className='cursor-pointer md:hover:p-2 md:hover:bg-amber-400 md:hover:rounded-full transition-all ease-in-out duration-300' onClick={() => router.push('https://www.linkedin.com/in/mutaqinmi')}/>
                        <Envelope size={32} className='cursor-pointer md:hover:p-2 md:hover:bg-amber-400 md:hover:rounded-full transition-all ease-in-out duration-300' onClick={() => router.push('mailto:contact@mutaqin.me')}/>
                        <GithubLogo size={32} className='cursor-pointer md:hover:p-2 md:hover:bg-amber-400 md:hover:rounded-full transition-all ease-in-out duration-300' onClick={() => router.push('https://github.com/mutaqinmi')}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}