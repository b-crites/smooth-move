import { equipment } from "@/app/data/equipment";
import Image from "next/image";
import Link from "next/link";
import Button from "@/Components/Button";


 // Exclude current truck

const MoreTrucks = ({ currentId }) => (
    <div className="mt-10">
      <h3 className="text-3xl text-center pb-5 college-block">MORE TRUCKS</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  mx-auto place-items-center lg:flex lg:flex-wrap lg:justify-center">
  {equipment.slice(0,4).filter((item) => item.id !== currentId).map((equipment) => (
    <div  key={equipment.id} className="bg-white h-[400px] relative w-11/12 max-w-[384px] border border-black">
      <div className="flex justify-center pt-1 h-60">
        <Image className="h-60 border border-black shadow mx-1 " src={equipment.image} alt="Smooth Move Concrete Pumping" width={380} height={380} />
      </div>
      <div className="flex justify-center pt-5">
        <h1 className="text-black text-2xl">{equipment.name}</h1>
      </div>
        <p className="text-black text-sm justify-center align-middle flex text-center">{equipment.features.bestFor}</p>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center mt-5">
        <Link href={`/equipment/${equipment.id}`}>
        <Button  text="VIEW Truck" color="bg-black" textColor="text-white" borderColor="border-white" hoverColor="hover:bg-white" hoverTextColor="hover:text-black" hoverBorderColor="hover:border-black" />
        </Link>
      </div>
    </div>
  ))}
</div>
    </div>
  );

  
  export default MoreTrucks;