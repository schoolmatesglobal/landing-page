class Helpers {
  formatData(data) {
    return data?.data?.map((x) => ({
      ...x?.attributes,
      id: x?.id,
    }));
  }

  formatSingleData(data) {
    return { ...data?.data?.attributes, id: data?.data?.id };
  }

  // formatDate = (date, format) => moment(date, format).format().split("T")[0];

  convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };
}

export default Helpers;
