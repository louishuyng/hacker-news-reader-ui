import * as React from "react";
import "./Styles/app.css";
import "antd/dist/antd.css";
import { ArticleData, ArticleType } from "../server/domain/IApp";
import { Header, Card, Button } from "./Components";
import { Col, Row } from "antd";
import { spacing, theme } from "./Styles/themes";
import { apiRoute } from "./utils/api";
import { Get } from "./Services";
import { LoadingOutlined } from "@ant-design/icons";

export default () => {
  const [data, setData] = React.useState<Array<ArticleData> | Array<any>>([]);
  const [type, setType] = React.useState<ArticleType>(ArticleType.BEST);
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [isLoading, setIsLoading] = React.useState(false);

  const renderList = (data: Array<ArticleData>) => {
    return data?.map((val) => {
      return (
        <Col xl={6} lg={6} md={8} sm={12}>
          <Card
            onClick={() => {
              window.open(val?.link);
            }}
            link={val?.link}
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

  const fetchList = React.useCallback(async (page, type) => {
    setIsLoading(true);
    try {
      const res: { data: Array<ArticleData> } = await Get(
        apiRoute.getRoute(`articles?type=${type}&page=${page}`)
      );
      setIsLoading(false);
      return res.data;
    } catch (err) {
      setIsLoading(false);
      return [];
      // To do later
    }
  }, []);

  const getMore = React.useCallback(async () => {
    const newData = await fetchList(currentPage + 1, type);
    setCurrentPage(currentPage + 1);
    setData([...data, ...newData]);
  }, [currentPage, type, data]);

  const changeType = React.useCallback((type) => {
    setType(type);
    setCurrentPage(1);
  }, []);

  React.useEffect(() => {
    (async () => {
      try {
        setData([]);
        const data = await fetchList(1, type);
        setData(data);
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
          { name: "Best", onPress: () => changeType(ArticleType.BEST) },
          { name: "News", onPress: () => changeType(ArticleType.NEWS) },
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
      {isLoading && data.length === 0 && (
        <LoadingOutlined
          style={{
            fontSize: 70,
            position: "absolute",
            top: "50%",
            left: "50%",
            color: theme.colors.white,
            marginBottom: spacing[7],
          }}
        />
      )}
      {isLoading && data.length !== 0 && (
        <LoadingOutlined
          style={{
            fontSize: 30,
            color: theme.colors.white,
            marginBottom: spacing[7],
          }}
        />
      )}
      {data.length !== 0 && !isLoading && (
        <Button
          text="More"
          onClick={getMore}
          disabled={isLoading}
          presets="semiBoldL"
          buttonStyle={{
            borderRadius: spacing[5],
            backgroundColor: theme.colors.white,
            marginBottom: spacing[7],
          }}
          textStyle={{
            color: theme.colors.black,
          }}
        />
      )}
    </div>
  );
};
