import { Module } from '@nestjs/common';
import { ListenerModule } from 'src/botCore/listener/listener.module';
import { GiphyService } from './giphy.service';
import { CommandReflectorModule } from 'src/core/decoratorReflectors/commandReflector.module';
import { GiphyCommand } from './giphy.command';

@Module({
  imports: [ListenerModule, CommandReflectorModule],
  providers: [GiphyCommand, GiphyService],
})
export class GiphyModule { }
