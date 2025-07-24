export const baseUrl = "https://blinkit-ecommerce-server.onrender.com";

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
};

export default SummaryAPi;
