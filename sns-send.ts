import { SNSClient, PublishCommand } from "@aws-sdk/client-sns"

const client = new SNSClient({})

const params = {
  TopicArn: "arn:aws:sns:us-east0:112233445566:topic0",
  Message: "Hello from SNS!",
};

const data = await client.send(new PublishCommand(params))
console.log("Message published successfully:", data.MessageId)