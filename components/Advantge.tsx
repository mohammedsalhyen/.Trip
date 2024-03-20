import React from 'react'
import Image from 'next/image';
import { advantages } from "@/constants/constant";
const Advantge = () => {
    return (
        <div className='text-center text-white py-20 section-bg'>
            <div className='container mx-auto'>
                <div data-aos="fade-zoom-in" data-aos-offset="400" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <h1 className="text-4xl py-3 font-bold">
                        Our Advantages
                    </h1>
                    <p className='pb-5 text-gray-300'>
                        Every trip is an opportunity, and with our advantages, your journey becomes a masterpiece
                    </p>
                </div>


                <div>
                    <ul className='flex items-center justify-center xs:flex-col md:flex-row overflow-hidden' id='adv'>
                        {advantages.map((advantage) => (
                            <li key={advantage.key} className='flex flex-col items-center justify-center py-6 px-5 transition-all ease-in-out overflow-hidden'
                                data-aos={advantage.aos} data-aos-ease={advantage.ease} data-aos-offset="300" data-aos-duration="900"

                            >
                                <Image className='hero-shadow py-2 px-2 rounded-full' src={advantage.img} width={40} height={40} alt='advantage-logo' />
                                <h3 className='py-2 text-lg'>{advantage.name}</h3>
                                <p className=' text-xs w-2/3'>{advantage.desc} <span className=' cursor-pointer block text-orange-50'> {advantage.link}</span></p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Advantge
