import React, { createContext, useContext, useMemo } from 'react';
import { useColorScheme } from 'react-native';
import { LightTheme } from './light';
import { AppDarkTheme } from './dark';
import { RootState } from '../redux/store';
import { useAppSelector } from '../redux/hooks';
import { AppTheme } from './types';

const ThemeContext = createContext<AppTheme>(LightTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    const mode = useAppSelector((state: RootState) => state.theme.mode);

    const systemScheme = useColorScheme();
    const activeMode = mode === 'system' ? systemScheme : mode;

    const appTheme = useMemo(() => {
        return activeMode === 'dark' ? AppDarkTheme : LightTheme;
    }, [activeMode]);

    return (
        <ThemeContext.Provider value={appTheme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useAppTheme = () => useContext(ThemeContext);