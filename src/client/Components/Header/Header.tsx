import * as React from "react";
import { ROW, spacing, theme, rgbColor } from "../../Styles/themes";
import { Text, Button } from "..";

interface HeaderProps {
  headerStyle?: React.CSSProperties;
  title: string;
  actions?: Array<{ name: string; onPress: any }>;
  background?: string;
}

export const Header = (props: HeaderProps) => {
  const [isActive, setIsActive] = React.useState<any>(0);
  return (
    <div
      style={{
        height: 50,
        width: "100%",
        background: props.background || theme.colors.black,
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
              background: theme.colors.white,
              display: "flex",
              alignItems: "center",
              paddingRight: spacing[2],
              paddingLeft: spacing[2],
              paddingTop: spacing[3],
              paddingBottom: spacing[3],
              width: 30,
              height: 30,
              borderRadius: 100,
            }}
          >
            <Text
              text="Y"
              presets="semiBoldL"
              style={{ color: theme.colors.black }}
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
                        ? theme.colors.secondary
                        : theme.colors.white,
                  }}
                  presets={isActive === index ? "semiBoldR" : "regularR"}
                  onClick={() => {
                    setIsActive(index);
                    value.onPress();
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
