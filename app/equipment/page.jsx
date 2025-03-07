'use client'
import Image from 'next/image';
import Button from '@/Components/Button';
import Link from 'next/link';
import { equipment } from '@/app/data/equipment';

export default function Equipment() {
  return (
    <div className="pt-56 pb-12">
        <div className='pb-6'>
      <h1 className='college-block text-center text-3xl'>Equipment</h1>
      <div
          className="bg-black h-[3px] w-32 mx-auto"
        ></div>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto place-items-center">
        {equipment.map((item) => (
          <div
            key={item.id}
           
            className="bg-white h-[356px] w-[384px] border border-black"
          >
            <div className="flex justify-center pt-1">
              <Image src={item.image} alt={item.name} width={380} height={380} />
            </div>
            <div className="flex justify-center pt-5">
              <h1 className="text-black text-2xl">{item.name}</h1>
            </div>
            <div className="flex justify-center pt-5">
              <Link href={`/equipment/${item.id}`}>
                <Button text="VIEW Truck" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
