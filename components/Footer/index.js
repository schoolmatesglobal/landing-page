import React from "react";
import { AiOutlineMail, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { BiSolidPhoneCall } from "react-icons/bi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookSquare } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className='bg-primary text-neutral-content'>
      <footer className='md:px-[80px] footer py-[50px] px-[30px] bg-primary text-neutral-content w-full  md:max-w-7xl mx-auto'>
        {/* column 1 */}
        <div className='md:max-w-[300px]'>
          <Link href='/' className=''>
            <img
              src='/schoolmates_logo2.png'
              alt=''
              className='w-[200px] md:w-[280px]'
            />
          </Link>
          {/* <p className="">
            A stress-free move day is just a few clicks away. We’ve got you
            covered with easier-than-ever booking, flexible service options.
          </p> */}
          <div className='flex space-x-[10px] mt-[10px]'>
            {/* <div className="">
              <IoLocationOutline size={20} className="" />
            </div> */}
            <p className='text-justify'>
              SchoolMates is your all-in-one solution for seamless school
              management. Elevate education, simplify administration, and foster
              collaboration effortlessly. Choose simplicity, choose Schoolmates.
            </p>
          </div>

          <div className='flex items-center'></div>
        </div>

        {/* column 2 */}
        <div>
          <span className='footer-title'>Features</span>
          <Link href='/#schools' className={` link link-hover`}>
            <p className='w-full'>For Schools</p>
          </Link>
          <Link href='/#teachers' className={` link link-hover my-[5px]`}>
            <p className='w-full'>For Teachers</p>
          </Link>
          <Link href='/#parents' className={` link link-hover `}>
            <p className='w-full'>For Parents</p>
          </Link>
          <Link href='/#students' className={` link link-hover my-[5px]`}>
            <p className='w-full'>For Students</p>
          </Link>
          {/* <a className='link link-hover my-[5px]'>Pricing</a>
          <a className='link link-hover'>Help</a> */}
          {/* <a className="link link-hover my-[5px]">Handy man / Packing</a> */}
        </div>

        {/* column 3 */}
        <div>
          <span className='footer-title'>Company</span>
          <Link href='/pricing' className={` link link-hover `}>
            <p className='w-full'>Pricing</p>
          </Link>
          <Link href='/privacy-policy' className={` link link-hover my-[5px]`}>
            <p className='w-full'>Privacy Policy</p>
          </Link>
          <Link href='/terms-of-use' className={` link link-hover `}>
            <p className='w-full'>Terms of Use</p>
          </Link>
        </div>

        {/* column 4 */}
        <div className='md:max-w-[350px]'>
          <span className='footer-title'>Contact Us</span>
          <div className='flex space-x-[10px] mb-[10px]'>
            <div className=''>
              <AiOutlineMail size={20} className='' />
            </div>
            <a
              href='mailto:removalsandselfstorage@gmail.com?subject=Enquiry'
              className='link link-hover'
            >
              info@schoolmateglobal.com
            </a>
          </div>
          <div className='flex space-x-[10px]'>
            <div className=''>
              <BiSolidPhoneCall size={20} className='' />
            </div>
            <div className='flex flex-col gap-y-[10px]'>
              <p className=''>
                <span className='link link-hover'>
                  <a href='tel:01634 940721'>+234-7033430934</a>
                </span>{" "}
                |{" "}
                <span className='link link-hover'>
                  <a href='tel:01892-234350'> 01-892523</a>
                </span>{" "}
              </p>
            </div>
          </div>
          <div className='flex space-x-[18px] mt-[10px]'>
            <a
              href='https://web.facebook.com/schoolmatesng/'
              target='_blank'
              rel='noreferrer'
              className='hover:text-white'
            >
              <FaFacebookSquare size={30} className='' />
            </a>
            {/* <a
              href='https://www.twitter.com'
              target='_blank'
              rel='noreferrer'
              className='hover:text-white'
            >
              <BsTwitter size={30} className='' />
            </a> */}
            <a
              href='https://www.instagram.com/schoolmatesng/'
              target='_blank'
              rel='noreferrer'
              className='hover:text-white'
            >
              <AiFillInstagram size={32} className='' />
            </a>
            {/* <a
              href='https://www.linkedin.com'
              target='_blank'
              rel='noreferrer'
              className='hover:text-white'
            >
              <AiFillLinkedin size={30} className='' />
            </a> */}
          </div>
        </div>
      </footer>
      <footer className='px-[80px] footer p-10 bg-primary text-neutral-content w-full justify-center md:max-w-7xl mx-auto border-t border-gray-400/50'>
        <p className='text-center text-[13px]'>
          Copyright © 2023 by Schoolmates
        </p>
      </footer>
    </div>
  );
};

export default Footer;
