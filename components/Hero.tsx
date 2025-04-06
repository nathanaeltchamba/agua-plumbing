import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative w-full h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/mountain.jpg')" }}>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center px-6 sm:px-12">
        <div className="w-full md:w-2/3 lg:w-1/2">
          {/* Small Header */}
          <p className="regular-12 uppercase tracking-wide text-blue-200  mb-4">
            Trusted Plumbing Solutions
          </p>
          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            Your Partner In <br /> Plumbing Excellence
          </h1>
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-200 mb-8">
            We deliver reliable, efficient, and high-quality plumbing services tailored to your needs.
          </p>
          {/* Call-to-Action Button */}
          <Link href="/contact">
            <span className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium text-lg px-6 py-3 rounded-md shadow-lg transition-all">
              Get Started
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
