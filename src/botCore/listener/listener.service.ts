import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'discord.js';
import { DiscordClientService } from '../discordClient/discordClient.service';


@Injectable()
export class ListenerService {
  private botClient: Client;

  constructor(@Inject(DiscordClientService) discordClientService: DiscordClientService) {
    this.botClient = discordClientService.getClient();
  }

  async listen(commandOptions: { commandPrefix: string, command: string, commandServiceFunction: Function, commandArguments?: string[] }): Promise<void> {

    await this.botClient.on("message", function (message) {
      if (message.author.bot) {
        return;
      }
      if (!message.content.startsWith(commandOptions.commandPrefix)) {
        return;
      }

      const commandBody = message.content.slice(commandOptions.commandPrefix.length);
      const splitCommandBody = commandBody.split(' ');
      const commandName = splitCommandBody.shift().toLowerCase();
      let options = {};
      if (commandOptions.commandArguments) {

      }
      if (options === {}) {
        options = undefined;
      }

      if (commandName === commandOptions.command.toLowerCase()) {
        commandOptions.commandServiceFunction(message)
      }

    });
  }


}
