import { Message } from 'discord.js';
import * as Snoowrap from 'snoowrap'
import { Timespan } from 'snoowrap/dist/objects/Subreddit';
import { redditPostMessage } from './redditPostMessage';

export async function redditSearch(message: Message, snoowrap: Snoowrap, subredditName: string, searchString: string, limit?: number, time?: Timespan): Promise<void> {
  const searchPosts = await snoowrap.getSubreddit(subredditName).search({ query: searchString, time: time ? time : 'all', sort: 'relevance' })
  let data = [];

  searchPosts.forEach(async (post) => {
    await data.push({
      url: post.url,
      title: post.title,
      score: post.score
    })
  });
  data = data.slice(0, limit ? limit : 1)

  await redditPostMessage(message, subredditName, data, "Search");

}
