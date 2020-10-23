import { Reflector } from '@nestjs/core';
import { CommandOptions } from '../decorators/commandOptions.decorator';

interface CommandInterface {
  commandPrefix: string;
  command: string;
  commandArguments?: boolean;
  commandOptions?: string[];
  nsfw?: boolean;
};
export class CommandReflectorService {
  constructor(private reflector: Reflector) {
    this.reflector = reflector;
  }
  getCommand(commandFunction: Function): CommandInterface {
    const commandPrefix = this.reflector.get<string>('commandPrefix', commandFunction);
    const command = this.reflector.get<string>('command', commandFunction);
    const commandArugments = this.reflector.get<boolean>('commandArguments', commandFunction) ? this.reflector.get<boolean>('commandArguments', commandFunction) : false;
    const commandOptions = this.reflector.get<string[]>('commandOptions', commandFunction);
    const nsfw = this.reflector.get<boolean>('nsfw', commandFunction) ? this.reflector.get<boolean>('nsfw', commandFunction) : false;

    return {
      commandPrefix: commandPrefix,
      command: command,
      commandArguments: commandArugments,
      commandOptions: commandOptions,
      nsfw: nsfw
    }
  }
}
