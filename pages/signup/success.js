import Success from "@/components/Signup/Success";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const SignupSuccess = () => {
  const [submitStatus, setSubmitStatus] = useState("initial");
  const [redirect, setRedirect] = useState(false);

  const router = useRouter();

  function handleComplete() {
    setSubmitStatus("loading");

    // setSubmitStatus("success");

    // setTimeout(() => {
    //   setRedirect(true);
    // }, 2000);
    router.push("https://schoolmatesdemo.vercel.app/auth");

    // setTimeout(() => {
    //   router.push("https://schoolmatesdemo.vercel.app/auth");
    // }, 5000);
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

          <Success
            submitStatus={submitStatus}
            redirect={redirect}
            handleComplete={handleComplete}
          />
        </div>
      </div>
    </>
  );
};

export default SignupSuccess;
