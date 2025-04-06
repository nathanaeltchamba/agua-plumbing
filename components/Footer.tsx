import { FOOTER_CONTACT_INFO, FOOTER_LINKS, NAV_LINKS } from '@/constants';
import Image from "next/image";
import Link from "next/link"
import React from 'react';

const Footer = () => {
  return (
    <footer className="flexCenter my-24">
      <div className="padding-container max-container flex w-full flex-col gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/badges.svg" alt="logo" width={174} height={29} />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">

            {FOOTER_LINKS.map((column) => (
              <FooterColumn key={column.title} title={column.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {column.links.map((link, index) => (
                    <Link
                      href={link.href}
                      key={index}
                      className="hover:text-blue-70"
                    >
                      {link.label}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            {/* Contact Info Section */}
            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <Image
                      src={link.icon}
                      alt="icon"
                      width={20}
                      height={20}
                    />
                    <p className="regular-14 whitespace-nowrap text-blue-70">
                      {link.value}
                    </p>
                  </div>
                ))}
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30">&copy; 2024 Agua Plumbing | All rights reserved</p>
      </div>
    </footer>
  );
};

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
