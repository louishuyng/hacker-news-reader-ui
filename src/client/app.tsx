import * as React from "react";
import "./Styles/app.css";
import "antd/dist/antd.css";
import { AppProps, AppStates } from "../server/domain/IApp";
import { Header, Card } from "./Components";
import { Col, Row } from "antd";
import { spacing, theme, rgbColor } from "./Styles/themes";

export default class App extends React.Component<AppProps, AppStates> {
  renderList = (data: Array<any>) => {
    return data?.map(() => {
      return (
        <Col xl={6} lg={8} md={12} sm={16}>
          <Card
            title="test"
            description="test"
            style={{ marginRight: spacing[7], marginBottom: spacing[7] }}
          />
        </Col>
      );
    });
  };

  render() {
    return (
      <div>
        <Header
          background={theme.colors.black}
          title="Hacker News"
          actions={[
            { name: "News", onPress: () => null },
            { name: "Jobs", onPress: () => null },
          ]}
        />
        <div
          style={{
            paddingLeft: spacing[7],
            marginTop: spacing[7],
          }}
        >
          <Row>{this.renderList([1, 2, 3])}</Row>
        </div>
      </div>
    );
  }
}
