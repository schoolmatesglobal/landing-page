import React, { useEffect, useState } from "react";
import { titleFont } from "@/utils/fonts";
import Link from "next/link";
import { useRouter } from "next/router";
import { RiCustomerService2Fill } from "react-icons/ri";
import { motion } from "framer-motion";
import {
  heroVariant,
  hero2Variant,
  appearVariant,
  downVariant,
  downVariant2,
  downVariant3,
} from "../variants";
import { useMediaQuery } from "react-responsive";
// import Link from "next/link";

const Hero = ({ shadow }) => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitLoading2, setSubmitLoading2] = useState(false);
  const isLarge = useMediaQuery({ query: "(min-width: 1300px)" });
  const isMedium2 = useMediaQuery({ query: "(max-width: 1000px)" });
  const isMedium = useMediaQuery({ query: "(max-width: 800px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 550px)" });
  //   const router = useRouter();
  // useEffect(() => {
  //   setPreviewUrl(singleMoversData?.personalDetails?.profileImageUrl);
  // }, [singleMoversData]);

  const submitHandle = () => {
    // toast.remove();
    setSubmitLoading(true);

    router.push("/");
  };
  const submitHandle2 = () => {
    // toast.remove();
    setSubmitLoading2(true);

    router.push("/");
  };

  return (
    <div className='bg-white'>
      <div
        className={`${
          shadow
            ? "rounded-br-[0px] rounded-bl-[0px]"
            : "rounded-br-[100px] rounded-bl-[100px]"
        } bg-[#f8ede7] `}
      >
        <div className='hero min-h-[80vh] md:min-h-[95vh] lg:min-h-[90vh] 2xl:min-h-[85vh]'>
          <div className='hero-content flex-col text-black lg:flex-row md:space-x-[80px] space-y-[0px] md:px-[50px] md:max-w-7xl mx-auto pt-[100px] lg:pt-[50px]'>
            {/* Hero Text */}
            <div className='  flex lg:flex-col md:justify-between h-full'>
              <div className='text-center lg:text-left md:pr-[0px]'>
                <motion.h1
                  variants={downVariant}
                  initial='start'
                  animate='end'
                  className={`${titleFont.variable} font-sans2 text-[30px] lg:text-[40px] text-primary font-bold mb-[0px] md:mb-[10px] leading-[40px] lg:leading-[50px]`}
                >
                  Elevate Education, <br />
                  Simplify Management
                </motion.h1>
                <motion.p
                  variants={downVariant2}
                  initial='start'
                  animate='end'
                  className='py-[20px] max-w-[550px] lg:max-w-[670px] text-[14px] lg:text-[17px] mb-[0px] md:mb-[30px]'
                >
                  {/* <span className='font-semibold'>Schoolmates </span> is designed */}
                  Experience the Future of School Administration with{" "}
                  <span className='font-semibold'>Schoolmates </span>– Your
                  All-in-One Solution for Effortless School Management and
                  Enhanced Learning Experiences.
                </motion.p>
                <motion.div
                  variants={downVariant3}
                  initial='start'
                  animate='end'
                  className='flex mt-[0px]  md:mt-[20px] w-full justify-center lg:justify-start'
                >
                  <Link
                    href='/pricing#price'
                    //   onClick={submitHandle2}
                    // disabled={submitLoading2}
                    className='btn btn-secondary h-[50px] btn-wide rounded-[50px]'
                  >
                    {!submitLoading2 && <span className=''> Get Started</span>}
                    {submitLoading2 && (
                      <span className='loading loading-spinner loading-md text-black'></span>
                    )}
                  </Link>
                </motion.div>
              </div>
            </div>
            {/* Hero inputs */}
            <motion.div
              variants={isMobile ? downVariant3 : appearVariant}
              initial='start'
              animate='end'
              className=''
            >
              <img
                src='/hero_img.png'
                alt=''
                className='w-[400px] lg:w-[600px]'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
