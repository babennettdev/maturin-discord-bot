import { Inject, Injectable } from '@nestjs/common';
import { Client } from 'discord.js';
import { DiscordClientService } from '../discordClient/discordClient.service';


@Injectable()
export class ListenerService {
  private botClient: Client;

  constructor(@Inject(DiscordClientService) discordClientService: DiscordClientService) {
    this.botClient = discordClientService.getClient();
  }

  async listen(opts: { commandPrefix: string, command: string, commandServiceFunction: Function, commandOptions?: string[], commandArguments?: boolean, nsfw?: boolean }): Promise<void> {
    const self = this;
    await this.botClient.on("message", function (message) {
      if (message.author.bot) {
        return;
      }
      if (!message.content.startsWith(opts.commandPrefix)) {
        return;
      }
      if (opts.nsfw != undefined && opts.nsfw === false) {
        return;
      }

      const commandString = message.content.slice(opts.commandPrefix.length);
      const getCommandName = commandString.split(' '); // Split string to pull the command name
      const commandName = getCommandName.shift();

      if (commandName !== opts.command) {
        return;
      }

      const commandBody = commandString.slice(opts.command.length + 1); // Slice away the command and the trailing space character
      console.log(commandBody)
      const commandBodyRegex = new RegExp(`(?<=")\\s|(?<=!\\w+)\\s|(?<=--\\w+)\\s`, 'g'); // Parsing all spaces between --commandOption --commandOption2="command option string" command argument
      console.log(commandBodyRegex)
      const splitCommandBody = commandBody.split(commandBodyRegex);
      console.log(splitCommandBody)
      const options: Object = {};

      if (opts.commandOptions) {

        splitCommandBody.forEach((potentialCommandOptionArg) => {
          const parsed: { commandOption: string, commandOptionArg: string | boolean } = self.parseCommandOptions(opts.commandOptions, potentialCommandOptionArg);
          if (!!parsed.commandOption) {
            options[parsed.commandOption] = parsed.commandOptionArg;
          }
        });
      }

      let args: string = undefined;
      if (opts.commandArguments) {
        args = splitCommandBody[(splitCommandBody.length - 1)];
      }

      if (Object.keys(options).length !== 0) {
        if (args) {
          opts.commandServiceFunction(message, options, args)
        }
        else {
          opts.commandServiceFunction(message, options)
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

    });
  }

  private parseCommandOptions(possibleCommandOptions: string[], commandOptionsString: string): { commandOption: string, commandOptionArg: (string | boolean) } {
    let commandOption: string = undefined;
    possibleCommandOptions.forEach((possibleCommandOption) => {

      if (commandOptionsString.startsWith(possibleCommandOption)) {
        commandOption = possibleCommandOption.replace("--", "");
      }
    });
    let commandOptionArg: string | boolean = undefined;
    if (!!commandOption) {
      const potentialCommandOptionArg = commandOptionsString.slice(commandOption.length + 2) // + 2 to account for "--"

      if (potentialCommandOptionArg.length > 0 && potentialCommandOptionArg.startsWith('=')) {
        commandOptionArg = potentialCommandOptionArg.slice(1);
        commandOptionArg = commandOptionArg.replace(/"/g, "");

      }
      else {
        commandOptionArg = true;
      }
    }

    return { commandOption, commandOptionArg };
  }

}
