import { Module } from '@nestjs/common';
import { GunslingerLitanyModule } from './darkTower/gunslingerLitany/gunslingerlitany.module';

@Module({
  imports: [GunslingerLitanyModule],
  providers: [],
})
export class CommandsModule { }