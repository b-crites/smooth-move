"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, delay } from "framer-motion";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { IoIosArrowForward } from "react-icons/io"; // Import arrow icon
import { equipment } from "@/app/data/equipment";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },// Stagger each item
      
    }
  };
  
  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 }
  };

  const [equipmentOpen, setEquipmentOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-50 shadow-xl">
      <div className="college-block">
        {/* Top Blue Bar */}
        <div className="flex justify-between bg-[#003f71] p-2 items-center lg:pr-5">
          <Link className="lg:pr-5 flex w-full" href="tel:541-345-2562">
          <button className="bg-white college-block hover:bg-[#EC3C33] hover:text-white border hover:border-white transition ease-in duration-150 text-xl rounded-xl mx-auto lg:mx-0 lg:ml-auto py-1 px-4 active:scale-95 text-black">
          541-345-2562
          </button>
          </Link>
        </div>

        {/* Header Content */}
        <div className="flex justify-between bg-white items-center px-8 lg:px-16 relative">
          {/* Logo */}
          <Link href={"/"}>
          <Image
            src="/Img/Smooth_Move_Logo.png"
            alt="Smooth Move Concrete Pumping"
            width={150}
            height={150}
          />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex justify-between items-center space-x-6">
            <li className="relative group">
              <Link href="/equipment">
              <button className="focus:outline-none text-xl">EQUIPMENT</button>
              </Link>
              <div className="absolute left-1/2 -translate-x-1/2 z-50 w-48 bg-white border border-black text-black rounded-md shadow-lg overflow-hidden transition-all duration-300 max-h-0 opacity-0 transform scale-y-75 group-hover:max-h-96 group-hover:opacity-100 group-hover:scale-y-100">
  {equipment.map((item) => (
    <Link key={item.id} href={`/equipment/${item.id}`}>
      <button className="flex items-center px-4 py-2 text-lg hover:text-white hover:bg-gray-700 w-full text-left">
        <Image src={item.image} alt={item.name} width={80} height={80} className="mr-2" />
        <span className="flex-1 text-right">{item.name}</span>
      </button>
    </Link>
  ))}
</div>

            </li>
            <Link href="/history"><li className="text-black text-xl">HISTORY</li></Link>
            <Link href="/gallery"><li className="text-black text-xl">GALLERY</li></Link>
            <Link href="/contact"><li className="text-black text-xl">CONTACT</li></Link>
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
        
    <AnimatePresence>
      {menuOpen && (
        <motion.ul 
          initial="hidden" 
          animate="visible" 
          exit="exit"
          variants={menuVariants} 
          className="space-y-4 text-center"
        >
          {/* Equipment Dropdown */}
          <motion.li variants={itemVariants} className="text-white text-3xl flex flex-col items-center">
            <button 
              onClick={() => setEquipmentOpen(!equipmentOpen)} 
              className="flex items-center gap-2 focus:outline-none"
            >
              EQUIPMENT
              <motion.span 
                animate={{ rotate: equipmentOpen ? 90 : 0 }} 
                transition={{ duration: 0.2 }}
              >
                <IoIosArrowForward size={24} />
              </motion.span>
            </button>
            <AnimatePresence>
              {equipmentOpen && (
                <motion.ul 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: "auto" }} 
                  exit={{ opacity: 0, height: 0 }} 
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="mt-2 space-y-2 overflow-hidden"
                > 
                {equipment.map((item) => (
                  <li key={item.id}>
                    <Link href={`/equipment/${item.id}`} onClick={() => setMenuOpen(false)}>{item.name}</Link>
                  </li>
                ))}
                 
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.li>

          {/* Other Menu Items */}
          <motion.li variants={itemVariants} className="text-white text-3xl">
            <Link href="/history" onClick={() => setMenuOpen(false)}>HISTORY</Link>
          </motion.li>
          <motion.li variants={itemVariants} className="text-white text-3xl">
            <Link href="/gallery" onClick={() => setMenuOpen(false)}>GALLERY</Link>
          </motion.li>
          <motion.li variants={itemVariants} className="text-white text-3xl">
            <Link href="/contact" onClick={() => setMenuOpen(false)}>CONTACT</Link>
          </motion.li>
        </motion.ul>
      )}
    </AnimatePresence>
      </div>
    </div>
  );
}
