"use client";
import Image from "next/image";
import { useState } from "react";

// Define a type for service data to resolve type issues
type ServiceData = {
  imageUrl: string;
  title: string;
  description: string;
};

const servicesData: ServiceData[] = [
  {
    imageUrl: "/bathroom.jpg",
    title: "Emergency Plumbing Services",
    description: "Available 24/7 in Your Area",
  },
  {
    imageUrl: "/bathroom1.jpg",
    title: "Leak Detection Experts",
    description: "Fast, Reliable, and Accurate Service",
  },
  {
    imageUrl: "/bgimage1.jpg",
    title: "Pipe & Drain Cleaning",
    description: "High-Pressure Cleaning for Clogs",
  },
  {
    imageUrl: "/bgimage.jpg",
    title: "Water Heater Installation",
    description: "Efficient Installation & Replacement",
  },
  {
    imageUrl: "/mountain.jpg",
    title: "Bathroom Renovations",
    description: "Customizable Designs & Repairs",
  },
  {
    imageUrl: "/mountain.jpg",
    title: "Bathroom Renovations",
    description: "Customizable Designs & Repairs",
  },
];

// Modal component for image with type annotations
const ImageModal = ({
    isOpen,
    onClose,
    imageUrl,
    title,
  }: {
    isOpen: boolean;
    onClose: () => void;
    imageUrl: string;
    title: string;
  }) => {
    if (!isOpen) return null;
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
        onClick={onClose}
      >
        <div className="relative max-w-3xl w-full mx-4 p-4 bg-white rounded-lg">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-white bg-gray-800 rounded-full p-2 focus:outline-none"
          >
            ✕
          </button>
          <Image
            src={imageUrl}
            alt={title}
            width={1000}
            height={700}
            objectFit="contain"
            className="rounded-lg"
          />
        </div>
      </div>
    );
  };

const ServicesGallery = () => {
    const [selectedImage, setSelectedImage] = useState<ServiceData | null>(null);
  
    return (
      <section className="bg-gray-10 pb-8">
        {/* Hero Section */}
        <div className="relative w-full h-80 sm:h-[400px] lg:h-[500px] overflow-hidden">
          <Image
            src="/bathroom1.jpg"
            alt="Services Hero"
            layout="fill"
            objectFit="cover"
            className="opacity-70"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <h1 className="text-5xl font-bold text-white">Services</h1>
          </div>
        </div>
  
        <h2 className="text-4xl font-bold text-gray-900 text-center mt-12 mb-10">
          Our Expertise
        </h2>
  
        {/* Gallery Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(service)}
                className="relative group overflow-hidden rounded-xl shadow-lg bg-gray-100 cursor-pointer h-64"
              >
                <Image
                  src={service.imageUrl}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-110"
                />
  
                <div className="absolute inset-0 bg-black opacity-40 group-hover:opacity-50 transition-opacity duration-300"></div>
  
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-4">
                  <h3 className="text-lg font-semibold text-white opacity-90 group-hover:opacity-100">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        <ImageModal
          isOpen={!!selectedImage}
          onClose={() => setSelectedImage(null)}
          imageUrl={selectedImage?.imageUrl || ""}
          title={selectedImage?.title || ""}
        />
      </section>
    );
  };
  
  export default ServicesGallery;
