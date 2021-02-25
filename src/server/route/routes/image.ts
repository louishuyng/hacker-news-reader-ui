import { crawl, getImage } from "../../services/crawl";
import { Request, Response } from "express";
import router from "../router";

router.route("/image").get(async (req: Request, res: Response) => {
  const link = req.query.link;

  const loadImages = async () => {
    const [images] = await crawl.analyse(link as string, [getImage]);

    return images?.filter((image) => image?.includes("http"))?.[0];
  };

  const image = await loadImages();

  res.json({ image });
});

export default router;
