import { CommandPrefix } from '../../../core/decorators/commandPrefix.decorator';
import { Command } from '../../../core/decorators/command.decorator';
import { CommandReflectorService } from '../../../core/decoratorReflectors/commandReflector.service'
import { Reflector } from '@nestjs/core';
import { Inject } from '@nestjs/common';
import { COMMAND_PREFIX } from '../../commands.constants';
import { ListenerService } from '../../../botCore/listener/listener.service'
import { GiphyService } from './giphy.service';
import { CommandArguments } from 'src/core/decorators/commandArguments.decorator';


export class GiphyCommand {
  constructor(@Inject(ListenerService) listenerService: ListenerService, private commandReflector: CommandReflectorService, private giphyService: GiphyService) {
    this.giphyService = new GiphyService();
    this.commandReflector = new CommandReflectorService(new Reflector);
    const opt = this.giphy()
    listenerService.listen(opt)
  }

  @CommandPrefix(COMMAND_PREFIX)
  @Command('giphy')
  @CommandArguments(true)
  giphy() {
    const { commandPrefix, command, commandArguments } = this.commandReflector.getCommand(this.giphy);
    return { commandPrefix, command, commandServiceFunction: this.giphyService.giphy, commandArguments };
  }
}
