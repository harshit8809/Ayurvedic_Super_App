import { Text, View } from "react-native";
import { useAppTheme } from "../theme/ThemeProvider";

const AppText = ({ children, style }: { children: React.ReactNode; style?: any }) => {
  const theme = useAppTheme();

  return (
    <Text
      style={[
        {
          color: theme.colors.text,
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default AppText;