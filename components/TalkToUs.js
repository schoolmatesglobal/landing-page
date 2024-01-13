import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import CountUp, { useCountUp } from "react-countup";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  downVariant,
  scrollDownVariant,
  scrollAppearVariant,
} from "../variants";
import Link from "next/link";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { titleFont } from "@/utils/fonts";

const TalkToUs = ({ shadow }) => {
  const isLarge = useMediaQuery({ query: "(min-width: 1300px)" });
  const isMedium2 = useMediaQuery({ query: "(max-width: 1000px)" });
  const isMedium = useMediaQuery({ query: "(max-width: 800px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });

  const control = useAnimation();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      control.start("end");
    }
  }, [control, inView]);

  return (
    <div className={`bg-white`}>
      <div className='md:px-[50px] md:max-w-7xl mx-auto mt-[0px] md:pt-[50px]  pb-[80px] md:pb-[100px] w-full'>
        <motion.div
          ref={ref}
          variants={scrollAppearVariant}
          initial='start'
          animate={control}
          className='flex items-center'
        >
          <div className='flex-[1] hidden lg:flex'>
            <img
              src='/board.png'
              alt=''
              className='h-[400px] object-contain lg:max-h-[600px]'
            />
          </div>

          <div className='flex flex-col items-center w-full px-[20px] flex-[1.5]'>
            <h2
              className={`${titleFont.variable} font-sans2 text-[25px] lg:text-[30px] text-primary font-bold mb-[0px] md:mb-[10px] leading-[40px] lg:leading-[50px]`}
            >
              Join Us Today
            </h2>
            <p className='py-[20px] max-w-[700px] text-center w-full text-[16px] lg:text-[17px] mb-[0px] md:mb-[30px]'>
              Join the Future of Education Management with Schoolmates. Elevate
              Efficiency, Enhance Communication, and Simplify School Operations.
              <br className='hidden md:inline' /> Your Journey to Smarter
              Education Begins Here.
            </p>
            <div className='flex mt-[0px]  md:mt-[20px] w-full justify-center'>
              <Link
                href='/pricing#price'
                //   onClick={submitHandle2}
                // disabled={submitLoading2}
                className='btn btn-secondary h-[50px] btn-wide rounded-[50px]'
              >
                <span className=''> Get Started</span>
                {/* {submitLoading2 && (
                  <span className='loading loading-spinner loading-md text-black'></span>
                )} */}
              </Link>
            </div>
          </div>

          <div className='flex-[1] hidden lg:flex lg:justify-center'>
            <img
              src='/staff.png'
              alt=''
              className='h-[400px] object-contain lg:max-h-[300px]'
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TalkToUs;
