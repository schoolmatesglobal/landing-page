import { BiLogOut, BiLogOutCircle, BiSolidPhoneCall } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import { RiCustomerService2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";
import Link from "next/link";
import ScrollUpMenuNav from "../ScrollUpMenuNav";
import { combineInitials, trimToFirstLetter } from "@/utils/logics";
import { CgProfile } from "react-icons/cg";
import { useRouter } from "next/router";
import { FiSettings } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";

// import ScrollUpMenuNav from '../ScrollUpMenuNav';

const Navbar = () => {

  const [shadow, setShadow] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [checked, setChecked] = useState(false);
  const [showFeature, setShowFeature] = useState(false);
  const [showFeature2, setShowFeature2] = useState(false);

  function handleClick() {
    setChecked(!checked);
  }

  const router = useRouter();
  // useEffect(() => {
  //   setPreviewUrl(singleMoversData?.personalDetails?.profileImageUrl);
  // }, [singleMoversData]);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, [shadow]);

  useEffect(() => {
    let oldScrollY = window.scrollY;
    const showNavbar = (e) => {
      if (window.scrollY == 0 || oldScrollY > window.scrollY) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
      oldScrollY = window.scrollY;
    };
    window.addEventListener("scroll", showNavbar);
  }, [showNav]);

  return (
    <>
      <div
        className={`${
          shadow
            ? "shadow-lg fixed left-0 right-0 top-0 z-50 "
            : "fixed left-0 right-0 top-0 z-50 "
        } flex flex-col items-center  `}
      >
        {/* Top Nav */}
        {/* {showNav && (
          <div className='bg-primary w-full'>
            <div className='flex lg:flex-row flex-col w-full md:max-w-7xl mx-auto px-[0px] items-center  py-[10px] h-[40px] text-white lg:justify-between text-[12px]'>
              <div className='flex  items-center'>
                <div className='flex'>
                  <p className='hidden'>Need help?</p>
                  <div className=' md:items-center ml-[10px] space-x-[7px] hidden md:flex'>
                    <RiCustomerService2Fill size={20} className='' />
                    <a href='tel:07869116203' className='link link-hover'>
                      07869116203{" "}
                    </a>
                    <p className=''>|</p>
                  </div>
                </div>

                <div className='flex items-center ml-[10px] space-x-[7px]'>
                  <BiSolidPhoneCall size={20} className='' />
                  <a href='tel:(800)-995-5003' className='link link-hover'>
                    (800) 995-5003{" "}
                  </a>
                </div>
              </div>
              <div className='lg:flex items-center  space-x-[10px] hidden pr-[10px]'>
                <div className=''>
                  <AiOutlineMail size={20} className='' />
                </div>
                <a
                  href='mailto:removalsandselfstorage@gmail.com?subject=Enquiry'
                  className='link link-hover'
                >
                  info@schoolmates.com
                </a>
              </div>
            </div>
          </div>
        )} */}
        {/* Main Nav */}
        <div
          className={`${
            shadow ? "bg-white/90" : "bg-[#f8ede7]"
          } w-full py-[10px] `}
        >
          <div className='drawer z-[900]'>
            <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
            <div className='drawer-content flex flex-col'>
              {/* Navbar */}
              <div className='w-full navbar h-[30px] md:max-w-7xl mx-auto items-center '>
                {/* nav-start */}
                <div className='navbar-start  flex  items-center'>
                  <Link href='/'>
                    <img
                      src='/schoolmates_logo.png'
                      alt=''
                      className='w-[200px]'
                    />
                  </Link>
                </div>

                {/* nav-center */}
                <div className='navbar-center  hidden lg:flex '>
                  <ul className='flex items-center lg:justify-between space-x-[30px]  xl:space-x-50px] text-[16px]'>
                    <li className='flex flex-col items-center group relative'>
                      <Link
                        href='/'
                        className={`${
                          router.pathname === "/" ? "font-bold " : ""
                        }  mb-[5px] `}
                      >
                        Home
                      </Link>
                      <div className={` btn-navs2 `}></div>
                    </li>

                    <li
                      className='flex flex-col items-center group relative cursor-pointer'
                      onMouseLeave={() => {
                        setShowFeature(false);
                      }}
                    >
                      <p
                        className={` pb-[5px] peer`}
                        onMouseEnter={() => {
                          setShowFeature(true);
                        }}
                      >
                        Features
                      </p>
                      <div
                        onMouseEnter={() => {
                          setShowFeature(true);
                        }}
                        className={` absolute right-0 w-[0px] peer-hover:left-0 bottom-0 peer-hover:w-full transition-all duration-200 h-[3px] bg-primary `}
                      ></div>

                      <ul
                        // tabIndex={0}
                        className={`${
                          showFeature && "opacity-[1] flex translate-y-[0px]"
                        } absolute top-[30px] opacity-0  translate-y-[50px] transition-all duration-200  bg-white  z-[1] flex-col space-y-[15px] py-[20px] shadow-xl b rounded-box w-[250px] text-[16px] px-[20px]`}
                      >
                        <li className='w-full'>
                          <Link
                            href='/#schools'
                            className={`${
                              router.pathname === "/#schools"
                                ? " text-secondary"
                                : ""
                            }  hover:text-secondary hover:link w-full`}
                            onClick={() => {
                              setShowDropdown(false);
                            }}
                          >
                            <p className='w-full'>For Schools</p>
                          </Link>
                        </li>

                        <li>
                          <Link
                            href='/#teachers'
                            className={`${
                              router.pathname === "/#teachers"
                                ? " text-secondary"
                                : ""
                            }  hover:text-secondary hover:link`}
                            onClick={() => {
                              setShowDropdown(false);
                            }}
                          >
                            <p className='w-full'>For Teachers</p>
                          </Link>
                        </li>

                        <li>
                          <Link
                            href='/#parents'
                            className={`${
                              router.pathname === "/#parents"
                                ? " text-secondary"
                                : ""
                            }  hover:text-secondary hover:link`}
                            onClick={() => {
                              setShowDropdown(false);
                            }}
                          >
                            <p className='w-full'>For Parents</p>
                          </Link>
                        </li>

                        <li>
                          <Link
                            href='/#students'
                            className={`${
                              router.pathname === "/#students"
                                ? " text-secondary"
                                : ""
                            }  hover:text-secondary hover:link`}
                            onClick={() => {
                              setShowDropdown(false);
                            }}
                          >
                            <p className='w-full'>For Students</p>
                          </Link>
                        </li>
                      </ul>
                    </li>

                    {/* <li className='dropdown dropdown-hover dropdown-end group'>
                      <label
                        tabIndex={0}
                        className='flex items-center '
                        onMouseEnter={() => {
                          setShowDropdown(true);
                        }}
                      >
                        <p className=''>Features</p>
                        <span className='group-hover:rotate-180 duration-100 ml-[5px]'>
                          <BsChevronDown />
                        </span>
                      </label>
                      {showDropdown && (
                        <ul
                          tabIndex={0}
                          className='dropdown-content border-t-[5px] bg-white border-primary z-[1] flex flex-col space-y-[15px] py-[20px] shadow-xl b rounded-box w-[250px] text-[16px] px-[20px]'
                        >
                          <li className='w-full'>
                            <Link
                              href='/#schools'
                              className={`${
                                router.pathname === "/#schools"
                                  ? " text-secondary"
                                  : ""
                              }  hover:text-secondary hover:link w-full`}
                              onClick={() => {
                                setShowDropdown(false);
                              }}
                            >
                              <p className='w-full'>For Schools</p>
                            </Link>
                          </li>
                     
                          <li>
                            <Link
                              href='/#teachers'
                              className={`${
                                router.pathname === "/#teachers"
                                  ? " text-secondary"
                                  : ""
                              }  hover:text-secondary hover:link`}
                              onClick={() => {
                                setShowDropdown(false);
                              }}
                            >
                              <p className='w-full'>For Teachers</p>
                            </Link>
                          </li>
                        
                          <li>
                            <Link
                              href='/#parents'
                              className={`${
                                router.pathname === "/#parents"
                                  ? " text-secondary"
                                  : ""
                              }  hover:text-secondary hover:link`}
                              onClick={() => {
                                setShowDropdown(false);
                              }}
                            >
                              <p className='w-full'>For Parents</p>
                            </Link>
                          </li>

                        
                          <li>
                            <Link
                              href='/#students'
                              className={`${
                                router.pathname === "/#students"
                                  ? " text-secondary"
                                  : ""
                              }  hover:text-secondary hover:link`}
                              onClick={() => {
                                setShowDropdown(false);
                              }}
                            >
                              <p className='w-full'>For Students</p>
                            </Link>
                          </li>
                        
                        </ul>
                      )}
                    </li> */}

                    <li className='flex flex-col items-center group relative'>
                      <Link
                        href='/pricing'
                        className={`${
                          router.pathname === "/pricing" ? "font-bold " : ""
                        } mb-[5px] `}
                      >
                        Pricing
                      </Link>
                      <div
                        className={` btn-navs2 `}
                        // className={` ${
                        //   router.pathname === "/pricing"
                        //     ? "btn-navs3"
                        //     : "btn-navs2"
                        // } `}
                      ></div>{" "}
                    </li>
                  </ul>
                </div>

                {/* nav right */}
                <div className='navbar-end  lg:w-[40%] flex  space-x-[10px]'>
                  <div className=' lg:space-x-[10px] hidden lg:flex'>
                    <Link
                      href='/pricing#price'
                      className='btn px-[40px] btn-secondary rounded-[50px]'
                    >
                      Get Started
                    </Link>
                    {/* <a className="btn btn-primary">Mover Login</a> */}
                  </div>

                  <div onClick={handleClick} className='flex-none lg:hidden'>
                    <label
                      htmlFor='my-drawer-3'
                      className='btn btn-square btn-ghost'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        className='inline-block w-8 h-8 stroke-current'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M4 6h16M4 12h16M4 18h16'
                        ></path>
                      </svg>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className='drawer drawer-start'>
              <input
                id='my_drawer_3'
                type='checkbox'
                className='drawer-toggle'
                checked={checked}
                onChange={handleClick}
              />
              <div className='drawer-side lg:hidden'>
                <label
                  htmlFor='my-drawer-3'
                  onClick={handleClick}
                  className='drawer-overlay'
                ></label>
                <div className='overflow-auto scrollbar-thin scrollbar-track-gray-200/50 scrollbar-thumb-gray-500/20 scrollbar-default h-[100%]'>
                  <ul className='menu p-4 w-[250px] md:w-[400px] h-full bg-base-100 md:text-[16px] flex flex-col space-y-[10px] md:space-y-[15px]'>
                    <li className='border-b-[2px] pb-[10px]'>
                      <Link onClick={handleClick} href='/' className='btn-nav'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleClick}
                        href='/#schools'
                        className='btn-nav'
                      >
                        Features for Schools
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleClick}
                        href='/#teachers'
                        className='btn-nav'
                      >
                        Features for Teachers
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleClick}
                        href='/#parents'
                        className='btn-nav'
                      >
                        Features for Parents
                      </Link>
                    </li>
                    <li className='border-b-[2px] pb-[10px]'>
                      <Link
                        onClick={handleClick}
                        href='/#students'
                        className='btn-nav'
                      >
                        Features for Students
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={handleClick}
                        href='/pricing'
                        className='btn-nav'
                      >
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* scrollup */}
      <ScrollUpMenuNav />
    </>
  );
};

export default Navbar;
