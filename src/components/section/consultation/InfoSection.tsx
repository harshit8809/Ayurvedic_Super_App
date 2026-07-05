import { StyleSheet, View } from 'react-native'
import React, { memo } from 'react'
import Divider from '../Divider'
import AppText from '../../AppText'
import SectionHeader from '../SectionHeader'

const InfoSection = ({ doctor }: any) => {
    return (
        <>
            <Divider height={15} />
            <AppText style={styles.name}>{doctor.name}</AppText>
            <Divider height={15} />

            <View style={styles.section}>
                <AppText>{doctor.specialization}</AppText>
                <AppText>Hospital: {doctor.hospital}</AppText>
            </View>

            <View style={styles.section}>
                <AppText>Rating: ⭐ {doctor.rating}</AppText>
                <AppText>{doctor.experience} Years Experience</AppText>
            </View>

            <Divider height={4} />
            <AppText>₹ {doctor.consultationFee}</AppText>

            <Divider height={10} />
            <Divider height={0.5} backgroundColor="#ccc" />
            <Divider height={10} />

            <SectionHeader title="About" />
            <AppText>{doctor.about}</AppText>

            <Divider height={10} />
            <Divider height={0.5} backgroundColor="#ccc" />
            <Divider height={10} />
            <SectionHeader title="Available Slots" />
            <Divider height={10} />
        </>
    )
}

export default memo(InfoSection)

const styles = StyleSheet.create({
    name: {
        fontSize: 20,
    },
    section: { flexDirection: "row", justifyContent: "space-between", marginTop: 4 },
})