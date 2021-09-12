const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ncougan@gmail.com',
      pass: process.env.emailPassword
    }
});

module.exports = transporter;