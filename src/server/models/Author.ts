interface IAuthor {
  displayName: () => string;
}

export class Author implements IAuthor {
  private name: string;
  public articleId: number;

  constructor(name: string, articleId: number) {
    this.name = name;
    this.articleId = articleId;
  }

  public displayName = (): string => {
    return this.name;
  };
}
