export interface ArticleData {
  title: string;
  link: string;
  author: string;
  points: number;
  comments: number;
  time: string;
}

export enum ArticleType {
  BEST = "best",
  NEWS = "news",
}
