"use client"

import React, { useEffect, useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { navLinks } from '../constants/constant';
import Link from 'next/link';
import Button from './Button';
import "@/public/aos.css"
import AOS from 'aos';

const Navbar = () => {
    const [menuBar, setMenuBar] = useState(false);
    const [toggleMenuBar, setToggleMenuBar] = useState(false);
    const lgNavLink = ' xs:hidden sm:flex justify-between items-center text-white';
    const smNavLink = ' sm:hidden xs:flex flex-col items-center hero-shadow absolute top-16 left-0 w-full text-white bg-orange-50 rounded-lg';
    
    const handleOPen=()=>{
        setMenuBar(true);
        setToggleMenuBar(true);
    }
    const handleClose=()=>{
        setMenuBar(false);
        setToggleMenuBar(false);
    }

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <nav className=" sm:container xs:padding-container mx-auto flex items-center relative z-30 justify-between py-4"
            data-aos="slide-down" data-aos-easing="ease-in-out"
        >
            <div className="logo text-3xl font-bold text-white">
                <span className=" text-orange-50">.</span>Trip
            </div>
            <div className="links">
                <ul className={menuBar ? smNavLink : lgNavLink }>
                    {navLinks.map((navLink,index) => (
                        <Link href={navLink.href} key={navLink.key} className={`px-3 xs:w-full sm:w-fit hover:font-bold hover:text-orange-50  transition-all xs:py-2 ${index === navLinks.length - 1 ? '' : 'xs:border-b border-solid'} sm:border-none border-white`}>    
                            {navLink.name}
                        </Link>
                    ))}
                </ul>
            </div>
            <div className="getStart-btn sm:flex hidden">
                <Button label={"Get Start"}/>
            </div>
            <div className="navMenu transition-all   sm:hidden flex items-center justify-center bg-orange-50 text-2xl text-white py-2 px-2 rounded-lg cursor-pointer">
                {toggleMenuBar ? 
                    
                    <button
                    type='button'
                    className=" transition-all "
                    onClick={()=>handleClose()}
                    >
                        <HiX /> 
                    </button>
                    : 
                    <button
                    type='button'
                    className=" transition-all "
                    onClick={()=>handleOPen()}
                    >
                        <HiMenu />
                    </button>
                    
                }
            </div>
        </nav>
    );
};

export default Navbar;
