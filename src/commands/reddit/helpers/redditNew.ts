import { Message } from 'discord.js';
import * as Snoowrap from 'snoowrap'
import { redditPostMessage } from './redditPostMessage';

export async function redditNew(message: Message, snoowrap: Snoowrap, subredditName: string, limit?: number): Promise<void> {
  const newPosts = await snoowrap.getSubreddit(subredditName).getNew({ limit: limit ? limit : 1 });
  const data = [];

  newPosts.forEach(async (post) => {
    await data.push({
      url: post.url,
      title: post.title,
      score: post.score
    })
  });
  await redditPostMessage(message, subredditName, data, "New");
}
