import transporter from "./config.js";
const sendMail = (mailOptions) => {
  return new Promise(async (resolve, reject) => {
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject({ status: 0, reason: error });
        console.log(error);
      } else {
        resolve({ status: 1, reason: info });
        console.log(info);
      }
    });
  });
};

export default sendMail;
