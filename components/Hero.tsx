import Image from 'next/image';
import Button from './Button';

const Hero = () => {
    return (
        <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 pt-48 xl:flex-row">
            <div className="hero-map" />

            <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
                <h1 className="text-sky-700 bold-52 lg:bold-64 lg:mt-12">Trusted Plumbing <br /> Solutions</h1>
                <p className="bold-24 mt-6 text-gray-10 xl:max-w-[520px] ">
                    Your trusted partner in home plumbing solutions.
                </p>

                <div className="flex flex-col w-full gap-3 sm:flex-row mt-6">
                    <Button
                        href="/about"
                        title="Learn More About Us"
                        variant="btn_gradient"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
