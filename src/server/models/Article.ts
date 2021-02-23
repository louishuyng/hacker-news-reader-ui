import { User } from "./User";

interface IArticle {
  displayTitle: () => string;
  displayDescription: () => string;
  displayAuthorName: () => string;
  displayPoints: () => number;
  displayRefLink: () => string;
  updateRefLink: (val: string) => void;
  updatePoints: (val: number) => void;
}

export class Article implements IArticle {
  private name: string;
  private description: string;
  private author: User | undefined;
  private points: number;
  private refLink: string;

  constructor(name: string) {
    this.name = name;
    this.description = "";
    this.author = undefined;
    this.points = 0;
    this.refLink = "";
  }

  public displayTitle = (): string => {
    return this.name;
  };

  public displayDescription = (): string => {
    return this.description;
  };

  public displayAuthorName = (): string => {
    return this.author?.name || "";
  };
  public updateAuthor = (user: User): void => {
    this.author = user;
  };

  public displayRefLink = (): string => {
    return this.refLink;
  };
  public updateRefLink = (val: string): void => {
    this.refLink = val;
  };

  public displayPoints = (): number => {
    return this.points;
  };
  public updatePoints = (val: number): void => {
    this.points = val;
  };
}
