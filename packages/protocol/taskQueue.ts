import { Queue } from "bullmq"

export const queue = new Queue(
  "tasks",
  { connection: { url: process.env.REDIS_URL } }
)
