import { Module } from '@nestjs/common';
import { GunslingerLitanyModule } from './darkTower/gunslingerLitany/gunslingerlitany.module';
import { GiphyModule } from './gifs/giphy/giphy.module';

@Module({
  imports: [GunslingerLitanyModule, GiphyModule],
  providers: [],
})
export class CommandsModule { }