import router from "../router";
import { Request, Response } from "express";
import { crawl } from "../../services/crawl";
import { getDataNewsHacker } from "../../utils/crawl";
import { Article } from "../../models/Article";

router.route("/articles").get(async (req: Request, res: Response) => {
  const page = req.query.p;
  const type = req.query.type;

  const [data] = await crawl.analyse(
    `https://news.ycombinator.com/${type || "best"}?p=${page}`,
    [getDataNewsHacker]
  );

  const formatedData = data.map((val: Article) => {
    return {
      title: val.displayTitle(),
      link: val.displayRefLink(),
    };
  });

  res.json({ data: formatedData });
});

export default router;
