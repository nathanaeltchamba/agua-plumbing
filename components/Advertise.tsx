import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface AdProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const Advert = ({ backgroundImage, title, subtitle, peopleJoined }: AdProps) => {
  return (
    <div
      className={`h-full w-full min-w-[320px] sm:min-w-[500px] md:min-w-[650px] lg:min-w-[800px] xl:min-w-[950px] ${backgroundImage} bg-cover bg-no-repeat rounded-3xl lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className="flex h-full flex-col items-start justify-between p-4 sm:p-6 md:p-10 lg:px-16 lg:py-8">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-gray-100 p-4">
            <Image
              src="/badges.svg" 
              alt="plumbing icon"
              width={28}
              height={28}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>

        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="customer"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Advertise = () => {
  return (
    <div className="padding-container max-container relative py-10 lg:py-20 lg:mb-10 xl:mb-20">
      <div className="relative hide-scrollbar flex h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[600px] w-full items-start gap-6 sm:gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth mx-auto">
        <Advert
          backgroundImage="bg-bg-img-1"
          title="Emergency Plumbing Services"
          subtitle="Available 24/7 in Your Area"
          peopleJoined="100+ Satisfied Customers"
        />
        <Advert
          backgroundImage="bg-bg-img-2"
          title="Leak Detection Experts"
          subtitle="Fast, Reliable, and Accurate Service"
          peopleJoined="75+ Successful Repairs"
        />
        <Advert
          backgroundImage="bg-bg-img-3"
          title="Pipe & Drain Cleaning"
          subtitle="High-Pressure Cleaning for Clogs"
          peopleJoined="120+ Cleans Done"
        />
      </div>

      {/* Aligned Container with Styling */}
      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6 p-1 z-10">
        <div className="bg-blue-70 p-6 sm:p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-18 sm:regular-24 md:regular-32 2xl:regular-64 capitalize text-white">
            <strong>Have a Plumbing Emergency?</strong> We’re Here to Help!
          </h2>
          <p className="regular-12 sm:regular-14 xl:regular-16 mt-3 sm:mt-5 text-white">
            Our experienced team is ready to address your <br className="hidden sm:inline" /> plumbing needs throughout every challenge along <br className="hidden md:inline" /> the way. <br className="hidden lg:inline" /> Contact us anytime for our expert help.
          </p>
          <Image
            src="/badges1.svg"
            alt="plumbing tools"
            width={100}  // Adjusted width for smaller screens
            height={200}  // Adjusted height for smaller screens
            className="absolute right-2 sm:right-4 md:right-0 bottom-0"
          />
        </div>
      </div>
    </div>
  );
};








export default Advertise;
