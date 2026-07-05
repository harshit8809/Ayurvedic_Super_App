import React, { useEffect, useMemo, useState } from "react";
import { View, ActivityIndicator, StyleSheet, Image, ScrollView } from "react-native";
import { fetchDoctorById } from "../../services/doctor.service";
import BaseBtn from "../../components/elements/BaseBtn";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Slot } from "../../types/slot";
import { bookAppointment } from "../../services/booking.service";
import SlotSection from "../../components/section/consultation/SlotSection";
import InfoSection from "../../components/section/consultation/InfoSection";

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

    const groupedSlots = useMemo(() => {
        if (!doctor) return {};

        return doctor.availableSlots.reduce(
            (acc: Record<string, Slot[]>, slot: Slot) => {
                if (!acc[slot.date]) {
                    acc[slot.date] = [];
                }
                acc[slot.date].push(slot);
                return acc;
            },
            {}
        );
    }, [doctor]);

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

    if (loading) {
        return <ActivityIndicator />
    }

    if (!doctor) {
        return null;
    }

    return (
        <View style={[styles.mainContainer, { paddingBottom: bottom + 6, }]}>
            <ScrollView style={[styles.container]} showsVerticalScrollIndicator={false}>
                <Image style={styles.image} source={{ uri: doctor.image }} resizeMode="cover" />

                <InfoSection
                    doctor={doctor}
                />

                <SlotSection
                    groupedSlots={groupedSlots}
                    selectedSlot={selectedSlot}
                    onSelectSlot={setSelectedSlot}
                />
            </ScrollView>

            <BaseBtn
                title="Book Appointment"
                disabled={!selectedSlot}
                onPress={handleBook}
            />
        </View>
    );
};

export default DoctorDetails

const styles = StyleSheet.create({
    mainContainer: { flex: 1, padding: 10, paddingHorizontal: 15 },
    container: {
        flex: 1
    },
    image: {
        width: "100%",
        height: 210,
        borderRadius: 20,
    },
});
