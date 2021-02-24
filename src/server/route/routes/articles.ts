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
  const page = req.query.p;
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

  const formatedData = articles.map((val: Article) => {
    return {
      title: val.displayTitle(),
      link: val.displayRefLink(),
      author: (authors?.filter(
        (author) => author.articleId === val.id
      )[0] as Author)?.displayName(),
      points: (points?.filter(
        (point) => point.articleId === val.id
      )[0] as Point)?.displayCount(),
      comments: (comments?.filter(
        (comment) => comment.articleId === val.id
      )[0] as Comment)?.displayCount(),
      time: (times?.filter(
        (time) => time.articleId === val.id
      )[0] as Time)?.displayTime(),
    };
  });

  res.json({ data: formatedData });
});

export default router;
