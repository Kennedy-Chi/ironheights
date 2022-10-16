const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

const sendEmail = (options) => {
  console.log(path.join(__dirname, "../views/partials"));
  // 1) CREATING THE TRANSPORTER
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    // Activate in gmail "less secure app" option
  });

  transporter.use(
    "compile",
    hbs({
      viewEngine: {
        partialsDir: path.join(__dirname, "../views/partials"),
        layoutsDir: "../views/layouts",
        defaultLayout: "",
      },
      viewPath: "views",
      extName: ".hbs",
    })
  );

  // 2) CREATING THE MAIL OPTIONS
  const mailOptions = {
    from: "Kennedy Chidi <kennedy@gmail.com>",
    to: options.email,
    subject: options.subject,
    text: options.message,
    template: "main",
    context: {
      name: "Kennedy",
    },
  };

  // 3) SEND EMAIL
  transporter.sendMail(mailOptions, function (err, info) {
    if (err) {
      console.log(`the error is ${err}`);
    } else {
      console.log("Email is sent successfully");
    }
  });
};

module.exports = sendEmail;
// module.exports = class Email {
//   constructor(user, url) {
//     this.to = user.email;
//     this.username = user.username;
//     this.fullName = user.fullName;
//     this.url = url;
//     this.from = `Kennedy Chidi <${process.env.EMAIL_FROM}>`;
//   }

//   createTransport() {
//     if (process.env.NODE_ENV === "production") {
//       return 1;
//     }

//     return nodemailer.createTransport({
//       host: process.env.EMAIL_HOST,
//       port: process.env.EMAIL_PORT,
//       auth: {
//         user: process.env.EMAIL_USERNAME,
//         pass: process.env.EMAIL_PASSWORD,
//       },
//       // Activate in gmail "less secure app" option
//     });
//   }

//   send(template, subject) {
//     //  1 RENDER THE HTML TEMPLATE
//     //  2 DEFINE THE EMAIL OPTIONS
//     //  3 CREATE A TRANSPORT AND SEND EMAIL
//   }

//   sendWelcome() {
//     this.send("welcome", "Welcome to Iron Heights Engineering");
//   }
// };

// const sendEmail = async (options) => {
//   // 2) Define the email options
//   const mailOptions = {
//     from: "Kennedy Chidi <kennedy@gmail.com>",
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };

//   // 3) Actually send the email
//   await transporter.sendMail(mailOptions);
// };
