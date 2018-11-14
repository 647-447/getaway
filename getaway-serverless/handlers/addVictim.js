'use strict';
const putVictim = require('../db/index').putVictim;

module.exports.handler = async (event, context) => {
  const victim = JSON.parse(event.body);
  const response = await putVictim(victim);
  console.log('response: ', response)

  // check if data is solid!!

  const responseObject = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify(response),
  }

  return responseObject;
};