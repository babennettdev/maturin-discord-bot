import { Module } from '@nestjs/common';
import { GunslingerLitanyModule } from './commands/darkTower/gunslingerLitany/gunslingerLitany.module';
import { DiscordClientModule } from './botCore/discordClient/discordClient.module';
import { ListenerModule } from './botCore/listener/listener.module';
import { CommandReflectorModule } from './core/decoratorReflectors/commandReflector.module';
import { CommandsModule } from './commands/commands.module';

@Module({
  imports: [
    DiscordClientModule,
    CommandsModule
  ]
})
export class AppModule { }
