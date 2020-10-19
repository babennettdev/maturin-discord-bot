import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const CommandArguments = (commandArguments: string[]): CustomDecorator<string> => {
  return SetMetadata('commandArguments', commandArguments);

}
