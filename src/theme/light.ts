// export const LightTheme = {
//     mode: 'light',
//     colors: {
//         background: '#FFFFFF',
//         text: '#000000',
//     },
//     darkMode: false
// };


import { DefaultTheme } from '@react-navigation/native';
import { AppTheme } from './types';

export const LightTheme: AppTheme = {
  ...DefaultTheme,

  darkMode: false,

  colors: {
    ...DefaultTheme.colors,

    primary: '#2E7D32',

    secondary: '#C49A3A',

    background: '#FFFFFF',

    backgroundSecondary: '#F7F7F7',

    card: '#FFFFFF',

    text: '#111827',

    textSecondary: '#6B7280',

    border: '#E5E7EB',

    borderLight: '#F3F4F6',

    success: '#16A34A',

    danger: '#DC2626',

    warning: '#D97706',

    notification: '#EF4444',
  },
};