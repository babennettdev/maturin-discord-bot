import { Injectable } from '@nestjs/common';
import { Client } from 'discord.js';
import 'dotenv/config';

@Injectable()
export class LoginService {
  constructor() { }

  async login(): Promise<void> {
    const discordBotToken = String(process.env.DISCORD_BOT_TOKEN);
    const client = new Client();
    await client.login(discordBotToken);

  }
}
