"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowDown } from 'react-icons/io';
import { FiMenu, FiX } from 'react-icons/fi';

const Nav = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="mx-auto px-4 py-4 bg-[#1E1E1E] w-full text-white">
      <nav className="flex items-center justify-between w-full">
        <Link className="text-xl font-bold" href="#">
          {/* Add your logo or brand name here */}
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          <Link className="text-sm font-medium hover:text-primary" href="#">
            Home
          </Link>
          <Link className="flex items-center gap-1 text-sm font-medium hover:text-primary" href="#">
            Services <IoIosArrowDown />
          </Link>
          <Link className="flex items-center gap-1 text-sm font-medium hover:text-primary" href="#">
            Industries <IoIosArrowDown />
          </Link>
          <Link className="text-sm font-medium hover:text-primary" href="#">
            Career
          </Link>
        </div>

        {/* Contact Button */}
        <button className="hidden md:block border border-sky-400 text-primary px-4 py-2 rounded hover:bg-primary hover:text-primary-foreground transition">
          Contact Us
        </button>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden text-2xl"
          onClick={toggleMobileMenu}
          aria-label="Toggle Mobile Menu"
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#1E1E1E] z-50 flex flex-col items-center pt-10 md:hidden">
          {/* Close Button at the top-right corner */}
          <button
            className="absolute top-5 right-5 text-2xl"
            onClick={toggleMobileMenu}
            aria-label="Close Mobile Menu"
          >
            <FiX />
          </button>

          <Link
            className="text-sm font-medium block hover:text-primary py-2"
            href="#"
            onClick={toggleMobileMenu}
          >
            Home
          </Link>
          <Link
            className="text-sm font-medium block hover:text-primary py-2"
            href="#"
            onClick={toggleMobileMenu}
          >
            Services
          </Link>
          <Link
            className="text-sm font-medium block hover:text-primary py-2"
            href="#"
            onClick={toggleMobileMenu}
          >
            Industries
          </Link>
          <Link
            className="text-sm font-medium block hover:text-primary py-2"
            href="#"
            onClick={toggleMobileMenu}
          >
            Career
          </Link>
          <button
            className="w-3/4 border border-sky-400 text-primary px-4 py-2 rounded hover:bg-primary hover:text-primary-foreground hover:ring-2 ring-sky-400 transition mt-4"
            onClick={toggleMobileMenu}
          >
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
};

export default Nav;
