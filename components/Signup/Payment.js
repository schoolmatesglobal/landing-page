import React, { useState } from "react";
import SelectSearch from "../inputs/SelectSearch";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PhoneCountryInput from "../inputs/phoneInput";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { roleOptions } from "@/dummyData/inputData";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

const Payment = ({
  firstName,
  lastName,
  email,
  phone,
  schoolName,
  schoolEmail,
  schoolWebsite,
  schoolAddress,
  schoolCity,
  schoolLogo,
  schoolLogoUrl,
  schoolLogoName,
  country,
  activateError,
  setActivateError,
  submitError,
  schoolSubmit,
  paymentPlan,
  plans,
  paymentBack,
  paymentSubmit,
  defaultPlanValue,
  paymentMode,
  setPaymentMode,
  submitStatus,
  setSubmitStatus,
  redirect,
  PaystackButton,
  componentProps,
  transferCode,
  setTransferCode,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  // Replace '1234567890' with the actual WhatsApp number
  const whatsappNumber = "+2347033430934";

  // WhatsApp URL with the phone number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  // console.log({ firstName });

  return (
    <div className='flex flex-col  mx-[20px] md:mx-[50px]'>
      <div className='flex flex-col w-full items-center  mb-[30px] mt-[0px]'>
        <p className='text-secondary text-[18px] font-semibold'>Summary</p>
      </div>

      {schoolLogoUrl && (
        <div className='flex flex-col w-full items-center  mb-[30px] mt-[0px]'>
          {/* <p className='text-secondary text-[18px] font-semibold'>Summary</p> */}
          <div className='avatar '>
            <div className='w-[80px] h-[80px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
              <img src={schoolLogoUrl} />
            </div>
          </div>
        </div>
      )}

      {/* row 1*/}
      <div className='flex flex-col mb-[20px] lg:mb-[30px] items-center justify-center space-y-[10px] lg:space-y-0 lg:flex-row lg:items-start  lg:space-x-[50px]'>
        {/* right */}
        <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center md:items-start'>
          {/* Telephone* */}
          <div className='form-control w-full flex-[1]'>
            <label className='label px-[0]'>
              <span className='label-text font-semibold'>School Name</span>
            </label>

            <p className=''>{schoolName ? schoolName : "********"}</p>
          </div>
        </div>
        {/* left */}
        <div className='flex flex-[1] w-full flex-col md:flex-row md:space-x-[10px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* email */}
          <div className='form-control w-full '>
            <label className='label px-[0]'>
              <span className='label-text font-semibold'>Schoool Email</span>
            </label>
            <p className=''>{schoolEmail ? schoolEmail : "********"}</p>
          </div>
        </div>

        {/* right */}
        <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center md:items-start'>
          {/* Telephone* */}
          <div className='form-control w-full flex-[1]'>
            <label className='label px-[0]'>
              <span className='label-text font-semibold'>School Website</span>
            </label>

            {/* <p className=''>{schoolWebsite}</p> */}
            <p className=''>{schoolWebsite ? schoolWebsite : "********"}</p>
          </div>
        </div>
      </div>

      {/* row 2*/}
      <div className='flex flex-col border-b-[2px] pb-[30px] mb-[20px] lg:mb-[30px] items-center justify-center space-y-[10px] lg:space-y-0 lg:flex-row lg:items-start  lg:space-x-[50px]'>
        {/* right */}
        <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center md:items-start'>
          {/* Telephone* */}
          <div className='form-control w-full flex-[1]'>
            <label className='label px-[0]'>
              <span className='label-text font-semibold'>School Address</span>
            </label>

            {/* <p className=''>{schoolAddress}</p> */}
            <p className=''>{schoolAddress ? schoolAddress : "********"}</p>
          </div>
        </div>
        {/* left */}
        <div className='flex flex-[1] w-full flex-col md:flex-row md:space-x-[10px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* email */}
          <div className='form-control w-full '>
            <label className='label px-[0]'>
              <span className='label-text font-semibold'>Location / City</span>
            </label>
            {/* <p className=''>{schoolCity}</p> */}
            <p className=''>{schoolCity ? schoolCity : "********"}</p>
          </div>
        </div>

        {/* right */}
        <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center md:items-start'>
          {/* Telephone* */}
          <div className='form-control w-full flex-[1]'>
            <label className='label px-[0]'>
              <span className='label-text font-semibold'>Country</span>
            </label>

            {/* <p className=''>{country}</p> */}
            <p className=''>{country ? country : "********"}</p>
          </div>
        </div>
      </div>

      {/* row 3 */}
      <div className='flex flex-col  mb-[20px] lg:mb-[30px] items-center justify-center space-y-[10px] lg:space-y-0 lg:flex-row lg:items-center lg:space-x-[50px]'>
        {/* left */}
        <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* first name */}
          <div className='form-control w-full'>
            <label className='label px-[0]'>
              <span className='label-text font-semibold'>First Name</span>
            </label>
            {/* <p className=''>{firstName}</p> */}
            <p className=''>{firstName ? firstName : "********"}</p>
          </div>
        </div>
        {/* right */}
        <div className='flex flex-[1] w-full flex-col md:flex-row md:space-x-[10px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* last name */}
          <div className='form-control w-full '>
            <label className='label px-[0]'>
              <span className='label-text font-semibold'>Last Name</span>
            </label>
            {/* <p className=''>{lastName}</p> */}
            <p className=''>{lastName ? lastName : "********"}</p>
          </div>
        </div>

        {/* left */}
        <div className='flex flex-[1] w-full flex-col md:flex-row md:space-x-[10px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* email */}
          <div className='form-control w-full '>
            <label className='label px-[0]'>
              <span className='label-text font-semibold'>Email</span>
            </label>
            {/* <p className=''>{email}</p> */}
            <p className=''>{email ? email : "********"}</p>
          </div>
        </div>
      </div>

      {/* row 4*/}
      <div className='flex flex-col border-b-[2px] pb-[30px] mb-[20px] lg:mb-[30px] items-center justify-center space-y-[10px] lg:space-y-0 lg:flex-row lg:items-start  lg:space-x-[50px]'>
        {/* right */}
        <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center md:items-start'>
          {/* Telephone* */}
          <div className='form-control w-full flex-[1]'>
            <label className='label px-[0]'>
              <span className='label-text font-semibold'>Telephone</span>
            </label>

            <p className=''>{phone ? phone : "********"}</p>
          </div>
        </div>

        {/* right */}
        <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center md:items-start'>
          {/* Telephone* */}
          <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center md:items-start'>
            {/* Telephone* */}
            <div className='form-control w-full flex-[1]'>
              <label className='label px-[0]'>
                <span className='label-text font-semibold'>
                  Pricing Package
                </span>
              </label>

              {/* <p className=''>
              {defaultPlanValue?.label} - (₦{defaultPlanValue?.price})
            </p> */}
              <p className=''>
                {defaultPlanValue ? defaultPlanValue?.label : "********"}{" "}
              </p>
            </div>
          </div>
        </div>

        {/* right */}
        <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center md:items-start'>
          {/* Telephone* */}
          <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center md:items-start'>
            {/* Telephone* */}
            <div className='form-control w-full flex-[1]'>
              <label className='label px-[0]'>
                <span className='label-text font-semibold'>Pricing Amount</span>
              </label>

              <p className=''>
                {defaultPlanValue ? `₦${defaultPlanValue?.price}` : "********"}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* row 6 */}
      <div className='flex flex-col md:flex-row md:items-start space-y-[20px] md:space-x-[50px] lg:space-x-[100px] md:space-y-0 w-full'>
        {/* left */}
        <div className='mb-[0px] flex-[1]'>
          <label className='label cursor-pointer flex items-center space-x-[10px] md:space-x-[10px] mb-[10px]'>
            <input
              type='radio'
              name='radio-1'
              className={`${
                activateError && !paymentMode ? "ring ring-secondary" : ""
              } radio radio-primary`}
              onChange={(e) => {
                setPaymentMode(e.target.value);
                setSubmitStatus("initial");
                setActivateError(false);
              }}
              value='bank_transfer'
              checked={paymentMode === "bank_transfer"}
            />
            <p className='leading-[18px] text-[14px] md:text-[14px] font-semibold mb-[0px] flex-[1]'>
              Direct Bank Transfer
            </p>
          </label>
          <p className='text-[15px] mb-[5px]'>
            <span className='font-semibold'>Account Name:</span> Schoolmates
            Global Ltd
          </p>
          <p className='text-[15px] mb-[5px]'>
            <span className='font-semibold'>Account Number:</span> 0698123567
          </p>
          <p className='text-[15px] mb-[10px]'>
            <span className='font-semibold'>Bank Name:</span> Access Bank
          </p>

          {paymentMode === "bank_transfer" && (
            <div className='flex flex-[1] w-full flex-col md:flex-row md:space-x-[10px] space-y-[10px] md:space-y-0 md:justify-center mb-[10px]'>
              <div className='form-control w-full '>
                {/* <label className='label'>
                <span className='label-text font-semibold'>
                  Last Name<span className='text-secondary'>*</span>
                </span>
              </label> */}
                <input
                  type='text'
                  placeholder='Enter Transfer ID'
                  className={`${
                    activateError && !transferCode ? "ring ring-secondary" : ""
                  } input input-primary w-full h-[43px]`}
                  onChange={(e) => setTransferCode(e.target.value)}
                  defaultValue={transferCode}
                />
              </div>
            </div>
          )}
          <p className='text-[14px] mb-[5px] italic text-secondary'>
            <span className='font-semibold  '>NB: </span>After payment, input
            the transfer ID, complete sign up. Then contact{" "}
            <a
              href={whatsappUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='link font-semibold'
            >
              Admin
            </a>{" "}
            to confirm payment, to get account activated.
          </p>
        </div>

        {/* right */}
        <div className='mb-[0px] flex-[1]'>
          <label className='label cursor-pointer flex items-center space-x-[10px] md:space-x-[10px] mb-[10px]'>
            <input
              type='radio'
              name='radio-1'
              className={`${
                activateError && !paymentMode ? "ring ring-secondary" : ""
              } radio radio-primary`}
              onChange={(e) => {
                setPaymentMode(e.target.value);
                setSubmitStatus("initial");
                setActivateError(false);
              }}
              value='paystack'
              checked={paymentMode === "paystack"}
            />
            <p className='leading-[18px] text-[14px] md:text-[14px] font-semibold mb-[0px] flex-[1]'>
              Pay Stack
            </p>
          </label>
          <div className='w-full mb-[10px]'>
            <img
              src='cards.svg'
              alt=''
              className='h-[20px] md:h-[25px] w-fit'
            />
          </div>
          <p className='text-[14px] mb-[5px] '>
            Click on make payment button to complete payment process.
          </p>
        </div>
      </div>

      {submitStatus === "error" && (
        <div className='w-full flex justify-center text-[14px] mt-[20px] text-secondary bg-secondary/20 rounded-[10px] py-[10px] px-[30px]'>
          Please select a payment method
        </div>
      )}

      {submitStatus === "error4" && (
        <div className='w-full flex justify-center text-[14px] mt-[20px] text-secondary bg-secondary/20 rounded-[10px] py-[10px] px-[30px]'>
          Please input the ID of the Transfer made
        </div>
      )}

      {submitStatus === "error5" && (
        <div className='w-full flex justify-center text-[14px] mt-[20px] text-secondary bg-secondary/20 rounded-[10px] py-[10px] px-[30px]'>
          Something went wrong
        </div>
      )}

      {/* {submitStatus === "error2" && (
        <div className='w-full flex justify-center text-[14px] mt-[20px] text-secondary bg-secondary/20 rounded-[10px] py-[10px] px-[30px]'>
          Passwords provided don't match
        </div>
      )} */}

      {/* {submitStatus === "success" && (
        <div className='w-full flex justify-center text-[14px] mt-[20px] text-green-800 bg-green-800/20 rounded-[10px] py-[10px] px-[30px]'>
          {redirect ? (
            <div className='flex items-center space-x-[10px]'>
              <span className='loading loading-dots loading-md'></span>{" "}
              <p className=''>Redirecting to portal login.</p>
            </div>
          ) : (
            <p className=''>Registration completed successfully!</p>
          )}
        </div>
      )} */}

      {/* submit button */}
      <div className=' mt-[50px] w-full flex justify-center'>
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='w-full flex space-x-[20px] justify-end'>
            <button
              // onClick={removalFormSubmit}
              // disabled={submitLoading}
              onClick={() => {
                paymentBack();
              }}
              className='btn btn-secondary btn-outline md:btn-wide flex items-center space-x-[5px] '
            >
              {
                <span className=''>
                  <IoIosArrowBack className='text-[20px]' />
                </span>
              }
              {<span className=''>Previous</span>}
            </button>
            {/* {paymentMode !== "paystack" && ( */}
            {
              <button
                onClick={() => paymentSubmit()}
                disabled={!paymentMode || submitStatus === "loading"}
                className='btn btn-secondary md:btn-wide flex items-center space-x-[5px]'
              >
                {submitStatus !== "loading" && (
                  <span className=''>{`${
                    paymentMode === "bank_transfer"
                      ? "Complete Signup"
                      : paymentMode === "paystack"
                      ? "Make Payment"
                      : "Make Payment"
                  }`}</span>
                )}
                {submitStatus !== "loading" && (
                  <span className=''>
                    <IoIosArrowForward className='text-[20px]' />
                  </span>
                )}
                {submitStatus === "loading" && (
                  <span className='loading loading-spinner loading-md text-white'></span>
                )}
              </button>
            }
            {/* {paymentMode === "paystack" && (
              <PaystackButton
                className='btn btn-secondary md:btn-wide flex items-center space-x-[5px]'
                {...componentProps}
              />
            )} */}
          </div>
          {/* {submitError && (
            <div className='text-[14px] mt-[15px] text-secondary bg-secondary/20 rounded-[10px] py-[10px] px-[30px]'>
              Please fill all mandatory fields
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Payment;
