import Image from 'next/image';

const About = () => {
  return (
    <section className="relative flex flex-col items-center py-16 lg:py-24 lg:flex-row lg:gap-12 max-w-screen-xl mx-auto">
      {/* Text Section */}
      <div className="lg:w-1/2 text-center lg:text-left px-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
          About Us
        </h2>
        <p className="text-gray-700 mb-8 text-lg">
          We are dedicated to providing top-notch plumbing services tailored to meet your needs.
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
  );
};

export default About;
