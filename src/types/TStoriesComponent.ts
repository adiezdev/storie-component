import { TContent } from "./TContent";

export default interface TStoriesComponent {
  content: Array<TContent>;
  seconds: number;
  progress?: boolean;
}
