import { Module } from '@nestjs/common';
import { ListenerModule } from 'src/botCore/listener/listener.module';
import { CommandReflectorModule } from 'src/core/decoratorReflectors/commandReflector.module';
import { GunslingerLitanyCommand } from './gunslingerlitany.command';
import { GunslingerLitanyService } from './gunslingerLitany.service';

@Module({
  imports: [ListenerModule, CommandReflectorModule],
  providers: [GunslingerLitanyCommand, GunslingerLitanyService],
})
export class GunslingerLitanyModule { }
