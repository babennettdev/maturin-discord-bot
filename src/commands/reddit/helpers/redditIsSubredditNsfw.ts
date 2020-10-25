import * as Snoowrap from "snoowrap";

export async function redditIsSubredditNsfw(snoowrap: Snoowrap, subredditName): Promise<boolean> {
  return await snoowrap.getSubreddit(subredditName).over18

}