import * as React from "react";
import "./Styles/app.css";
import "antd/dist/antd.css";
import { ArticleData } from "../server/domain/IApp";
import { Header, Card } from "./Components";
import { Col, Row } from "antd";
import { spacing } from "./Styles/themes";
import { apiRoute } from "./utils/api";
import { Get } from "./Services";

export default () => {
  const [data, setData] = React.useState<Array<ArticleData>>([]);

  const renderList = (data: Array<ArticleData>) => {
    return data?.map((val) => {
      return (
        <Col xl={4} lg={6} md={8} sm={12}>
          <Card
            onClick={() => {
              console.log(val?.link);
              window.open(val?.link);
            }}
            title={val.title}
            style={{ marginRight: spacing[7], marginBottom: spacing[7] }}
          />
        </Col>
      );
    });
  };

  React.useEffect(() => {
    (async () => {
      try {
        const res: { data: Array<ArticleData> } = await Get(
          apiRoute.getRoute("articles")
        );
        setData(res.data);
      } catch (e) {
        // To do later
      }
    })();
  }, []);

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
        <Row>{renderList(data)}</Row>
      </div>
    </div>
  );
};
