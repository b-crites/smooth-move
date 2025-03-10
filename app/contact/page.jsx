import Button from "@/Components/Button";
import Image from "next/image";

export default function Contact() {
    return (
        <>
            <div className="relative">
                {/* Background Image with Dark Overlay */}
                <div className="h-screen relative">
                    <Image 
                        src="/img/Contact_BG.JPG" 
                        width={1700} 
                        height={1000} 
                        alt="Smooth Move Concrete Pumping" 
                        className="w-full h-full object-cover object-bottom"
                    />
                    <div className="absolute inset-0 bg-black opacity-50"></div>
                </div>

                {/* Content Wrapper */}
                <div className="absolute pt-58 text-left top-0 left-0 space-y-5 text-white w-full px-6">
                    {/* <h1 className="college-block text-3xl">Contact Us</h1> */}
                    <h1 className="roboto font-bold text text-5xl">We're Here to Help</h1>
                    <p className="mt-4 text-xl roboto lg:w-1/2 w-11/12">
                        Reliable and efficient concrete pumping services—get the job done faster with our expert team in Lane County. Contact us today!
                    </p>
                    
                        <p className=" text-3xl college-block">Location:</p>
                    <ul className="flex flex-col space-x-4 text-2xl lg:text-3xl">
                        <li className="font- roboto">525 S. Mill Street, Creswell, OR 97426</li>
                        
                        
                        </ul>
                        <div className="w-full mx-auto lg:place-items-start place-items-center">
                        <Button text="CALL NOW" />
                        </div>
                </div>
            </div>
        </>
    );
}
