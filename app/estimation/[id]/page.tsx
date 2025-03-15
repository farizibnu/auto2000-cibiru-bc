"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import carsData from "../../cars.json";
import Navbar from "@/app/components/navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MdChevronLeft } from "react-icons/md";

export default function CarDetail() {
  const { id } = useParams();
  const car = carsData.find((c) => c.id.toString() === id);

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  
  const services = [
    { name: "Poles Body", price: 500000 },
    { name: "Cat Ulang", price: 2000000 },
    { name: "Ganti Bumper", price: 1500000 }
  ];

  const toggleService = (serviceName: string) => {
    setSelectedServices((prev) =>
      prev.includes(serviceName)
        ? prev.filter((service) => service !== serviceName)
        : [...prev, serviceName]
    );
  };

  const totalPrice = selectedServices.reduce(
    (total, serviceName) => total + (services.find((s) => s.name === serviceName)?.price || 0),
    0
  );

  if (!car) {
    return <p className="text-center text-red-500">Mobil tidak ditemukan!</p>;
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-x-hidden">
      <Navbar />
      <div className="px-4 py-2 h-screen">
        <div className="flex items-center pb-4 cursor-pointer w-fit" onClick={() => window.history.back()}>
          <MdChevronLeft />
          <div className="text-xs font-semibold">Kembali</div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold uppercase">{car.name}</h1>
          <img src={car.image} alt={car.name} className="w-full my-4" />
        </div>
        <div className="flex flex-col items-center">
          <Tabs defaultValue="bodi" className="w-[400px] flex flex-col items-center">
            <TabsList>
              <TabsTrigger value="bodi">Bodi</TabsTrigger>
              <TabsTrigger value="salon">Salon</TabsTrigger>
            </TabsList>
            <TabsContent value="bodi">
              <div className="text-red-500 text-md my-2 text-center">
                <p className="font-medium">Apa yang</p>
                <p className="font-bold">Anda butuhkan?</p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                {services.map((service, index) => (
                  <div key={service.name} className="w-full">
                    <label className="flex items-center space-x-2 py-1">
                      <input
                        type="checkbox"
                        className="w-4 h-4"
                        checked={selectedServices.includes(service.name)}
                        onChange={() => toggleService(service.name)}
                      />
                      <span>{service.name} - Rp{service.price.toLocaleString()}</span>
                    </label>
                    {index < services.length - 1 && <hr className="border-gray-300" />}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-lg font-bold">
                Total: Rp{totalPrice.toLocaleString()}
              </div>
            </TabsContent>
            <TabsContent value="salon">Change your password here.</TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
