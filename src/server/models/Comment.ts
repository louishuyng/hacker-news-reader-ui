import { User } from "./User";

interface IComment {
  message: string;
  commenter: User;
  articleId: string;
}

export class Comment implements IComment {
  public message: string;
  public commenter: User;
  public articleId: string;

  constructor(message: string, commenter: User, articleId: string) {
    this.message = message;
    this.commenter = commenter;
    this.articleId = articleId;
  }
}
