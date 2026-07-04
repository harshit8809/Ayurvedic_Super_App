import { StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import AppText from '../../AppText'
import { useAppTheme } from '../../../theme/ThemeProvider';

const GreetingHeader = () => {
    const { colors } = useAppTheme();
    return (
        <View>
            <AppText style={[
                styles.greeting,
                {
                    color: colors.textSecondary,
                },
            ]}>
                Good Morning 👋
            </AppText>

            <AppText style={styles.title}>
                Your Wellness Companion
            </AppText>
        </View>
    )
}

export default memo(GreetingHeader)

const styles = StyleSheet.create({
    greeting: {
        fontSize: 16,
    },

    title: {
        fontSize: 28,
        fontWeight: '700',
        marginTop: 4,
        marginBottom: 24,
    },
})