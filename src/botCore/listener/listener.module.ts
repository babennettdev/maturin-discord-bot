import { Module } from '@nestjs/common';
import { DiscordClientModule } from '../discordClient/discordClient.module';
import { ListenerService } from './listener.service';

@Module({
  exports: [ListenerService],
  imports: [DiscordClientModule],
  providers: [ListenerService],
})
export class ListenerModule { }
