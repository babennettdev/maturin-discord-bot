import { Message, TextChannel } from 'discord.js';
import { arch } from 'os';
import * as Snoowrap from 'snoowrap'
import { sendWhteRbtPermissionDenied } from '../../../botCore/messages/sendWhteRbtPermissionDenied'

export async function redditPostMessage(message: Message, subredditName: string, listings: Snoowrap.Submission[], context: string, isSubredditNsfw: Promise<boolean>) {
  console.log('redditPostMessage');
  console.log(message.channel.type)
  if (message.channel.type === 'text') {
    const channel: TextChannel = message.channel;
    if (channel.nsfw === false && await isSubredditNsfw === true) {
      sendWhteRbtPermissionDenied(message, `Ah ah ah, r/${subredditName} is a NSFW subreddit and this is not a NSFW channel`);

    }

    else {
      listings.forEach((listing, index) => {
        console.log(listing)

        const channel: TextChannel = message.channel as TextChannel;
        if (channel.nsfw === false && listing.over_18 === true) {
          console.log('nsfw')
          sendWhteRbtPermissionDenied(message, `Ah ah ah, this post is NSFW and this is not a NSFW channel`);
        }
        else {
          console.log('else2')
          message.reply(`${context} Reddit result ${index + 1} for subreddit: r/${subredditName}:
          Title: ${listing.title}
          Score: ${listing.score} 
          Link: ${listing.url}`);

        }
      });
    }
  }
  else {
    listings.forEach((listing, index) => {
      message.reply(`${context} Reddit result ${index + 1} for subreddit: r/${subredditName}:
        Title: ${listing.title}
        Score: ${listing.score} 
        Link: ${listing.url}`);
    });
  }

}