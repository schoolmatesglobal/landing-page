// import { getAllMoverDetails } from "@/store/moverSlice";
import React, { useEffect, useRef, useState } from "react";
import { MdCancel } from "react-icons/md";
// import { useSelector } from "react-redux";

const CustomFileInput = ({
  activateError,
  previewUrl,
  setPreviewUrl,
  setImageUpload,
  imageUpload,
  imageName,
  setImageName,
  setFileUploadError,
  fileUploadError,
  isLoading,
  // data,
  //   handleButtonClick,
  //   handleFileInputChange,
  //   fileInputRef,
}) => {
  const fileInputRef = useRef(null);

  const err = !previewUrl || fileUploadError;

  // console.log({ err });

  const [activateErr, setActivateErr] = useState(false);

  useEffect(() => {
    setActivateErr(err);
  }, [previewUrl, fileUploadError]);

  // const details = useSelector(getAllMoverDetails);

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const clearAll = () => {
    setPreviewUrl("");
    setImageUpload(null);
    setImageName("");
    setFileUploadError("");
    setActivateErr(false);
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];

    // if (file && imageUpload.size <= 5242880) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     setPreviewUrl(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    // } else {
    //     setFileUploadError("File size not accepted");
    // }
    if (file) {
      //   if (file.size <= 1024 * 1024) {
      if (file.size <= 1024 * 1024 * 2) {
        // 1MB as an example size limit
        setImageUpload(file);
        setImageName(file.name);

        // console.log(file);
        const reader = new FileReader();
        reader.onload = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(file);
        setFileUploadError("");
      } else {
        setImageUpload(null);
        setFileUploadError("Image size exceeds the limit (2MB)");
      }
    }

    // if (file) {
    //   const reader = new FileReader();
    //   reader.onload = () => {
    //     setPreviewUrl(reader.result);
    //   };
    //   reader.readAsDataURL(file);
    // }
  };

  // console.log(imageUpload?.name);

  return (
    <div className='w-full'>
      <div
        className={`flex rounded-[10px] items-center  border border-primary w-full bg-white`}
      >
        <button
          onClick={handleButtonClick}
          className='btn btn-primary border border-primary rounded-tl-[8px] rounded-bl-[8px] rounded-tr-[0px] rounded-br-[0px] h-[43px]'
        >
          {/* Choose File */}
          {previewUrl && !fileUploadError
            ? "Update Logo"
            : "Choose Logo"}
         
        </button>
        <p className='truncate ... px-[10px] text-[14px] w-[255px] flex-[1]'>
          {previewUrl && !fileUploadError
            ? // ? imageUpload?.name || details.firebaseMoverDetails.profilePictureName
              imageName
            : "No file selected"}
        </p>
        <div className='' onClick={() => clearAll()}>
          <MdCancel className='text-[30px] mx-[10px] cursor-pointer text-secondary hover:text-secondary/80 duration-200' />
        </div>
      </div>
      <input
        type='file'
        className={` file-input file-input-bordered file-input-primary  hidden`}
        // accept="image/png, image/gif, image/jpeg"
        accept='image/png, image/jpeg, image/jpg'
        onChange={handleFileInputChange}
        ref={fileInputRef}
      />
    </div>
  );
};

export default CustomFileInput;
