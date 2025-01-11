import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const Advertise = () => {
  return (
    <section className="relative z-30 py-16 px-6 sm:px-12 bg-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-col items-start lg:w-1/2">
          <h2 className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-4">
            Our Services
          </h2>
          <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 leading-snug">
            Building Dreams <br />
            with Precision
          </h3>
          <p className="text-lg text-gray-700 mt-4">
            Showcasing Our Passion
          </p>
        </div>

        {/* Right Section */}
        <div className="flex flex-col lg:w-1/2 mt-10 lg:mt-0">
          <p className="text-gray-500 text-lg leading-relaxed">
            Experience our latest plumbing projects firsthand—tour the site and
            witness our craftsmanship in action. Whether tackling challenges or 
            creating beautiful, functional solutions, our work speaks for itself.
          </p>

          {/* View All Services Link */}
          <Link href="/services">
            <div className="inline-flex items-center mt-6 text-blue-600 font-semibold text-lg cursor-pointer hover:bg-blue-100 px-1 py-0.5 rounded-md">
              View Our Services
              <FaArrowRight className="ml-2 w-5 h-5" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Advertise;
