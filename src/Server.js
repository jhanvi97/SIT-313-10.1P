// const express = require('express');
// const bodyParser = require('body-parser');
// const mailgun = require('mailgun-js');
// require('dotenv').config();

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// const apiKey = process.env.MAILGUN_API_KEY;
// const domain = process.env.MAILGUN_DOMAIN;
// const mg = mailgun({ apiKey: apiKey, domain: domain });

// app.get('/', (req, res) => {
//     res.sendFile(__dirname + '/2.1.html');
// });

// app.post('/', (req, res) => {
//     const email = req.body.email;

//     const data = {
//         from: 'Jhanvi <jhanviaggarwal1610@gmail.com>',
//         to: email,
//         subject: 'Welcome Email',
//         text: 'Welcome to Mailgun.'
//     };

//     mg.messages().send(data, (error, body) => {
//         if (error) {
//             console.error('Error sending email:', error);
//             res.status(500).send('Error sending email: ' + error.message);
//         } else {
//             console.log('Email sent:', body);
//             res.send('Email sent successfully!');
//         }
//     });
// });

// const PORT = process.env.PORT || 1234;
// app.listen(PORT, () => {
//     console.log(`Server is running at port ${PORT}!!`);
// });


// const express = require('express');
// const bodyParser = require('body-parser');
// const mailgun = require('mailgun-js');

// const app = express();
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));


// const apiKey= 'c54dd7816f9eeed9a9db9ab5e5aaa789-324e0bb2-03536b39';
// const domain= 'sandboxee50dd9dfdbf4e5995364bdf2215701c.mailgun.org';
// const mg = mailgun({apiKey: apiKey, domain: domain});



// app.post('/mail', (req, res) => {
//     const email = req.body.email;

//     const data = {
//         from: 'Jhanvi<jhanviaggarwal1610@gmail.com>',
//         to: `${email}`,
//         subject: 'WELCOME EMAIL!',
//         text: 'WELCOME TO MAILGUN.'
//     };

//     mg.messages().send(data, (error, body) => {
//         if (error) {
//             console.error('Error sending email:', error);
//             res.status(500).send('Error sending email');
//         } else {
//             console.log('Email sent:', body);
//             res.sendFile(__dirname + '/index.html');
//         }
//     });
// });

// app.listen(5000, () => {
//     console.log("Server is running at port 1234!!");
// });

//setting the API key and the domain name
// var api_key = 'c54dd7816f9eeed9a9db9ab5e5aaa789-324e0bb2-03536b39';
// var domain = 'sandboxee50dd9dfdbf4e5995364bdf2215701c.mailgun.org';
// //importing the mailgun module
// var mailgun = require('mailgun-js')({ apiKey: api_key, domain: domain });
// //importing the path module
// const path = require('path')
// //importing the express module
// const express = require('express');
// //importing the https module
// const https = require('https')

// const app = express();

// const PORT =3000//Setting the port
// app.use(express.urlencoded({ extended: true }));

// //Code for sending the mail
// app.post('/', (req, res) => {
//     const to = req.body.email;
//     console.log(req.body.last_name);
//     console.log("Printing body")
//     console.log(req);
//     var data = {
//         from: '',
//         to: `${to}`,
//         subject: 'Welcome Email',
//         html: ''
//     };
//     mailgun.messages().send(data, (err, body) => {
//         if (err) {
//             console.log("Error !! Error !!")
//         }
//     })
// })
// app.listen(PORT, (req, res) => {
//     console.log(`Server is running on port ${PORT}`);
// })