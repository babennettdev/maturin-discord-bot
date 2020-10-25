import { Message } from 'discord.js';
import * as Snoowrap from 'snoowrap'
import { redditIsSubredditNsfw, redditPostMessage } from './';


export async function redditNew(message: Message, snoowrap: Snoowrap, subredditName: string, limit?: number): Promise<void> {
  const isSubredditNsfw = redditIsSubredditNsfw(snoowrap, subredditName);
  const newPosts = await snoowrap.getSubreddit(subredditName).getNew({ limit: limit ? limit : 1 });

  const data = [];

  newPosts.forEach(async (post) => {
    await data.push({
      url: post.url,
      title: post.title,
      score: post.score,
      over_18: post.over_18
    })
  });
  await redditPostMessage(message, subredditName, data, "New", isSubredditNsfw);
}
