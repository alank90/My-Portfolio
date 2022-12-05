// Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
const nodemailer = require('nodemailer');

const handler = async (event, context, callback) => {
    // Parse the JSON text received.
    const body = JSON.parse(event.body);
    console.log('Password', process.env.SMTP_PASSWORD);

    // Build an HTML string to represent the body of the email to be sent.
    const html = `<div style="margin: 20px auto;">${body.message}</div>`;

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        service: 'gmail',
        auth: {
            user: 'akillian@scarsdaleschools.org',
            pass: process.env.SMTP_PASSWORD,
        },
    });

    try {
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: body.name,
            to: 'akillian@outlook.com',
            subject: body.subject,
            text: body.message,
            html: html,
        });
        // Log the result
        console.log(info);
        callback(null, { statusCode: 200, body: JSON.stringify(info) });
    } catch (error) {
        // Catch and log error.
        callback(error);
    }
};

export { handler };
