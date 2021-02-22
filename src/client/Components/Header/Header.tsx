import * as React from "react";
import { ROW, spacing, theme } from "../../Styles/themes";
import { Text, Button } from "..";

interface HeaderProps {
  headerStyle?: React.CSSProperties;
  title: string;
  actions?: Array<{ name: string; onPress: any }>;
  background?: string;
}

export const Header = (props: HeaderProps) => {
  const [isActive, setIsActive] = React.useState<any>(null);
  return (
    <div
      style={{
        height: 50,
        width: "100%",
        background: props.background || theme.colors.primary,
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
            presets="semiBoldL"
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
            <Text
              text="Y"
              presets="semiBoldL"
              style={{ color: theme.colors.white }}
            />
          </div>
          <div style={{ marginLeft: spacing[6], ...ROW }}>
            {props.actions?.map((value, index) => (
              <div>
                <Button
                  text={value.name.toUpperCase()}
                  style={{ marginRight: spacing[2] }}
                  customType="clear"
                  textStyle={{
                    color:
                      isActive === index
                        ? theme.colors.green
                        : theme.colors.white,
                  }}
                  presets={isActive === index ? "semiBoldR" : "regularR"}
                  onMouseOver={() => setIsActive(index)}
                  onMouseLeave={() => setIsActive(null)}
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
