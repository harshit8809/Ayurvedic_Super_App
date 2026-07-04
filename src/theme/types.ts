import { Theme } from '@react-navigation/native';

export interface AppTheme extends Theme {
  darkMode: boolean;

  colors: Theme['colors'] & {
    primary: string;
    secondary: string;

    backgroundSecondary: string;

    card: string;

    textSecondary: string;

    borderLight: string;

    success: string;

    danger: string;

    warning: string;
  };
}