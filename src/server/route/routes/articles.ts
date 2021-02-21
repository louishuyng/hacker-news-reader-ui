import { userInfo } from "os";
import router from "../router";
import { Request, Response } from "express";

router.route("/articles").get((req: Request, res: Response) => {
  res.json({ username: userInfo().username });
});

export default router;
