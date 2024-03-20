import React from 'react'
import { Statistics } from "@/constants/constant";
const Report = () => {
    return (
        <div>
            <div>
                <div className='text-white  container padding-container mx-auto py-10' id='report'>
                    <div className='text-center py-5'
                    data-aos="fade-zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600"
                    >
                        <h2 className='text-3xl font-bold'>Onwards and Upwards</h2>
                        <p className=' w-1/2 mx-auto text-sm text-gray-400 pt-4'>
                            We have built a global organization with local expertise to serve our customers wherever they are
                        </p>
                    </div> 
                    <div>
                        <ul className='flex xs:flex-col sm:flex-row items-center justify-center overflow-hidden'>
                            {Statistics.map((item) => (
                                <li key={item.number}  style={{backgroundColor:item.color}}
                                className=' flex flex-col items-center justify-center report-item  w-fit'
                                data-aos="slide-up" data-aos-offset="200" data-aos-duration={item.time}
                                >
                                    <h5 className='font-bold'>{item.name}</h5>
                                    <p className='   text-3xl font-bold py-2'>{item.number}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Report
