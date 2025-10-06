"use client";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import React, { useState, useEffect, useRef } from "react";
import { Menu } from "lucide-react";


export default function Navbar({title="baltej.me"}){
  const [isOnPhone, setIsOnPhone] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsOnPhone(window.innerWidth <= 768); // Common breakpoint for mobile
    };
    
    checkIfMobile();
    
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

    return (
    <>
    <header className="z-[100] pt-10 pb-10 flex flex-row items-center sticky top-0 left-0 justify-center md:justify-between /*After this goes classes for glassmorphism*/ light:bg-[rgba(255, 255, 255, 0.6)]" style={{backdropFilter:"blur( 10.5px )", opacity:""}}>                                                                                                                                          {/* dark:bg-[rgba(0,0,0,0.35)] */}
        <div className="pl-0  md:pl-20 text-3xl /*md:w-1/2*/ block font-bold" style={{fontFamily:"logo-bold"}}>
            {title}
        </div>
        { isOnPhone ?  <HamburgerMenu/> : <Navlinks/> }
    </header>
    </>
        );
}

const Navlinks = () =>{ 
  return (
  <>
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
  </>
  );
}

const HamburgerMenu = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const sheetRef = useRef(null);

  // Handle clicks outside to close the sheet
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sheetRef.current && !sheetRef.current.contains(event.target) && isSheetOpen) {
        setIsSheetOpen(false);
      }
    };

    // Handle ESC key press to close sheet
    const handleEscKey = (event) => {
      if (event.key === "Escape" && isSheetOpen) {
        setIsSheetOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscKey);

    // Lock body scroll when sheet is open
    if (isSheetOpen) {
      // document.body.style.overflowX = "hidden"; 
    } else {
      // document.body.style.overflowX = "hidden";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscKey);
      document.body.style.overflow = "";
    };
  }, [isSheetOpen]);

  return (
    <>
      {/* Hamburger Button */}
      <div className="fixed top-[40px] right-10 block z-10">
        <button
          aria-label="Toggle navigation menu"
          onClick={() => setIsSheetOpen(true)}
          className="p-2  rounded-full transition-colors"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sheet Component */}
        <div
          ref={sheetRef}
          className={`fixed top-0 right-0 w-[300px] h-screen shadow-lg z-30 transform transition-transform duration-300 ease-in-out ${
            isSheetOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            right: isSheetOpen ? "0" : "-300px",
            fontFamily: "monospace",
            background: "var(--background)",     // <-- use CSS var
            color: "var(--foreground)",         // <-- text color follow theme
          }}
        >
        <div className="p-4 h-full flex flex-col">
          {/* Close button */}
          <div className="flex justify-end">
            <button
              aria-label="Close navigation menu"
              onClick={() => setIsSheetOpen(false)}
              className="p-2  rounded-full transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <a
                  href="/"
                  className="block px-4 py-2 text-lg rounded transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/aboutme"
                  className="block px-4 py-2 text-lg rounded transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  className="block px-4 py-2 text-lg  rounded transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/baltej223#connect-with-me"
                  className="block px-4 py-2 text-lg  rounded transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="https://posts.baltej.me"
                  className="block px-4 py-2 text-lg  rounded transition-colors"
                >
                  Posts
                </a>
              </li>
            </ul>
          </nav>

          {/* Footer (optional) */}
          <div className="mt-auto mb-7 p-4 flex flex-row">
            <p className="text-sm light:text-white dark:text-gray-500 w-[95%]">© {new Date().getFullYear()} Baltej.me</p>
            <ThemeToggle/>
          </div>
        </div>
      </div>
    </>
  );
};