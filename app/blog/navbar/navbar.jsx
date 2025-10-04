import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Menu, X } from 'lucide-react';
import { useEffect, useRef } from "react";
import { useState } from 'react';

export default function Navbar({title="baltej.me"}){
        const [brpt, setBrpt] = useState(() =>
        typeof window !== 'undefined' ? window.innerWidth : 0
    );
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);  // mark client hydration complete

        const handleResize = () => {
            setBrpt(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);
    if (!isClient) return null;
    return (
    <>
    <div className="z-[100] pt-10 pb-10 flex flex-row items-center sticky top-0 left-0 justify-center md:justify-between /*After this goes classes for glassmorphism*/ light:bg-[rgba(255, 255, 255, 0.6)]" style={{backdropFilter:"blur( 10.5px )", opacity:""}}>                                                                                                                                          {/* dark:bg-[rgba(0,0,0,0.35)] */}
        <div className="pl-0  md:pl-20 text-3xl /*md:w-1/2*/ block" style={{fontFamily:"logo-bold"}}>
            {title}
        </div>
        {(brpt >= 768) ? <URLs /> : <MenuSheet />}
    </div>
    </>
        );
}

const URLs = () => {
    return (
        <div style={{fontFamily:"logo"}} className="text-xl pl-0 flex flex-row gap-x-15 items-center hidden md:block md:flex lg:block lg:flex /*md:w-1/2*/ md:pr-20">
            <div>
                <a href="/">Home</a>
            </div>
            <div>
                <a href="/aboutme">About Me</a>
            </div>
            <div>
                <a href="/github">Github</a>
            </div>
            <div>
                <a href="/blog">Blogs</a>
            </div>
            <div>
                <a href="https://github.com/baltej223#connect-with-me">
                    Contact Me
                </a>
            </div>
            <div>
                <a href="https://posts.baltej.me/">Posts</a>
            </div>
            <ThemeToggle/>
        </div>
    );
}

export function MenuSheet() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative z-50 bg-black">
            {/* Menu Button */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed top-5 right-5 z-50 p-3 bg-black rounded-full shadow-md hover:bg-gray-100 transition-all duration-200"
            >
                {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-white" />}
            </button>

            {/* Overlay */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/30 backdrop-blur-sm"
                />
            )}

            {/* Sheet Panel */}
            <div
                className={`fixed top-0 right-0 h-full w-64 bg-black shadow-xl transform transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="p-6 space-y-4">
                    <h2 className="text-xl font-semibold">Navigation</h2>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="/"
                                className="block p-2 rounded hover:bg-gray-100 text-white"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/aboutme"
                                className="block p-2 rounded hover:bg-gray-100 text-white"
                            >
                                About me
                            </a>
                        </li>
                        <li>
                            <a
                                href="/blog"
                                className="block p-2 rounded hover:bg-gray-100 text-white"
                            >
                                Contact Me
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}