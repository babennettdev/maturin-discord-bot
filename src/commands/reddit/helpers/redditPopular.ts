import { Message } from 'discord.js';
import * as Snoowrap from 'snoowrap'
import { Timespan } from 'snoowrap/dist/objects/Subreddit';
import { redditIsPostNsfw, redditIsSubredditNsfw, redditPostMessage } from './';

export async function redditPopular(message: Message, snoowrap: Snoowrap, subredditName: string, limit?: number, time?: Timespan): Promise<void> {
  const isSubredditNsfw = redditIsSubredditNsfw(snoowrap, subredditName);
  const popularPosts = await snoowrap.getSubreddit(subredditName).getTop({ time: time ? time : 'day', limit: limit ? limit : 1 });
  const data = [];

  popularPosts.forEach(async (post) => {
    await data.push({
      url: post.url,
      title: post.title,
      score: post.score,
      over_18: post.over_18

    })
  });

  await redditPostMessage(message, subredditName, data, "Popular", isSubredditNsfw);

}
