import React, { useEffect, useRef, useState } from "react"; // Import Swiper React components
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

// import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const Testimonials = ({ shadow, testimonials }) => {
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

  // console.log({ testimonials });

  return (
    <div className={`bg-white`}>
      <div className='md:px-[50px] md:max-w-7xl mx-auto mt-[0px] mb-[0px] pb-[50px] '>
        <div className='w-full justify-center'>
          <motion.div
            ref={ref}
            variants={scrollDownVariant}
            initial='start'
            animate={control}
            className='flex flex-col items-center justify-center mb-[30px]'
          >
            <h2 className='font-bold text-[25px] md:[35px] mb-[0px] text-center text-primary'>
              Testimonials
            </h2>
            <img src='/mark.png' alt='' className='w-[150px]' />
          </motion.div>
          <motion.div
            ref={ref}
            variants={scrollAppearVariant}
            initial='start'
            animate={control}
            className=''
          >
            <Swiper
              slidesPerView={isMobile ? 1 : isMedium ? 1 : isMedium2 ? 1 : 1}
              spaceBetween={30}
              pagination={{ clickable: true }}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              navigation={true}
              className='w-full py-[20px]'
            >
              {testimonials?.map((test, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div
                      
                      className='w-full flex flex-col items-center md:flex-row px-[20px]'
                    >
                      <img
                        src={test?.image}
                        alt=''
                        className='w-[200px] h-[200px] mb-[-20px] md:mb-0 md:mr-[-20px] border-[4px] border-secondary object-cover rounded-full'
                      />
                      <div className='min-h-[300px]  bg-gray-300/20 rounded-[50px] px-[50px] py-[50px] flex flex-col text-center md:text-start  justify-center'>
                        <p className='italic md:text-[18px] mb-[30px]'>
                          {test?.description}
                        </p>
                        <p className='font-semibold text-[18px] mb-[5px]'>
                          {test?.full_name}
                        </p>
                        <p className='mb-[0px]'>{test?.position}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* <SwiperSlide>
                <div className='w-full flex flex-col items-center md:flex-row px-[20px]'>
                  <img
                    src='/review2.jpg'
                    alt=''
                    className='w-[200px] h-[200px] mb-[-20px] md:mb-0 md:mr-[-20px] border-[4px] border-secondary object-cover rounded-full'
                  />
                  <div className='min-h-[300px]  bg-gray-300/20 rounded-[50px] px-[50px] py-[50px] flex flex-col text-center md:text-start  justify-center'>
                    <p className='italic md:text-[18px] mb-[30px]'>
                      As a teacher, Schoolmates has made my life so much easier.
                      From grading to communication with parents, it streamlines
                      everything. I can focus more on teaching and less on
                      paperwork.
                    </p>
                    <p className='font-semibold text-[18px] mb-[5px]'>
                      Morgan Jordan
                    </p>
                    <p className='mb-[0px]'>
                      Science Teacher, Evergreen Middle School
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='w-full flex flex-col items-center md:flex-row px-[20px]'>
                  <img
                    src='/review1.jpg'
                    alt=''
                    className='w-[200px] h-[200px] mb-[-20px] md:mb-0 md:mr-[-20px] border-[4px] border-secondary object-cover rounded-full'
                  />
                  <div className='min-h-[300px]  bg-gray-300/20 rounded-[50px] px-[]10px md:px-[50px] py-[50px] flex flex-col text-center md:text-start  justify-center'>
                    <p className='italic md:text-[18px] mb-[30px]'>
                      Parents love the transparency Schoolmates provides.
                      Real-time updates on their child's progress and easy
                      communication with teachers. It's a win-win for everyone
                      involved.
                    </p>
                    <p className='font-semibold text-[18px] mb-[5px]'>
                      Peter Parker
                    </p>
                    <p className='mb-[0px]'>
                      Parent of Student, Harmony High School
                    </p>
                  </div>
                </div>
              </SwiperSlide> */}
            </Swiper>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
