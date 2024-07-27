import PrivacyContent from "@/components/Privacy/PrivacyContent";
import PrivacyHero from "@/components/Privacy/PrivacyHero";
import TermsContent from "@/components/TermsOfUse/TermsContent";
import TermsHero from "@/components/TermsOfUse/TermsHero";
import NormalLayout from "@/layouts/NormalLayout";
import Head from "next/head";

const TermsOfUse = ({}) => {
  // const maxFeatures = findMaxFeaturesLength(pricings);

  // console.log({ pricings, maxFeatures });

  return (
    <>
      <Head>
        <title>
          Terms of Use | Schoolmates - Elevate Education, Simplify Management.
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
          <TermsHero />

          <TermsContent />
        </div>
      </NormalLayout>
    </>
  );
};

export default TermsOfUse;

// export async function getServerSideProps() {
//   // const emails = await fetchWelcomedEmails();
//   // console.log({ ap: apiServices.getPricing() });
//   const apiServices = new APIServices();
//   const pricings = await apiServices.getPricing();

//   const pricingFormatted = await apiServices.formatData(pricings);

//   return {
//     props: {
//       pricings: pricingFormatted,
//     },
//   };
// }
