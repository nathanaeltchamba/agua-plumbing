import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
    return (
        <section className="relative flex flex-col justify-center items-center w-full min-h-screen text-center text-white py-20 px-6 sm:px-12">
            {/* Hero Image */}
            <div className="absolute inset-0">
                <Image
                    src="/hero-background.jpg"
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    className="object-center"
                />
                {/* Overlay for dimming the background */}
                <div className="absolute inset-0 bg-black opacity-10" aria-hidden="true"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center max-w-4xl mx-auto">
                {/* <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 leading-tight">
                    Reliable Plumbing Services
                </h1> */}

                {/* <p className="regular-14 sm:text-lg md:text-xl mb-8 max-w-3xl mx-auto py-8">
                    We provide top-quality plumbing services for both new and remodeling residential and commercial construction projects.
                </p> */}

                {/* <div className="flex flex-col sm:flex-row gap-4 mb-8">
                    <Link href="/contact">
                        <Button type="button" title="Contact Us" variant="btn_green" />
                    </Link>
                    <Link href="/about">
                        <Button type="button" title="Learn More" variant="btn_dark_green" />
                    </Link>
                </div> */}
            </div>
        </section>
    )
}

export default Hero
