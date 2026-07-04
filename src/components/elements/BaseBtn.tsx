// import { StyleSheet, Text, TouchableOpacity } from 'react-native'
// import React from 'react'
// import { useAppTheme } from '../../theme/ThemeProvider'

// const BaseBtn = ({ btnTitle, onPress }: any) => {
//     const { colors } = useAppTheme()
//     return (
//         <TouchableOpacity
//             style={[
//                 styles.button,
//                 {
//                     backgroundColor: colors.primary,
//                 },
//             ]}
//             onPress={onPress}
//         >
//             <Text style={styles.buttonText}>
//                 {btnTitle}
//             </Text>
//         </TouchableOpacity>
//     )
// }

// export default BaseBtn

// const styles = StyleSheet.create({
//     button: {
//         marginTop: 20,
//         borderRadius: 12,
//         alignItems: 'center',
//         paddingVertical: 12,
//     },

//     buttonText: {
//         color: '#FFF',
//         fontWeight: '600',
//     },
// })


import React, { memo } from "react";
import {
  ActivityIndicator,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { useAppTheme } from "../../theme/ThemeProvider";

interface BaseBtnProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;

  loading?: boolean;
  disabled?: boolean;

  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;

  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const BaseBtn = ({
  title,
  onPress,

  loading = false,
  disabled = false,

  containerStyle,
  textStyle,

  leftIcon,
  rightIcon,

  ...rest
}: BaseBtnProps) => {
  const { colors } = useAppTheme();

  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: isDisabled
            ? "#CFCFCF"
            : colors.primary,
        },
        containerStyle,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color="#FFF" />
      ) : (
        <>
          {leftIcon}

          <Text style={[styles.buttonText, textStyle]}>
            {title}
          </Text>

          {rightIcon}
        </>
      )}
    </TouchableOpacity>
  );
};

export default memo(BaseBtn);

const styles = StyleSheet.create({
  button: {
    height: 52,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",

    flexDirection: "row",
    gap: 8,
  },

  buttonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 16,
  },
});