import { ProblemPublisher } from "./PublishProblem.js";
import dotenv from "dotenv";
dotenv.config();

const channelId = process.env.CHANNEL_ID;
const botToken = process.env.BOT_TOKEN;

import { generateAProblem } from "./ProblemGenerator.js";

const problem = await generateAProblem();

const publisher = new ProblemPublisher(
  botToken,
  channelId
);

await publisher.login();
await publisher.publish(problem);