'use strict';

module.exports.handler = async (event, context, done) => {
  // context is an object with the details of this specific lambda
  // event is whatever is passed with -p path/file
  // done returns the result of calling this lambda
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