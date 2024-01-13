import APIServices from "@/utils/api-services";
import React from "react";

const useAPI = () => {
  const apiServices = new APIServices();

  return {
    apiServices,
  };
};

export default useAPI;
