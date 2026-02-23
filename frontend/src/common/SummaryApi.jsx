const environment = "production";

export const baseUrl = `${
  environment === "development"
    ? "http://localhost:5050"
    : "https://blinkit-ecommerce-1a4v.onrender.com/"
}`;

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
