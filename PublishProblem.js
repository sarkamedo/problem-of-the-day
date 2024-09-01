import { Client, GatewayIntentBits } from "discord.js";

export class ProblemPublisher {
  constructor(botToken, channelId) {
    this.botToken = botToken;
    this.channelId = channelId;
    this.discordClient = new Client({
      intents: [
        GatewayIntentBits.Guilds, // the only permission required for the publisher. Allows access to the server and its channels.
      ],
    });
  }

  async login() {
    try {
      await this.discordClient.login(this.botToken);
      console.log("Bot logged in successfully!");
    } catch (error) {
      console.error("Encountered a problem with client login");
      throw error;
    }
  }

  async publish(problem) {
    if (!this.discordClient.isReady()) {
      // Wait for the bot to be ready before sending the message
      await new Promise((resolve) => {
        this.discordClient.once("ready", resolve);
      });
    }

    console.log("Bot is ready to publish!");

    try {
      // Attempt to get the channel from cache, if not found, fetch it from the API
      let channel = this.discordClient.channels.cache.get(this.channelId);
      if (!channel) {
        channel = await this.discordClient.channels.fetch(this.channelId);
      }

      if (!channel) {
        throw new Error("Couldn't find the channel by its ID");
      }

      await channel.send(problem);
      console.log("Message sent successfully!");

      // Disconnect the bot and close the client after the message is sent
      await this.discordClient.destroy();
      console.log("Bot disconnected and client closed.");
    } catch (error) {
      console.error("Encountered a problem when sending a message", error);
      // Ensure the bot disconnects and the app terminates even if an error occurs
      await this.discordClient.destroy();
      process.exit(1); // Exit with error code
    }
  }
}
