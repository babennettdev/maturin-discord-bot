import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const CommandArguments = (bool: boolean): CustomDecorator<string> => {
  return SetMetadata('commandArguments', bool);

}
