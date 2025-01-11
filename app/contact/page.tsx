import React from 'react';
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className="bg-gray-10 pb-5 shadow-2xl">
      {/* Hero Section with Overlay */}
      <section className="relative w-full h-80 sm:h-[400px] lg:h-[500px] overflow-hidden">
        <Image
          src="/blueprint_pencil.jpg" // Replace with your hero image path
          alt="Contact Us Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-80"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white">
            Contact Us
          </h1>
        </div>
      </section>

      {/* Contact Form, Information, and Map Section */}
      <section className="relative z-10 -mt-20 max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left: Contact Form */}
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">Send Us a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium">Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                placeholder="Your message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Right: Company Information */}
        <div className="p-6 bg-blue-50 rounded-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We're here to help with all your plumbing needs in the <span className='italic'>Denver Metro Area</span>. Reach out to us via phone or email during our hours of operation.
          </p>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold text-lg">Phone</h3>
              <p>(720) 810-8646</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Email</h3>
              <p>info@aguaplumbing.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Hours of Operation</h3>
              <p>Mon - Fri: 8am - 6pm</p>
            </div>
          </div>
        </div>

        {/* Full-Width Map Section */}
        <div className="col-span-1 lg:col-span-2 w-full h-96 rounded-lg overflow-hidden shadow-2xl mt-8 mb-12">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104408.38243546088!2d-105.0560142064145!3d39.73923635506644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c78d54dd939b7%3A0x4b6d6bfe53010b8f!2sDenver%2C%20CO%2C%20USA!5e0!3m2!1sen!2sus!4v1699984989853!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            style={{ border: 0 }}
            className="border-0"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
