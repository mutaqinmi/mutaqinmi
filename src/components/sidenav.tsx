import { useEffect, useState } from 'react';

export default function Sidenav(){
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

    return <div className="h-screen w-32 bg-transparent fixed md:flex items-center justify-center hidden z-50">
        <div className="flex gap-1 flex-col">
            <Dot active={scrollY + screenHeight >= screenHeight * 1 && scrollY < screenHeight * 1 ? true : false} click={() => {window.scrollTo({top: 0, behavior: 'smooth'})}}/>
            <Dot active={scrollY + screenHeight >= screenHeight * 2 && scrollY < screenHeight * 2 ? true : false} click={() => {window.scrollTo({top: screenHeight * 1, behavior: 'smooth'})}}/>
            <Dot active={scrollY + screenHeight >= screenHeight * 3 && scrollY < screenHeight * 3 ? true : false} click={() => {window.scrollTo({top: screenHeight * 2, behavior: 'smooth'})}}/>
        </div>
    </div>
}

function Dot(props: {active: boolean; click?: () => void}){
    return <div className={`p-2 aspect-square rounded-full ${props.active ? "bg-amber-400 border-none" : "bg-white border-2 border-black"}`} onClick={props.click}></div>
}