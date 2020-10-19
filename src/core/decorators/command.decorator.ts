import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const Command = (command: string): CustomDecorator<string> => {
  return SetMetadata('command', command);

}
