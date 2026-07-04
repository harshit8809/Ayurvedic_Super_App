import { View } from "react-native";
import { useAppTheme } from "../theme/ThemeProvider";

const Screen = ({ children }: { children: React.ReactNode }) => {
    const theme = useAppTheme();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: theme.colors.background,
            }}
        >
            {children}
        </View>
    );
};

export default Screen;