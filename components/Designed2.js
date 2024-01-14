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
import { FiCheckCircle } from "react-icons/fi";

const Designed2 = ({ shadow }) => {
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
    <div className={`bg-white`}>
      <motion.div
        ref={ref}
        variants={scrollAppearVariant}
        initial='start'
        animate={control}
        className='md:px-[50px] md:max-w-7xl mx-auto mt-[0px] mb-[0px] pb-[50px] md:pb-[100px] '
      >
        <div className=''>
          {/* teachers */}
          <div
            id='teachers'
            className='flex  flex-col space-y-[30px] md:flex-row md:px-[20px] lg:px-0 md:items-center  md:space-y-[0px] md:space-x-[0px] mb-[50px]'
          >
            {/* image */}
            <div className='flex-[1] md:order-2 flex px-[20px] md:px-[0] justify-center'>
              <img
                src='/teacher.jpg'
                alt='Album'
                className='rounded-tl-[100px] rounded-br-[100px] w-[400px] h-[450px] object-cover md:hover:scale-[1.03] duration-200'
              />
            </div>
            {/* text */}
            <div className='flex-[1] md:order-1 w-full'>
              <div className='flex flex-col space-y-[10px] md:space-y-[30px] px-[40px] lg:px-[10px]'>
                <h2 className='text-2xl font-semibold '>Teachers</h2>
                <div className='text-[16px] '>
                  <p className=''>
                    SchoolMates offers an extensive management system, aiding in
                    the maximization of your time and effort, enabling you to
                    give your best to your students.
                  </p>
                  <ul className='mt-[10px]'>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Take attendance seamlessly
                    </li>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Efficiently compile results with 100% accuracy
                    </li>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Create report cards effortlessly
                    </li>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Monitor student's academic performance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Designed2;
