'use strict';

module.exports.handler = async (event, context, done) => {
  const message = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({
      message: 'server sends pong',
      input: event,
    }),
  }

  done(null, message);
};