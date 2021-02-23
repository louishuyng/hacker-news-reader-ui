import * as React from "react";
import { presets, Tpresets } from "../../Styles/themes";

export interface TextProps {
  text: string;
  presets?: Tpresets;
  style?: React.CSSProperties;
  className?: string;
}

export const Text = (props: TextProps) => {
  return (
    <div
      style={{ ...presets[props.presets || "regularR"], ...props.style }}
      className={props.className}
    >
      {props.text}
    </div>
  );
};
