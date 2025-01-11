"use client";

import { useState } from "react";
import Image from "next/image";
import { FaRegLightbulb, FaChartLine, FaHistory } from "react-icons/fa";

const About = () => {
  // Define a union type for tabs
  type Tab = "History" | "Mission" | "Vision";

  const [activeTab, setActiveTab] = useState<Tab>("History");

  const tabContent: Record<Tab, string> = {
    History:
      "Founded over 25 years ago, our company has been a leader in providing exceptional plumbing solutions to our community. We began with a commitment to quality and customer satisfaction, which remains at the core of everything we do.",
    Mission:
      "Our mission is to deliver reliable and innovative plumbing services tailored to meet the needs of our customers. We strive to enhance comfort and convenience while maintaining the highest standards of professionalism.",
    Vision:
      "We envision a future where every home and business enjoys uninterrupted plumbing services. Our goal is to be the most trusted name in the industry, building lasting relationships through quality and care.",
  };

  return (
    <section className="bg-white">
      {/* Hero Background */}
      <div className="relative w-full h-[300px] sm:h-[400px] overflow-hidden">
        <Image
          src="/white-mountain.jpg"
          alt="About Us Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-800 via-transparent to-blue-800 opacity-20"></div>
        <div className="absolute top-12 left-12 sm:top-16 sm:left-20 md:left-28 lg:left-36 text-left z-10 max-w-3xl">
          <p className="bold-20 uppercase text-sky-900">— About Us</p>
          <h2 className="bold-40 lg:bold-64 text-sky-800 mt-4">
            Discover Our Story
          </h2>
          <p className="regular-20 text-gray-200 mt-2">
            Our journey in plumbing, your path to satisfaction.
          </p>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="relative bg-white py-16 px-4 sm:px-8 lg:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: Image */}
          <div className="relative">
            <div className="relative w-full h-[300px] sm:h-[350px] lg:h-[400px] rounded-lg overflow-hidden shadow-lg -mt-32">
              <Image
                src="/hero-history.jpg"
                alt="About Us Image"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Right: Tabs Section */}
          <div>
            {/* Tabs */}
            <div className="flex space-x-6 border-b-2 border-gray-200 pb-4 mb-6">
              <button
                className={`flex items-center space-x-2 text-lg font-semibold ${
                  activeTab === "History"
                    ? "text-blue-600 border-b-4 border-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("History")}
              >
                <FaHistory />
                <span>History</span>
              </button>
              <button
                className={`flex items-center space-x-2 text-lg font-semibold ${
                  activeTab === "Mission"
                    ? "text-blue-600 border-b-4 border-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("Mission")}
              >
                <FaChartLine />
                <span>Mission</span>
              </button>
              <button
                className={`flex items-center space-x-2 text-lg font-semibold ${
                  activeTab === "Vision"
                    ? "text-blue-600 border-b-4 border-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setActiveTab("Vision")}
              >
                <FaRegLightbulb />
                <span>Vision</span>
              </button>
            </div>

            {/* Tab Content */}
            <div>
              <p className="text-gray-800 regular-18 leading-relaxed">{tabContent[activeTab]}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
