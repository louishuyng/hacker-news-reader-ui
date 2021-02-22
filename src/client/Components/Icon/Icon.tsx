import * as React from "react";
import { Image } from "..";

type SizeIcon = "small" | "medium" | "large";

interface IconProps {
  size: SizeIcon;
  src?: string;
}

export const Icon = (props: IconProps) => {
  const mapSize: { [key in SizeIcon]: number } = {
    small: 10,
    medium: 12,
    large: 14,
  };

  const sizeIcon = mapSize[props.size];

  return <Image width={sizeIcon} height={sizeIcon} src={props.src} />;
};
