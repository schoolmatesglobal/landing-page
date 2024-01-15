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

const Brands = ({ shadow, trusted }) => {
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

  // console.log({ trusted });

  return (
    <div className={`${shadow ? "bg-gray-300/10" : "bg-white"} `}>
      <div className='md:px-[50px] md:max-w-7xl mx-auto mt-[0px] mb-[0px] py-[60px] '>
        <div className='w-full justify-center'>
          <motion.div
            ref={ref}
            variants={scrollDownVariant}
            initial='start'
            animate={control}
            className='flex flex-col items-center justify-center mb-[30px]'
          >
            <h2 className='font-bold text-[25px] md:[35px] mb-[0px] text-center text-primary'>
              Trusted by
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
              slidesPerView={isMobile ? 2 : isMedium ? 3 : isMedium2 ? 4 : 5}
              spaceBetween={30}
              pagination={false}
              modules={[Autoplay, Pagination, Navigation]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              loop={true}
              //   navigation={true}
              className='w-full py-[20px]'
            >
              {trusted?.map((tst, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className='' >
                      <img
                        src={tst?.school_logo}
                        alt={tst?.school_name}
                        className='w-[200px] object-contain'
                      />
                    </div>
                  </SwiperSlide>
                );
              })}

              {/* <SwiperSlide>
                <img
                  src='/ACCE-Abuja.png'
                  alt=''
                  className='w-[200px] object-contain'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='/Crescent-Pearls.png'
                  alt=''
                  className='w-[200px] object-contain'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='/Edulyn-Schools.png'
                  alt=''
                  className='w-[200px] object-contain'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='/CHRYSOLITE.png'
                  alt=''
                  className='w-[200px] object-contain'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='/Epitome.png'
                  alt=''
                  className='w-[200px] object-contain'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='/I-scholars.png'
                  alt=''
                  className='w-[200px] object-contain'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='/Prime-Scholars.png'
                  alt=''
                  className='w-[200px] object-contain'
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src='/Almustaqeem.png'
                  alt=''
                  className='w-[200px] object-contain'
                />
              </SwiperSlide> */}
            </Swiper>
          </motion.div>
        </div>
        {/* <div className='w-full flex flex-col space-y-[20px] md:space-y-0 md:flex-row  lg:space-x-[30px] px-[20px] md:flex-wrap  md:items-center mt-[30px]'>
          <div className='border border-primary/50 hover:border-secondary/50 transition-all hover:shadow-xl duration-200 rounded-[20px] h-[200px] md:flex-[1] flex justify-center items-center'>
            <div className='flex flex-col items-center px-[50px]'>
              <p className='font-bold text-[40px]'><span><CountUp end={54} duration={5}/></span></p>
              <p className='text-center'>
                Schools use SCHOOLMATES around the world
              </p>
            </div>
          </div>
          <div className='border border-primary/50 hover:border-secondary/50 transition-all hover:shadow-xl duration-200 rounded-[20px] h-[200px] md:flex-[1] flex justify-center items-center'>
            <div className='flex flex-col items-center px-[50px]'>
              <p className='font-bold text-[40px]'><span><CountUp end={9255} duration={5}/></span></p>
              <p className='text-center'>
              Teachers using SCHOOLMATES to process their results
              </p>
            </div>
          </div>
          <div className='border border-primary/50 hover:border-secondary/50 transition-all hover:shadow-xl duration-200 rounded-[20px] h-[200px] md:flex-[1] flex justify-center items-center'>
            <div className='flex flex-col items-center px-[50px]'>
              <p className='font-bold text-[40px]'><span><CountUp end={121782} duration={5}/></span></p>
              <p className='text-center'>
              Students get their results in a shortest possible time
              </p>
            </div>
          </div>
          
         
        </div> */}
      </div>
    </div>
  );
};

export default Brands;
