import { Submission } from "snoowrap";

export function redditIsPostNsfw(submission: Submission): boolean {
  console.log(submission.over_18);
  return submission.over_18;
}