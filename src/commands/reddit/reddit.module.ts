import { Module } from '@nestjs/common';
import { ListenerModule } from 'src/botCore/listener/listener.module';
import { RedditService } from './reddit.service';
import { CommandReflectorModule } from 'src/core/decoratorReflectors/commandReflector.module';
import { RedditCommand } from './reddit.command';

@Module({
  imports: [ListenerModule, CommandReflectorModule],
  providers: [RedditCommand, RedditService],
})
export class RedditModule { }
