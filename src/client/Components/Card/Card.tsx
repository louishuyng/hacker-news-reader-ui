import * as React from "react";
import { Card as AntdCard, CardProps as AntdCardProps, Skeleton } from "antd";
import { spacing, theme, rgbColor } from "../../Styles/themes";
import { Text } from "..";

type CardProps = {
  title: string;
  image?: string;
  width?: number;
  height?: number;
  description: string;
  isLoading?: boolean;
  style?: React.CSSProperties;
} & AntdCardProps;

const { Meta } = AntdCard;

export const Card = (props: CardProps) => {
  return (
    <AntdCard
      hoverable
      style={{
        paddingLeft: spacing[4],
        paddingRight: spacing[4],
        paddingTop: spacing[4],
        borderRadius: spacing[4],
        ...props.style,
      }}
      cover={
        <img
          src={
            props.image ||
            "https://image.freepik.com/free-vector/white-blurred-background_1034-249.jpg"
          }
          style={{ height: 150, borderRadius: spacing[4] }}
        />
      }
    >
      <div>
        {props.isLoading ? (
          <Skeleton.Button active style={{ width: 180, height: 15 }} />
        ) : (
          <Text
            text={props.title}
            presets="semiBoldR"
            style={{ color: rgbColor(theme.colors.black, 0.7) }}
          />
        )}
      </div>
      <div style={{ marginTop: spacing[5] }}>
        {props.isLoading ? (
          <Skeleton.Button active style={{ width: 250, height: 15 }} />
        ) : (
          <Text
            text={props.description}
            presets="regularR"
            style={{ color: rgbColor(theme.colors.black, 0.7) }}
          />
        )}
      </div>
    </AntdCard>
  );
};
