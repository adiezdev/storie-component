import { TContent } from "./TContent";

export type TTypesContent = {
    [key:string]: (content: TContent, isPlay?: boolean) => JSX.Element;
}