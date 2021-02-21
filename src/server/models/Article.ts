import { User } from "./User";

interface IArticle {
  displayTitle: () => string;
  displayDescription: () => string;
  displayAuthorName: () => string;
  displayPoints: () => number;
  updatePoints: (val: number) => void;
}

export class Article implements IArticle {
  private name: string;
  private description: string;
  private author: User;
  private points: number;

  constructor(name: string, description: string, user: User) {
    this.name = name;
    this.description = description;
    this.author = user;
    this.points = 0;
  }

  public displayTitle = (): string => {
    return this.name;
  };

  public displayDescription = (): string => {
    return this.description;
  };

  public displayAuthorName = (): string => {
    return this.author.name;
  };

  public updatePoints = (val: number): void => {
    this.points = val;
  };

  public displayPoints = (): number => {
    return this.points;
  };
}
