import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  citiesOptions,
  countries,
  countries1,
  countries2,
  countries3,
  menOptions,
  mileageOptions,
  phoneCodesOptions,
  phoneCodesOptionsRefactored,
  phoneCodesOptionsRefactored2,
  roleOptions,
  serviceOptions,
  serviceOptions2,
} from "@/dummyData/inputData";
import SelectSearch from "@/components/inputs/SelectSearch";
import PhoneCountryInput from "@/components/inputs/phoneInput";
import AboutSchool from "@/components/Signup/AboutSchool";
import AboutYou from "@/components/Signup/AboutYou";
import APIServices from "@/utils/api-services";
import {
  convertStringToNumber,
  toSentenceCase,
  toSentenceCase2,
} from "@/utils/logics";
import Payment from "@/components/Signup/Payment";
import { formatAsCurrency, formatPrice } from "@/utils/logics";
import Success from "@/components/Signup/Success";
import Error from "@/components/Signup/Error";
// import PaystackPop from "@paystack/inline-js";
import { PaystackButton } from "react-paystack";
// import toast, { ToastBar, Toaster } from "react-hot-toast";

const Signup = ({ pricings }) => {
  const router = useRouter();
  const { query } = router;

  const apiServices = new APIServices();

  const [firstName, setFirstName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolWebsite, setSchoolWebsite] = useState("");
  const [schoolEmail, setSchoolEmail] = useState("");
  const [schoolAddress, setSchoolAddress] = useState("");
  const [schoolCity, setSchoolCity] = useState("");
  const [schoolLogo, setSchoolLogo] = useState(null);
  const [schoolLogoUrl, setSchoolLogoUrl] = useState("");
  const [schoolLogoName, setSchoolLogoName] = useState("");
  const [activateUploadError, setActivateUploadError] = useState("");
  const [country, setCountry] = useState("Nigeria");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [paymentMode, setPaymentMode] = useState("");
  // const [countryCode, setCountry] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [emailError2, setEmailError2] = useState(true);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(true);
  const [submitError, setSubmitError] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("initial");
  const [activateError, setActivateError] = useState(false);
  const [usedEmails, setUsedEmails] = useState([]);
  const [phoneValue, setPhoneValue] = useState("Nigeria (+234)");
  const [stage, setStage] = useState("school");
  const [paymentPlan, setPaymentPlan] = useState(defaultPlanValue()[0]?.value);
  const [defaultPlan, setDefaultPlan] = useState(null);
  const [payCode, setPayCode] = useState("");
  const [transferCode, setTransferCode] = useState("");
  const [paymentError, setPaymentError] = useState("");

  // const publicKey = "pk_test_d1566876d5c4c51d7d6c763a6103fe23a16cede0";

  const defaultPhoneValue = () => {
    const option = countries2.filter((opt) => opt.value == "Nigeria (+234)");
    return option;
  };
  const defaultCountryValue = () => {
    const option = countries1.filter((opt) => opt.value == "Nigeria");
    return option;
  };

  // const defaultPhoneValue2 = () => {
  //   const option = countries2.filter((opt) => opt.value == phoneValue);
  //   return option;
  // };

  const handleEmailChange2 = (e) => {
    // const inputValue = e.target.value;
    setSchoolEmail(e.target.value);

    // Regular expression to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // setIsValid(emailPattern.test(inputValue));
    setEmailError2(emailPattern.test(e.target.value));
  };

  const handleEmailChange = (e) => {
    // const inputValue = e.target.value;
    setEmail(e.target.value);

    // Regular expression to validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // setIsValid(emailPattern.test(inputValue));
    setEmailError(emailPattern.test(e.target.value));
  };

  //phone number validation
  const handlePhoneNumberChange = (event) => {
    const inputValue = event?.target?.value;

    // Remove any non-digit characters from the input
    const strippedNumber = inputValue?.replace(/\D/g, "");

    // Check if the stripped number is either 10 or 11 digits long
    const isValidPhoneNumber =
      // strippedNumber.length === 5 || strippedNumber.length === 11;
      strippedNumber?.length > 5;

    setPhone(strippedNumber);
    setPhoneError(isValidPhoneNumber);
  };

  function planOptions() {
    const plans = pricings?.map((pr, i) => {
      // if (i === pricings?.length - 1) return
      return {
        value: pr?.id,
        label: toSentenceCase(pr?.plan),
        price: formatAsCurrency(pr?.price),
      };
    });

    if (plans.length === 0) {
      // Array is already empty, nothing to filter out
      return plans;
    }

    // Use slice to create a new array without the last element
    return plans.slice(0, plans.length - 1);
    // return plans;
  }

  function computePlanFromId() {
    const option = planOptions().filter((opt) => paymentPlan === opt.value);
    return option[0]?.label?.split(" ").join("_").toLowerCase();
  }

  function defaultPlanValue() {
    const option = planOptions().filter(
      (opt) => query?.plan === opt?.label?.split(" ").join("_").toLowerCase()
    );
    const option2 = planOptions().filter(
      (opt) => query?.plan === opt?.label?.split(" ").join("_").toLowerCase()
    );
    if (!option) {
      setPaymentPlan(planOptions()[0]?.value);
      // return [];
      return planOptions()[0];
    } else {
      return option;
    }
  }
  function defaultPlanValue2() {
    const option = planOptions().filter(
      (opt) => query?.plan === opt.label?.split(" ").join("_").toLowerCase()
    );

    return option[0];
  }

  // const df = defaultPlanValue() === []

  const schoolSubmit = () => {
    setActivateError(true);
    if (
      !schoolName ||
      !schoolAddress ||
      !country ||
      !schoolEmail ||
      !schoolCity ||
      !paymentPlan ||
      // defaultPlanValue()?.length === 0 ||
      !emailError2
      // ||
      // query?.plan === "initial"
    ) {
      setSubmitError(true);
      // toast.error(`Please fill all fields`);
    } else {
      // toast.remove();
      setSubmitError(false);
      setActivateError(false);

      router.push({
        pathname: "/signup",
        query: { plan: `${computePlanFromId()}`, stage: "about_you" },
      });

      // setStage(`/signup?plan=${computePlanFromId()}?stage=about_you`);
    }
  };

  const personSubmit = () => {
    setActivateError(true);
    // setSubmitStatus("loading");
    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !password ||
      !confPassword ||
      // !role ||
      // !paymentMode ||
      !emailError
    ) {
      setSubmitError(true);
      setSubmitStatus("error");
      // toast.error(`Please fill all fields`);
    } else if (password !== confPassword) {
      setSubmitStatus("error2");
    } else if (password?.length <= 7 || confPassword?.length <= 7) {
      setSubmitStatus("error3");
    } else {
      // toast.remove();
      setSubmitError(false);
      setActivateError(false);
      // setStage("payment");
      router.push({
        pathname: "/signup",
        query: { plan: `${query?.plan}`, stage: "payment" },
      });

      // setStage("you");
    }
  };

  // const redirectUrl = "http://localhost:3000/signup?status=success";
  const redirectUrl = "https://schmates.vercel.app/signup?status=success";

  const payBody = {
    school_name: schoolName,
    email: schoolEmail,
    amount: convertStringToNumber(defaultPlanValue2()?.price),
    payment_redirect_url: redirectUrl,
    pricing_id: defaultPlanValue2()?.value,
  };

  const componentProps = {
    email: schoolEmail,
    amount: convertStringToNumber(defaultPlanValue2()?.price) * 100,
    metadata: {
      name: `${firstName} ${lastName}`,
      phone,
    },
    // publicKey,
    text: "Pay Now",
    onSuccess: (transaction) => {
      let message = `Payment was successful. Reference - ${transaction?.reference}`;
      let ref = transaction?.reference;
      // alert(message);
      setPayCode(transaction?.reference);

      // console.log({ ref, payCode });

      if (ref) {
        router.push({
          pathname: "/signup",
          query: { status: "success" },
        });
      } else if (!ref) {
        router.push({
          pathname: "/signup",
          query: { status: "error" },
        });
      }

      // alert("Thanks for doing business with us! Come back soon!!")
    },

    // onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  const signupBody = {
    schname: schoolName,
    schlocation: `${schoolCity}, ${country}`,
    schaddr: schoolAddress,
    schemail: schoolEmail,
    schwebsite: schoolWebsite,
    // schlogo: schlogo64,
    schlogo: schoolLogoUrl,
    user: {
      firstname: firstName,
      surname: lastName,
      email: email,
      phoneno: phone,
      password: password,
      password_confirmation: confPassword,
    },
    pricing_id: defaultPlanValue2()?.value,
  };

  // console.log({
  //   signupBody,
  // });

  const paymentSubmit = async () => {
    // const schlogo64 = await apiServices.signUp(schoolLogo);

    setActivateError(true);
    setSubmitStatus("loading");
    if (!paymentMode) {
      // setSubmitError(true);
      setSubmitStatus("error");
      // toast.error(`Please fill all fields`);
    } else if (paymentMode === "bank_transfer") {
      if (!transferCode) {
        setSubmitStatus("error4");
      } else {
        // toast.remove();
        setSubmitStatus("success");
        setSubmitError(false);
        setActivateError(false);

        const signUp = await apiServices.signUp(signupBody);
        // console.log({ signUp });
        // setSubmitSuccess(true);

        setTimeout(() => {
          setRedirect(true);
        }, 2000);

        setTimeout(() => {
          router.push("https://schoolmatesdemo.vercel.app/auth");
        }, 5000);
      }
    } else if (paymentMode === "paystack") {
      if (!paymentMode) {
        setSubmitStatus("error4");
      } else {
        try {
          // const paymentUrl = await apiServices.postPayment(payBody);

          const signUp = await apiServices.signUp(signupBody);

          const paymentUrl = await apiServices.postPayment(payBody);

          // console.log({ paymentUrl, signUp });

          window.location.href = paymentUrl?.url;

          // setSubmitStatus("success");
          // router.push({
          //   pathname: "/payment",
          //   query: { status: "success" },
          // });

          // await apiServices.postPayment(payBody);
        } catch (error) {
          // console.log({ pe: error });
          setPaymentError(error?.response?.data?.message);
          setSubmitStatus("error5");
        }
        // router.push({
        //   pathname: "/payment",
        //   query: { status: "success" },
        // });
        // setStage("you");
      }
    }
    // toast.remove();
    // setSubmitStatus("success");
    // setSubmitError(false);
    // setActivateError(false);
    // const paystack = new PaystackPop();
    // paystack.newTransaction({
    //   key: "",
    //   amount: convertStringToNumber(defaultPlanValue2()?.price) * 100,
    //   email: schoolEmail,
    //   firstname: firstName,
    //   lastname: lastName,
    //   onSuccess: (transaction) => {
    //     let message = `Payment was successful. Reference - ${transaction?.reference}`;
    //     console.log({ message });
    //   },
    //   onCancel: () => {
    //     console.log("You have Canceled the transaction");
    //   },
    // });
    // const pricings = await apiServices.getPricing();
    // alert("hello");
  };

  const personBack = () => {
    setSubmitError(false);

    setSubmitStatus("initial");

    setActivateError(false);
    router.push({
      pathname: "/signup",
      query: { plan: `${query?.plan}`, stage: "about_school" },
    });
  };

  const paymentBack = () => {
    setSubmitError(false);

    setSubmitStatus("initial");

    setActivateError(false);
    // setStage("you");
    router.push({
      pathname: "/signup",
      query: { plan: `${query?.plan}`, stage: "about_you" },
    });
  };

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
    router.push({
      pathname: "/signup",
      query: { plan: `initial`, stage: "about_school" },
    });
    // router.push({
    //   pathname: "/signup",
    //   query: { plan: `${query?.plan}`, stage: "payment" },
    // });
  }

  // useEffect(() => {
  //   if ((!query?.plan && !query?.stage) || !query?.status) {
  //     router.push({
  //       pathname: "/signup",
  //       query: { plan: `initial`, stage: "about_school" },
  //     });
  //   }
  // }, []);

  useEffect(() => {
    if (query?.stage != "about_school" && !schoolName) {
      router.push({
        pathname: "/signup",
        query: { plan: `initial`, stage: "about_school" },
      });
    }
  }, []);

  //   useEffect(() => {
  //     setPhone(defaultPhoneValue()[0]?.code);
  //     // console.log({ defaultPhoneValue: defaultPhoneValue() });
  //   }, []);

  // useEffect(() => {
  //   setPhone(defaultPhoneValue2()[0]?.code);
  //   console.log({ defaultPhoneValue2: defaultPhoneValue2() });
  // }, [phoneValue]);

  // console.log({
  //   // paymentMode,
  //   // countries1,
  //   // countries2,
  //   // phone,
  //   // phoneValue,
  // });

  // console.log({
  //   // signupBody,
  //   paymentError,
  //   transferCode,
  //   payCode,
  //   payBody,
  //   paymentMode,
  //   firstName,
  //   query,
  //   paymentPlan,
  //   pricings,
  //   planOptions: planOptions(),
  //   defaultPlanValue: defaultPlanValue(),
  //   computePlanFromId: computePlanFromId(),
  //   defaultPlanValue2: defaultPlanValue2(),
  // });

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

          {/* stepper */}
          {!query?.status && (
            <div className='w-full flex justify-center mt-[20px] mb-[50px]'>
              <ul className='steps'>
                <li
                  className={`step step-primary px-[10px] md:px-[40px] font-bold text-[14px] md:text-[16px] leading-[20px]`}
                >
                  About school
                </li>
                <li
                  className={`step ${
                    query?.stage === "about_you"
                      ? "step-primary"
                      : query?.stage === "payment"
                      ? "step-primary"
                      : "text-gray-300"
                  }  font-bold text-[14px] md:text-[16px] leading-[25px] `}
                >
                  About you
                </li>
                <li
                  className={`step ${
                    query?.stage === "payment"
                      ? "step-primary"
                      : "text-gray-300"
                  }  font-bold text-[14px] md:text-[16px] leading-[25px] `}
                >
                  Payment
                </li>
              </ul>
            </div>
          )}

          {query?.stage === "about_you" && (
            <AboutYou
              activateError={activateError}
              firstName={firstName}
              setFirstName={setFirstName}
              setLastName={setLastName}
              lastName={lastName}
              email={email}
              emailError={emailError}
              handleEmailChange={handleEmailChange}
              phoneCodesOptionsRefactored={phoneCodesOptionsRefactored}
              phoneCodesOptionsRefactored2={phoneCodesOptionsRefactored2}
              defaultPhoneValue={defaultPhoneValue}
              phone={phone}
              setPhone={setPhone}
              phoneError={phoneError}
              handlePhoneNumberChange={handlePhoneNumberChange}
              setPhoneValue={setPhoneValue}
              stage={stage}
              setStage={setStage}
              personSubmit={personSubmit}
              personBack={personBack}
              role={role}
              setRole={setRole}
              password={password}
              setPassword={setPassword}
              confPassword={confPassword}
              setConfPassword={setConfPassword}
              paymentMode={paymentMode}
              setPaymentMode={setPaymentMode}
              defaultPlanValue={defaultPlanValue}
              redirect={redirect}
              submitStatus={submitStatus}
            />
          )}

          {query?.stage === "about_school" && (
            <AboutSchool
              schoolName={schoolName}
              setSchoolName={setSchoolName}
              schoolWebsite={schoolWebsite}
              email={schoolEmail}
              emailError={emailError2}
              handleEmailChange={handleEmailChange2}
              setSchoolWebsite={setSchoolWebsite}
              schoolAddress={schoolAddress}
              setSchoolAddress={setSchoolAddress}
              schoolCity={schoolCity}
              setSchoolCity={setSchoolCity}
              schoolLogo={schoolLogo}
              setSchoolLogo={setSchoolLogo}
              schoolLogoUrl={schoolLogoUrl}
              setSchoolLogoUrl={setSchoolLogoUrl}
              schoolLogoName={schoolLogoName}
              setSchoolLogoName={setSchoolLogoName}
              activateUploadError={activateUploadError}
              setActivateUploadError={setActivateUploadError}
              countries={countries1}
              // country={country}
              setCountry={setCountry}
              activateError={activateError}
              setActivateError={setActivateError}
              defaultCountryValue={defaultCountryValue}
              submitError={submitError}
              schoolSubmit={schoolSubmit}
              paymentPlan={paymentPlan}
              setPaymentPlan={setPaymentPlan}
              plans={planOptions()}
              defaultPlanValue={defaultPlanValue}
              computePlanFromId={computePlanFromId()}
              query={query}
            />
          )}

          {query?.stage === "payment" && (
            <Payment
              firstName={firstName}
              lastName={lastName}
              email={email}
              phone={phone}
              schoolName={schoolName}
              schoolEmail={schoolEmail}
              schoolWebsite={schoolWebsite}
              schoolAddress={schoolAddress}
              schoolCity={schoolCity}
              schoolLogo={schoolLogo}
              schoolLogoUrl={schoolLogoUrl}
              schoolLogoName={schoolLogoName}
              country={country}
              activateError={activateError}
              setActivateError={setActivateError}
              submitError={submitError}
              schoolSubmit={schoolSubmit}
              paymentPlan={paymentPlan}
              plans={planOptions()}
              paymentBack={paymentBack}
              paymentSubmit={paymentSubmit}
              defaultPlanValue={defaultPlanValue2()}
              paymentMode={paymentMode}
              setPaymentMode={setPaymentMode}
              submitStatus={submitStatus}
              setSubmitStatus={setSubmitStatus}
              redirect={redirect}
              componentProps={componentProps}
              PaystackButton={PaystackButton}
              transferCode={transferCode}
              setTransferCode={setTransferCode}
              paymentError={paymentError}
            />
          )}

          {/* {query?.status === "success" && (
            <Success
              submitStatus={submitStatus}
              redirect={redirect}
              handleComplete={handleComplete}
            />
          )} */}

          {/* {query?.status === "error" && (
            <Error
              submitStatus={submitStatus}
              redirect={redirect}
              handleError={handleError}
            />
          )} */}
        </div>
      </div>
    </>
  );
};

export default Signup;

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
