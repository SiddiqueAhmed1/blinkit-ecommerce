const generateOtp = () => {
  const otp = Math.floor(Math.random() * 900000) + 10000;

  return otp;
};
