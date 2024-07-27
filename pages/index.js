import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import NormalLayout from "@/layouts/NormalLayout";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import WhySection from "@/components/WhySection";
import Brands2 from "@/components/Brands2";
import Testimonials from "@/components/Testimonials";
import TalkToUs from "@/components/TalkToUs";

import Designed from "@/components/Designed";
import APIServices from "@/utils/api-services";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ trusted, testimonials }) {
  // const apiServices = new APIServices();
  const [shadow, setShadow] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const router = useRouter();
  // useEffect(() => {
  //   setPreviewUrl(singleMoversData?.personalDetails?.profileImageUrl);
  // }, [singleMoversData]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, [shadow]);

  // console.log({ trusted, testimonials });

  return (
    <>
      <Head>
        <title>Schoolmates | Elevate Education, Simplify Management.</title>
        <meta
          name='description'
          content='Experience the Future of School Administration with Schoolmates – Your All-in-One Solution for Effortless School Management and Enhanced Learning Experiences.'
        />
        <link rel='icon' href='/favs.png' />
      </Head>

      <NormalLayout>
        <div className=' '>
          <Hero shadow={shadow} />
          <Brands shadow={shadow} trusted={trusted} />
          <WhySection />
          <Brands2 shadow={shadow} />
          <Designed />
          <Testimonials shadow={shadow} testimonials={testimonials} />
          <TalkToUs />
        </div>
      </NormalLayout>
    </>
  );
}

export async function getServerSideProps() {
  const apiServices = new APIServices();
  const trusted = await apiServices.getTrusted();
  const testimonials = await apiServices.getTestimonial();

  const trustedFormatted = await apiServices.formatData(trusted);
  const testimonialsFormatted = await apiServices.formatData(testimonials);

  return {
    props: {
      trusted: trustedFormatted || [],
      // trusted: [],
      testimonials: testimonialsFormatted || [],
      // testimonials: [],
    },
  };
}
