import Pricing2 from "@/components/Pricing";
import PricingHero from "@/components/PricingHero";
import NormalLayout from "@/layouts/NormalLayout";
import APIServices from "@/utils/api-services";
import { findMaxFeaturesLength } from "@/utils/logics";
import Head from "next/head";

const Pricing = ({ pricings }) => {

  const maxFeatures = findMaxFeaturesLength(pricings);

  console.log({ pricings, maxFeatures });

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
          <Pricing2 pricings={pricings} maxFeatures={maxFeatures} />

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
