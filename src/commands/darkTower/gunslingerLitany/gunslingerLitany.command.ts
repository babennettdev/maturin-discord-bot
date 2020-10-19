import { GunslingerLitanyService } from './gunslingerLitany.service';
import { CommandPrefix } from '../../../core/decorators/commandPrefix.decorator';
import { Command } from '../../../core/decorators/command.decorator';
import { CommandReflectorService } from '../../../core/decoratorReflectors/commandReflector.service'
import { Reflector } from '@nestjs/core';
import { Inject } from '@nestjs/common';
import { COMMAND_PREFIX } from '../../commands.constants';
import { ListenerService } from '../../../botCore/listener/listener.service'
import { CommandArguments } from 'src/core/decorators/commandArguments.decorator';


export class GunslingerLitanyCommand {
  constructor(@Inject(ListenerService) listenerService: ListenerService, private commandReflector: CommandReflectorService, private gunslingerLitanyService: GunslingerLitanyService) {
    this.gunslingerLitanyService = new GunslingerLitanyService();
    this.commandReflector = new CommandReflectorService(new Reflector);
    const opts = this.gunslingerLitany()
    listenerService.listen(opts)
  }

  @CommandPrefix(COMMAND_PREFIX)
  @Command('gunslingerLitany')
  @CommandArguments(false)
  gunslingerLitany() {
    const { commandPrefix, command, commandArguments } = this.commandReflector.getCommand(this.gunslingerLitany);
    return { commandPrefix, command, commandServiceFunction: this.gunslingerLitanyService.gunslingerLitany, commandArguments };
  }
}
