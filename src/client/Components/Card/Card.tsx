import * as React from "react";
import { Card as AntdCard, CardProps as AntdCardProps, Skeleton } from "antd";
import { SmileTwoTone, CommentOutlined, BookOutlined } from "@ant-design/icons";
import { spacing, theme, rgbColor, ROW } from "../../Styles/themes";
import { Text } from "..";
import { omit } from "lodash";

type CardProps = {
  title: string;
  timeZone?: string;
  author?: string;
  isBookMarked?: boolean;
  image?: string;
  width?: number;
  height?: number;
  description?: string;
  isLoading?: boolean;
  style?: React.CSSProperties;
} & AntdCardProps;

export const Card = (props: CardProps) => {
  const [isActive, setIsActive] = React.useState(false);
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
                    text="Louis"
                    presets="regularS"
                    style={{ marginRight: spacing[2] }}
                  />
                  <Text text="Now" presets="regularS" />
                </div>
              </div>
            )}
          </div>
          <img
            src={
              props.image ||
              "https://image.freepik.com/free-vector/white-blurred-background_1034-249.jpg"
            }
            style={{
              height: 190,
              width: "100%",
              borderRadius: spacing[4],
            }}
          />
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
              <Text text="1" presets="semiBoldS" />
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
              <Text text="1" presets="semiBoldS" />
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
