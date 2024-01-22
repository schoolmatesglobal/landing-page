import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Success from "@/components/Signup/Success";
import Error from "@/components/Signup/Error";
import { useRouter } from "next/router";

const SignupError = () => {
  const [submitStatus, setSubmitStatus] = useState("initial");
  const [redirect, setRedirect] = useState(false);
  const router = useRouter();
  function handleError() {
    setSubmitStatus("loading");

    router.push({
      pathname: "/signup",
      query: { plan: `initial`, stage: "about_school" },
    });
    // router.push({
    //   pathname: "/signup",
    //   query: { plan: `${query?.plan}`, stage: "payment" },
    // });
  }

  return (
    <>
      <Head>
        <title>
          Signup | Schoolmates - Elevate Education, Simplify Management.
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

          <Error
            submitStatus={submitStatus}
            redirect={redirect}
            handleError={handleError}
          />
        </div>
      </div>
    </>
  );
};

export default SignupError;
