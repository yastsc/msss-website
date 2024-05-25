const {https} = require("firebase-functions");
const {createTransport} = require("nodemailer");
const creds = require("./config.js");
const cors = require("cors");
const corsHandler = cors({origin: true});


const transporter = createTransport({
  service: "gmail",
  auth: {
    user: creds.USER,
    pass: creds.PASS,
  },
});

const mailOptions = ({email, name, message}) => {
  const text = `
  ${email}
  ${name}
  ${message}
  `;
  const html = `
  <p>Email: ${email}</p>
  <p>Name: ${name}</p>
  <p>Message: ${message}</p>
  `;
  return {
    from: creds.USER,
    to: creds.USER,
    subject: "New Message from MSSS Contact Form",
    text,
    html,
  };
};

const handleEmail = (req, res) => {
  corsHandler(req, res, () => {
    transporter.sendMail(mailOptions(req.query), transport);
  });
  res.send({status: 200});
};

// const handleEmail = (req, res) => {
//   transporter.sendMail(mailOptions(req.query), transport);
//   res.send({status: 200});
// };

const transport = (error, {messageId}) =>
  error ? console.log(error) : console.log(messageId);

module.exports = https.onRequest(handleEmail);
