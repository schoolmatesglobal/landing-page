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
} from "../../variants";
import { useMediaQuery } from "react-responsive";

const TermsHero = ({ shadow }) => {
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
    <div className=''>
      <div
        className={`${
          shadow
            ? "rounded-br-[0px] rounded-bl-[0px]"
            : "rounded-br-[100px] rounded-bl-[100px]"
        } bg-[#f8ede7] `}
      >
        <div className='hero min-h-[35vh] md:min-h-[40vh] lg:min-h-[45vh] 2xl:min-h-[45vh]'>
          <div className='hero-content flex items-center text-black  md:px-[50px] md:max-w-7xl mx-auto pt-[60px]  lg:pt-[80px]'>
            {/* Hero Text */}
            <div className='flex-[1.5]  flex flex-col items-center h-full'>
              <motion.div
                variants={isLarge ? downVariant2 : appearVariant}
                initial='start'
                animate='end'
                className='text-center md:pr-[0px] flex flex-col items-center'
              >
                <h1
                  className={`${titleFont.variable} font-sans2 text-[30px] lg:text-[40px] text-primary font-bold mb-[0px] md:mb-[10px] leading-[40px] lg:leading-[50px]`}
                >
                  Terms Of Use
                </h1>
                <img src='/mark.png' alt='' className='w-[150px]' />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsHero;
