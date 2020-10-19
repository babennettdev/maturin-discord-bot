import { Module } from '@nestjs/common';
import { DiscordClientService } from './discordClient.service';

@Module({
  exports: [DiscordClientService],
  imports: [],
  providers: [DiscordClientService],
})
export class DiscordClientModule { }
