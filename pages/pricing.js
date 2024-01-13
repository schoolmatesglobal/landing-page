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
import BrandsPricing from "@/components/BrandsPricing";
import PackageCard from "@/components/PackageCard";
import Pricing2 from "@/components/Pricing";
import PricingHero from "@/components/PricingHero";
import APIServices from "@/utils/api-services";

const Pricing = ({pricings}) => {


  

  return (
    <>
      <Head>
        <title>
          Pricing | Schoolmates - Elevate Education, Simplify Management.
        </title>
        <meta
          name='description'
          content='Experience the Future of School Administration with Schoolmates – Your All-in-One Solution for Effortless School Management and Enhanced Learning Experiences.'
        />
        <link rel='icon' href='/favs.png' />
      </Head>

      <NormalLayout>
        <div className=' '>
          {/* <Hero /> */}
          {/* <BrandsPricing /> */}
          <PricingHero />
          <Pricing2 pricings={pricings}/>

          {/* move packages */}

          {/* <WhySection /> */}
          {/* <Brands2 shadow={shadow} /> */}
          {/* <Designed /> */}
          {/* <Testimonials shadow={shadow} /> */}
          {/* <TalkToUs /> */}
        </div>
      </NormalLayout>
    </>
  );
};

export default Pricing;



export async function getServerSideProps() {
  // const emails = await fetchWelcomedEmails();
  // console.log({ ap: apiServices.getPricing() });
  const apiServices = new APIServices();
  const pricings = await apiServices.getPricing();

  const pricingFormatted = await apiServices.formatData(pricings);

  return {
    props: {
      pricings: pricingFormatted,
    },
  };
}
