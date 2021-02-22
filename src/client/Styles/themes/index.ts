import { CSSProperties } from "react";

export const theme = {
  colors: {
    primary: "#151E35",
    secondary: "#F8A60D",
    blue: "#3971DD",
    black: "#000000",
    green: "#2E9F4B",
    white: "#ffffff",
  },
};

export type Tpresets =
  | "regularR"
  | "regularM"
  | "regularL"
  | "semiBoldR"
  | "semiBoldM"
  | "semiBoldL";

export const presets: {
  [key in Tpresets]: CSSProperties;
} = {
  // medium
  regularM: {
    fontFamily: "Newsreader",
    fontSize: 16,
  },

  // regular
  regularR: {
    fontFamily: "Newsreader",
    fontSize: 14,
  },

  // large
  regularL: {
    fontFamily: "Newsreader",
    fontSize: 18,
  },

  semiBoldM: {
    fontFamily: "NewsReaderSemiBold",
    fontSize: 16,
  },
  semiBoldR: {
    fontFamily: "NewsReaderSemiBold",
    fontSize: 14,
  },
  semiBoldL: {
    fontFamily: "NewsReaderSemiBold",
    fontSize: 18,
    lineHeight: 1,
  },
};

export const spacing = [0, 4, 8, 12, 16, 20, 24, 28, 32];

export const ROW: CSSProperties = { flexDirection: "row", display: "flex" };
export const CENTER: CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

export function rgbColor(hex: string, a: number) {
  return `rgba(${hexToRgb(hex)?.r},${hexToRgb(hex)?.g},${
    hexToRgb(hex)?.b
  },${a})`;
}
