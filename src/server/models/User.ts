interface IUser {
  displayName: () => string;
  name: string;
}

export class User implements IUser {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  public displayName = (): string => {
    return this.name;
  };
}
