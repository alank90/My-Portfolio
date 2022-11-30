// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
require('dotenv').config();
const nodemailer = require('nodemailer');

const handler = async (event) => {
    let transporter = nodemailer.createTransport({
        host: 'smtp.googlemail.com', // Gmail Host
        port: 465, // Port
        secure: true, // this is true as port is 465
        auth: {
            user: 'GMAIL_USERNAME', // username
            pass: 'GMAIL_PASSWORD', // password
        },
    }); // send mail with defined transport object
    let info = await transporter.sendMail({
        from: '"FROM_NAME" <FROM_EMAIL_ADDRESS>', // sender address
        to: 'RECEPIENT_EMAIL_ADDRESS', // list of receivers
        subject: 'Welcome Email', // Subject line 
        text: "Hello world?", // plain text body
        html: 'This email is sent through <b>GMAIL SMTP SERVER</b>', // html body
    });
    console.log('Message sent: %s', info.messageId);
};

export default { handler };
