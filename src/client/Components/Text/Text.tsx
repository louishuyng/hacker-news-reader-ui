import * as React from "react";
import { presets, Tpresets } from "../../Styles/themes";

export interface TextProps {
  text: string;
  presets?: Tpresets;
  style?: React.CSSProperties;
}

export const Text = (props: TextProps) => {
  return (
    <div style={{ ...presets[props.presets || "regularR"], ...props.style }}>
      {props.text}
    </div>
  );
};
