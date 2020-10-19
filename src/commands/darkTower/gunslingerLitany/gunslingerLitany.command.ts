import { GunslingerLitanyService } from './gunslingerLitany.service';
import { CommandPrefix } from '../../../core/decorators/commandPrefix.decorator';
import { Command } from '../../../core/decorators/command.decorator';
import { CommandReflectorService } from '../../../core/decoratorReflectors/commandReflector.service'
import { Reflector } from '@nestjs/core';
import { Inject } from '@nestjs/common';
import { COMMAND_PREFIX } from '../../commands.constants';
import { ListenerService } from '../../../botCore/listener/listener.service'


export class GunslingerLitanyCommand {
  constructor(@Inject(ListenerService) listenerService: ListenerService, private commandReflector: CommandReflectorService, private gunslingerLitanyService: GunslingerLitanyService) {
    this.gunslingerLitanyService = new GunslingerLitanyService();
    this.commandReflector = new CommandReflectorService(new Reflector);
    const opt = this.gunslingerLitany()
    listenerService.listen(opt)
  }

  @CommandPrefix(COMMAND_PREFIX)
  @Command('gunslingerLitany')
  gunslingerLitany() {
    const { commandPrefix, command } = this.commandReflector.getCommand(this.gunslingerLitany);
    return { commandPrefix, command, commandServiceFunction: this.gunslingerLitanyService.gunslingerLitany };
  }
}
