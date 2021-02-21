import { Ipath, IPathRoute } from "../domain/IPath";

function path(url: string): IPathRoute {
  const allRoutes: Ipath = {
    "/articles": {
      methods: ["GET"],
    },
  };
  return allRoutes[url];
}

export default path;
