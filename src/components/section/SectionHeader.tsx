import React, { memo } from 'react';
import { StyleSheet } from 'react-native';
import AppText from '../AppText';

interface Props {
    title: string;
}

const SectionHeader = ({ title }: Props) => {

    return (
        <AppText style={styles.title}>
            {title}
        </AppText>
    );
};

export default memo(SectionHeader);

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: '700',
        // marginBottom: 16,
    },
});