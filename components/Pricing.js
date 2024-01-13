import React, { useEffect } from "react";
import PackageCard from "./PackageCard";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import {
  downVariant,
  downVariant3,
  scrollDownVariant,
  scrollAppearVariant,
  downVariant2,
} from "../variants";
import { formatAsCurrency, formatPrice } from "@/utils/logics";

const Pricing2 = ({ pricings }) => {
  const whatsappNumber = "+2347033430934";

  // WhatsApp URL with the phone number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const control = useAnimation();

  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      control.start("end");
    }
  }, [control, inView]);

  console.log({ pricings });

  return (
    <div className='bg-white'>
      <div className='  md:px-[50px] md:max-w-7xl mx-auto  pt-[50px] pb-[100px]'>
        <motion.div
          variants={downVariant3}
          initial='start'
          animate='end'
          className=''
        >
          <div
            id='price'
            className='flex flex-col items-center justify-center mb-[30px]'
          >
            <h2 className='font-bold text-[25px] md:[35px] mb-[0px] text-center text-primary'>
              Choose a Plan
            </h2>
            <img src='/mark.png' alt='' className='w-[150px]' />
          </div>

          <div className='py-[0px] pt-[0px] px-[20px] sm:px-[30px] md:px-[0px] lg:px-[00px] xl:px-[0px] grid md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 justify-center lg:gap-x-[20px] lg:gap-y-[30px] gap-x-[20px] gap-y-[30px]'>
            {pricings?.map((pr, index) => {
              const btnText =
                index + 1 == pricings?.length ? "Contact Sales" : "Sign Up";

              // const pricingLength = pricings?.length

              const btnLink =
                index + 1 == pricings?.length
                  ? whatsappUrl
                  : `/signup?plan=${pr?.plan
                      ?.split(" ")
                      .join("_")
                      .toLowerCase()}&stage=about_school`;
              // /signup?plan=school_standard&stage=about_you

              return (
                <div className='max-w-[450px]' key={index}>
                  <PackageCard
                    title={pr?.plan}
                    subTitle={pr?.description}
                    price={formatAsCurrency(pr?.price)}
                    buttonText={btnText}
                    f1={pr?.features[0]?.name}
                    f2={pr?.features[1]?.name}
                    f3={pr?.features[2]?.name}
                    f4={pr?.features[3]?.name}
                    f5={pr?.features[4]?.name}
                    f6={pr?.features[5]?.name}
                    f7={pr?.features[6]?.name}
                    f8={pr?.features[7]?.name}
                    f9={pr?.features[8]?.name}
                    link={btnLink}
                    type={pr?.type}
                    features={pr?.features}
                  />
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Pricing2;
