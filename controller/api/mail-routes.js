const router = require('express').Router();
const transporter = require('../../utils/mail-transporter');

router.post('/', async (req, res) => {
    try {

      const { email, name, message } = req.body;

      if (email, name, message) {
        const emailResponse = `Hi ${name}, thank you for message. I will respond shortly.

Message details:     
${message}.`;
        
              const mailOptions = {
                from: 'ncougan@gmail.com',
                to: email,
                cc: 'ncougan@gmail.com',
                subject: 'Thank you for message',
                text: emailResponse
              };
              
              transporter.sendMail(mailOptions, function(error, info){
                  if (error) {
                      console.log(error);
                  } else {
                      res.send('Email sent: ' + info.response);
                  }
              });
      }
      else {
        res.send('fields missing in request')
      };
    }
    catch (err) {
      res.status(400).json(err);
    }
  });

module.exports = router;
