import React, { useEffect, useRef, useState } from "react";
import { RiCustomerService2Fill } from "react-icons/ri";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { FaFileSignature, FaLaptop } from "react-icons/fa";

import { IoSchoolSharp } from "react-icons/io5";
import { FaConnectdevelop } from "react-icons/fa";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  downVariant,
  scrollDownVariant,
  scrollAppearVariant,
} from "../variants";
const WhySection = () => {
  const control = useAnimation();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      control.start("end");
    }
  }, [control, inView]);

  return (
    <div className={`bg-white`}>
      <div className='md:px-[50px] md:max-w-7xl mx-auto mt-[0px] mb-[0px] py-[50px] md:py-[100px] '>
        <div className='w-full justify-center'>
          {/* <motion.h2
            ref={ref}
            variants={scrollDownVariant}
            initial='start'
            animate={control}
            className='font-bold text-[25px] mb-[40px] text-center text-primary'
          >
            Why SchoolMates
          </motion.h2> */}
          <motion.div
            ref={ref}
            variants={scrollDownVariant}
            initial='start'
            animate={control}
            className="flex flex-col items-center justify-center mb-[30px]"
          >
            <h2 className='font-bold text-[25px] md:[35px] mb-[0px] text-center text-primary'>
            Why SchoolMates
            </h2>
            <img src="/mark.png" alt="" className="w-[150px]"/>
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          variants={scrollAppearVariant}
          initial='start'
          animate={control}
          className=''
        >
          <div className='py-[0px] px-[10px] lg:px-[100px] xl:px-[20px] grid md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 justify-center gap-[20px]'>
            <div className='flex pl-[30px] justify-center items-start md:flex-col md:space-y-[10px] md:items-center md:justify-start group relative'>
              <FaArrowRightLong className='text-[40px] md:text-[50px] text-secondary absolute right-[-35px] top-[20%] hidden md:flex' />
              <div className='bg-primary w-[70px] md:w-[100px] h-[70px] md:h-[100px] rounded-full flex justify-center items-center relative group-hover:scale-[1.15] duration-200'>
                <FaLaptop className='text-[30px] md:text-[50px] text-white' />
              </div>
              <div className='flex flex-col'>
                <p className='md:text-center md:text-[18px] px-[20px] mb-[10px] font-semibold md:px-[30px] lg:px-[0px] w-[250px] md:w-full'>
                  User-Friendly Interface for All{" "}
                </p>
                <p className='md:text-center  md:text-[16px] px-[20px] md:px-[30px] lg:px-[0px] w-[250px] md:w-full'>
                  Intuitively Designed for Administrators, Teachers, and Parents
                  to Enhance User Experience and Adoption.
                </p>
              </div>
            </div>

            <div className='flex pl-[30px] justify-center items-start md:flex-col md:space-y-[10px] md:items-center md:justify-start group relative'>
              <FaArrowRightLong className='text-[40px] md:text-[50px] text-secondary absolute right-[-35px] top-[20%] hidden xl:flex' />
              <div className='bg-primary w-[70px] md:w-[100px] h-[70px] md:h-[100px] rounded-full flex justify-center items-center relative group-hover:scale-[1.15] duration-200'>
                <IoSchoolSharp className='text-[40px] md:text-[50px] text-white' />
              </div>
              <div className='flex flex-col'>
                <p className='md:text-center md:text-[18px] px-[20px] mb-[10px] font-semibold md:px-[30px] lg:px-[0px] w-[250px] md:w-full'>
                  Educational Excellence Tailored
                </p>
                <p className='md:text-center  md:text-[16px] px-[20px] md:px-[30px] lg:px-[0px] w-[250px] md:w-full'>
                  Custom Solutions to Elevate Academic Success and Facilitate
                  Personalized Learning Journeys.
                </p>
              </div>
            </div>
            <div className='flex pl-[30px] justify-center items-start md:flex-col md:space-y-[10px] md:items-center md:justify-start group relative'>
              <FaArrowRightLong className='text-[40px] md:text-[50px] text-secondary absolute right-[-35px] top-[20%] hidden md:flex' />
              <div className='bg-primary w-[70px] md:w-[100px] h-[70px] md:h-[100px] rounded-full flex justify-center items-center relative group-hover:scale-[1.15] duration-200'>
                <FaConnectdevelop className='text-[40px] md:text-[50px] text-white' />
              </div>
              <div className='flex flex-col'>
                <p className='md:text-center md:text-[18px] px-[20px] mb-[10px] font-semibold md:px-[30px] lg:px-[0px] w-[250px] md:w-full'>
                  Robust Communication Hub
                </p>
                <p className='md:text-center md:text-[16px] px-[20px] md:px-[30px] lg:px-[0px] w-[250px] md:w-full'>
                  Connecting Parents, Teachers, and Students through a
                  Comprehensive Communication Platform.
                </p>
              </div>
            </div>
            <div className='flex pl-[30px] justify-center items-start md:flex-col md:space-y-[10px] md:items-center md:justify-start group relative'>
              <FaArrowRightLong className='text-[40px] md:text-[50px] text-secondary absolute right-[-35px] top-[20%] hidden md:flex opacity-0' />
              <div className='bg-primary w-[70px] md:w-[100px] h-[70px] md:h-[100px] rounded-full flex justify-center items-center relative group-hover:scale-[1.15] duration-200'>
                <AiOutlineSecurityScan
                  className='text-[40px] md:text-[50px]'
                  color='white'
                />
              </div>
              <div className='flex flex-col'>
                <p className='md:text-center md:text-[18px] px-[20px] mb-[10px] font-semibold md:px-[30px] lg:px-[0px] w-[250px] md:w-full'>
                  Cutting-Edge Security Assurance
                </p>
                <p className='md:text-center md:text-[16px] px-[20px] md:px-[30px] lg:px-[0px] w-[250px] md:w-full'>
                  Implementing Top-Tier Security Measures for Confidentiality
                  and Data Protection Compliance.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default WhySection;
