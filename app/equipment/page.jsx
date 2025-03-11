'use client'
import Image from 'next/image';
import Button from '@/Components/Button';
import Link from 'next/link';
import { equipment } from '@/app/data/equipment';

export default function Equipment() {
  return (
    <div className="grid pb-10 pt-56 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-5  mx-auto place-items-center lg:flex lg:flex-wrap lg:justify-center">
  {equipment.map((equipment) => (
    <div  key={equipment.id} className="bg-white h-[400px] relative w-11/12 max-w-[384px] border border-black">
      <div className="flex justify-center pt-1 h-60">
        <Image className="h-60 border border-black shadow mx-1 " src={equipment.image} alt="Smooth Move Concrete Pumping" width={380} height={380} />
      </div>
      <div className="flex justify-center pt-5">
        <h1 className="text-black text-2xl">{equipment.name}</h1>
      </div>
        <p className="text-black text-sm justify-center mx-2 align-middle flex text-center">{equipment.features.bestFor}</p>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex justify-center mt-5">
        <Link href={`/equipment/${equipment.id}`}>
        <Button text="VIEW Truck" />
        </Link>
      </div>
    </div>
  ))}
</div>
  );
}
