// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
handler = async function (event, context) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Hello World" }),
    };
  };
/* const nodemailer = require('nodemailer');

const handler = async (event) => {
    let mailTransporter = nodemailer.createTransport({
        host: 'smtp.googlemail.com', // Gmail Host
        port: 465, // Port
        auth: {
            user: 'akillian@scarsdaleschools.org', // username
            pass: '@Vivaldi', // password
        },
    });

    let mailDetails = {
        from: 'xyz@gmail.com',
        to: 'abc@gmail.com',
        subject: 'Test mail',
        text: 'Node.js testing mail for GeeksforGeeks',
    };

    // send mail with defined transport object
    mailTransporter.sendMail(mailDetails, function (err, data) {
        if (err) {
            console.log('Error Occurs');
        } else {
            console.log('Email sent successfully');
        }
    });
}; */
export default { handler };
