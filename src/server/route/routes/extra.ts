import { userInfo } from "os";
import router from "../router";
import { Request, Response } from "express";

router
  .route("/extra")
  .get((req: Request, res: Response) => {
    res.json({ username: userInfo().username });
  })
  .post((req: Request, res: Response) => {
    res.json({ text: "test" });
  })
  .put((req: Request, res: Response) => {
    res.json({ text: "test" });
  });

export default router;
