"use client";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

// A simple component for the navigation links.
const NavLinks = ({ column = false, onClick }) => (
  <div className={`flex items-center text-xl pl-0 ${column ? 'flex-col space-y-10' : 'flex-row space-x-10'} md:pr-5`} style={{fontFamily:"logo"}}>
    <a href="/" onClick={onClick} className="hover:underline">Home</a>
    <a href="/aboutme" onClick={onClick} className="hover:underline">About Me</a>
    <a href="/github" onClick={onClick} className="hover:underline">Github</a>
    <a href="/blog" onClick={onClick} className="hover:underline">Blogs</a>
    <a href="https://github.com/baltej223#connect-with-me" onClick={onClick} className="hover:underline">Contact Me</a>
    <a href="https://posts.baltej.me/" onClick={onClick} className="hover:underline">Posts</a>
  </div>
);

export default function Navbar({ title = "baltej.me" }) {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    if (menuOpen && isMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen, isMobile]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div
        className="z-[100] pt-10 pb-10 px-5 flex flex-row items-center sticky top-0 left-0 justify-center relative light:bg-[rgba(255, 255, 255, 0.6)]"
        style={{ backdropFilter: "blur(10.5px)" }}
      >
        {/* Centered Title */}
        <div className="text-3xl font-bold">
          <a href="/">{title}</a>
        </div>
        
        {/* Desktop Navigation (Positioned to the right) */}
        <div className="hidden md:flex absolute right-5 items-center gap-x-10 pr-5" style={{ fontFamily: "logo" }}>
          <NavLinks />
          <ThemeToggle />
        </div>

        {/* Mobile Menu Button (Positioned to the right) */}
        <div className="md:hidden absolute right-5">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobile && menuOpen && (
        <div 
          className="fixed inset-0 z-40 pt-24 p-5 flex flex-col items-center text-xl space-y-8
            light:bg-white dark:bg-black mt-10"
          style={{ fontFamily: "logo" }}
        >
          <NavLinks column={true} onClick={closeMenu} />
          <ThemeToggle />
        </div>
      )}
    </>
  );
}