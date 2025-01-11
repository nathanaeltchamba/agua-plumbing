import Image from "next/image";
import Button from './Button';

const Banner = () => {
    return (
        <section className="relative flex items-center justify-center text-center py-16 px-8 md:px-16 lg:px-24 h-[500px] sm:h-[600px] lg:h-[700px] overflow-hidden">
            <div className="absolute inset-0 -z-10">
                <Image
                    src="/hero-background1.jpg"
                    alt="Plumbing solutions background"
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="opacity-80"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
            </div>

            <div className="max-w-3xl flex flex-col items-center gap-4 z-10 text-white text-center">
                <h3 className="text-2xl md:text-4xl">
                    Ready for Reliable Plumbing Solutions?
                </h3>
                <p className="text-base md:text-lg py-2">
                    Our team of licensed plumbers is here to provide quality service and ensure your satisfaction. Get in touch with us today to find the solutions that meet your needs.
                </p>
                <Button
                    href="/contact"
                    title="Get Consultation"
                    variant="btn_gradient"
                />
            </div>
        </section>
    );
};

export default Banner;
