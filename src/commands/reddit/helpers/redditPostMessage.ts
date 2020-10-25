import { Message } from 'discord.js';
import * as Snoowrap from 'snoowrap'

export async function redditPostMessage(message: Message, subredditName: string, listings: Snoowrap.Submission[], context: string) {
  listings.forEach((listing, index) => {
    console.log(listing)
    message.reply(`${context} Reddit result ${index + 1} for subreddit: r/${subredditName}:
  Title: ${listing.title}
  Score: ${listing.score} 
  Link: ${listing.url}`);
  });

}