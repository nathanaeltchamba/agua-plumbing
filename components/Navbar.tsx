"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { NAV_LINKS } from '../constants';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollingUp, setScrollingUp] = useState(true);
    const [lastScrollTop, setLastScrollTop] = useState(0);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleScroll = () => {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setScrollingUp(currentScrollTop < lastScrollTop || currentScrollTop === 0);
        setLastScrollTop(currentScrollTop);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <>
            {/* Main Navbar for Large Screens */}
            <nav className={`fixed top-0 left-0 w-full z-30 py-5 transition-transform duration-300 ease-in-out ${scrollingUp ? 'translate-y-0' : '-translate-y-full'}`}>
                <div className="hidden lg:flex justify-between items-center max-w-screen-xl mx-auto px-6">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={124} height={29} />
                    </Link>
                    <ul className="hidden h-full gap-12 lg:flex">
                        {NAV_LINKS.map((link) => (
                            <li key={link.key}>
                                <Link
                                    href={link.href}
                                    className="text-gray-900 text-lg hover:text-blue-400 hover:font-bold">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>

            {/* Mobile Navbar Header with Logo and Hamburger */}
            <div className="lg:hidden flex justify-between items-center px-6 py-4">
                <Link href="/">
                    <Image src="/logo.png" alt="logo" width={124} height={29} />
                </Link>
                <button onClick={toggleMenu} className="flex flex-col gap-1.5 w-8 h-8 justify-center items-center z-40">
                    <span className={`h-0.5 w-full bg-gray-900 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                    <span className={`h-0.5 w-full bg-gray-900 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`h-0.5 w-full bg-gray-900 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                </button>
            </div>

            {/* Sidebar Menu for Small Screens */}
            <div
                className={`fixed top-0 left-0 h-full w-2/3 bg-gray-800 backdrop-blur-md z-30 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="flex flex-col items-center py-6">
                    <Link href="/">
                        <Image src="/logo.png" alt="logo" width={174} height={29} />
                    </Link>
                </div>
                <ul className="flex flex-col items-center gap-8 pt-20">
                    {NAV_LINKS.map((link) => (
                        <li key={link.key}>
                            <Link
                                href={link.href}
                                className="text-gray-100 text-2xl py-10 hover:text-blue-400 hover:font-bold"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Navbar;
