const nodemailer = require("nodemailer");

// Create a transporter using Gmail SMTP
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Function to send an email
const sendEmail = async (to, subject, text) => {
  try {
    // Define email options
    const mailOptions = {
      from: process.env.EMAIL,
      to: "sushilsharmasubedi@gmail.com",
      subject: "This is a dummy email",
      text: "LOREM IPSUM",
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);

    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Call the sendEmail function
module.exports = sendEmail; //call using await
