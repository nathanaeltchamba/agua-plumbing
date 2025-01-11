"use client";

import AboutUs from '@/components/AboutUs';
import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import {
  FaChevronDown,
  FaHandsHelping,
  FaRegLightbulb,
  FaShieldAlt,
  FaChartLine,
  FaClock,
} from "react-icons/fa";

const About = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const aboutDetails = [
    {
      icon: <FaHandsHelping className="text-3xl text-green-600" />,
      category: "Community Focus",
      points: [
        "Engaging in local community projects",
        "Supporting non-profits and causes",
        "Involvement in eco-friendly initiatives",
        "Dedicated to community growth and support",
      ],
    },
    {
      icon: <FaRegLightbulb className="text-3xl text-blue-600" />,
      category: "Innovation & Quality",
      points: [
        "Latest technology and techniques",
        "Commitment to high-quality materials",
        "Efficient and reliable solutions",
        "Continuous improvement and innovation",
      ],
    },
    {
      icon: <FaShieldAlt className="text-3xl text-red-500" />,
      category: "Safety First",
      points: [
        "Strict safety protocols",
        "Focus on durable and safe installations",
        "Industry-standard equipment",
        "Regular training for risk management",
      ],
    },
    {
      icon: <FaChartLine className="text-3xl text-purple-500" />,
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
    <div>
      {/* Hero Image Section */}
      <section className="relative w-full h-80 sm:h-[400px] lg:h-[500px] overflow-hidden">
        <Image
          src="/bathroom.jpg"
          alt="About Us Background"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        <h1 className="absolute inset-0 flex items-center justify-center text-4xl sm:text-5xl lg:text-6xl text-white z-10">
          About Us
        </h1>
      </section>

      <section className="relative py-16 bg-blue-200 rounded-2xl mx-4 sm:mx-8 lg:mx-16 mt-16">
        {/* Background Image */}
        <div className="absolute inset-y-0 right-0 w-full sm:w-1/2 opacity-10">
          <Image
            src="/badges1.svg"
            alt="Background Badge"
            layout="fill"
            objectFit="cover"
            className="pointer-events-none"
          />
        </div>

        <div className="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 mb-8 text-center">Our History</h2>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-shrink-0 text-blue-600 text-5xl lg:text-6xl">
              <FaRegLightbulb />
            </div>
            <div className="lg:w-3/4 text-center lg:text-left px-6">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                With over <span className="font-bold text-blue-700">25 years</span> of experience, Agua Plumbing has been a trusted name in the Denver Metro area.
                Established with a vision for quality and service excellence, we’ve continuously evolved to meet the needs of our community with innovation
                and reliability.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our journey reflects a commitment to not just plumbing solutions, but also to the relationships we build with every client. Each project is an opportunity
                to showcase our expertise and dedication to customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* <section className="bg-blue-50 py-16 mx-16 mt-16 rounded-2xl shadow-xl">
        <div className="max-w-screen-lg mx-auto px-6 text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-blue-900 mb-6">
            Our History
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Agua Plumbing has proudly served the community for over 25 years, offering reliable, high-quality services. Our journey is marked by a commitment to excellence and innovation in everything we do.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: "1998", text: "Founded in Denver with a focus on customer service.", icon: <FaClock className="text-blue-600 text-3xl" /> },
              { year: "2005", text: "Expanded services to include eco-friendly initiatives.", icon: <FaHandsHelping className="text-green-600 text-3xl" /> },
              { year: "2015", text: "Launched advanced safety protocols for all services.", icon: <FaShieldAlt className="text-red-500 text-3xl" /> },
              { year: "2023", text: "Celebrated 25 years of service excellence.", icon: <FaChartLine className="text-purple-500 text-3xl" /> },
            ].map((milestone, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 transition transform hover:scale-105">
                <div className="text-2xl font-bold text-blue-900">{milestone.year}</div>
                <div className="flex items-center justify-center mt-4">{milestone.icon}</div>
                <p className="text-gray-600 mt-4">{milestone.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}


      {/* Main About Us Section */}
      <section className="relative flex flex-col items-center py-16 lg:py-24 lg:flex-row lg:gap-12 max-w-screen-xl mx-auto">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left px-6">
          <p className="text-gray-700 mb-8 text-lg leading-relaxed">
            <span className="text-blue-700 px-1 py-0.5 font-bold text-xl"><Link href="/">Agua Plumbing</Link></span> is dedicated to providing top-notch plumbing services tailored to meet your needs.
            With over 25 years of experience and a commitment to excellence, our team is here serving the <span className="bg-blue-100 text-blue-900 px-1 py-0.5 rounded-md shadow-sm">Denver Metro area</span> to ensure
            your satisfaction and peace of mind.
          </p>
          <ul className="space-y-6 text-gray-600">
            {[
              "Highly trained and certified plumbers",
              "24/7 emergency services available",
              "Quality and satisfaction guaranteed",
            ].map((point, index) => (
              <li key={index} className="flex items-center">
                <Image src="/icon.svg" alt="check mark" width={20} height={20} className="text-blue-500 mr-4" />
                <span className="text-lg font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center lg:justify-end">
          <div className="relative overflow-hidden rounded-lg shadow-lg w-80 sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[350px] lg:h-[450px]">
            <Image
              src="/blue-pipeline.jpg"
              alt="About our company"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            {/* Overlay Element */}
            <div className="absolute top-4 left-4 bg-white bg-opacity-70 text-sm text-gray-900 p-3 rounded-lg shadow-md">
              <p className="font-semibold">25+ Years of Dedicated Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values and AboutDetails Side by Side */}
      <section className="bg-gray-10 py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-start gap-12">
          {/* Core Values on Left */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-900 mb-8 text-center lg:text-left">Core Values</h2>
            <p className="text-gray-700 mb-10 text-lg max-w-2xl leading-relaxed text-center lg:text-left">
              At Agua Plumbing, we operate on a foundation of principles that guide our actions and shape our success. Our core values are the heart of our commitment to delivering quality and excellence.
            </p>
          </div>
          {/* <div className="absolute bottom-2 left-20 transform -translate-y-10 translate-x-10 pointer-events-none">
            <Image
              src="/badges1.svg"
              alt="Background logo"
              width={125}
              height={125}
              className="hidden lg:block"
            />
          </div> */}

          {/* About Details on Right */}
          <div className="lg:w-1/2">
            <section ref={sectionRef} className="py-12">
              <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
                {aboutDetails.map((detail, index) => (
                  <div key={index} className={`p-5 bg-white rounded-lg shadow-lg transform transition duration-500 ease-in-out cursor-pointer hover:scale-105 ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    onClick={() => toggleDropdown(index)}
                    style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-3">
                        {detail.icon}
                        <h3 className="text-xl font-semibold text-gray-800">{detail.category}</h3>
                      </div>
                      <FaChevronDown
                        className={`text-gray-500 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""
                          }`}
                      />
                    </div>
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${activeIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                      <ul className="mt-2 space-y-1 text-gray-700">
                        {detail.points.map((point, idx) => (
                          <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
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
          </div>
        </div>
      </section>
    </div >
  );
};

export default About;
