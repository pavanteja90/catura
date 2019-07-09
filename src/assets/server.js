// import express from 'express';
// import { createTransport } from 'nodemailer';
// const app = express();
// const port = 3000;
// import { json } from 'body-parser';

// const transporter = createTransport({

//   host: 'smtp.gmail.com',
//   provider: 'gmail',
//   port: 465,
//   secure: true,
//   auth: {
//     user: 'pavanteja90@gmail.com', // Enter here email address from which you want to send emails
//     pass: 'PT@One@n10239111' // Enter here password for email account from which you want to send emails
//   },
//   tls: {
//   rejectUnauthorized: false
//   }
// });

// app.use(json());

// app.use(function (req, res, next) {

//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// app.post('/send', function (req, res) {

//   let senderName = req.body.name;
//   let senderEmail = req.body.email;
//   let senderContact = req.body.contactNumber;
//   let reason = req.body.reasonForContact;
//   let message = req.body.message;
//   let copyToSender = req.body.copyToSender

//   let mailOptions = {
//     to: ['pavanteja.bhatta@gmail.com'], // Enter here the email address on which you want to send emails from your customers
//     from: senderName,
//     email: senderEmail,
//     contact: senderContact,
//     reasonForContact: reason,
//     message: message,
//     copyToSender: copyToSender
//   };

//   if (senderName === '') {
//     res.status(400);
//     res.send({
//     message: 'Bad request'
//     });
//     return;
//   }

//   if (senderEmail === '') {
//     res.status(400);
//     res.send({
//     message: 'Bad request'
//     });
//     return;
//   }

//   if (senderContact === '') {
//     res.status(400);
//     res.send({
//     message: 'Bad request'
//     });
//     return;
//   }

//   if (reasonForContact === '') {
//     res.status(400);
//     res.send({
//     message: 'Bad request'
//     });
//     return;
//   }

//   if (copyToSender) {
//     mailOptions.to.push(senderEmail);
//   }

//   transporter.sendMail(mailOptions, function (error, response) {
//     if (error) {
//       console.log(error);
//       res.end('error');
//     } else {
//       console.log('Message sent: ', response);
//       res.end('sent');
//     }
//   });
// });

// app.listen(port, function () {
//   console.log('Express started on port: ', port);
// });