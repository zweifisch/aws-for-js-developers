import {
  SQSClient,
  SendMessageCommand,
  GetQueueUrlCommand
} from "@aws-sdk/client-sqs"

const sqs = new SQSClient({})

const {QueueUrl} = await sqs.send(new GetQueueUrlCommand({QueueName: "queue0"}))

const data = await sqs.send(new SendMessageCommand({
  QueueUrl,
  MessageBody: "Hello, World!"
}))
console.log(data.MessageId)