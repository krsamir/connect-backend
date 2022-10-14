import sendMail from "./mail-sender.js";
import { register, ForgotPassword } from "./Templates/index.js";
import { config } from "dotenv";
config();
const { MAIL_USER, FRONTENDLINK } = process.env;

export const registerMail = async (data) => {
  const { recipient } = data;
  const { FRONTENDLINK } = process.env;
  // eslint-disable-next-line no-undef
  var mailOptions = {
    from: MAIL_USER,
    to: recipient,
    subject: "Registration for Connect",
    html: register({ ...data, FRONTENDLINK }),
  };
  return sendMail(mailOptions);
};

// recipient: email, token, validTill;
export const forgotPasswordMail = async (data) => {
  const { recipient } = data;
  var mailOptions = {
    from: MAIL_USER,
    to: recipient,
    subject: "Forgot Password",
    html: ForgotPassword({ ...data, FRONTENDLINK }),
  };
  return sendMail(mailOptions);
};
