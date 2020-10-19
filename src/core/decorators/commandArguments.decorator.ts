import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const CommandArguments = (commandArugments: string[]): CustomDecorator<string> => {
  return SetMetadata('commandArguments', commandArugments);

}
