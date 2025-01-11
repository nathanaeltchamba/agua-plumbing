import Image from "next/image"
import React from 'react'

const Signal = () => {
    return (
        <section className="relative py-60 bg-[url('/bathroom.jpg')] bg-cover bg-center text-white">
            <div className="relative max-w-screen-xl mx-auto w-full">
                <div className="relative w-full z-10 bg-black bg-opacity-40 py-12 px-8 rounded-lg shadow-lg">
                    <div className="mx-auto max-w-screen-lg text-center">
                        <p className="uppercase text-2xl font-semibold tracking-wide bg-gradient-to-r from-blue-600 via-blue-300 to-blue-600 bg-clip-text text-transparent mb-4">
                            Your Local Plumbing Experts
                        </p>
                        <h2 className="text-4xl lg:text-6xl font-bold mb-6">
                            Reliable Service, Every Time
                        </h2>
                        <p className="text-lg lg:text-xl text-gray-200 leading-relaxed max-w-2xl mx-auto mb-6">
                            We handle plumbing jobs with care. From repairs to maintenance, trust us for dependable solutions.
                        </p>
                        <p className="text-lg lg:text-xl text-gray-300">
                            Our team is dedicated to delivering prompt, professional service that ensures your peace of mind.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Signal
