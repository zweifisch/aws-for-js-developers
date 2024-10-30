import { S3Client, GetObjectCommand, PutObjectCommand } from '@aws-sdk/client-s3'
import fs from 'node:fs'

const s3 = new S3Client()
const Bucket = 'wdgfs'

await s3.send(
    new PutObjectCommand({
      Bucket,
      Key: "s3.ts",
      Body: fs.readFileSync("./s3.ts"),
    }),
  );

const { Body } = await s3.send(
    new GetObjectCommand({
        Bucket,
        Key: "s3.ts",
    }),
)

console.log(await Body.transformToString())