import { parse } from 'querystring';

exports.handler = (event, context, callback) => {
  let body = {};

  try {
    body = JSON.parse(event.body);
    console.log('js');
  } catch (e) {
    body = parse(event.body);
    console.log('no js');
  }

  if (event.headers['content-type'] === 'application/x-www-form-urlencoded') {
    return callback(null, {
      statusCode: 302,
      headers: {
        Location: '/thanks',
      },
      body: JSON.stringify({}),
    });
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({ data: 'Success!' }),
  });
};
