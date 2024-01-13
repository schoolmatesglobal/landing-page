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

const PricingHero = ({ shadow }) => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitLoading2, setSubmitLoading2] = useState(false);

  const isLarge = useMediaQuery({ query: "(min-width: 10240px)" });
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
        <div className='hero min-h-[60vh] md:min-h-[75vh] lg:min-h-[70vh] 2xl:min-h-[65vh]'>
          <div className='hero-content flex items-center text-black  md:px-[50px] md:max-w-7xl mx-auto pt-[40px]  lg:pt-[80px]'>
            {/* image 1 */}
            <motion.div
              variants={downVariant}
              initial='start'
              animate='end'
              className='flex-[1] hidden lg:flex'
            >
              <img
                src='/pay1.png'
                alt=''
                className='h-[400px] object-contain lg:max-h-[600px]'
              />
            </motion.div>
            {/* Hero Text */}
            <div className='flex-[1.5]  flex flex-col items-center h-full'>
              <div className='text-center md:pr-[0px]'>
                <motion.h1
                  // variants={downVariant2}
                  variants={isLarge ? downVariant2 : appearVariant}
                  initial='start'
                  animate='end'
                  className={`${titleFont.variable} font-sans2 text-[30px] lg:text-[40px] text-primary font-bold mb-[0px] md:mb-[10px] leading-[40px] lg:leading-[50px]`}
                >
                  Package Pricing
                </motion.h1>
                <motion.p
                  // variants={downVariant3}
                  variants={isLarge ? downVariant3 : appearVariant}
                  initial='start'
                  animate='end'
                  className='py-[20px] px-[20px]  lg:max-w-[670px] text-[16px] lg:text-[17px] mb-[0px] md:mb-[30px]'
                >
                  {/* <span className='font-semibold'>Schoolmates </span> is designed */}
                  Our subscription plans are flexible and value based, making it
                  possible for you to enjoy the power of enterprise School
                  management technology. Choose the package that's best for you,
                  and unlock the most value.
                </motion.p>
              </div>
            </div>

            {/* image 2 */}
            <motion.div
              variants={downVariant}
              initial='start'
              animate='end'
              className='flex-[1] hidden lg:flex'
            >
              <img
                src='/pay2.png'
                alt=''
                className='h-[400px] object-contain lg:max-h-[600px]'
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingHero;
