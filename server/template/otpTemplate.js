export const otpTemplate = (name, otp) => {
  return `
  <div style="max-width : 600px; margin: auto; padding: 20px;">
  <h2> Hello, ${name}</h2>
    <p style="background : yellow; padding"> Here is your otp </p>
    <buton style="background-color: green; padding: 20px;">${otp} </buton>
  </div>
    
    `;
};
