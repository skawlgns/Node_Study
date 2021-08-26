const nodemailer = require("nodemailer");
const email = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "50c4d3cf48ed52",
    pass: "b0288c4a02e3f7",
  },
});

const send = async (option) => {
  nodemailer.createTransport(email).sendMail(option, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(info);
      return info.response;
    }
  });
};

let email_data = {
  from: "skawlgg.go@gmail.com",
  to: "skawlgg.go@gmail.com",
  subject: "TEST",
  text: "test",
};

send(email_data);
