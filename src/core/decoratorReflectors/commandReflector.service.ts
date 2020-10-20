import { Reflector } from '@nestjs/core';

interface CommandInterface {
  commandPrefix: string;
  command: string;
  commandArguments?: boolean;
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
    const nsfw = this.reflector.get<boolean>('nsfw', commandFunction) ? this.reflector.get<boolean>('nsfw', commandFunction) : false;

    return {
      commandPrefix: commandPrefix,
      command: command,
      commandArguments: commandArugments,
      nsfw: nsfw
    }
  }
}
