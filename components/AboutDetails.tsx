"use client";

import { useState, useEffect, useRef } from "react";
import {
    FaChevronDown,
    FaHandsHelping,
    FaRegLightbulb,
    FaPeopleCarry,
    FaShieldAlt,
    FaChartLine,
} from "react-icons/fa";

const AboutDetails = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isInView, setIsInView] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    const aboutDetails = [
        {
            icon: <FaHandsHelping className="text-4xl text-green-600" />,
            category: "Community Focus",
            points: [
                "Engaging in local community projects",
                "Supporting non-profits and causes",
                "Involvement in eco-friendly initiatives",
                "Dedicated to community growth and support",
            ],
        },
        {
            icon: <FaRegLightbulb className="text-4xl text-blue-600" />,
            category: "Innovation & Quality",
            points: [
                "Latest technology and techniques",
                "Commitment to high-quality materials",
                "Efficient and reliable solutions",
                "Continuous improvement and innovation",
            ],
        },
        {
            icon: <FaShieldAlt className="text-4xl text-red-500" />,
            category: "Safety First",
            points: [
                "Strict safety protocols",
                "Focus on durable and safe installations",
                "Industry-standard equipment",
                "Regular training for risk management",
            ],
        },
        {
            icon: <FaChartLine className="text-4xl text-purple-500" />,
            category: "Excellence in Service",
            points: [
                "Customer-centered approach",
                "Fast response and reliability",
                "Detailed planning and execution",
                "Ongoing service and support",
            ],
        },
    ];

    const toggleDropdown = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {aboutDetails.map((detail, index) => (
                    <div key={index} className={`p-6 bg-white rounded-lg shadow-xl transform transition duration-700 ease-in-out cursor-pointer hover:scale-105 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                        onClick={() => toggleDropdown(index)}
                        style={{ transitionDelay: `${index * 150}ms` }}>
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center space-x-4">
                                {detail.icon}
                                <h3 className="text-2xl font-semibold text-gray-800">
                                    {detail.category}
                                </h3>
                            </div>
                            <FaChevronDown
                                className={`text-gray-500 transition-transform duration-200 ${activeIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-700 ease-in-out ${activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                            <ul className="mt-4 space-y-2 text-gray-700">
                                {detail.points.map((point, idx) => (
                                    <li
                                        key={idx}
                                        className="flex items-center space-x-2 text-gray-600">
                                        <span className="text-blue-500 font-semibold">•</span>
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

export default AboutDetails;
