import React, { memo } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Heart, Search } from 'lucide-react-native';
import { useAppTheme } from '../../theme/ThemeProvider';

const SearchBar = ({ search, setSearch, options, onHeartPress }: any) => {
    const { colors } = useAppTheme();

    return (
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
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
            {options &&
                <Pressable style={{ backgroundColor: colors.backgroundSecondary, padding: 10, borderRadius: 20, borderWidth: 1, borderColor: colors.border }}
                    onPress={onHeartPress}
                >
                    <Heart
                        size={22}
                        color={colors.primary}
                        fill={colors.primary}
                    />
                </Pressable>}

        </View>
    );
};

export default memo(SearchBar);

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 14,
        paddingHorizontal: 14,
        flex: 1
        // marginBottom: 30,
    },

    input: {
        flex: 1,
        paddingVertical: 14,
        marginLeft: 10,
        fontSize: 15,
    },
});