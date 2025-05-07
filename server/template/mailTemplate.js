const mailTemplate = ({ name, email, verifyEmailUrl }) => {
  return `
    <div style="max-width: 500px; margin: auto; padding: 20px; font-family: Arial, sans-serif; background: #fff7d6; border: 1px solid #f5e1a4; border-radius: 8px;">
      <h2 style="color: #333;">Hello, ${name}!</h2>
      <p style="color: #555;">Thanks for joining Blinkit. <br/> Your email: <strong>${email}</strong></p>

      <div style="text-align: center; margin: 30px 0;">
        <a href="${verifyEmailUrl}" style="background: #ffce00; color: #000; padding: 12px 24px; text-decoration: none; font-weight: bold; border-radius: 5px; display: inline-block;">
          Verify Email
        </a>
      </div>

      <p style="font-size: 12px; color: #999; text-align: center;">If you didn't request this, you can ignore it.</p>
    </div>
  `;
};

export default mailTemplate;
