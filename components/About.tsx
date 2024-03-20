
import React, { useEffect } from 'react'
import Image from 'next/image'
import Button from './Button'

const About = () => {
    return (
        <div  className='container py-10 padding-container mx-auto flex xs:flex-col xs:text-center sm:text-start sm:flex-row items-center justify-between text-white '>
            <div className='py-5' data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600">
                <h1 className='text-4xl py-6 font-bold'>
                    Who We Ary?
                </h1>
                <p className=' lg:pr-5 py-5 text-gray-300'>
                    We specialize in crafting personalized travel experiences tailored to your desires. With our passion
                    for exploration and attention to detail, we're here to turn your travel dreams into unforgettable adventures.
                </p>
                <Button label={"View Case Studio"} />
            </div>
            <div className='w-full'  data-aos="flip-down" data-aos-offset="300" data-aos-easing="ease-in-out" data-aos-delay='300'>
                <Image src="/mockup-front.png" alt='mockup-pic' width={800} height={800} />
            </div>

        </div>
    )
}

export default About
