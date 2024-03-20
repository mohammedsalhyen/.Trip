import React from "react";
import Button from "./Button";
import Image from 'next/image'

const Feature = () => {
    return (
        <div className=" text-white flex py-10 flex-col mx-auto  justify-center container border-b-2 border-solid border-white transition-all ease-in-out">
            <div className="Feature-title text-center"
            data-aos="fade-zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine" data-aos-duration="600"
            >
                <h2 className=" text-3xl font-bold">OUR FEATURES</h2>
                <p className=" text-sm pt-3 pb-6 text-gray-400">Discover a one stop platform for more control and visibility into your cross-border trade journey</p>
            </div>
            <div className="flex justify-between items-center xs:flex-col sm:flex-row pb-6" >
                <div className="flex-1 flex justify-center items-center sm:px-14  xs:py-14 sm:py-0" 
                    data-aos="fade-up-left" data-aos-easing="ease-in-out" data-aos-offset="300"
                >
                    <div className=" sm:w-2/3  xs:w-full image-container hero-shadow rounded-lg relative z-10">
                        <Image src={"/Feature-img.png"} alt="Feature" width={400} height={400} />
                        <div className=" absolute top-8 left-8 hero-shadow rounded-lg w-full h-full -z-10"></div>
                    </div>
                </div>
                <div className="flex-1  xs:text-center sm:text-start" 
                    data-aos="fade-up-right" data-aos-offset="300" data-aos-easing="ease-in-out"  data-aos-duration="800"
                >
                    <h2 className=" text-xl font-bold">Manage Cross-Border Payments</h2>
                    <p className=" text-gray-400 py-5 sm:w-2/3 xs:w-full">
                        Choose to pay or get paid the way you want, no matter your
                        current arrangement. Pick the terms that suit your needs and
                        protect your business from risk.
                    </p>
                    <Button label={"Get Paid Now"}  />
                </div>
            </div>
            <div className=" text-center py-8" data-aos="zoom-out" data-aos-easing="ease-in-out"  data-aos-delay="600" data-aos-duration="1000">
                <Button label={"View Case Studies"} />
            </div>
        </div>
    )
}
export default Feature  