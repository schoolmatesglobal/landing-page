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
          <div id="price" className='flex flex-col items-center justify-center mb-[30px]'>
            <h2 className='font-bold text-[25px] md:[35px] mb-[0px] text-center text-primary'>
              Choose a Plan
            </h2>
            <img src='/mark.png' alt='' className='w-[150px]' />
          </div>
          {/* <div className='py-[0px] pt-[0px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[20px] grid md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 justify-center lg:gap-x-[20px] lg:gap-y-[30px] gap-x-[20px] gap-y-[30px]'>
            <PackageCard
              title='FREE'
              subTitle='Designed for emerging schools seeking fundamental tools for managing school fees and tracking student progress.'
              price='0'
              buttonText='Get Started for free'
              f1='Up to 100 students'
              f2='School fees management'
              f3='Student progress report'
              f4='Dashboard'
           
              link='/signup'
            />
            <PackageCard
              title='SCHOOL STARTER'
              subTitle='Tailored for Expanding Schools: Streamline Fee Management, Monitor Student Progress, and Enhance Communication with Parents.'
              price='200,000'
              buttonText='Start free trial'
              f1='Up to 250 students'
              f2='School fees management'
              f3='Student progress report'
              f4='Dashboard'
              f5='Attendance management'
              f6='Communication'
            
              link='/signup'
            />
            <PackageCard
              title='SCHOOL STANDARD'
              subTitle='Ideal for educational institutions aiming to gather and oversee fees, administer Computer-Based Tests (CBT) assessments, and generate and monitor lesson plans.'
              price='300,000'
              buttonText='Start free trial'
              f1='Up to 250 students'
              f2='School fees management'
              f3='Student progress report'
              f4='Dashboard'
              f5='Attendance management'
              f6='Communication'
                f7='CBT (Quizzes, Assignment, Exams)'
                f8='Lesson plan'
              
              link='/signup'
            />
            <PackageCard
              title='SCHOOL PRO'
              subTitle='
              Designed for institutions with a large student population and specific customization needs.'
              buttonText='Contact sales'
              f1='Unlimited students'
              f2='School fees management'
              f3='Student progress report'
              f4='Dashboard'
              f5='Attendance management'
              f6='Communication'
                f7='CBT (Quizzes, Assignment, Exams)'
                f8='Lesson plan'
                  f9='Dedicated account manager'
              link='tel:+2347033430934'
            />
          </div> */}
          <div className='py-[0px] pt-[0px] px-[20px] sm:px-[30px] md:px-[50px] lg:px-[100px] xl:px-[20px] grid md:grid-cols-2  lg:grid-cols-2 xl:grid-cols-4 justify-center lg:gap-x-[20px] lg:gap-y-[30px] gap-x-[20px] gap-y-[30px]'>
            {pricings?.map((pr, index) => {
              const btnText =
                index + 1 == pricings?.length ? "Contact Sales" : "Sign Up";

              const btnLink =
                index + 1 == pricings?.length
                  ? whatsappUrl
                  : `/signup?plan=${pr?.plan
                      ?.split(" ")
                      .join("_")
                      .toLowerCase()}&stage=about_school`;
                      // /signup?plan=school_standard&stage=about_you

              return (
                <div className='' key={index}>
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
