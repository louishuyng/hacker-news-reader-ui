import * as React from "react";
import "./Styles/app.css";
import "antd/dist/antd.css";
import { AppProps, AppStates } from "../server/domain/IApp";
import { Header } from "./Components";

export default class App extends React.Component<AppProps, AppStates> {
  render() {
    return (
      <Header
        title="Hacker News"
        actions={[
          { name: "News", onPress: () => null },
          { name: "Jobs", onPress: () => null },
        ]}
      />
    );
  }
}
