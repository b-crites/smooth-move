import { notFound } from "next/navigation";
import { equipment } from "@/app/data/equipment";
import EquipmentDetail from "@/Components/EquipmentDetail";

export async function generateStaticParams() {
  return equipment.map((item) => ({ id: item.id.toString() }));
}

export async function generateMetadata({ params }) {
  // Await params if needed
  const resolvedParams = await params;
  const id = resolvedParams?.id;
  
  const equipmentItem = equipment.find((item) => item.id.toString() === id);
  
  if (!equipmentItem) {
    return {
      title: 'Not Found',
      description: 'The requested equipment could not be found'
    };
  }
  
  return {
    title: `${equipmentItem.name} | Smooth Move Concrete Pumping`,
    description: equipmentItem.description,
    openGraph: {
      title: `${equipmentItem.name} | Smooth Move Concrete Pumping`,
      description: equipmentItem.description,
      images: [{ url: equipmentItem.image }]
    },
    metadataBase: new URL('https://smoothmovecp.com'), // Replace with your actual domain
  };
}

export default async function EquipmentDetailPage({ params }) {
  // Await params if needed
  const resolvedParams = await params;
  
  if (!resolvedParams || !resolvedParams.id) {
    return notFound();
  }
  
  const id = resolvedParams.id;
  const equipmentItem = equipment.find((item) => item.id.toString() === id);
  
  if (!equipmentItem) {
    return notFound();
  }
  
  return <EquipmentDetail equipmentItem={equipmentItem} />;
}