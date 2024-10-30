import {
  DynamoDBClient,
  PutItemCommand,
  GetItemCommand
} from "@aws-sdk/client-dynamodb"

const client = new DynamoDBClient({})

await client.send(new PutItemCommand({
  TableName: 'users',
  Item: {
    "id": {S: "1"},
    "name": { S: "Alice" },
    "age": { N: "7" }
  }
}))

const data = await client.send(new GetItemCommand({
  TableName: 'users',
  Key: {
    "id": { S: "1" }
  }
}))
console.log(data)