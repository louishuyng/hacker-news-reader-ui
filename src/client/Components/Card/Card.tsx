import * as React from "react";
import { Card as AntdCard, CardProps as AntdCardProps, Skeleton } from "antd";
import { spacing, theme, rgbColor } from "../../Styles/themes";
import { Text } from "..";
import { omit } from "lodash";

type CardProps = {
  title: string;
  image?: string;
  width?: number;
  height?: number;
  description?: string;
  isLoading?: boolean;
  style?: React.CSSProperties;
} & AntdCardProps;

const { Meta } = AntdCard;

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
        height: 280,
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
          <img
            src={
              props.image ||
              "https://image.freepik.com/free-vector/white-blurred-background_1034-249.jpg"
            }
            style={{
              height: 150,
              width: "100%",
              borderRadius: spacing[4],
            }}
          />
        </div>
      }
      {...omit(props, ["title", "style"])}
    >
      <div>
        {props.isLoading ? (
          <Skeleton.Button active style={{ width: 180, height: 15 }} />
        ) : (
          <Text
            text={props.title}
            presets="regularR"
            className="textInLine"
            style={{ color: theme.colors.black }}
          />
        )}
      </div>

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
