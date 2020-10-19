import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const CommandOptions = (commandOptions: string[]): CustomDecorator<string> => {
  return SetMetadata('commandOptions', commandOptions);

}
