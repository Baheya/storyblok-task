import { parse } from 'querystring';

exports.handler = (event, context, callback) => {
  console.log('event', event);
  console.log('context', context);
  const body = event.body;
  return callback(null, {
    statusCode: 200,
    body: JSON.stringify({ data: 'foo' }),
  });
};
