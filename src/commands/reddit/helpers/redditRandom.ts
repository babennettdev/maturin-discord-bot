import { Message } from 'discord.js';
import * as Snoowrap from 'snoowrap'
import { redditIsSubredditNsfw, redditPostMessage } from './';

export async function redditRandom(message: Message, snoowrap: Snoowrap, subredditName: string): Promise<void> {
  const isSubredditNsfw = redditIsSubredditNsfw(snoowrap, subredditName);
  await snoowrap.getSubreddit(subredditName).getRandomSubmission().then(async (value) => { await redditPostMessage(message, subredditName, [value], "Random", isSubredditNsfw) });
}
