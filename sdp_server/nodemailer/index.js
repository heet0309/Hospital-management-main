const nodemailer = require("nodemailer");

const sendMail = (to, subject, text) => {
  let mailTranspotar = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "heetraithatha0309@gmail.com",
      pass: "ggpjfzsquwfyizis",
    },
  });

  let details = {
    from: "heetraithatha0309@gmail.com",
    to: to,
    subject: subject,
    text: text,
  };
  mailTranspotar.sendMail(details, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Mail has been sent");
    }
  });
};

module.exports = sendMail;
