import React from 'react';
import {testmonials} from "@/constants/constant";
import Star from './Star';
import Image from 'next/image';

const Testimonial = () => {
    return (
        <div className=' container  padding-container mx-auto py-10'>
            <div className='pb-8 text-center'
            data-aos="fade-zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600"
            >
                <h2 className='font-bold text-3xl'>Testimonials</h2>
                <p className=' text-sm'>Our clients send us bunch of smiles with our services and we love them</p>
            </div>
            <ul className=' flex xs:flex-col sm:flex-row py-5 gap-5 overflow-hidden'>
                {testmonials.map((testmonial)=>(
                    <li key={testmonial.key}
                    className=' testmonial-bg p-5 rounded-lg flex justify-between flex-col'
                    data-aos={testmonial.aos} data-aos-ease={testmonial.ease} data-aos-offset="300" data-aos-duration="900"
                    >
                        <div>
                            <Star/>
                            <p className=' text-sm pt-3 pb-8'>{testmonial.comment}</p>
                        </div>
                        <div className='flex gap-2'>
                            <div className=''>
                                <Image src={testmonial.img} alt='person' width={50} height={50} className=' rounded-full'/>
                            </div>
                            <div className='flex flex-col'>
                                <h5>{testmonial.name}</h5>
                                <div>
                                    <Image src={testmonial.countryImage} alt='country' width={25} height={25} className=' inline mr-2' />
                                    <p className=' inline' >{testmonial.Conuntry}</p>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
            
        </div>
    )
}

export default Testimonial
