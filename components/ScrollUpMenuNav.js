import React, { useState, useEffect } from "react";
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiChatSmile3Fill } from "react-icons/ri";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const ScrollUpMenuNav = () => {
  const [scrollUp, setScrollUp] = useState(false);
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  // Replace '1234567890' with the actual WhatsApp number
  const whatsappNumber = "+2347033430934";

  // WhatsApp URL with the phone number
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setShowWhatsapp(true);
    }, 2000);
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <div className='flex flex-col items-center'>
      {/* scroll button */}
      { (
        <div
          className={`${showWhatsapp ? "opacity-100": "opacity-0"} tooltip tooltip-left tooltip-[#f5f5f5] cursor-pointer lg:flex bottom-[100px] md:bottom-[100px]  mb-[0px] fixed flex-col z-[60] right-[28px]  md:right-[28px]  xs:ml-[20px] md:ml-[40px] duration-300`}
          // className={`
          //   ${
          //   isVisible
          //     ? "bottom-[80px] cursor-pointer"
          //     : "bottom-[0px] cursor-pointer"
          // }
          //     tooltip tooltip-left tooltip-[#f5f5f5] cursor-pointer lg:flex  mb-[0px] fixed flex-col z-[60] right-[20px]  md:right-0  xs:ml-[20px] md:ml-[40px] duration-300`}
          data-tip='Chat with us on Whatsapp'
        >
          <a
            href={whatsappUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='text-[40px] cursor-pointer rounded-[50%] h-[50px] w-[50px] flex justify-center items-center shadow-lg outline outline-white/50 outline-[0.5px] hover:scale-[1.2] hover:outline-white/[2] hover:text-royal/70 duration-300 bg-green-500 p-[5px] text-white md:p-[5px] mb-[20px]'
          >
            <FaWhatsapp className='cursor-pointer' />
          </a>
        </div>
      )}
      <div
        onClick={scrollToTop}
        className={
          isVisible
            ? "lg:flex cursor-pointer fixed flex-col z-50 left-[20px] bottom-[20px] md:left-0 xs:ml-[20px] md:ml-[40px] duration-300 opacity-[80%]"
            : "lg:flex fixed flex-col z-[50] left-[20px] bottom-[20px] md:left-0 xs:ml-[20px] md:ml-[40px] opacity-[0%] duration-300"
        }
      >
        <div className='text-[40px] rounded-[50%] shadow-lg outline outline-white/50 outline-[0.5px] hover:scale-[1.2] hover:outline-white/[2] hover:text-royal/70 duration-300 bg-gray-700/50 p-[5px] text-white md:p-[5px] mb-[20px]'>
          <MdKeyboardArrowUp />
        </div>
      </div>
    </div>
  );
};

export default ScrollUpMenuNav;
