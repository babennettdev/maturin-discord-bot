import { CommandPrefix } from '../../core/decorators/commandPrefix.decorator';
import { Command } from '../../core/decorators/command.decorator';
import { CommandReflectorService } from '../../core/decoratorReflectors/commandReflector.service'
import { Reflector } from '@nestjs/core';
import { Inject } from '@nestjs/common';
import { COMMAND_PREFIX, NSFW_ENABLED } from '../commands.constants';
import { ListenerService } from '../../botCore/listener/listener.service'
import { RedditService } from './reddit.service';
import { CommandArguments } from 'src/core/decorators/commandArguments.decorator';
import { NSFW } from 'src/core/decorators/nsfw.decorator';
import { CommandOptions } from 'src/core/decorators/commandOptions.decorator';


export class RedditCommand {
  constructor(@Inject(ListenerService) listenerService: ListenerService, private commandReflector: CommandReflectorService, private redditService: RedditService) {
    this.redditService = new RedditService();
    this.commandReflector = new CommandReflectorService(new Reflector);
    const opt = this.reddit()
    listenerService.listen(opt)
  }

  @CommandPrefix(COMMAND_PREFIX)
  @Command('reddit')
  @CommandArguments(true)
  @CommandOptions(['--popular', '--new', '--search'])
  @NSFW(NSFW_ENABLED)
  reddit() {
    const { commandPrefix, command, commandArguments, commandOptions, nsfw } = this.commandReflector.getCommand(this.reddit);
    return { commandPrefix, command, commandServiceFunction: this.redditService.reddit, commandArguments, commandOptions, nsfw };
  }
}
