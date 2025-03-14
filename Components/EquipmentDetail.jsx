"use client";

import { useState } from "react";
import Image from "next/image";
import MoreTrucks from "@/Components/MoreTrucks";

export default function EquipmentDetail({ equipmentItem }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = [
    { title: "Specifications", key: "specifications" },
    { title: "Capacity", key: "capacity" },
    { title: "Performance", key: "performance" },
    { title: "Applications", key: "applications" },
    { title: "Safety Features", key: "safety" },
    { title: "Features", key: "features" },
  ];

  return (
    <div className="mx-auto p-4 pt-56">
      <div className="max-w-5xl mx-auto">
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
                  className={`flex items-center college-block justify-between w-full p-5 text-xl text-black ${
                    index > 0 ? "border-t border-gray-200" : ""
                  }`}
                  onClick={() => toggleAccordion(index)}
                >
                  <span>{category.title}</span>
                  <svg
                    className={`w-3 h-3 transition-transform duration-300 ${
                      openIndex === index ? "rotate-90" : ""
                    }`}
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
                className={`transition-all duration-500 overflow-hidden ${
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
      </div>

      {/* More Trucks */}
      <MoreTrucks currentId={equipmentItem.id} />
    </div>
  );
}
