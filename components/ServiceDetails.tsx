"use client";

import { useState } from "react";
import { FaWrench, FaWater, FaFireAlt, FaBuilding, FaChevronDown, FaAccessibleIcon } from "react-icons/fa";
import { FaBarsProgress, FaBuildingCircleArrowRight, FaBuildingCircleCheck, FaBuildingColumns, FaBuildingNgo, FaBuildingUn, FaBuildingWheat, FaFireBurner } from "react-icons/fa6";

const ServicesDetails = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const servicesDetails = [
        {
            icon: <FaBuildingCircleArrowRight className="text-4xl text-green-600" />,
            category: "New Construction",
            points: [
                "Tankless water heater setup",
                "Energy-efficient options",
                "Water heater repairs and maintenance",
                "System inspection and testing",
                "Old heater removal and replacement",
            ],
        },
        {
            icon: <FaWrench className="text-4xl text-blue-600" />,
            category: "Residential Renovation",
            points: [
                "Custom shower and tub installation",
                "Complete bathroom remodeling",
                "Toilet and sink replacements",
                "Waterproofing and sealing",
                "Fixture upgrades and repairs",
            ],
        },
        {
            icon: <FaBuildingUn className="text-4xl text-yellow-600" />,
            category: "Small Commercial",
            points: [
                "Restroom installation and remodeling",
                "Drain and sewer line maintenance",
                "Commercial water heater installation",
                "Backflow prevention services",
                "Emergency plumbing repairs",
            ],
        },
        {
            icon: <FaFireBurner className="text-4xl text-gray-600" />,
            category: "Gas",
            points: [
                "Restroom installation and remodeling",
                "Drain and sewer line maintenance",
                "Commercial water heater installation",
                "Backflow prevention services",
                "Emergency plumbing repairs",
            ],
        },
        {
            icon: <FaFireAlt className="text-4xl text-red-600" />,
            category: "Mechanical",
            points: [
                "Gas line installation and repair",
                "Leak detection and repairs",
                "Water pressure adjustments",
                "Pipe replacements and upgrades",
                "Emergency gas shutoff services",
            ],
        },
    ];

    const toggleDropdown = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-12">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-10">
                Our Specialized Services
            </h2>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {servicesDetails.map((service, index) => (
                    <div
                        key={index}
                        className="p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer"
                        onClick={() => toggleDropdown(index)}
                    >
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                                {service.icon}
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {service.category}
                                </h3>
                            </div>
                            <FaChevronDown
                                className={`text-gray-500 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                                }`}
                        >
                            <ul className="mt-4 space-y-2 text-gray-700">
                                {service.points.map((point, idx) => (
                                    <li key={idx} className="flex items-center space-x-2 text-gray-600">
                                        <FaChevronDown className="text-sm text-gray-400" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesDetails;
