import router from "../router";
import { Request, Response } from "express";
import {
  crawl,
  getAuthorNewsHacker,
  getCommentNewsHacker,
  getDataNewsHacker,
  getPointNewsHacker,
  getTimeNewsHacker,
} from "../../services/crawl";
import { Article } from "../../models/Article";
import { Author } from "../../models/Author";
import { Point } from "../../models/Point";
import { Comment } from "../../models/Comment";
import { Time } from "../../models/Time";

router.route("/articles").get(async (req: Request, res: Response) => {
  const page = req.query.page;
  const type = req.query.type;

  const [
    articles,
    authors,
    points,
    comments,
    times,
  ] = await crawl.analyse(
    `https://news.ycombinator.com/${type || "best"}?p=${page}`,
    [
      getDataNewsHacker,
      getAuthorNewsHacker,
      getPointNewsHacker,
      getCommentNewsHacker,
      getTimeNewsHacker,
    ]
  );

  const formatedData =
    articles?.map((article: Article) => {
      return {
        title: article.displayTitle(),
        link: article.displayRefLink(),
        author: (authors?.filter(
          (author) => author.articleId === article.id
        )[0] as Author)?.displayName(),
        points: (points?.filter(
          (point) => point.articleId === article.id
        )[0] as Point)?.displayCount(),
        comments: (comments?.filter(
          (comment) => comment.articleId === article.id
        )[0] as Comment)?.displayCount(),
        time: (times?.filter(
          (time) => time.articleId === article.id
        )[0] as Time)?.displayTime(),
      };
    }) || [];

  res.json({ data: formatedData });
});

export default router;
