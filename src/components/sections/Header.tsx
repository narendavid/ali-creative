"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header>
            <nav className="w-full shadow-lg items-center backdrop-blur-lg fixed top-0 z-20">
                <div className="flex flex-wrap items-center justify-between p-2 md:px-[60px]">
                    <div className="flex justify-between gap-[80px] items-center">
                        <Link href="/">
                            <img
                                src="/logo.png"
                                alt="ali creative"
                                className="w-[68px]"
                            />
                        </Link>
                        <span className="text-2xl">ALI CREATIVE</span>
                    </div>
                    <span
                        className="material-symbols-outlined lg:hidden items-center"
                        onClick={toggleMenu}
                    >
                        menu
                    </span>
                    <div
                        className={`w-full lg:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'
                            }`}
                    >
                        <ul className="flex flex-col lg:gap-[60px] md:flex-row">
                            <li>
                                <Link
                                    href="#projects"
                                    className="block text-xl"
                                    onClick={closeMenu}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className="block text-xl"
                                    onClick={closeMenu}
                                >
                                    About me
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#footer"
                                    className="block text-xl"
                                    onClick={closeMenu}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;