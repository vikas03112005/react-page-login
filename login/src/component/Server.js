const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');









const app = express();
app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'chandanrajput982653@gmail.com', // replace with your email
    pass: 'chan@8103', // replace with your email password
  },
});

app.post('/send-email', (req, res) => {
  const { name, lastname, fathername } = req.body;

  const mailOptions = {
    from: 'your_email@gmail.com',
    to: 'chandanrajput982653@gmail.com', // replace with the recipient's email
    subject: 'New Contact Form Submission',
    html: `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${lastname}</p>
      <p><strong>Message:</strong> ${fathername}</p>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
