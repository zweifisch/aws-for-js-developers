import {
  SQSClient,
  ReceiveMessageCommand,
  DeleteMessageCommand,
  GetQueueUrlCommand
} from "@aws-sdk/client-sqs"

const sqs = new SQSClient({});

const {QueueUrl} = await sqs.send(new GetQueueUrlCommand({QueueName: "queue0"}))

const {Messages} = await sqs.send(new ReceiveMessageCommand({
  QueueUrl,
  MaxNumberOfMessages: 10,
  WaitTimeSeconds: 20
}))

if (Messages) {
  Messages.forEach(async message => {
    console.log("Message:", message.Body);

    await sqs.send(new DeleteMessageCommand({
      QueueUrl,
      ReceiptHandle: message.ReceiptHandle
    }))
    console.log("Message deleted")
  });
}