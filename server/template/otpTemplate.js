export const otpTemplate = (name, otp) => {
  return `
    <div style="font-family: Arial, sans-serif; background-color: #f9f9f9; padding: 40px;">
      <div style="max-width: 600px; background-color: #ffffff; margin: auto; padding: 25px 30px; border-radius: 10px; border: 1px solid #e0e0e0; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <h1 style="color: #0055ff; font-size: 24px;">🔐 Blinkit OTP Verification</h1>
        <p style="font-size: 16px; margin-top: 20px;">Hello 👋,</p>
        <p style="font-size: 16px; color: #444;">
          Use the following One-Time Password (OTP) to verify your identity:
        </p>
        <div style="font-size: 32px; font-weight: bold; background-color: #eef2ff; padding: 15px; text-align: center; border-radius: 8px; letter-spacing: 6px; color: #1a1a1a; margin: 20px 0;">
          ${otp}
        </div>
        <p style="font-size: 14px; color: #666;">
          This OTP will expire in <strong>1 hour</strong>. Do not share this code with anyone.
        </p>
        <p style="font-size: 14px; color: #999; margin-top: 30px;">— Blinkit 🚀</p>
      </div>
    </div>
  `;
};
