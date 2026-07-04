import React, { useEffect, useState } from "react";
import { View, ActivityIndicator, StyleSheet, Image, TouchableOpacity, ScrollView } from "react-native";
import { DoctorDetails as DoctorDetailsType } from "../../types/doctorDetails";
import { fetchDoctorById } from "../../services/doctor.service";
import AppText from "../../components/AppText";
import Divider from "../../components/section/Divider";
import BaseBtn from "../../components/elements/BaseBtn";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import SectionHeader from "../../components/section/SectionHeader";
import { Slot } from "../../types/slot";
import { APP_COLORS } from "../../constant/appColors";
import { bookAppointment, getUpcomingBookings } from "../../services/booking.service";

const DoctorDetails = ({ route }: any) => {
    const { doctorId } = route.params;
    const { bottom } = useSafeAreaInsets()
    const [doctor, setDoctor] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [selectedSlot, setSelectedSlot] = useState<Slot | null>(null);

    useEffect(() => {
        loadDoctor();
    }, []);

    const loadDoctor = async () => {
        try {
            const response = await fetchDoctorById(doctorId)
            console.log('response--', response)
            setDoctor(response)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    };

    const handleBook = () => {
        if (!selectedSlot) {
            return;
        }
        bookAppointment({
            id: Date.now().toString(),
            doctorId: doctor.id,
            patientName: "Harshit",
            slotId: selectedSlot.id,
            appointmentDate:
                selectedSlot.date,
            appointmentTime:
                selectedSlot.time,
            status: "UPCOMING",
        });

    }
    const booking =
        getUpcomingBookings();
    console.log("booking -=>", booking)

    if (loading) {
        return <ActivityIndicator />
    }

    if (!doctor) {
        return null;
    }

    return (
        <View style={{ paddingBottom: bottom + 6, flex: 1, padding: 10, paddingHorizontal: 15 }}>
            <ScrollView style={[styles.container]} showsVerticalScrollIndicator={false}>
                <Image style={styles.image} source={{ uri: doctor.image }} resizeMode="cover" />
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

                <View style={styles.slotContainer}>
                    {doctor.availableSlots.map((slot: any) => {

                        const isSelected =
                            selectedSlot?.id === slot.id;

                        return (
                            <TouchableOpacity
                                key={slot.id}
                                style={[
                                    styles.slotChip,
                                    isSelected &&
                                    styles.selectedSlot
                                ]}
                                onPress={() =>
                                    setSelectedSlot(slot)
                                }
                            >
                                <AppText
                                    style={{
                                        color: isSelected
                                            ? "#FFF"
                                            : "#727272",
                                    }}
                                >
                                    {slot.time}
                                </AppText>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </ScrollView>

            <BaseBtn
                title="Book Appointment"
                disabled={!selectedSlot}
                onPress={handleBook}
            />
        </View>
    );
};

export default DoctorDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        width: "100%",
        height: 210,
        borderRadius: 20,
    },
    name: {
        fontSize: 20,
    },
    section: { flexDirection: "row", justifyContent: "space-between", marginTop: 4 },

    slotContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
        paddingBottom: 30
    },

    slotChip: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: "#2E7D32",
    },

    selectedSlot: {
        backgroundColor: APP_COLORS.PRIMARY,
    },
});
