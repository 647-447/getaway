'use strict';
const getVictim = require('../db/index').getVictim;

module.exports.handler = async (event) => {
  const mobile_number = event.pathParameters.number;
  const victim = await getVictim(mobile_number);


  const response = {
    statusCode: 200,
    headers: {},
    body: JSON.stringify(victim),
  }

  console.log('response: ', response);
  return response;
};