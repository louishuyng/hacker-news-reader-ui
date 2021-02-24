interface IPoint {
  articleId: number;
  displayCount: () => number;
}

export class Point implements IPoint {
  private count: number;
  public articleId: number;

  constructor(count: number, articleId: number) {
    this.count = count;
    this.articleId = articleId;
  }

  displayCount(): number {
    return this.count;
  }
}
