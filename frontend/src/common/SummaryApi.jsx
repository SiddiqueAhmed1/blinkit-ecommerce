export const baseUrl = "https://blinkit-ecommerce-1a4v.onrender.com";

const SummaryAPi = {
  register: {
    url: "api/v1/register",
    method: "post",
  },
  login: {
    url: "api/v1/login",
    method: "post",
  },
  verifyForgotPassword: {
    url: "",
  },
  userDetails: {
    url: "api/v1/user-details",
    method: "get",
  },
};

export default SummaryAPi;
