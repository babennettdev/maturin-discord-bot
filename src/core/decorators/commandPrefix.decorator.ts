import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const CommandPrefix = (commandPrefix: string): CustomDecorator<string> => {
  return SetMetadata('commandPrefix', commandPrefix);
}
