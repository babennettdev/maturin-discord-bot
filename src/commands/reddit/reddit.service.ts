import { Injectable } from '@nestjs/common';
import { Message } from 'discord.js';
import * as Snoowrap from 'snoowrap'
import { Timespan } from 'snoowrap/dist/objects/Subreddit';
import { redditNew, redditPopular, redditRandom, redditSearch } from './helpers';

@Injectable()
export class RedditService {
  redditClientId: string;
  redditClientSecret: string;
  redditPassword: string;
  redditUserAgent: string;
  redditUsername: string;

  constructor() {

  }

  async reddit(message: Message, commandOptions?: { popular?: boolean, new?: boolean, limit?: string, time?: string, random?: boolean, search?: string, }, subredditSearchName?: string): Promise<void> {
    const subredditName: string = subredditSearchName;
    this.redditClientId = await String(process.env.REDDIT_CLIENT_ID);
    this.redditClientSecret = await String(process.env.REDDIT_CLIENT_SECRET);
    this.redditPassword = await String(process.env.REDDIT_PASSWORD);
    this.redditUserAgent = await String(process.env.REDDIT_USER_AGENT);
    this.redditUsername = await String(process.env.REDDIT_USERNAME);

    const snoowrap = new Snoowrap({
      clientId: this.redditClientId,
      clientSecret: this.redditClientSecret,
      password: this.redditPassword,
      userAgent: this.redditUserAgent,
      username: this.redditUsername
    });


    if (commandOptions.popular) {
      await redditPopular(message, snoowrap, subredditName, Number(commandOptions.limit), commandOptions.time as Timespan);
    }
    if (commandOptions.new) {
      await redditNew(message, snoowrap, subredditName, Number(commandOptions.limit));
    }
    if (commandOptions.random) {
      await redditRandom(message, snoowrap, subredditName);
    }
    if (commandOptions.search) {
      console.log('search')
      await redditSearch(message, snoowrap, subredditName, commandOptions.search, Number(commandOptions.limit), commandOptions.time as Timespan);
    }

  }

}

