import Image from 'next/image';
import Button from './Button';

const Banner = () => {
    return (
        <section className="banner-container flex flex-col lg:flex-row items-center justify-between gap-10 bg-gray-100 py-16 px-8 md:px-16 lg:px-24">
            {/* Left Box with Text and Button */}
            <div className="lg:w-1/2 flex flex-col items-start gap-4 text-left">
                <h3 className="text-2xl font-bold text-gray-800 md:text-3xl">
                    Ready for Reliable Plumbing Solutions?
                </h3>
                <p className="text-gray-700 text-base md:text-lg">
                    Our team of licensed plumbers is here to provide quality service and ensure your satisfaction. Get in touch with us today to find the solutions that meet your needs.
                </p>
                <Button
                    href="/contact"
                    title="Get Consultation"
                    variant="btn_gradient"
                />
            </div>

            {/* Right Image */}
            <div className="lg:w-1/2 relative h-64 lg:h-[400px] w-full overflow-hidden rounded-md">
                <Image
                    src="/phone.jpg" 
                    alt="Reliable plumbing services"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center right' }}
                    className="rounded-md"
                />
            </div>
        </section>
    );
};

export default Banner;
