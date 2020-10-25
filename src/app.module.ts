import { Module } from '@nestjs/common';
import { DiscordClientModule } from './botCore/discordClient/discordClient.module';
import { CommandsModule } from './commands/commands.module';

@Module({
  imports: [
    DiscordClientModule,
    CommandsModule
  ]
})
export class AppModule { }
