import { SNSClient, SubscribeCommand } from "@aws-sdk/client-sns"

const s3Client = new SNSClient({})

const params = {
  TopicArn: "arn:aws:sns:us-east-1:112233445566:topic0",
  Protocol: "email",
  Endpoint: "youremail",
}

const command = new SubscribeCommand(params)

const data = await s3Client.send(command)
console.log("Subscription created successfully:", data.SubscriptionArn)
