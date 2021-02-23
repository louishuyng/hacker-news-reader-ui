import * as React from "react";
import "./Styles/app.css";
import "antd/dist/antd.css";
import { AppProps, AppStates } from "../server/domain/IApp";
import { Header, Card } from "./Components";
import { Col, Row } from "antd";
import { spacing, theme } from "./Styles/themes";

export default class App extends React.Component<AppProps, AppStates> {
  renderList = (data: Array<any>) => {
    return data?.map(() => {
      return (
        <Col xl={4} lg={6} md={8} sm={12}>
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
          title="Hacker News"
          actions={[
            { name: "Best", onPress: () => null },
            { name: "News", onPress: () => null },
          ]}
        />
        <div
          style={{
            paddingLeft: spacing[7],
            marginTop: spacing[7],
          }}
        >
          <Row>{this.renderList([1, 2, 3, 4, 5, 6, 7, 9, 10, 11])}</Row>
        </div>
      </div>
    );
  }
}
