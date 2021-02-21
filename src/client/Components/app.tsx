import * as React from "react";
import "../Less/app.less";
import { AppProps, AppStates } from "../../server/domain/IApp";

export default class App extends React.Component<AppProps, AppStates> {
  render() {
    return <div>Test </div>;
  }
}
