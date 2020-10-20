import { CustomDecorator, SetMetadata } from '@nestjs/common';

export const NSFW = (bool: boolean): CustomDecorator<string> => {
  return SetMetadata('nsfw', bool);

}
