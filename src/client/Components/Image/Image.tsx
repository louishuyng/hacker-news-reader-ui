import * as React from "react";
import { Image as AntdImage, ImageProps as AntdImageProps } from "antd";

type ImageProps = {
  width?: number;
  height?: number;
  preview?: string;
} & AntdImageProps;

export const Image = (props: ImageProps) => {
  return (
    <AntdImage
      width={props.width || 220}
      height={props.height || 220}
      src={props.src}
      placeholder={
        <AntdImage
          preview={false}
          src={props.preview}
          width={props.width || 220}
          height={props.height || 220}
        />
      }
    />
  );
};
