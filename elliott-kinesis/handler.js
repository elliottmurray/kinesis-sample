'use strict';
var AWS = require('aws-sdk');

module.exports.pushEvent = async event => {
  var kinesis = new AWS.Kinesis();
  console.log("!!!!!!!!!");
  console.log(process.env.OUR_STREAM)

  console.log(event);
  // streamName = event.get('streamName');
  var streamName = '';
  var params = {
    Data: Buffer.from('hello world'), 
    PartitionKey: '1',
    StreamName: 'queensWorkStream'
    
  };
  kinesis.putRecord(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });

  
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Go Serverless v1.0! Your function executed successfully!',
        input: event,
      },
      null,
      2
    ),
  };
};
