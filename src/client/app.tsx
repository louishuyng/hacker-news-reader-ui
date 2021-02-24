import * as React from "react";
import "./Styles/app.css";
import "antd/dist/antd.css";
import { ArticleData, ArticleType } from "../server/domain/IApp";
import { Header, Card } from "./Components";
import { Col, Row } from "antd";
import { spacing } from "./Styles/themes";
import { apiRoute } from "./utils/api";
import { Get } from "./Services";

export default () => {
  const [data, setData] = React.useState<Array<ArticleData>>([]);
  const [type, setType] = React.useState<ArticleType>(ArticleType.BEST);

  const renderList = (data: Array<ArticleData>) => {
    return data?.map((val) => {
      return (
        <Col xl={6} lg={6} md={8} sm={12}>
          <Card
            onClick={() => {
              console.log(val?.link);
              window.open(val?.link);
            }}
            title={val.title}
            time={val.time}
            author={val.author}
            comments={val.comments}
            points={val.points}
            style={{ marginRight: spacing[10], marginBottom: spacing[10] }}
          />
        </Col>
      );
    });
  };

  React.useEffect(() => {
    (async () => {
      try {
        const res: { data: Array<ArticleData> } = await Get(
          apiRoute.getRoute(`articles?type=${type}`)
        );
        setData(res.data);
      } catch (e) {
        // To do later
      }
    })();
  }, [type]);

  return (
    <div>
      <Header
        title="Hacker News"
        actions={[
          { name: "Best", onPress: () => setType(ArticleType.BEST) },
          { name: "News", onPress: () => setType(ArticleType.NEWS) },
        ]}
      />
      <div
        style={{
          paddingLeft: spacing[9],
          marginTop: spacing[7],
          width: "100%",
        }}
      >
        <Row>{renderList(data)}</Row>
      </div>
    </div>
  );
};
