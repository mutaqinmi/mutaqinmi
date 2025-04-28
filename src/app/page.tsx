'use client';
import Contact from '@/components/pages/contact';
import Home from '@/components/pages/home';
import Portfolio from '@/components/pages/portfolio';
import Sidenav from '@/components/sidenav';

export default function Page(){
    return <>
        <Sidenav/>
        <Home/>
        <Portfolio/>
        <Contact/>
    </>
}