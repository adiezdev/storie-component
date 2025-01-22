import { TContent } from "./TContent";

export type TTypesContent = {
    [key:string]: (content: TContent, isPlay?: boolean, muted?: boolean) => React.JSX.Element;
}

