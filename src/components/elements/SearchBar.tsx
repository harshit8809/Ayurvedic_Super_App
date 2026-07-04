import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Search } from 'lucide-react-native';
import { useAppTheme } from '../../theme/ThemeProvider';

const SearchBar = ({ search, setSearch }: any) => {
    const { colors } = useAppTheme();

    return (
        <View
            style={[
                styles.container,
                {
                    backgroundColor: colors.card,
                    borderColor: colors.border,
                },
            ]}>
            <Search
                size={20}
                color={colors.textSecondary}
            />

            <TextInput
                placeholder="Search doctors, medicines..."
                placeholderTextColor={colors.textSecondary}
                value={search}
                onChangeText={setSearch}
                style={[
                    styles.input,
                    {
                        color: colors.text,
                    },
                ]}
            />
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 14,
        paddingHorizontal: 14,
        // marginBottom: 30,
    },

    input: {
        flex: 1,
        paddingVertical: 14,
        marginLeft: 10,
        fontSize: 15,
    },
});