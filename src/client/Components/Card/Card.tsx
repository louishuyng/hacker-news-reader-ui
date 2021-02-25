import * as React from "react";
import { Card as AntdCard, CardProps as AntdCardProps, Skeleton } from "antd";
import { SmileTwoTone, CommentOutlined, BookOutlined } from "@ant-design/icons";
import { spacing, theme, rgbColor, ROW } from "../../Styles/themes";
import { Text } from "..";
import { omit } from "lodash";
import { Get } from "../../Services";
import { apiRoute } from "../../utils/api";
import "./Card.css";

type CardProps = {
  title: string;
  timeZone?: string;
  author?: string;
  points?: number;
  comments?: number;
  time?: string;
  isBookMarked?: boolean;
  width?: number;
  height?: number;
  description?: string;
  isLoading?: boolean;
  style?: React.CSSProperties;
  link: string;
} & AntdCardProps;

export const Card = (props: CardProps) => {
  const [isActive, setIsActive] = React.useState(false);
  const [image, setImage] = React.useState<string | undefined>(undefined);
  const [isLoadingImage, setIsLoadingImage] = React.useState<boolean>(false);

  const fetchImage = React.useCallback(async (page) => {
    const res: { image: string | undefined } = await Get(
      apiRoute.getRoute(`image?link=${props.link}`)
    );
    return res.image;
  }, []);

  React.useEffect(() => {
    (async () => {
      try {
        setIsLoadingImage(true);
        const data = await fetchImage(props.link);
        data && setImage(data);
        setIsLoadingImage(false);
      } catch (e) {
        setIsLoadingImage(false);
        // To do later
      }
    })();
  }, []);

  return (
    <AntdCard
      hoverable
      style={{
        paddingTop: spacing[4],
        borderRadius: spacing[4],
        borderColor: isActive ? theme.colors.primary : theme.colors.black,
        borderWidth: isActive ? 3 : 1,
        height: 320,
        ...props.style,
      }}
      onMouseMove={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      cover={
        <div
          style={{
            paddingLeft: spacing[4],
            paddingRight: spacing[4],
            width: "100%",
          }}
        >
          <div>
            {props.isLoading ? (
              <Skeleton.Button active style={{ width: 180, height: 15 }} />
            ) : (
              <div style={{ height: 63 }}>
                <div style={{ height: 33 }}>
                  <Text
                    text={props.title}
                    presets="semiBoldS"
                    className="textInLine"
                    style={{ color: theme.colors.black }}
                  />
                </div>
                <div
                  style={{
                    ...ROW,
                    justifyContent: "center",
                    marginTop: spacing[1],
                  }}
                >
                  <Text
                    text={props.author || ""}
                    presets="regularS"
                    style={{ marginRight: spacing[1] }}
                  />
                  <Text
                    text={"-"}
                    presets="semiBoldS"
                    style={{ marginRight: spacing[1] }}
                  />
                  <Text text={props.time || ""} presets="regularS" />
                </div>
              </div>
            )}
          </div>
          {isLoadingImage || !image ? (
            <Skeleton.Image
              style={{ height: 190, width: "100%", borderRadius: spacing[4] }}
            />
          ) : (
            <img
              loading="lazy"
              src={image}
              style={{
                height: 190,
                width: "100%",
                borderRadius: spacing[4],
              }}
            />
          )}
          <div
            style={{
              marginTop: spacing[4],
              justifyContent: "space-between",
              paddingLeft: spacing[4],
              paddingRight: spacing[4],
              ...ROW,
            }}
          >
            <div
              style={{ ...ROW, justifyContent: "center", alignItems: "center" }}
            >
              <div style={{ width: 35 }}>
                <Text text={props.points || 0} presets="semiBoldS" />
              </div>
              <SmileTwoTone
                style={{
                  fontSize: 20,
                  marginLeft: spacing[1],
                  marginBottom: 2,
                }}
                onClick={(event) => event.stopPropagation()}
              />
            </div>

            <div
              style={{ ...ROW, justifyContent: "center", alignItems: "center" }}
            >
              <div style={{ width: 35 }}>
                <Text text={props.comments || 0} presets="semiBoldS" />
              </div>
              <CommentOutlined
                style={{
                  fontSize: 20,
                  marginLeft: spacing[1],
                  marginBottom: 2,
                }}
                onClick={(event) => event.stopPropagation()}
              />
            </div>

            <div
              style={{ ...ROW, justifyContent: "center", alignItems: "center" }}
            >
              <div style={{ width: 35 }} />
              <BookOutlined
                style={{
                  fontSize: 20,
                  marginLeft: spacing[1],
                  marginBottom: 2,
                }}
                onClick={(event) => event.stopPropagation()}
              />
            </div>
          </div>
        </div>
      }
      {...omit(props, ["title", "style"])}
    >
      {props.description ? (
        props.isLoading ? (
          <Skeleton.Button
            active
            style={{ width: 250, height: 15, marginTop: spacing[5] }}
          />
        ) : (
          <Text
            text={props.description}
            presets="regularR"
            style={{ color: rgbColor(theme.colors.black, 0.7) }}
          />
        )
      ) : null}
    </AntdCard>
  );
};
