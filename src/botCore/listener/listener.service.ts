import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'discord.js';
import { DiscordClientService } from '../discordClient/discordClient.service';


@Injectable()
export class ListenerService {
  private botClient: Client;

  constructor(@Inject(DiscordClientService) discordClientService: DiscordClientService) {
    this.botClient = discordClientService.getClient();
  }

  async listen(opts: { commandPrefix: string, command: string, commandServiceFunction: Function, commandOptions?: string[], commandArguments?: boolean }): Promise<void> {

    await this.botClient.on("message", function (message) {
      if (message.author.bot) {
        return;
      }
      if (!message.content.startsWith(opts.commandPrefix)) {
        return;
      }

      const commandBody = message.content.slice(opts.commandPrefix.length);
      const splitCommandBody = commandBody.split(' ');
      const commandName = splitCommandBody.shift().toLowerCase();
      let options: string[] = [];
      if (opts.commandOptions) {

      }
      if (options.length === 0) {
        options = undefined;
      }
      let args: string[] = [];
      if (opts.commandArguments) {
        while (splitCommandBody.length != 0) {
          args.push(splitCommandBody.shift().toLowerCase());
        }
      }
      if (args.length === 0) {
        args = undefined;
      }

      if (commandName === opts.command.toLowerCase()) {
        if (options) {
          if (args) {
          }
          else {
          }
        }
        else {
          if (args) {
            opts.commandServiceFunction(message, args)
          }
          else {
            opts.commandServiceFunction(message)
          }
        }

      }

    });
  }


}
