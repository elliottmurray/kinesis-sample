'use strict';
var AWS = require('aws-sdk');

module.exports.pushEvent = async event => {
  var kinesis = new AWS.Kinesis();
  console.log("!!!!!!!!!");
  console.log(process.env.OUR_STREAM)

  console.log(event);
  var data = 'tst data here';
  // streamName = event.get('streamName');
  var streamName = '';
  var params = {
    Data: Buffer.from('hello world'),
    PartitionKey: '1',
    StreamName: 'queensWorkStream'

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


