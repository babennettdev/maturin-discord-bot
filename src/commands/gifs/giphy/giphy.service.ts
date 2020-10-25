import { Injectable } from '@nestjs/common';
import { Message } from 'discord.js';
import { GiphyFetch } from '@giphy/js-fetch-api'
import 'dotenv/config'
import 'isomorphic-fetch'

@Injectable()
export class GiphyService {
  giphyToken: string;
  constructor() {

  }

  async giphy(message: Message, gifSearchString: string): Promise<void> {
    let searchString = gifSearchString;
    this.giphyToken = await String(process.env.GIPHY_TOKEN);
    const giphyFetch = await new GiphyFetch(this.giphyToken);
    await giphyFetch.search(searchString)
      .then((res) => {
        message.reply(`First GIPHY result for "${searchString}": ${res.data[0].url}`)
      });
  }
}
