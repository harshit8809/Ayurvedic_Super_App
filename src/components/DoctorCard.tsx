import React, { memo } from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Doctor } from "../types/doctor";
import { useAppTheme } from "../theme/ThemeProvider";
import AppText from "./AppText";

interface Props {
    doctor: Doctor;
    onPress: () => void;
}

const DoctorCard = ({ doctor, onPress }: Props) => {
    const { colors } = useAppTheme();
    return (
        <Pressable style={[styles.card, { backgroundColor: colors.card, borderColor: colors.border, borderWidth: 1 }]}
            onPress={onPress}
        >

            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                <Image source={{ uri: doctor.image }} style={styles.image} />
                <View>
                    <AppText style={styles.name}>{doctor.name}</AppText>
                    <AppText>{doctor.specialization}</AppText>
                </View>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <AppText style={styles.label}>Experience: {doctor.experience} yrs</AppText>
            </View>

            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <AppText style={styles.label}>Rating: ⭐ {doctor.rating}</AppText>
                <AppText style={[styles.label]}>₹ {doctor.consultationFee}</AppText>
            </View>
        </Pressable>
    );
};

export default memo(DoctorCard);

const styles = StyleSheet.create({
    card: {
        padding: 16,
        borderRadius: 10,
        backgroundColor: "#fff",
        marginBottom: 12,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 8,
    },

    name: {
        fontWeight: "700",
        fontSize: 18,
    },
    label: {
        fontSize: 12,
    },
});