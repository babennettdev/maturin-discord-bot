import { Module } from '@nestjs/common';
import { GunslingerLitanyModule } from './darkTower/gunslingerLitany/gunslingerlitany.module';
import { GiphyModule } from './gifs/giphy/giphy.module';
import { RedditModule } from './reddit/reddit.module';

@Module({
  imports: [GunslingerLitanyModule, GiphyModule, RedditModule],
  providers: [],
})
export class CommandsModule { }