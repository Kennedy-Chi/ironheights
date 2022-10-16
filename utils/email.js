const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");

module.exports = class Email {
  constructor(user, url) {
    this.to = user.email;
    this.fullName = user.fullName;
    this.url = url;
    this.from = `Iron Heights ${process.env.SENDINBLUE_EMAIL}`;
  }

  // 1) CREATE A TRANSPORTER
  createTransport() {
    return nodemailer.createTransport({
      host: process.env.SENDINBLUE_HOST,
      port: 587,
      auth: {
        user: process.env.SENDINBLUE_EMAIL,
        pass: process.env.SENDINBLUE_PASS,
      },
    });
  }

  // 2) USE CONFIGURATION
  transporter() {
    return this.createTransport().use(
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
  }

  // 3) SEND FORGOTTEN PASSWORD
  send(template, subject) {
    try {
      this.transporter().sendMail({
        from: process.env.SENDINBLUE_EMAIL, // sender address
        to: this.to, // list of recipients
        subject: subject, // Subject line
        template: template,
        context: {
          fullName: this.fullName,
          url: this.url,
        },
      });

      console.log(`Message sent: successfully`);
      return `Message sent:`;
    } catch (error) {
      console.error(error);
      throw new Error(
        `Something went wrong in the sendmail method. Error: ${error.message}`
      );
    }
  }

  sendForgottenPassword() {
    this.send("password", "Reset password");
  }

  sendWelcome() {
    this.send("welcome", "Welcome Greetings");
  }
};

// const sendEmail = async (options) => {
//   try {
//     // Create a transporter
//     let transporter = nodemailer.createTransport({
//       host: process.env.SENDINBLUE_HOST,
//       port: 587,
//       auth: {
//         user: process.env.SENDINBLUE_EMAIL,
//         pass: process.env.SENDINBLUE_PASS,
//       },
//     });

//     transporter.use(
//       "compile",
//       hbs({
//         viewEngine: {
//           partialsDir: path.join(__dirname, "../views/partials"),
//           layoutsDir: "../views/layouts",
//           defaultLayout: "",
//         },
//         viewPath: "views",
//         extName: ".hbs",
//       })
//     );

//     // send mail with defined transport object
//     transporter.sendMail({
//       from: process.env.SENDINBLUE_EMAIL, // sender address
//       to: "kennedychididev@gmail.com", // list of recipients
//       subject: options.subject, // Subject line
//       template: "main",
//       context: {
//         name: `from ${process.env.SENDINBLUE_EMAIL} to ${options.email}`,
//       },
//     });

//     console.log(`Message sent: successfully`);
//     return `Message sent:`;
//   } catch (error) {
//     console.error(error);
//     throw new Error(
//       `Something went wrong in the sendmail method. Error: ${error.message}`
//     );
//   }
// };
// module.exports = sendEmail;
