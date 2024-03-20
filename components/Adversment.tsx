import React from 'react';
import Image from 'next/image';
import Button from './Button';

const Adversment = () => {
    return (
        <div className='section-bg my-10'>
            <div className='container w-full xs: gap-10 sm:gap-28  text-white py-10 padding-container mx-auto flex justify-between items-center xs:flex-col sm:flex-row'>
                <div className='mx-auto '
                data-aos="flip-down" data-aos-offset="200" data-aos-easing="ease-in-out" data-aos-delay='300'
                >
                    <Image src="/front.png" alt='front' width={600} height={600} />
                </div>
                <div className='w-full xs:text-center sm:text-start '
                data-aos="fade-zoom-in" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600"
                >
                    <h2 className=' text-4xl font-bold'>Still Interested?</h2>
                    <p className='text-sm text-gray-400 pt-4 pb-8 sm:w-2/3 xs:w-full '>
                        We`d love to hear about your brand and your story and
                        see how we could help take it to the next level!
                    </p>
                    <Button label={"get Start"} />
                </div>
            </div>
        </div>
    )
}

export default Adversment
