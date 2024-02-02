import React, { useState } from "react";
import SelectSearch from "../inputs/SelectSearch";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import PhoneCountryInput from "../inputs/phoneInput";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";
import { roleOptions } from "@/dummyData/inputData";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

const AboutYou = ({
  activateError,
  firstName,
  setFirstName,
  setLastName,
  lastName,
  email,
  emailError,
  handleEmailChange,
  role,
  setRole,
  password,
  setPassword,
  confPassword,
  setConfPassword,
  gender,
  setGender,
  phone,
  setPhone,
  phoneError,
  submitSuccess,
  setSubmitSuccess,
  submitError,
  personSubmit,
  personBack,
  defaultRoleValue,
  redirect,
  submitStatus,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <div className='flex flex-col  mx-[20px] md:mx-[50px]'>
      {/* row 1 */}
      <div className='flex flex-col  mb-[20px] items-center justify-center space-y-[10px] lg:space-y-0 lg:flex-row lg:items-center lg:space-x-[50px]'>
        {/* left */}
        <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* first name */}
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text font-semibold'>
                First Name<span className='text-secondary'>*</span>
              </span>
            </label>
            <input
              type='text'
              placeholder='First name'
              className={`${
                activateError && !firstName ? "ring ring-secondary" : ""
              } input input-primary w-full h-[43px]`}
              onChange={(e) => setFirstName(e.target.value)}
              defaultValue={firstName}
            />
          </div>
        </div>
        {/* right */}
        <div className='flex flex-[1] w-full flex-col md:flex-row md:space-x-[10px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* last name */}
          <div className='form-control w-full '>
            <label className='label'>
              <span className='label-text font-semibold'>
                Last Name<span className='text-secondary'>*</span>
              </span>
            </label>
            <input
              type='text'
              placeholder='Last name'
              className={`${
                activateError && !lastName ? "ring ring-secondary" : ""
              } input input-primary w-full h-[43px]`}
              onChange={(e) => setLastName(e.target.value)}
              defaultValue={lastName}
            />
          </div>
        </div>
      </div>

      {/* row 2*/}
      <div className='flex flex-col mb-[20px] items-center justify-center space-y-[10px] lg:space-y-0 lg:flex-row lg:items-start  lg:space-x-[50px]'>
        {/* left */}
        <div className='flex flex-[1] w-full flex-col md:flex-row md:space-x-[10px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* email */}
          <div className='form-control w-full '>
            <label className='label'>
              <span className='label-text font-semibold'>
                Email<span className='text-secondary'>*</span>
              </span>
            </label>
            <input
              type='email'
              placeholder='Email address'
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
                Email format is incorrect.
              </p>
            )}
            {emailError && (
              <p className='text-[14px] text-primary mt-[5px]'>
                Please enter only a valid email.
              </p>
            )}
          </div>
        </div>

        {/* right */}
        <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center md:items-start'>
          {/* country code */}
          {/* <div className='flex flex-col w-full flex-[1]'>
            <label className='label'>
              <span className='label-text font-semibold'>
                Country Code<span className='text-secondary'>*</span>
              </span>
            </label>
            <SelectSearch
              placeholder='Select'
              options={phoneCodesOptionsRefactored2}
              isSearchable={true}
              name='service2'
              // defaultValue={serviceOptions[2]}
              defaultValue={defaultPhoneValue()}
              setValue={setPhoneValue}
              // errorCheck={activateError && !phoneValue}
            />
          </div> */}
          {/* Telephone* */}
          <div className='form-control w-full flex-[1]'>
            <label className='label'>
              <span className='label-text font-semibold'>
                Telephone<span className='text-secondary'>*</span>
              </span>
            </label>
            {/* <input
              type='tel'
              placeholder='Telephone'
              className={`${
                activateError && (!phone || !phoneError)
                  ? "ring ring-secondary"
                  : ""
              } input input-primary w-full h-[43px]`}
              onChange={handlePhoneNumberChange}
              value={phone}
            /> */}
            <div
              className={`${
                activateError && !phone ? "ring ring-secondary" : ""
              }  flex input input-primary h-[43px]`}
            >
              <PhoneInput
                international
                countryCallingCodeEditable={false}
                flags={flags}
                defaultCountry='NG'
                onChange={setPhone}
                value={phone}
                className='w-full'
              />
            </div>
            {!phoneError && (
              <p className='text-[14px] text-secondary mt-[5px]'>
                Please enter a valid number
              </p>
            )}
          </div>
        </div>
      </div>

      {/* row 3*/}
      <div className='flex flex-col items-center mb-[20px] justify-center space-y-[10px] lg:space-y-0 lg:flex-row lg:items-start  lg:space-x-[50px]'>
        {/* left */}
        {/* <div className='flex w-full flex-[1] flex-col items-center md:flex-row md:space-x-[30px] space-y-[10px] md:space-y-0 md:justify-center md:items-start'>
          <div className='flex flex-col w-full flex-[1]'>
            <label className='label'>
              <span className='label-text font-semibold'>
                Role <span className='text-secondary'>*</span>
              </span>
            </label>
            <SelectSearch
              placeholder='Select your role'
              options={roleOptions}
              isSearchable={true}
              name='service2'
              // defaultValue={serviceOptions[2]}
              defaultValue={defaultRoleValue()}
              setValue={setRole}
              errorCheck={activateError && !role}
            />
          </div>
        </div> */}

        {/* left */}
        <div className='flex flex-[1] w-full flex-col md:flex-row md:space-x-[10px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* password */}
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text font-semibold'>
                Password <span className='text-secondary'>*</span>
              </span>
            </label>
            <div className='w-full flex  justify-between mb-[0px] relative'>
              <div className='w-full '>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder='Enter your password'
                  className={`${
                    activateError && !password ? "ring ring-secondary" : ""
                  } input input-primary w-full h-[43px]`}
                  onChange={(e) => setPassword(e.target.value)}
                  defaultValue={password}
                />
              </div>
              <span
                onClick={() => setShowPassword(!showPassword)}
                className='pl-[0px] cursor-pointer pt-[10px] absolute right-[10px]'
              >
                {showPassword ? (
                  <RiEyeCloseLine className={`text-primary text-[20px]`} />
                ) : (
                  <RiEyeLine className={`text-primary  text-[20px]`} />
                )}
              </span>
            </div>
          </div>
        </div>
        {/* right */}
        <div className='flex flex-[1] w-full flex-col md:flex-row md:space-x-[10px] space-y-[10px] md:space-y-0 md:justify-center'>
          {/* password */}
          <div className='form-control w-full'>
            <label className='label'>
              <span className='label-text font-semibold'>
                Confirm Password <span className='text-secondary'>*</span>
              </span>
            </label>
            <div className='w-full flex  justify-between mb-[0px] relative'>
              <div className='w-full '>
                <input
                  type={showPassword2 ? "text" : "password"}
                  placeholder='Enter your password'
                  className={`${
                    activateError && !confPassword ? "ring ring-secondary" : ""
                  } input input-primary w-full h-[43px]`}
                  onChange={(e) => setConfPassword(e.target.value)}
                  defaultValue={confPassword}
                />
              </div>
              <span
                onClick={() => setShowPassword2(!showPassword2)}
                className='pl-[0px] cursor-pointer pt-[10px] absolute right-[10px]'
              >
                {showPassword2 ? (
                  <RiEyeCloseLine className={`text-primary text-[20px]`} />
                ) : (
                  <RiEyeLine className={`text-primary  text-[20px]`} />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* row 4*/}
      {/* <div className='flex space-x-[20px] items-center'>
        <div className='mb-[0px]'>
          <label className='label cursor-pointer flex items-center space-x-[10px] md:space-x-[10px] w-full'>
            <input
              type='radio'
              name='radio-1'
              className={`${
                activateError && !gender ? "ring ring-secondary" : ""
              } radio radio-primary`}
              onChange={(e) => {
                setGender(e.target.value);
               
              }}
              value='Male'
              checked={gender === "Male"}
            />
            <p className='leading-[18px] text-[14px] md:text-[14px] font-semibold mb-[0px] '>
              Male
            </p>
          </label>
        </div>
        <div className='mb-[0px]'>
          <label className='label cursor-pointer flex items-center space-x-[10px] md:space-x-[10px] w-full'>
            <input
              type='radio'
              name='radio-1'
              className={`${
                activateError && !gender ? "ring ring-secondary" : ""
              } radio radio-primary`}
              onChange={(e) => {
                setGender(e.target.value);
               
              }}
              value='Female'
              checked={gender === "Female"}
            />
            <p className='leading-[18px] text-[14px] md:text-[14px] font-semibold mb-[0px] '>
              Female
            </p>
          </label>
        </div>
      </div> */}

      {submitStatus === "error" && (
        <div className='w-full flex justify-center text-[14px] mt-[20px] text-secondary bg-secondary/20 rounded-[10px] py-[10px] px-[30px]'>
          Please fill all mandatory fields
        </div>
      )}

      {submitStatus === "error2" && (
        <div className='w-full flex justify-center text-[14px] mt-[20px] text-secondary bg-secondary/20 rounded-[10px] py-[10px] px-[30px]'>
          Passwords provided don't match
        </div>
      )}

      {submitStatus === "error3" && (
        <div className='w-full flex justify-center text-[14px] mt-[20px] text-secondary bg-secondary/20 rounded-[10px] py-[10px] px-[30px]'>
          Passwords should be atleast 8 characters
        </div>
      )}

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
                personBack();
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
            <button
              onClick={() => personSubmit()}
              // disabled={submitLoading}
              className='btn btn-secondary md:btn-wide flex items-center space-x-[5px]'
            >
              {<span className=''>Next</span>}
              {
                <span className=''>
                  <IoIosArrowForward className='text-[20px]' />
                </span>
              }
            </button>
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

export default AboutYou;
