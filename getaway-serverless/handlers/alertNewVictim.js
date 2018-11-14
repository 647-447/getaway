'use strict';

module.exports.handler = async (event, context, done) => {
  const message = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify({
      message: 'There is a new victim listed on your service',
      input: event,
    }),
  }
  done(null, message);
};