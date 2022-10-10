export type TContent = {
  type: "image" | "video" | "youtube"  | "jsx";
  url?: string;
  content?: ({}:{isPlay?:boolean}) => JSX.Element;
  fullscreen?: boolean;
  styles?: React.CSSProperties;
};
