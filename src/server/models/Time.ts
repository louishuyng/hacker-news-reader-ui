interface ITime {
  displayTime: () => string;
}

export class Time implements ITime {
  private time: string;
  public articleId: number;

  constructor(time: string, articleId: number) {
    this.time = time;
    this.articleId = articleId;
  }

  public displayTime = (): string => {
    return this.time;
  };
}
