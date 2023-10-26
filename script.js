const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); 
const mailgun = require('mailgun-js');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());


const mg = mailgun({
    apiKey: 'my_personal_api_key',
    domain: 'my_personal_domain',
});

app.post('/', (req, res) => {
    const { email } = req.body;
  
    if (!email) {
      return res.status(400).send('Email is missing');
    }
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.error('Invalid email address:', email);
      return res.status(400).send('Invalid email address');
    }
  

  const data = {  
    from: 'jhanviaggarwal1610@gmail.com',
    to: email,
    subject: 'Welcome!! You have Subscribed Successfully..',
    text: 'Thank you for subscribing to our DEV@Deakin.',
  };

  mg.messages().send(data, (error, body) => {
    if (error) {
      console.error(error);
      res.status(500).send('Email not sent');
    } else {
      console.log('Email sent:', body);
      res.status(200).send('Subscription successful. Welcome email sent!');
    }
  });
});

const port = 1234;
app.listen(port, () => {
  console.log('Server is running on port 1234');
});

