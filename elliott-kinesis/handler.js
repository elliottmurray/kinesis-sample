'use strict';
var AWS = require('aws-sdk');

module.exports.pushEvent = async event => {
  var kinesis = new AWS.Kinesis();
  console.log("!!!!!!!!! Push Event !!!!!!!!!!!");
  console.log(process.env.OUR_STREAM)
  var stream = process.env.OUR_STREAM
  console.log(event);
  var data = 'test data here';

  var streamName = '';
  var params = {
    Data: Buffer.from('hello world'),
    PartitionKey: '1',
    StreamName: stream

  };
  const promise = new Promise((resolve, reject) => {
    kinesis.putRecord(params, function(err, data) {
      console.log('In PUTRECORD');

      if (err) reject(console.log(err, err.stack));
      else {
        console.log('returned with ' + data)
        resolve({
          statusCode: 200,
          body: JSON.stringify(
            {
              message: 'Go Serverless v1.0! Your function executed successfully!',
              input: event,
            },
            null,
            2
          ),
        });
      }
    });
  });

  console.log('POST PUTRECORD');
  return promise;
}


