// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const nodemailer = require('nodemailer');

const handler = async (event, context, callback) => {
    // Parse the JSON text received.
    const body = JSON.parse(event.body);

    // Build an HTML string to represent the body of the email to be sent.
    const html = `<div style="margin: 20px auto;">${body.message}</div>`;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
            user: 'akillian@scarsdaleschools.org',
            pass: process.env.SMTP_PASSWORD,
        },
    });
    console.log("Body Object is: ", body);
    const mailOptions = {
        from: body.email,
        to: 'akillian@outlook.com',
        subject: body.subject,
        text: body.message,
        html: html,
    };

    try {
        // send mail with defined transport object
        transporter.sendMail(mailOptions);

        callback(null, { statusCode: 200, body: JSON.stringify(body) });
    } catch (error) {
        // Catch and log error.
        callback(error);
    }
};

export { handler };
