import { Reflector } from '@nestjs/core';

interface CommandInterface {
  commandPrefix: string;
  command: string;
  commandArguments?: string[];
};
export class CommandReflectorService {
  constructor(private reflector: Reflector) {
    this.reflector = reflector;
  }
  getCommand(commandFunction: Function): CommandInterface {
    const commandPrefix = this.reflector.get<string>('commandPrefix', commandFunction);
    const command = this.reflector.get<string>('command', commandFunction);
    const commandArugments = this.reflector.get<string[]>('commandArugments', commandFunction) ? this.reflector.get<string[]>('commandArugments', commandFunction) : null;

    return {
      commandPrefix: commandPrefix,
      command: command,
      commandArguments: commandArugments
    }
  }
}
