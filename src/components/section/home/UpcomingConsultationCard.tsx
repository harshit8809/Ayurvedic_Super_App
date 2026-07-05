import React, { memo } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { CalendarDays } from 'lucide-react-native';
import { useAppTheme } from '../../../theme/ThemeProvider';
import AppText from '../../AppText';

// interface Props {
    //     consultation: any;
    // }

    // const UpcomingConsultationCard = ({
    //     consultation,
    // }: Props) => {
const UpcomingConsultationCard = () => {
    const { colors } = useAppTheme();

    return (
        <View
            style={[
                styles.card,
                {
                    backgroundColor: colors.card,
                    borderColor: colors.border,
                },
            ]}>
            <View style={styles.row}>
                <CalendarDays
                    size={22}
                    color={colors.primary}
                />

                <View style={{ marginLeft: 14 }}>
                    <AppText
                        style={[
                            styles.name,
                            {
                                color: colors.text,
                            },
                        ]}>
                        Dr. Vaidya Sharma
                    </AppText>

                    <Text
                        style={{
                            color: colors.textSecondary,
                        }}>
                        Today • 11:30 AM
                    </Text>
                </View>
            </View>

            <TouchableOpacity
                style={[
                    styles.button,
                    {
                        backgroundColor: colors.primary,
                    },
                ]}>
                <Text style={styles.buttonText}>
                    View Details
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default memo(UpcomingConsultationCard);

const styles = StyleSheet.create({
    card: {
        borderRadius: 18,
        borderWidth: 1,
        padding: 18,
    },

    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    name: {
        fontWeight: '700',
        fontSize: 16,
    },

    button: {
        marginTop: 20,
        borderRadius: 12,
        alignItems: 'center',
        paddingVertical: 12,
    },

    buttonText: {
        color: '#FFF',
        fontWeight: '600',
    },
});