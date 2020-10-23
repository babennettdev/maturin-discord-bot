import { Injectable } from '@nestjs/common';
import { Message } from 'discord.js';
import * as Snoowrap from 'snoowrap'

@Injectable()
export class RedditService {
  redditClientId: string;
  redditClientSecret: string;
  redditPassword: string;
  redditUserAgent: string;
  redditUsername: string;

  constructor() {

  }

  async reddit(message: Message, subredditName: string[]): Promise<void> {
    let _subredditName: string = '';
    await subredditName.forEach((word) => {
      _subredditName = _subredditName.concat(`${word}`);
    });
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
    const subreddit = snoowrap.getSubreddit(_subredditName);
    const topPosts = await subreddit.getTop({ time: 'week', limit: 1 });

    const title = topPosts[0].url;
    const score = topPosts[0].score;
    const url = topPosts[0].title;

    message.reply(`First Reddit result for subreddit: r/${_subredditName}:
Title: ${title}
Score: ${score} 
Link: ${url}`);

  };
}
