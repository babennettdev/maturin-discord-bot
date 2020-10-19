import { Injectable } from '@nestjs/common';
import { Client } from 'discord.js';
import 'dotenv/config';

@Injectable()
export class DiscordClientService {
  private botClient: Client;

  constructor() {
    this.botClient = new Client();
    this.login(this.botClient);
  }

  async login(client: Client): Promise<void> {
    const discordBotToken = String(process.env.DISCORD_BOT_TOKEN);
    await client.login(discordBotToken);
  }

  getClient(): Client {
    return this.botClient;
  }

}
