import React from 'react';
import { navLinks, footerLinks } from '../constants/constant';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa"
import Button from './Button';
const Footer = () => {
  // Array of social icons
  const socialIcons = [
    { icon: <FaFacebook />, id: 1 },
    { icon: <FaTwitter />, id: 2 },
    { icon: <FaWhatsapp />, id: 3 },
    { icon: <FaLinkedin />, id: 4 },
    { icon: <FaInstagram />, id: 5 }
  ]
  return (
    <div className=' pt-10 text-white'>
      <div className='border-b-2 border-solid border-gray-400 py-5'>
        <div className='flex justify-between xs:flex-col xs:items-center xs:text-center sm:text-start sm:flex-row container padding-container mx-auto '>
          <div className='pr-5 w-1/3 '>
            <div className="logo text-3xl font-bold ">
              <span className=" text-orange-50">.</span>Trip
            </div>
            <ul className=' flex py-8 xs:justify-center sm:justify-start'>
              {socialIcons.map((socialIcon) => (
                <li className='px-2 cursor-pointer text-lg hover:text-orange-50' key={socialIcon.id}>{socialIcon.icon}</li>
              ))}
            </ul>
          </div>
          <div className='w-1/3 '>
            <h2 className='text-lg '>
              Quick Links
            </h2>
            <ul className=" text-gray-300 flex flex-col ">
              {navLinks.map((navLink, index) => (
                <Link href={navLink.href} key={navLink.key} className={` xs:w-full sm:w-fit hover:font-bold hover:text-orange-50  transition-all xs:py-2 ${index === navLinks.length - 1 ? '' : 'xs:border-b border-solid'} sm:border-none border-white`}>
                  {navLink.name}
                </Link>
              ))}
            </ul>
          </div>
          <div className='flex  w-1/3 flex-col'>
            <p className=' text-gray-400 text-sm pt-8'>
              Sign up and get 3 new TikTok trends and ways to
              adapt them for your brand every Tuesday!
            </p>
            <Link href="/" className=' w-fit text-xs my-5 py-2 pr-3 border-b-2 border-solid border-gray-400'>
              Sign up for TikTok Trends
            </Link>
            <div className='w-fit'>
              <Button label={"Sign up"} />
            </div>
          </div>
        </div>
      </div>
      <div>
          <ul className=" text-gray-300 flex justify-center items-center py-5">
            {footerLinks.map((footerLink) => (
              <Link href={footerLink.href} key={footerLink.key} className={`px-4`}>
                {footerLink.name}
              </Link>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default Footer
