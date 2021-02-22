import * as React from "react";
import { Button as AntdButton, ButtonProps as AntdButtonProps } from "antd";
import omit from "lodash/omit";
import { Text, TextProps } from "../";
import { spacing, theme } from "../../Styles/themes";

type TButton = "primary" | "clear";
type ButtonProps = {
  customType?: TButton;
  textStyle?: React.CSSProperties;
} & TextProps &
  AntdButtonProps;

export const Button = (props: ButtonProps) => {
  const mappingType: {
    [key in TButton]: React.CSSProperties;
  } = {
    primary: {
      background: theme.colors.primary,
      color: theme.colors.white,
      paddingTop: spacing[2],
      paddingBottom: spacing[2],
      paddingLeft: spacing[4],
      paddingRight: spacing[4],
    },
    clear: {
      border: "none",
      color: theme.colors.white,
      background: "transparent",
    },
  };

  const style = mappingType[props.customType || "primary"];

  return (
    <AntdButton {...omit(props, "text")} style={style}>
      <Text
        text={props.text}
        presets={props.presets}
        style={{ color: style.color, ...props.textStyle }}
      />
    </AntdButton>
  );
};
