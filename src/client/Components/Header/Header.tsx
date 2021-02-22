import * as React from "react";
import { ROW, spacing, theme } from "../../Styles/themes";
import { Text, Button } from "..";

interface HeaderProps {
  headerStyle?: React.CSSProperties;
  title: string;
  actions?: Array<{ name: string; onPress: any }>;
}

export const Header = (props: HeaderProps) => {
  return (
    <div
      style={{
        height: 50,
        width: "100%",
        background: theme.colors.primary,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "ceter",
        paddingLeft: spacing[4],
        paddingRight: spacing[4],
        ...props.headerStyle,
      }}
    >
      <div style={ROW}>
        <div style={{ ...ROW, alignItems: "center" }}>
          <Text
            text={props.title}
            presets="semiBoldM"
            style={{ marginRight: spacing[2], color: theme.colors.white }}
          />
          <div
            style={{
              background: theme.colors.secondary,
              display: "flex",
              alignItems: "center",
              paddingRight: spacing[2],
              paddingLeft: spacing[2],
              paddingTop: spacing[1],
            }}
          >
            <Text text="Y" presets="semiBoldM" />
          </div>
          <div style={{ marginLeft: spacing[6], ...ROW }}>
            {props.actions?.map((value) => (
              <div>
                <Button
                  text={value.name}
                  style={{ marginRight: spacing[2] }}
                  customType="clear"
                  presets="regularR"
                  onClick={value.onPress}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
