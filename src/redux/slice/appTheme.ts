import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Appearance } from 'react-native';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
    mode: ThemeMode;
}

const systemColorScheme = Appearance.getColorScheme() || 'light';

const initialState: ThemeState = {
    mode: 'system', // default follows device theme
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
            state.mode = action.payload;
        },
    },
});

export const { setThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
