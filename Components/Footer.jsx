import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#003F71] text-white py-5 px-5">
      <div className="flex flex-col items-center">
        {/* Logo */}
        <Link href="/">
        <Image 
          src="/Img/Smooth_Move_Logo_White.png" 
          alt="Smooth Move Concrete Pumping" 
          width={150} 
          height={100} 
        />
        </Link>
        
        {/* Navigation Links */}
        <nav className="flex space-x-6 mt-4 text-lg italic">
          <Link href="/equipment" className="hover:underline">Equipment</Link>
          <span>|</span>
          <Link href="/history" className="hover:underline">History</Link>
          <span>|</span>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>

        {/* Social Icons */}
        <div className="flex items-center mt-4 w-full max-w-xs justify-between">
          <div className="flex-1 border-t border-white"></div>
          <Link href="https://www.instagram.com/smoothmoveconcrete/" target="_blank" className="mx-2">
            <FaInstagram className="text-2xl" />
          </Link>
          <Link href="https://www.facebook.com/SmoothMoveConcretePumping/" target="_blank" className="mx-2">
            <FaFacebookF className="text-2xl" />
          </Link>
          <div className="flex-1 border-t border-white"></div>
        </div>

        {/* Copyright */}
        <p className="mt-4 text-sm text-center">
          Copyright © {new Date().getFullYear()} Smooth Move Concrete Pumping. All rights reserved.
        </p>
        <p className="text-sm">
          Powered by  <Link href="https://www.visionaryadvance.com" target="_blank"><span className="font-bold text-[#008070]">Visionary Advance</span></Link>
        </p>
      </div>
    </footer>
  );
}
