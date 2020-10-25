import { Message } from 'discord.js';
import * as Snoowrap from 'snoowrap'
import { redditPostMessage } from './redditPostMessage';

export async function redditRandom(message: Message, snoowrap: Snoowrap, subredditName: string): Promise<void> {
  await snoowrap.getSubreddit(subredditName).getRandomSubmission().then(async (value) => { await redditPostMessage(message, subredditName, [value], "Random") });
}
