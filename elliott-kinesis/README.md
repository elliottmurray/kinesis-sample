# Setup
To deploy

```

serverless deploy -v
```

Use the endpoint created as an output (in the output of the deploy command):
ServiceEndpoint: https://[some-value].ap-southeast-2.amazonaws.com/dev

and do something like:
```
export SERVICE_ENDPOINT=https://[some-value].ap-southeast-2.amazonaws.com/dev
```

# Testing
Run this:
```
for i in {1..10}; do curl $SERVICE_ENDPOINT  > /dev/null 2>&1; done;
```

Check the logs. To do this log into the AWS Console and go to Cloudformation home. Click on the elliott-kinesis-dev stack (e.g. [url](https://ap-southeast-2.console.aws.amazon.com/cloudformation/home?region=ap-southeast-2#/stacks/resources?filteringText=&filteringStatus=active&viewNested=true&hideStacks=false&stackId=arn%3Aaws%3Acloudformation%3Aap-southeast-2%3A773592622512%3Astack%2Felliott-kinesis-dev%2F28016050-0b66-11ea-9dd7-0a960248e856)) Look at the resources created and you should see 2 event groups:

* PushEventLogGroup
* ProcessEventLogGroup

Inspect for relelvant log statements.