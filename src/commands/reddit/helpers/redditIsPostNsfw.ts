import { Submission } from "snoowrap";

export function redditIsPostNsfw(submission: Submission): boolean {
  return submission.over_18;
}