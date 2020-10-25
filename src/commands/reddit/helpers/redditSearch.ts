import { Message } from 'discord.js';
import * as Snoowrap from 'snoowrap'
import { Timespan } from 'snoowrap/dist/objects/Subreddit';
import { redditIsSubredditNsfw, redditPostMessage } from './';

export async function redditSearch(message: Message, snoowrap: Snoowrap, subredditName: string, searchString: string, limit?: number, time?: Timespan): Promise<void> {
  const isSubredditNsfw = redditIsSubredditNsfw(snoowrap, subredditName);
  const searchPosts = await snoowrap.getSubreddit(subredditName).search({ query: searchString, time: time ? time : 'all', sort: 'relevance' })
  let data = [];

  searchPosts.forEach(async (post) => {
    await data.push({
      url: post.url,
      title: post.title,
      score: post.score,
      over_18: post.over_18
    })
  });
  data = data.slice(0, limit ? limit : 1)

  await redditPostMessage(message, subredditName, data, "Search", isSubredditNsfw);

}
