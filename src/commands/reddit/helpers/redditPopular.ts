import { Message } from 'discord.js';
import * as Snoowrap from 'snoowrap'
import { Timespan } from 'snoowrap/dist/objects/Subreddit';
import { redditPostMessage } from './redditPostMessage';

export async function redditPopular(message: Message, snoowrap: Snoowrap, subredditName: string, limit?: number, time?: Timespan): Promise<void> {

  const popularPosts = await snoowrap.getSubreddit(subredditName).getTop({ time: time ? time : 'day', limit: limit ? limit : 1 });
  const data = [];

  popularPosts.forEach(async (post) => {
    await data.push({
      url: post.url,
      title: post.title,
      score: post.score
    })
  });

  await redditPostMessage(message, subredditName, data, "Popular");

}
