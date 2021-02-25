import express, { Request, Response, Router, Express } from "express";
import bodyParser from "body-parser";
import router from "../route";

export const createServer = async (): Promise<Express> => {
  // call express
  const server: Express = express(); // define our app using express

  // configure app to use bodyParser for
  // Getting data from body of requests
  server.use(bodyParser.json());

  server.use(bodyParser.urlencoded({ extended: true }));

  const port: number = Number(process.env.PORT) || 8050; // set our port

  // Send index.html on root request
  server.use(express.static("dist"));
  server.get("/", (req: Request, res: Response) => {
    res.sendFile("/dist/index.html");
  });

  // REGISTER ROUTES
  // all of the routes will be prefixed with /api
  const routes: Router[] = Object.values(router);
  server.use("/api", routes);

  // START THE SERVER
  // =============================================================================
  server.listen(port);
  console.log(`App listening on ${port}`);

  return server;
};
