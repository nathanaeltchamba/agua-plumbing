import React from 'react';
import Image from "next/image";
import ContactComponent from '@/components/ContactComponent';

const ContactPage = () => {
  return (
    <div className="bg-gray-10 pb-5 shadow-2xl">
      <ContactComponent />
    </div>
  );
};

export default ContactPage;
