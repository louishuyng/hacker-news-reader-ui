interface IArticle {
  id: number;
  displayTitle: () => string;
  displayDescription: () => string;
  displayRefLink: () => string;
  updateRefLink: (val: string) => void;
}

export class Article implements IArticle {
  public id: number;
  private name: string;
  private description: string;
  private refLink: string;

  constructor(name: string, id: number) {
    this.id = id;
    this.name = name;
    this.description = "";
    this.refLink = "";
  }

  public displayTitle = (): string => {
    return this.name;
  };

  public displayDescription = (): string => {
    return this.description;
  };

  public displayRefLink = (): string => {
    return this.refLink;
  };
  public updateRefLink = (val: string): void => {
    this.refLink = val;
  };
}
