"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { equipment } from "@/app/data/equipment";
import { notFound } from "next/navigation";
import Button from "@/Components/Button";

export default function EquipmentDetailPage() {
  const params = useParams();
  const { id } = params;

  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Find the equipment with the matching ID
  const equipmentItem = equipment.find((item) => item.id === id);

  // If no equipment is found with the given ID, show 404
  if (!equipmentItem) {
    notFound();
  }

  // Define the categories and their corresponding data keys
  const categories = [
    { title: "Specifications", key: "specifications" },
    { title: "Capacity", key: "capacity" },
    { title: "Performance", key: "performance" },
    { title: "Applications", key: "applications" },
    { title: "Safety Features", key: "safety" },
  ];

  return (
    <div className="max-w-5xl mx-auto p-4 pt-56">
      {/* Hero Section */}
      <div className="text-center pb-5">
        <div className="p-2 inline-block">
          <Image src={equipmentItem.image} alt={equipmentItem.name} width={800} height={400} />
        </div>
        <h2 className="text-2xl font-bold mt-4">{equipmentItem.name}</h2>
        <p className="italic mt-2">{equipmentItem.description}</p>
      </div>

      {/* Specifications Section */}
      <div className="border border-gray-200 rounded-xl">
  {categories.map((category, index) => (
    <div key={index}>
      <h2>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 text-xl text-black college-block ${
            index !== 0 ? "border-t border-gray-200" : ""
          }`}
          onClick={() => toggleAccordion(index)}
        >
          <span>{category.title}</span>
          <svg
            className={`w-3 h-3 transform ${openIndex === index ? "rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          openIndex === index ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="grid grid-cols-1 lg:grid-cols-2 mx-auto w-1/2">
          {equipmentItem[category.key] ? (
            Object.entries(equipmentItem[category.key]).map(([key, value]) => (
              <li key={key} className="p-2">
                <strong>{key}:</strong> {value}
              </li>
            ))
          ) : (
            <li>No data available.</li>
          )}
        </ul>
      </div>
    </div>
  ))}
</div>


      {/* More Trucks */}
      <div className="mt-10">
        <h3 className="text-2xl text-center college-block">MORE TRUCKS</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
          {["S 38 SX", "S 39 SX", "S 42 X"].map((truck, index) => (
            <div key={index} className="border p-2 text-center">
              <Image src={`/truck${index + 1}.jpg`} alt={truck} width={250} height={150} />
              <p className="mt-2 text-xl font-semibold">{truck}</p>
              <div className="py-3">
              <Button text="View Truck" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
