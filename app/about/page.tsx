import AboutUs from '@/components/AboutUs'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
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
        <h1 className="absolute inset-0 flex items-center justify-center regular-32 sm:bold-32 lg:text-6xl font-bold text-white z-10">
          Home - About Us
        </h1>
      </section>

      {/* Main About Us Section */}
      <section className="relative flex flex-col items-center py-16 lg:py-24 lg:flex-row lg:gap-12 max-w-screen-xl mx-auto">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left px-6">
          <p className="text-gray-700 mb-8 text-lg">
            <span className=" text-blue-700 px-1 py-0.5 regular-24"><Link href="/">Agua Plumbing</Link></span> is dedicated to providing top-notch plumbing services tailored to meet your needs.
            With years of experience and a commitment to excellence, our team is here to ensure
            your satisfaction and peace of mind.
          </p>
          <ul className="space-y-6 text-gray-600">
            <li className="flex items-center">
              <Image src="/check.svg" alt="check mark" width={20} height={20} className="text-blue-500 mr-4" />
              <span>Highly trained and certified plumbers</span>
            </li>
            <li className="flex items-center">
              <Image src="/check.svg" alt="check mark" width={20} height={20} className="text-blue-500 mr-4" />
              <span>24/7 emergency services available</span>
            </li>
            <li className="flex items-center">
              <Image src="/check.svg" alt="check mark" width={20} height={20} className="text-blue-500 mr-4" />
              <span>Quality and satisfaction guaranteed</span>
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 mt-10 lg:mt-0 relative flex justify-center lg:justify-end">
          <div className="relative overflow-hidden rounded-lg shadow-lg w-80 sm:w-[400px] lg:w-[500px] h-[300px] sm:h-[350px] lg:h-[450px]">
            <Image
              src="/construction.jpg"
              alt="About our company"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            {/* Overlay Element */}
            <div className="absolute bottom-4 left-4 bg-white bg-opacity-80 text-sm text-gray-900 p-3 rounded-lg shadow-md">
              <p className="font-semibold">10+ Years of Experience</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
