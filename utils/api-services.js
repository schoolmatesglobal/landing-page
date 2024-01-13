import axios from "axios";
import { backendAPI } from "./constants";
import Helpers from "./helpers";
// import { backendAPI } from "../utils/constants";
// import Helpers from "./helpers";

class APIServices extends Helpers {
  async getPricing() {
    const { data } = await axios.get(`${backendAPI}/school/pricing`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${super.getToken()}`,
      },
    });

    return data;
  }
  async getTrusted() {
    const { data } = await axios.get(`${backendAPI}/school/trusted`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${super.getToken()}`,
      },
    });

    return data;
  }
  async getTestimonial() {
    const { data } = await axios.get(`${backendAPI}/school/testimonial`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${super.getToken()}`,
      },
    });

    return data;
  }

  async postPayment(body) {
    const { data } = await axios.post(`${backendAPI}/school/pay`, body, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${super.getToken()}`,
      },
    });

    return data;
  }

  async signUp(body) {
    const { data } = await axios.post(`${backendAPI}/school/signup`, body, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${super.getToken()}`,
      },
    });

    return data;
  }

  async updateClass({ id, ...body }) {
    const { data } = await axios.patch(`${backendAPI}/class/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${super.getToken()}`,
      },
    });

    return data;
  }

  async deleteClass(id) {
    const { data } = await axios.delete(`${backendAPI}/class/${id}`, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${super.getToken()}`,
      },
    });

    return data;
  }

  async updateCampus({ id, ...body }) {
    const { data } = await axios.patch(`${backendAPI}/campus/${id}`, body, {
      headers: {
        "Content-Type": "application/json",
        // Authorization: `Bearer ${super.getToken()}`,
      },
    });

    return data;
  }
}

export default APIServices;
