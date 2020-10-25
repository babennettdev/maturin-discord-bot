import * as Snoowrap from "snoowrap";

export async function redditIsSubredditNsfw(snoowrap: Snoowrap, subredditName): Promise<boolean> {
  console.log(await snoowrap.getSubreddit(subredditName).over18);
  return await snoowrap.getSubreddit(subredditName).over18

}