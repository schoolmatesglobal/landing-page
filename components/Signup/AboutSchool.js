import React from "react";
import SelectSearch from "../inputs/SelectSearch";
import { FiEdit } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import CustomFileInput from "../CustomFileInput";
import { roleOptions } from "@/dummyData/inputData";
import Link from "next/link";

const AboutSchool = ({
  activateError,
  schoolName,
  setSchoolName,
  schoolWebsite,
  setSchoolWebsite,
  defaultCountryValue,
  countries,
  country,
  setCountry,
  schoolAddress,
  setSchoolAddress,
  schoolCity,
  setSchoolCity,
  schoolLogo,
  setSchoolLogo,
  schoolLogoUrl,
  setSchoolLogoUrl,
  schoolLogoName,
  setSchoolLogoName,
  activateUploadError,
  setActivateUploadError,
  firstName,
  setFirstName,
  setLastName,
  lastName,
  email,
  emailError,
  handleEmailChange,
  phoneCodesOptionsRefactored,
  defaultPhoneValue,
  phone,
  phoneError,
  handlePhoneNumberChange,
  setPhoneValue,
  stage,
  setStage,
  submitLoading,
  submitError,
  schoolSubmit,
  paymentPlan,
  setPaymentPlan,
  plans,
  defaultPlanValue,
  computePlanFromId,
  query,
}) => {
  return (
    <div className='flex flex-col  mx-[20px] md:mx-[50px]'>
      {/* warning */}
      <div className='flex flex-col w-full items-center  mb-[20px] mt-[0px]'>
        <p className='text-secondary'>Fields marked with * are mandatory</p>
      </div>
      {/* row 1 */}
      <div className='flex flex-col mb-[20px] items-center justify-center space-y-[10px] lg:space-y-0 lg:flex-row lg:items-center lg:space-x-[50px]'>
        {/* left */}
        <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* school name */}
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text font-semibold'>
                School Name<span className='text-secondary'>*</span>
              </span>
            </label>
            <input
              type='text'
              placeholder='e.g Royaltribe Schools'
              className={`${
                activateError && !schoolName ? "ring ring-secondary" : ""
              } input input-primary w-full h-[43px]`}
              onChange={(e) => setSchoolName(e.target.value)}
              defaultValue={schoolName}
            />
          </div>
        </div>
      </div>

      {/* row 2*/}
      <div className='flex flex-col items-center mb-[20px] justify-center space-y-[10px] lg:space-y-0 lg:flex-row lg:items-start  lg:space-x-[50px]'>
        {/* left */}
        <div className='flex flex-[1] w-full flex-col md:flex-row md:space-x-[10px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* email */}
          <div className='form-control w-full '>
            <label className='label'>
              <span className='label-text font-semibold'>
                School Email<span className='text-secondary'>*</span>
              </span>
            </label>
            <input
              type='email'
              placeholder='e.g info@royaltribeschools.com'
              className={`${
                activateError && (!email || !emailError)
                  ? "ring ring-secondary"
                  : ""
              } input input-primary w-full h-[43px]`}
              onChange={handleEmailChange}
              //
              defaultValue={email}
            />
            {!emailError && (
              <p className='text-[14px] text-secondary mt-[5px]'>
                Please enter a valid email
              </p>
            )}
          </div>
        </div>

        {/* right */}
        <div className='flex flex-[1] w-full flex-col md:flex-row md:space-x-[10px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* email */}
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text font-semibold'>School Website</span>
            </label>
            <input
              type='url'
              placeholder='e.g royaltribeschools.com'
              className={`input input-primary w-full h-[43px]`}
              onChange={(e) => setSchoolWebsite(e.target.value)}
              defaultValue={schoolWebsite}
            />
          </div>
        </div>
      </div>

      {/* row 3*/}
      <div className='flex flex-col mb-[20px] items-center justify-center space-y-[10px] lg:space-y-0 lg:flex-row lg:items-center lg:space-x-[50px]'>
        {/* left */}
        <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* school website */}
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text font-semibold'>
                School Address<span className='text-secondary'>*</span>
              </span>
            </label>
            <input
              type='text'
              placeholder='e.g 40 Alex Sheldon Avenue, Victoria Island, Lagos.'
              className={`${
                activateError && !schoolAddress ? "ring ring-secondary" : ""
              } input input-primary w-full h-[43px]`}
              onChange={(e) => setSchoolAddress(e.target.value)}
              defaultValue={schoolAddress}
            />
          </div>
        </div>
      </div>

      {/* row 4*/}
      <div className='flex flex-col items-center mb-[30px] justify-center space-y-[10px] lg:space-y-0 lg:flex-row lg:items-start  lg:space-x-[50px]'>
        {/* right */}
        <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center md:items-start'>
          {/* country code */}
          <div className='flex flex-col w-full flex-[1]'>
            <label className='label'>
              <span className='label-text font-semibold'>
                Country <span className='text-secondary'>*</span>
              </span>
            </label>
            <SelectSearch
              placeholder='Select Country'
              options={countries}
              isSearchable={true}
              name='service2'
              // defaultValue={serviceOptions[2]}
              defaultValue={defaultCountryValue()}
              setValue={setCountry}
              // errorCheck={activateError && !phoneValue}
            />
            {/* <PhoneCountryInput onChange={(e)=> setPhoneValue(e.target.value)}/> */}
          </div>
        </div>
        {/* left */}
        <div className='flex flex-[1] w-full flex-col md:flex-row md:space-x-[10px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* email */}
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text font-semibold'>
                Location / State<span className='text-secondary'>*</span>
              </span>
            </label>
            <input
              type='text'
              placeholder='e.g Lagos'
              className={`${
                activateError && !schoolCity ? "ring ring-secondary" : ""
              } input input-primary w-full h-[43px]`}
              onChange={(e) => setSchoolCity(e.target.value)}
              defaultValue={schoolCity}
            />
          </div>
        </div>
      </div>

      {/* row 5*/}
      <div className='flex flex-col items-center mb-[0px] justify-center space-y-[10px] lg:space-y-0 lg:flex-row lg:items-start  lg:space-x-[50px]'>
        {/* left */}
        <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center md:items-start'>
          <div className='flex flex-col w-full flex-[1]'>
            <label className='label'>
              <span className='label-text font-semibold'>
                Payment Plan <span className='text-secondary'>*</span>
              </span>
            </label>
            <SelectSearch
              placeholder='Select your payment plan'
              options={plans}
              isSearchable={false}
              name='plans'
              // defaultValue={serviceOptions[2]}
              defaultValue={defaultPlanValue()}
              setValue={setPaymentPlan}
              errorCheck={
                activateError && (!paymentPlan 
                  // || defaultPlanValue()?.length === 0
                  )
              }
            />
          </div>
        </div>
        {/* right */}
        <div className='flex lg:flex-[1] w-full'>
          <div className='flex w-full flex-col'>
            {/* image preview */}
            <div className='flex space-x-[20px] items-center mb-[10px] w-full justify-between'>
              <div className='flex flex-col'>
                <p className=' font-bold label-text mb-[0px]'>School Logo</p>
                <p className=' text-gray-400  text-[13px] mt-[0px]'>
                  Accepted file types: PNG, JPG; Max. file size: 2MB
                </p>
              </div>
              {schoolLogoUrl && !activateUploadError ? (
                <div className='avatar '>
                  <div className='w-[50px] h-[50px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                    <img src={schoolLogoUrl} />
                  </div>
                </div>
              ) : (
                <div className='avatar '>
                  <div className='w-[50px] h-[50px] rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                    <img src='/img_plh.jpg' />
                  </div>
                </div>
              )}
            </div>

            <CustomFileInput
              activateError={activateError}
              previewUrl={schoolLogoUrl}
              setPreviewUrl={setSchoolLogoUrl}
              setImageUpload={setSchoolLogo}
              imageUpload={schoolLogo}
              imageName={schoolLogoName}
              setImageName={setSchoolLogoName}
              fileUploadError={activateUploadError}
              setFileUploadError={setActivateUploadError}
              // data={details.companyDetails.companyProfilePixName}
            />
            {!!activateUploadError && (
              <p className=' text-secondary text-[14px] mt-[10px]'>
                {activateUploadError}
              </p>
            )}
          </div>
        </div>
      </div>

      {submitError && (
        <div className='w-full flex justify-center text-[14px] mt-[20px] text-secondary bg-secondary/20 rounded-[10px] py-[10px] px-[30px]'>
          Please fill all mandatory fields
        </div>
      )}

      {/* submit button */}
      <div className=' mt-[50px] w-full flex justify-center'>
        <div className='flex flex-col items-center justify-center w-full'>
          <div className='w-full flex justify-end'>
            <button
              onClick={() => {
                // setStage("you");
                schoolSubmit();
              }}
              // disabled={submitLoading}
              className='btn btn-secondary md:btn-wide flex items-center space-x-[5px] '
            >
              {<span className=''>Next</span>}
              {
                <span className=''>
                  <IoIosArrowForward className='text-[20px]' />
                </span>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSchool;
