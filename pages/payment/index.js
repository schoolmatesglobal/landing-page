import React, { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Lottie from "lottie-react";
import success from "@/lottieJsons/schmates_success.json";
import { useRouter } from "next/router";
import Success from "./_component/Success";
import Error from "./_component/Error";

const Payments = () => {
  const router = useRouter();
  const { query } = router;

  const [redirect, setRedirect] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("initial");

  function handleComplete() {
    setSubmitStatus("loading");

    setSubmitStatus("success");

    setTimeout(() => {
      setRedirect(true);
    }, 2000);

    setTimeout(() => {
      router.push("https://schoolmatesdemo.vercel.app/auth");
    }, 5000);
  }

  function handleError() {
    // setSubmitStatus("loading");

    // setSubmitStatus("success");

    router.push({
      pathname: "/signup",
      query: { plan: `initial`, stage: "about_school" },
    });
  }

  useEffect(() => {
    if (!query?.status) {
      router.push({
        pathname: "/signup",
        query: { plan: `initial`, stage: "about_school" },
      });
    }
  }, []);

  console.log({ query });

  return (
    <>
      <Head>
        <title>
          Payment | Schoolmates - Elevate Education, Simplify Management.
        </title>
        <meta
          name='description'
          content='Experience the Future of School Administration with Schoolmates – Your All-in-One Solution for Effortless School Management and Enhanced Learning Experiences.'
        />
        <link rel='icon' href='/favs.png' />
      </Head>

      <div className='mb-[70px] lg:mb-[100px] pt-[50px]'>
        <div className='md:max-w-5xl mx-auto'>
          <div className='w-full flex justify-center mb-[30px]'>
            <Link href='/'>
              <img src='/schoolmates_logo.png' alt='' className='w-[300px]' />
            </Link>
          </div>

          {query?.status === "success" && (
            <Success
              submitStatus={submitStatus}
              redirect={redirect}
              handleComplete={handleComplete}
            />
          )}
          {query?.status === "error" && (
            <Error
              submitStatus={submitStatus}
              redirect={redirect}
              handleError={handleError}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Payments;
