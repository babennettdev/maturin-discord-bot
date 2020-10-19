import { Module } from '@nestjs/common';
import { CommandReflectorService } from './commandReflector.service';

@Module({
  exports: [CommandReflectorService],
  imports: [],
  providers: [CommandReflectorService],
})
export class CommandReflectorModule { }
