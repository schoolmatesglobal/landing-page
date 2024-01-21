import Link from "next/link";
import React, { useState } from "react";

import {
  convertToSentenceCase,
  formatMovePrice,
  formatPrice,
  generateRandomValues,
  getCurrentDateFormatted,
} from "@/utils/logics";
// import { moveRate, priceCalc, priceCalc2 } from "@/utils/moversLogic";
import { FaBusAlt, FaTruckMoving } from "react-icons/fa";
import { IoMdMan } from "react-icons/io";
import { FiCheckCircle } from "react-icons/fi";
import { MdCancel } from "react-icons/md";

const PackageCard = ({
  image,
  title,
  subTitle,
  price,
  buttonText,
  f1,
  f2,
  f3,
  f4,
  f5,
  f6,
  f7,
  f8,
  f9,
  f10,
  f11,
  f12,
  link,
  preferred,
  type,
  maxFeatures,
  features,
}) => {
  const [submitLoading, setSubmitLoading] = useState(false);

  const featureDiff = maxFeatures - features?.length;

  console.log({ features, maxFeatures, featureDiff });

  return (
    <div
      className={`card min-w-[250px] min-h-[800px] mb-[0px] pb-[30px]  bg-primary/5 flex flex-col  items-center text-primary  bg-base-100 shadow-md hover:shadow-lg hover:scale-[1.01] duration-200 px-[20px] md:px-[10px]`}
    >
      {/* title */}
      <h2 className='card-title justify-center  py-[0px] mt-[20px] mb-[10px]'>
        {title}
      </h2>

      <p className='font-medium text-[15px] h-[100px] md:h-[130px] text-center text-gray-500 pt-[0px]'>
        {subTitle}
      </p>

      <div className='py-[20px] text-center w-full'>
        <div className='flex flex-col items-center w-full'>
          {/* price */}
          {price ? (
            <p
              className={`card-title  text-primary text-[30px] mb-[10px] font-extrabold`}
            >
              ₦{price}
            </p>
          ) : (
            <p
              className={`card-title  text-primary text-[30px] mb-[10px] font-extrabold`}
            >
              Contact sales
            </p>
          )}

          <p className='font-bold'>{type}</p>
          {/* <p className='font-bold'>school/term</p> */}

          <Link
            href={link}
            // onClick={onBookNow}
            disabled={submitLoading}
            className={`btn btn-secondary rounded-[50px] mt-[20px] px-[30px] mb-[0px] group focus:text-white active:text-white`}
          >
            {<span className=''> {buttonText}</span>}
          </Link>

          <ul className='text-gray-500 mt-[20px] md:mt-[20px] text-start text-[15px] w-full'>
            {features?.map((ft, index) => {
              // const highestFeatureLength = features?.length

              return (
                <div key={index} className=''>
                  {ft ? (
                    <li className='border-b py-[8px] flex items-center'>
                      <FiCheckCircle
                        className={` text-secondary text-[18px] shrink-0`}
                      />
                      <p className='px-[10px]'>{ft?.name}</p>
                    </li>
                  ) : (
                    <li className='border-b py-[8px] flex justify-center items-center'>
                      <MdCancel className={`text-[24px]`} />
                    </li>
                  )}
                </div>
              );
            })}

            {Array.from({ length: featureDiff }, (_, index) => {
              // Your mapping operation here
              return (
                <li
                  index={index}
                  className='hidden border-b py-[8px] md:flex justify-center items-center'
                >
                  <MdCancel className={`text-[24px]`} />
                </li>
              ); // Replace this with your actual mapping logic
            })}

            {/* {f2 ? (
              <li className='border-b py-[8px] flex items-center'>
                <FiCheckCircle
                  className={` text-secondary text-[18px] shrink-0`}
                />
                <p className='px-[10px]'>{f2}</p>
              </li>
            ) : (
              <li className='border-b py-[8px] flex justify-center items-center'>
                <MdCancel className={`text-[24px]`} />
              </li>
            )}

            {f3 ? (
              <li className='border-b py-[8px] flex items-center'>
                <FiCheckCircle
                  className={` text-secondary text-[18px] shrink-0`}
                />
                <p className='px-[10px]'>{f3}</p>
              </li>
            ) : (
              <li className='border-b py-[8px] flex justify-center items-center'>
                <MdCancel className={`text-[24px]`} />
              </li>
            )}

            {f4 ? (
              <li className='border-b py-[8px] flex items-center'>
                <FiCheckCircle
                  className={` text-secondary text-[18px] shrink-0`}
                />
                <p className='px-[10px]'>{f4}</p>
              </li>
            ) : (
              <li className='border-b py-[8px] flex justify-center items-center'>
                <MdCancel className={`text-[24px]`} />
              </li>
            )}

            {f5 ? (
              <li className='border-b py-[8px] flex items-center'>
                <FiCheckCircle
                  className={` text-secondary text-[18px] shrink-0`}
                />
                <p className='px-[10px]'>{f5}</p>
              </li>
            ) : (
              <li className='border-b py-[8px] flex justify-center items-center'>
                <MdCancel className={`text-[24px]`} />
              </li>
            )}

            {f6 ? (
              <li className='border-b py-[8px] flex items-center'>
                <FiCheckCircle
                  className={` text-secondary text-[18px] shrink-0`}
                />
                <p className='px-[10px]'>{f6}</p>
              </li>
            ) : (
              <li className='border-b py-[8px] flex justify-center items-center'>
                <MdCancel className={`text-[24px]`} />
              </li>
            )}

            {f7 ? (
              <li className='border-b py-[8px] flex items-center'>
                <FiCheckCircle
                  className={` text-secondary text-[18px] shrink-0`}
                />
                <p className='px-[10px]'>{f7}</p>
              </li>
            ) : (
              <li className='border-b py-[8px] flex justify-center items-center'>
                <MdCancel className={`text-[24px]`} />
              </li>
            )}

            {f8 ? (
              <li className='border-b py-[8px] flex items-center'>
                <FiCheckCircle
                  className={` text-secondary text-[18px] shrink-0`}
                />
                <p className='px-[10px]'>{f8}</p>
              </li>
            ) : (
              <li className='border-b py-[8px] flex justify-center items-center'>
                <MdCancel className={`text-[24px]`} />
              </li>
            )}

            {f9 ? (
              <li className='border-b py-[8px] flex items-center'>
                <FiCheckCircle
                  className={` text-secondary text-[18px] shrink-0`}
                />
                <p className='px-[10px]'>{f9}</p>
              </li>
            ) : (
              <li className='border-b py-[8px] flex justify-center items-center'>
                <MdCancel className={`text-[24px]`} />
              </li>
            )}

            {f10 ? (
              <li className='border-b py-[8px] flex items-center'>
                <FiCheckCircle
                  className={` text-secondary text-[18px] shrink-0`}
                />
                <p className='px-[10px]'>{f10}</p>
              </li>
            ) : (
              <li className='border-b py-[8px] flex justify-center items-center'>
                <MdCancel className={`text-[24px]`} />
              </li>
            )}
            {f11 ? (
              <li className='border-b py-[8px] flex items-center'>
                <FiCheckCircle
                  className={` text-secondary text-[18px] shrink-0`}
                />
                <p className='px-[10px]'>{f11}</p>
              </li>
            ) : (
              <li className='border-b py-[8px] flex justify-center items-center'>
                <MdCancel className={`text-[24px]`} />
              </li>
            )}
            {f12 ? (
              <li className='border-b py-[8px] flex items-center'>
                <FiCheckCircle
                  className={` text-secondary text-[18px] shrink-0`}
                />
                <p className='px-[10px]'>{f12}</p>
              </li>
            ) : (
              <li className='border-b py-[8px] flex justify-center items-center'>
                <MdCancel className={`text-[24px]`} />
              </li>
            )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
