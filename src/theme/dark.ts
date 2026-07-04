import { DarkTheme } from '@react-navigation/native';
import { AppTheme } from './types';

export const AppDarkTheme: AppTheme = {
  ...DarkTheme,

  darkMode: true,

  colors: {
    ...DarkTheme.colors,

    primary: '#4CAF50',

    secondary: '#E0B95B',

    background: '#111827',

    backgroundSecondary: '#1F2937',

    card: '#1E293B',

    text: '#FFFFFF',

    textSecondary: '#9CA3AF',

    border: '#374151',

    borderLight: '#4B5563',

    success: '#22C55E',

    danger: '#EF4444',

    warning: '#FACC15',

    notification: '#F87171',
  },
};