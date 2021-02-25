import express, { Request, Response, Router, Express } from "express";
import bodyParser from "body-parser";
import router from "../route";
import { Server } from "http";

export const createServer = async (customPort?: number): Promise<Server> => {
  // call express
  const server: Express = express(); // define our app using express

  // configure app to use bodyParser for
  // Getting data from body of requests
  server.use(bodyParser.json());

  server.use(bodyParser.urlencoded({ extended: true }));

  const port: number = Number(process.env.PORT) || customPort || 8050; // set our port

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
  const serverApp = server.listen(port);
  console.log(`App listening on ${port}`);

  return serverApp;
};
