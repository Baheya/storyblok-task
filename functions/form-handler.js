import { parse } from 'querystring';
require('dotenv').config;

exports.handler = (event, context, callback) => {
  let body = {};

  try {
    body = JSON.parse(event.body);
  } catch (e) {
    body = parse(event.body);
  }

  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'khalifa.baheya@gmail.com',
    from: 'khalifa.baheya@gmail.com',
    subject: 'Data from Contact Form Submission',
    text: 'It has arrived!',
    html: `<h1>First Name</h1><p>${body.user_first_name}</p><h1>Last Name Name</h1><p>${body.user_last_name}</p><h1>Email Address</h1><p>${body.user_work_email}</p><h1>Message</h1><p>${body.user_message}</p>`,
  };

  sgMail
    .send(msg)
    .then(() => {
      if (
        event.headers['content-type'] === 'application/x-www-form-urlencoded'
      ) {
        return callback(null, {
          statusCode: 302,
          headers: {
            Location: '/thanks',
          },
          body: JSON.stringify({}),
        });
      } else {
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify({ data: 'Success!' }),
        });
      }
    })
    .catch((error) => {
      if (
        event.headers['content-type'] === 'application/x-www-form-urlencoded'
      ) {
        return callback(null, {
          statusCode: 302,
          headers: {
            Location: '/error',
          },
          body: JSON.stringify({}),
        });
      } else {
        return callback(null, {
          statusCode: 418,
          body: JSON.stringify({ data: 'error' }),
        });
      }
    });
};
