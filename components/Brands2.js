import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { useMediaQuery } from "react-responsive";
import CountUp, { useCountUp } from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  downVariant,
  scrollDownVariant,
  scrollAppearVariant,
} from "../variants";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Brands2 = ({ shadow }) => {
  const isLarge = useMediaQuery({ query: "(min-width: 1300px)" });
  const isMedium2 = useMediaQuery({ query: "(max-width: 1000px)" });
  const isMedium = useMediaQuery({ query: "(max-width: 800px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });

  const control = useAnimation();

  const { ref, inView } = useInView({ triggerOnce: true });
  // const { ref, inView } = useInView({
  //   // threshold: 0,
  //   triggerOnce: true,
  // });

  useEffect(() => {
    if (inView) {
      control.start("end");
    }
  }, [control, inView]);

  // useEffect(() => {
  //   if (inView) {
  //     startCountUp();
  //   }
  // }, [inView]);
  // console.log({ inView, inView });

  return (
    <div className={`bg-[#fff7f2]/50`}>
      <div className='md:px-[50px] md:max-w-7xl mx-auto mt-[0px] mb-[0px] py-[50px] md:py-[100px] '>
        <div className='w-full justify-center'>
          <motion.div
            ref={ref}
            variants={scrollDownVariant}
            initial='start'
            animate={control}
            className='flex flex-col items-center justify-center mb-[30px]'
          >
            <h2 className='font-bold text-[25px] md:[35px] mb-[0px] text-center text-primary'>
              Our Statistics
            </h2>
            <img src='/mark.png' alt='' className='w-[150px]' />
          </motion.div>
        </div>
        <motion.div
          ref={ref}
          variants={scrollAppearVariant}
          initial='start'
          animate={control}
          className=''
        >
          <div
            ref={ref}
            className='w-full flex flex-col space-y-[20px] md:space-y-0 md:flex-row  lg:space-x-[30px] px-[20px] md:flex-wrap  md:items-center mt-[30px]'
          >
            <div className='border border-primary/50 hover:border-secondary/50 transition-all hover:shadow-xl duration-200 rounded-[20px] h-[200px] md:flex-[1] flex justify-center items-center'>
              <div className='flex flex-col items-center px-[50px]'>
                <div ref={ref} className=''>
                  <p className='font-bold text-[40px]'>
                    <span>
                      {inView && <CountUp start={0} end={54} duration={5} />}
                    </span>
                  </p>
                </div>
                <p className='text-center'>
                  Schools use SchoolMates around the world
                </p>
              </div>
            </div>
            <div className='border border-primary/50 hover:border-secondary/50 transition-all hover:shadow-xl duration-200 rounded-[20px] h-[200px] md:flex-[1] flex justify-center items-center'>
              <div className='flex flex-col items-center px-[50px]'>
                <div ref={ref} className=''>
                  <p className='font-bold text-[40px]'>
                    <span>{inView && <CountUp end={9255} duration={5} />}</span>
                  </p>
                </div>
                <p className='text-center'>
                  Teachers using SchoolMates to process their results
                </p>
              </div>
            </div>
            <div className='border border-primary/50 hover:border-secondary/50 transition-all hover:shadow-xl duration-200 rounded-[20px] h-[200px] md:flex-[1] flex justify-center items-center'>
              <div className='flex flex-col items-center px-[50px]'>
                <div ref={ref} className=''>
                  <p className='font-bold text-[40px]'>
                    <span>
                      {inView && <CountUp end={121782} duration={5} />}
                    </span>
                  </p>
                </div>
                <p className='text-center'>
                  Students get their results in a shortest possible time
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Brands2;
