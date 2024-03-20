import React from 'react'
import Image from 'next/image'
import { partners } from '@/constants/constant'

const Partner = () => {
    return (
        <div className="section-bg">
            <div className='container py-10 text-center padding-container mx-auto text-white flex flex-col'>
                <div data-aos="fade-zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600">
                    <h2 className='text-3xl font-bold mb-3'>Trusted By</h2>
                    <p className=' text-sm text-gray-400'>Here are some of the brands we're proud to work with.</p>
                </div>
                <ul className='flex gap-3 items-center justify-between py-8'>
                    {partners.map((partner)=>(
                        <li key={partner.key}
                        data-aos="zoom-out" data-aos-offset="200" data-aos-duration={partner.time}
                        >
                            <Image src={partner.src} alt="pic-1" width={300} height={200}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Partner
