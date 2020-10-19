import { Injectable, Inject } from '@nestjs/common';
import { Message } from 'discord.js';

@Injectable()
export class GunslingerLitanyService {
  constructor() { }


  async gunslingerLitany(message: Message): Promise<void> {
    message.reply(`\`\`\`
I do not aim with my hand.
He who aims with his hand has forgotten the face of his father.
I aim with my eye.
        
I do not shoot with my hand.
He who shoots with his hand has forgotten the face of his father.
I shoot with my mind.
        
I do not kill with my gun.
He who kills with his gun has forgotten the face of his father.
I kill with my heart.
\`\`\``);
  }
}
