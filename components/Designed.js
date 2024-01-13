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

const Designed = ({ shadow }) => {
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
      <div className='md:px-[50px] md:max-w-7xl mx-auto mt-[0px] mb-[0px] py-[50px] md:py-[100px] '>
        <div id="schools" className='w-full justify-center mb-[30px]'>
          <motion.div
            ref={ref}
            variants={scrollDownVariant}
            initial='start'
            animate={control}
            className='flex flex-col items-center justify-center mb-[30px]'
          >
            <h2 className='font-bold text-[25px] md:[35px] mb-[0px] text-center text-primary'>
              Tailored for
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
          {/* school admin */}
          <div className='flex  flex-col space-y-[30px] md:flex-row md:px-[20px] lg:px-0 md:items-center  md:space-y-[0px] md:space-x-[0px] mb-[50px]'>
            {/* image */}
            <div className='flex-[1] flex px-[20px] md:px-[0] justify-center'>
              <img
                src='/admin.jpg'
                alt='Album'
                className='rounded-tl-[100px] rounded-br-[100px] w-[400px] h-[450px] object-cover md:hover:scale-[1.03] duration-200'
              />
            </div>
            {/* text */}
            <div className='flex-[1] md:px-[20px]'>
              <div className='flex flex-col space-y-[10px] md:space-y-[30px] px-[40px] lg:px-[10px]'>
                <h2 className='text-2xl font-semibold '>
                  School Administrators
                </h2>
                <div className='text-[16px] '>
                  <p className=''>
                    SchoolMates delivers a thorough management system, aiding in
                    the effective streamlining of operations and the reduction
                    of resources and costs within your school organization.
                  </p>
                  <ul className='mt-[10px]'>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Minimize the expenses associated with running your school
                    </li>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Prevent financial leakages
                    </li>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Realize a 100% boost in efficiency
                    </li>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Facilitate the generation of reports effortlessly
                    </li>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Maintain vigilant oversight of all activities within your
                      school
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* teachers */}
          <div  id="teachers"  className='flex  flex-col space-y-[30px] md:flex-row md:px-[20px] lg:px-0 md:items-center  md:space-y-[0px] md:space-x-[0px] mb-[50px]'>
            {/* image */}
            <div  className='flex-[1] md:order-2 flex px-[20px] md:px-[0] justify-center'>
              <img
                src='/teacher.jpg'
                alt='Album'
                className='rounded-tl-[100px] rounded-br-[100px] w-[400px] h-[450px] object-cover md:hover:scale-[1.03] duration-200'
              />
            </div>
            {/* text */}
            <div className='flex-[1] md:order-1  md:px-[20px]'>
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

          {/* parents*/}
          <div id="parents"  className='flex  flex-col space-y-[30px] md:flex-row md:px-[20px] lg:px-0 md:items-center  md:space-y-[0px] md:space-x-[0px] mb-[50px]'>
            {/* image */}
            <div className='flex-[1] flex px-[20px] md:px-[0] justify-center'>
              <img
                src='/parent.jpg'
                alt='Album'
                className='rounded-tl-[100px] rounded-br-[100px] w-[400px] h-[450px] object-cover md:hover:scale-[1.03] duration-200'
              />
            </div>
            {/* text */}
            <div className='flex-[1] md:px-[20px]'>
              <div className='flex flex-col space-y-[10px] md:space-y-[30px] px-[40px] lg:px-[10px]'>
                <h2 className='text-2xl font-semibold '>Parents</h2>
                <div className='text-[16px] '>
                  <p className=''>
                    SchoolMates delivers a thorough management system, enabling
                    parents to actively participate in their children's
                    educational performance and activities.
                  </p>
                  <ul className='mt-[10px]'>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Monitor your child’s school performance from anywhere
                    </li>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Effortlessly handle school fee payments from the comfort
                      of your home
                    </li>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Receive timely notifications about your child’s school
                      activities
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* students */}
          <div id="students" className='flex  flex-col space-y-[30px] md:flex-row md:px-[20px] lg:px-0 md:items-center  md:space-y-[0px] md:space-x-[0px] mb-[50px]'>
            {/* image */}
            <div className='flex-[1] md:order-2 flex px-[20px] md:px-[0] justify-center'>
              <img
                src='/student.jpg'
                alt='Album'
                className='rounded-tl-[100px] rounded-br-[100px] w-[400px] h-[450px] object-cover md:hover:scale-[1.03] duration-200'
              />
            </div>
            {/* text */}
            <div className='flex-[1] md:order-1 md:px-[20px]'>
              <div className='flex flex-col space-y-[10px] md:space-y-[30px] px-[40px] lg:px-[10px]'>
                <h2 className='text-2xl font-semibold '>Students</h2>
                <div className='text-[16px]'>
                  <p className=''>
                    SchoolMates is designed to empower students, providing a
                    user-friendly interface for a smoother academic experience.
                    Engage with your education like never before with our
                    comprehensive management system.
                  </p>
                  <ul className='mt-[10px]'>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Access your academic progress effortlessly
                    </li>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Stay updated on school activities and events
                    </li>
                    <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Submit assignments seamlessly for efficient tracking and
                      evaluation
                    </li>
                    {/* <li className='py-[5px] flex items-center'>
                      <span className={`mr-[10px] text-secondary text-[20px]`}>
                        <FiCheckCircle />
                      </span>
                      Monitor student's academic performance
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Designed;
