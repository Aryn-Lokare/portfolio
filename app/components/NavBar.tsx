"use client";

import React, { useState } from 'react'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#projects", label: "Projects" },
    { href: "#about-me", label: "About Me" },
    { href: "#contact", label: "Reach Out" },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-20 lg:px-24 py-4 sm:py-6 flex justify-between items-center relative">
      <h1 className='font-mono font-bold text-[#222222] text-[20px] sm:text-[25px] whitespace-nowrap'>
        Aryan Lokare
      </h1>

      {/* Desktop Nav Links */}
      <nav className='hidden md:flex gap-6 lg:gap-12 font-medium font-sans text-[#222222] text-[16px] list-none'>
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className='cursor-pointer hover:opacity-60'>
            {link.label}
          </a>
        ))}
      </nav>

      {/* Hamburger Button (mobile only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] cursor-pointer z-50"
        aria-label="Toggle navigation menu"
      >
        <span className={`block w-5 h-[2px] bg-[#222222] rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
        <span className={`block w-5 h-[2px] bg-[#222222] rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-0' : ''}`} />
        <span className={`block w-5 h-[2px] bg-[#222222] rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className='font-sans font-medium text-[#222222] text-[24px] tracking-[-0.5px] hover:opacity-60 transition-opacity'
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default NavBar