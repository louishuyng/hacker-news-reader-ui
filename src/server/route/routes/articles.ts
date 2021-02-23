import router from "../router";
import { Request, Response } from "express";
import { crawl } from "../../services/crawl";
import { getDataNewsHacker } from "../../utils/crawl";

router.route("/articles").get(async (req: Request, res: Response) => {
  const page = req.query.p;

  const [
    data,
  ] = await crawl.analyse(`https://news.ycombinator.com/best?p=${page}`, [
    getDataNewsHacker,
  ]);
  res.json({ data });
});

export default router;
