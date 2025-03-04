"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50">
      <div className="college-block">
        {/* Top Blue Bar */}
        <div className="flex justify-between bg-[#003f71] p-2 items-center lg:pr-5">
          <button className="bg-white college-block hover:bg-[#EC3C33] hover:text-white border hover:border-white transition ease-in duration-150 text-xl rounded-xl mx-auto lg:mx-0 lg:ml-auto py-1 px-4 active:scale-95 text-black">
            CALL NOW
          </button>
        </div>

        {/* Header Content */}
        <div className="flex justify-between bg-white items-center px-8 lg:px-16 relative">
          {/* Logo */}
          <Image
            src="/Img/Smooth_Move_Logo.png"
            alt="Smooth Move Concrete Pumping"
            width={150}
            height={150}
          />

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex justify-between items-center space-x-6">
            <li className="relative group">
              <a className="focus:outline-none text-xl">EQUIPMENT</a>
              <div className="absolute left-1/2 -translate-x-1/2 z-50 w-48 bg-white border border-black text-black rounded-md shadow-lg overflow-hidden transition-all duration-300 max-h-0 opacity-0 transform scale-y-75 group-hover:max-h-96 group-hover:opacity-100 group-hover:scale-y-100">
                <Link href="/bands">
                  <button className="block px-4 py-2 text-sm hover:text-white hover:bg-gray-700 w-full text-left">1</button>
                </Link>
                <Link href="/events">
                  <button className="block px-4 py-2 text-sm hover:text-white hover:bg-gray-700 w-full text-left">2</button>
                </Link>
                <Link href="/#food-trucks">
                  <button className="block px-4 py-2 text-sm hover:text-white hover:bg-gray-700 w-full text-left">3</button>
                </Link>
              </div>
            </li>
            <Link href="#"><li className="text-black text-xl">HISTORY</li></Link>
            <Link href="#"><li className="text-black text-xl">CONTACT</li></Link>
          </ul>

          {/* Hamburger Menu Button */}
          <button
            className="lg:hidden focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <XIcon className="w-8 h-8" /> : <MenuIcon className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center transform transition-transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-white"
          onClick={() => setMenuOpen(false)}
        >
          <XIcon className="w-8 h-8" />
        </button>
        <ul className="space-y-6 text-center">
          <li className="text-white text-3xl">
            <Link href="#" onClick={() => setMenuOpen(false)}>EQUIPMENT</Link>
          </li>
          <li className="text-white text-3xl">
            <Link href="#" onClick={() => setMenuOpen(false)}>HISTORY</Link>
          </li>
          <li className="text-white text-3xl">
            <Link href="#" onClick={() => setMenuOpen(false)}>CONTACT</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
