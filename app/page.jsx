'use client'

import "@/app/globals.css";
import Image from "next/image";
import Button from "@/Components/Button";
import VideoBackground from "@/Components/VideoBg";
import { motion } from "framer-motion";
import Link from "next/link";
import { equipment } from "./data/equipment";

export default function Home() {

  const trucks = [
    { name: "S 36 X", image: "/Img/s36x_2.png" },
    { name: "S 36 X", image: "/Img/s36x_2.png" },
    { name: "S 36 X", image: "/Img/s36x_2.png" },
  ];
  //   const equipmentItem = equipment.find((item) => item.id === id);

  return (
    <>
     <VideoBackground />
      
      {/* Content Overlay */}
      <div className="absolute college-block top-0 left-0 w-full h-full z-20" style={{ marginTop: "80px", height: "calc(100vh - 80px)" }}>
        {/* Text centered in the middle */}
        <div className="flex justify-center items-center h-full">
          <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{ duration: 0.6 }} viewport={{ once: true }}  className="text-center space-y-8 lg:space-y-16 flex flex-col items-center">
            <h1 className="text-6xl lg:text-8xl text-white">Poured to perfection</h1>
            <h1 className="text-6xl  lg:text-8xl text-white">Built to last</h1>
        </motion.div>
          </div>
        
        {/* Button positioned at the bottom */}
        <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} transition={{ duration: 0.8 }} viewport={{ once: true }} className="absolute bottom-16 left-0 w-full flex justify-center">
          <Button text="View Our Work" />
        </motion.div>
      </div>
      {/* FEATURED TRUCKS _________________________________________________________________________________________________________________________________ */}
      <div className="bg-white w-full pb-10 ">
        <div className="py-10">
        <motion.h1 initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.8}} className="text-black text-4xl college-block text-center">FEATURED TRUCKS</motion.h1>
        <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.8}} className="bg-black h-[3px] w-32 mx-auto mt-2"></motion.div> 
        </div>
        {/*CARDS  */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mx-auto place-items-center lg:flex lg:flex-wrap lg:justify-center">
  {equipment.map((equipment) => (
    <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.8}} key={equipment.id} className="bg-white h-[400px] w-[384px] border border-black">
      <div className="flex justify-center pt-1">
        <Image className="h-60" src={equipment.image} alt="Smooth Move Concrete Pumping" width={380} height={380} />
      </div>
      <div className="flex justify-center pt-5">
        <h1 className="text-black text-2xl">{equipment.name}</h1>
      </div>
        <p className="text-black text-sm text-center">{equipment.features.bestFor}</p>
      <div className="flex justify-center py-5">
        <Link href={`/equipment/${equipment.id}`}>
        <Button text="VIEW Truck" />
        </Link>
      </div>
    </motion.div>
  ))}
</div>
      <div className="w-full flex justify-center pt-10">
      <Button text="VIEW ALL TRUCKS" />
      </div>
      </div>

      {/* ABOUT PAGE */}
      <div className="relative py-10  flex flex-col justify-center items-center">
  {/* Background Image */}
  <div className="absolute inset-0">
    <Image 
      src="/Img/About_Bg.png" 
      alt="Smooth Move Concrete Pumping" 
      layout="fill" 
      objectFit="cover" 
      className="-z-10"
    />
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black opacity-60"></div>
  </div>

  {/* Content on top */}
  <div className="relative z-20 text-center">
    <motion.h1 initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.8}} className="text-white text-4xl college-block">About the Crew</motion.h1>
    <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.8}} className="bg-white h-[3px] w-32 mx-auto mt-2"></motion.div> 
  </div>

  {/* Grid Section */}
  <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.8}}  className="relative z-20 lg:h-[500px] grid grid-cols-1 lg:grid-cols-2 mt-10 overflow-visible ">
    <div className="grid space-y-2 lg:space-x-3 lg:mx-5 pb-5 mx-auto lg:ms-5 grid-cols-1 lg:grid-cols-2 col-span-1 lg:order-1 order-2">
      <div className="col-span-1 relative z-30">
        <Image 
          src="/Img/Crew_Img_1.png" 
          alt="Smooth Move Concrete Pumping" 
          width={420} 
          height={420} 
          className="relative z-30 lg:translate-y-[-10%]"
        />
      </div>
      <div className="hidden lg:block col-span-1 relative z-30 lg:min-h-[420px]">
        <Image 
          src="/Img/Crew_Img_2.png" 
          alt="Smooth Move Concrete Pumping" 
          width={420} 
          height={420} 
          className="relative z-30 lg:translate-y-[70%]"
        />
      </div>
    </div>
    <div className="col-span-1 flex flex-col justify-center order-1 lg:order-2 items-center pb-10">
      <div className="">
        <p className="text-white text-lg mt-2 mx-auto w-11/12 text-center lg:w-8/12">
        Jacob, Erik, Michael, Steve, Paul, and Ryan (left to right) bring over 78 years of combined experience in concrete pumping and mechanics. They're more than just a team—they’re family and friends. Their bond makes the hard work easier, and we truly appreciate them. Having a team that feels like family makes all the difference.
        </p>
        
      </div>
      </div>
  </motion.div>
  <div className="w-full z-10 flex justify-center">
      <Button text="VIEW Our History" />
      </div>
</div>

{/* GIVE US A CALL*/}
<div className="bg-white w-full py-10">
  <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.8}} className="grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto place-items-center">
    {/* Red Box */}
    <div className="flex justify-center lg:ms-auto me-6">
      <div className="bg-[#EC3C33] rounded-2xl border-4 border-[#003F71] w-11/12 max-w-xl h-auto py-8 px-6 text-center">
        <h1 className="text-white text-4xl college-block">Give Us A Call</h1>
        <p className="text-white text-2xl lg:text-3xl mt-5">
          Let's get started talking about your project
        </p>
        <div className="mt-6">
        <Button aria-label="Call Now" text="CALL NOW" />
        </div>
      </div>
    </div>

    {/* Image */}
    <div className="flex justify-center lg:me-auto ms-6">
      <Image
        src="/Img/Smooth_Move_Logo_2.png"
        alt="Smooth Move Concrete Pumping"
        width={500}
        height={500}
        className="max-w-full h-auto"
      />
    </div>
</motion.div>
  </div>

{/* PROUD SPONSORS */}

<div className="relative py-10 flex flex-col justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image 
          src= "/Img/Sponsor_Bg.png"
          alt="Background" 
          layout="fill" 
          objectFit="cover" 
          className="-z-10"
        />
        {/* White Overlay */}
        <div className="absolute inset-0 bg-white opacity-70"></div>
      </div>

      {/* Content */}
      <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.8}} className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl px-6 lg:px-16 z-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-4xl font-bold text-center text-black">Proud Sponsors of</h1>
          <h1 className="text-4xl font-bold text-center text-black">American Hero Adventures</h1>
        </div>

        {/* Right Column */}
        <div className="flex justify-center items-center">
        <Link href="https://americanheroadventures.org/" target="_blank" rel="noopener noreferrer">
      <Image 
        className="" 
        src="/Img/AHA_Logo.png" 
        alt="American Hero Adventures Logo" 
        width={200} 
        height={200} 
      />
    </Link>
            </div>
    </motion.div>
      </div>

    </>
  );
}