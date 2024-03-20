"use client"
import React from 'react'

const Hero = () => {
    return (
        <div className='pb-10'>
        <div className=" container  hero-shadow rounded-bl-3xl rounded-br-3xl py-10 mx-auto padding-container text-white "
            data-aos="zoom-in" data-aos-easing="ease-in-out"   data-aos-delay="500"
        >
            <h1 className="sm:text-5xl xs:text-3xl py-9 font-bold xs:w-full md:w-2/3 ">
                Exploring the world, one destination at a time. <br />
                One Company Leads you
            </h1>
            <p className="py-5 ">
                At our core, we're not just travelers.
                Our proven strategies unlock extraordinary experiences,
                tailored to
                <span className=" text-orange-50 px-1">
                    your wanderlust.
                </span>
            </p>
            <button
                type="button"
                className=" bg-orange-50 py-2 px-3 rounded-lg  my-6 "
            >
                Get in Touch
            </button>
            <p className='text-xs'>Join the growing community of explorers who have embarked on unforgettable adventures</p>
        </div>
        </div>
    )
}

export default Hero
