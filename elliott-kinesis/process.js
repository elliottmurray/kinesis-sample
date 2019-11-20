'use strict';
var AWS = require('aws-sdk');

module.exports.processEvent = async (event, context) => {
      //console.log('Received event:', JSON.stringify(event, null, 2));
      for (const record of event.Records) {
        // Kinesis data is base64 encoded so decode here
        const payload = new Buffer(record.kinesis.data, 'base64').toString('ascii');
        console.log('Decoded payload:', payload);
    }
    return `Successfully processed ${event.Records.length} records.`;

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
