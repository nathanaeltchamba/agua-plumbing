"use client";

import Image from "next/image";
import { useState } from "react";
import { FaCheckCircle, FaTimes } from "react-icons/fa";

type ServiceData = {
    imageUrl: string;
    title: string;
    description: string;
    points: string[];
};

const servicesData: ServiceData[] = [
    {
        imageUrl: "/standford-service.jpg",
        title: "New Construction",
        description: "Expert Plumbing for New Builds",
        points: [
            "Comprehensive plumbing design and installation",
            "Collaboration with contractors and architects",
            "Efficient project management from start to finish",
            "Adherence to building codes and standards",
            "High-quality materials for lasting results",
        ],
    },
    {
        imageUrl: "/contract-kitchen2.jpg",
        title: "Residential/Renovations",
        description: "Transforming Homes with Quality Plumbing",
        points: [
            "Upgrading plumbing for remodels and additions",
            "Modern fixtures and eco-friendly options",
            "Minimally invasive techniques to protect your home",
            "Expert handling of complex renovation challenges",
            "Personalized solutions to fit your style and budget",
        ],
    },
    {
        imageUrl: "/small_commercial.png",
        title: "Small Commercial",
        description: "Reliable Plumbing for Small Businesses",
        points: [
            "Customized plumbing solutions for commercial needs",
            "Efficient installation with minimal disruption",
            "Preventative maintenance for business continuity",
            "Experienced with retail, office, and small facility plumbing",
            "Compliance with local regulations and codes",
        ],
    },
    {
        imageUrl: "/gaslines.jpg",
        title: "Gas",
        description: "Safe Gas Line Installation & Maintenance",
        points: [
            "Expert gas line installation and replacement",
            "Leak detection and repair services",
            "Adherence to safety standards and regulations",
            "Efficient gas line upgrades and rerouting",
            "Emergency response for gas-related issues",
        ],
    },
    {
        imageUrl: "/mechanical1.jpg",
        title: "Mechanical",
        description: "Comprehensive Mechanical System Services",
        points: [
            "HVAC system installation and repair",
            "Boiler and furnace maintenance",
            "Customized mechanical solutions for optimal performance",
            "Energy-efficient upgrades",
            "Regular inspections to ensure safety and efficiency",
        ],
    },
];

const ServicesGallery = () => {
    const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

    const openModal = (service: ServiceData) => {
        setSelectedService(service);
    };

    const closeModal = () => {
        setSelectedService(null);
    };

    return (
        <section>
            {/* Hero Section */}
            <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden">
                <Image
                    src="/contract-kitchen.jpg"
                    alt="Services Hero"
                    layout="fill"
                    objectFit="cover"
                    className="opacity-70"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                    <h3 className="text-gray-100 regular-40 sm:regular-88 tracking-wide uppercase">
                        Services
                    </h3>
                </div>
            </div>

            {/* Text Section */}
            <div className="py-12 px-16 sm:px-36">
                <h3 className="text-blue-600 regular-20 uppercase">
                    Our Services
                </h3>
                <div className="mt-3 flex justify-start">
                    <div className="w-8 sm:w-12 h-1 bg-blue-600 rounded-full"></div>
                </div>
                <h1 className="text-gray-900 regular-40 sm:regular-88 mt-4">
                    We build <br/> solutions for <br/> your business.
                </h1>
                <p className="text-gray-600 regular-18 mt-6 max-w-2xl  leading-relaxed">
                    Our journey in plumbing is your path to satisfaction. Discover how we provide innovative
                    and reliable solutions.
                </p>
            </div>

            {/* Services Section */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            onClick={() => openModal(service)}
                            className="group relative overflow-hidden rounded-xl shadow-md bg-gray-100 cursor-pointer"
                        >
                            <div className="h-64 w-full relative">
                                <Image
                                    src={service.imageUrl}
                                    alt={service.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-t-xl transition-transform duration-300 group-hover:scale-110"
                                />
                            </div>
                            <div className="p-6 bg-white">
                                <h3 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 text-sm mt-2">{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedService && (
                <div
                    className="fixed inset-0 z-50 bg-black bg-opacity-80 flex justify-center items-center"
                    onClick={closeModal}
                >
                    <div
                        className="relative max-w-4xl w-full mx-4 bg-white rounded-lg shadow-lg overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute top-4 right-4 text-gray-600 hover:text-gray-800"
                        >
                            <FaTimes />
                        </button>

                        {/* Modal Content */}
                        <div className="flex flex-col md:flex-row">
                            <div className="relative w-full md:w-1/2 h-64 sm:h-80 lg:h-96">
                                <Image
                                    src={selectedService.imageUrl}
                                    alt={selectedService.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="rounded-l-lg"
                                />
                            </div>
                            <div className="w-full md:w-1/2 p-6">
                                <h3 className="regular-32 text-gray-900 mb-4">
                                    {selectedService.title}
                                </h3>
                                <p className="text-gray-500 mb-6">{selectedService.description}</p>
                                <ul className="space-y-3 text-gray-800">
                                    {selectedService.points.map((point, idx) => (
                                        <li key={idx} className="flex items-start space-x-2">
                                            <FaCheckCircle className="text-blue-600 mt-1" />
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ServicesGallery;
