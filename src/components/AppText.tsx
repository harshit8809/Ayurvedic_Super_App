import { Text, View } from "react-native";
import { useAppTheme } from "../theme/ThemeProvider";

const AppText = ({ children, style, numberOfLines }: any) => {
  const theme = useAppTheme();

  return (
    <Text
      style={[
        {
          color: theme.colors.text,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default AppText;