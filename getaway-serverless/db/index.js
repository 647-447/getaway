const AWS = require('aws-sdk');

AWS.config.update({
  region: 'eu-west-1'
});

const dynamodb = new AWS.DynamoDB.DocumentClient()

const getVictim = async (mobile_number) => {

  const params = {
    TableName : 'victims',
    Key: {
      mobile_number: Number(mobile_number)
    }
  };

  let response;

  // dynamoDBreturns an empty object when it errors
  try {
    response = await dynamodb
    .get(params, (err, data) => err ? err : data )
    .promise()
  }

  catch(err) {
    console.log('err: ', err);
    response = err;
  }

  console.log('response: ', JSON.stringify(response))

  const victim = {
    mobile_number: response.Item.mobile_number,
    name: response.Item.name,
  }

  console.log('victim', victim)
  return victim
}

const putVictim = async ({mobile_number, name}, cb) => {
  const params = {
    Item: {
      mobile_number: Number(mobile_number),
      name,
    },
    ReturnConsumedCapacity: "TOTAL",
    TableName: "victims"
   };

  return await dynamodb
    .put(params, (err, data) => err ? err : data )
    .promise()
}

module.exports = { getVictim, putVictim }

// find a way to get the status codes from aws dynamo