const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: 'ncougan@gmail.com',
        pass: process.env.email_password,
        clientId: process.env.email_clientId,
        clientSecret: process.env.email_clientSecret,
        refreshToken: process.env.email_refreshToken
    }
});

module.exports = transporter;