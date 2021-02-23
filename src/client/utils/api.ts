interface IApi {
  getRoute: (routeName: string) => string;
}

class Api implements IApi {
  getRoute(routeName: string) {
    return `/api/${routeName}`;
  }
}

const apiRoute: Api = Object.freeze(new Api());

export { apiRoute };
