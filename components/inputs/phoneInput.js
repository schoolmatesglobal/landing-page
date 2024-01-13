import React from "react";
import PhoneInput from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

const PhoneCountryInput = ({rest}) => {
  return (
    <div className=" flex input input-primary h-[43px] w-full ">
      <PhoneInput

        international
        countryCallingCodeEditable={false}
        flags={flags}
        //   ref={ref}
        defaultCountry='NG'
        // {...rest}
        
      />
    </div>
  );
};

export default PhoneCountryInput;
