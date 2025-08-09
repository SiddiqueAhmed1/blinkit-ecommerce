const environment = "development";

export const baseUrl = `${
  environment === "development"
    ? "http://localhost:5050"
    : "https://blinkit-ecommerce-server.onrender.com"
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
};

export default SummaryAPi;
