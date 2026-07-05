import React, { useCallback, useEffect, useMemo, useState } from "react";
import { View, ActivityIndicator, StyleSheet, Image, ScrollView } from "react-native";
import { fetchDoctorById } from "../../services/doctor.service";
import BaseBtn from "../../components/elements/BaseBtn";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Slot } from "../../types/slot";
import { bookAppointment, hasSlotConflict, isAlreadyBooked } from "../../services/booking.service";
import SlotSection from "../../components/section/consultation/SlotSection";
import InfoSection from "../../components/section/consultation/InfoSection";
import { isSlotSelectable } from "../../utils/slotUtils";
import { toast } from "../../utils/toast";
import { SCREENS } from "../../constant/screens";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../redux/hooks";
import { addBooking } from "../../redux/slice/bookings";

const DoctorDetails = ({ route }: any) => {
    const { doctorId } = route.params;
    const { bottom } = useSafeAreaInsets()
    const navigation = useNavigation<any>()
    const dispatch = useAppDispatch();
    const [doctor, setDoctor] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const [booking, setBooking] = useState(false)

    const [selectedSlot, setSelectedSlot] = useState<any>(null)

    useEffect(() => {
        loadDoctor()
    }, [])

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
    }

    const groupedSlots = useMemo(() => {
        if (!doctor) return {}

        return doctor.availableSlots.reduce(
            (acc: Record<string, Slot[]>, slot: Slot) => {
                if (!acc[slot.date]) {
                    acc[slot.date] = []
                }
                acc[slot.date].push(slot)
                return acc
            },
            {}
        )
    }, [doctor])


    const handleBook = async () => {
        if (!selectedSlot) {
            toast.error("Please select a slot")
            return
        }
        if (selectedSlot.isExpired) {
            toast.error("Selected slot has expired")
            return
        }
        if (
            isAlreadyBooked(
                doctor.id,
                selectedSlot.id
            )
        ) {
            toast.error(
                "This appointment has already been booked."
            )
            return
        }

        if (
            hasSlotConflict(
                "Harshit",
                selectedSlot.date,
                selectedSlot.time
            )
        ) {
            toast.error(
                "You already have another appointment at this time."
            )
            return
        }

        try {
            setBooking(true)

            const newBooking = {
                id: Date.now().toString(),
                doctorId: doctor.id,
                patientName: "Harshit",
                slotId: selectedSlot.id,
                appointmentDate: selectedSlot.date,
                appointmentTime: selectedSlot.time,
                status: "UPCOMING" as const,
            }

            bookAppointment(newBooking)

            dispatch(addBooking(newBooking))

            toast.success("Appointment booked successfully")

            navigation.replace(SCREENS.MY_BOOKINGS)

        } catch (error) {

            toast.error("Booking failed")

        } finally {
            setBooking(false)

        }
    }


    const handleSelectSlot = useCallback((slot: Slot) => {
        if (!isSlotSelectable(slot)) {
            if (slot.isExpired) {
                toast.error('This slot has expired')
            } else {
                toast.error('This slot is already booked')
            }
            return
        }
        setSelectedSlot(slot)
    }, [])

    if (loading) {
        return <ActivityIndicator />
    }

    if (!doctor) {
        return null
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
                    onSelectSlot={handleSelectSlot}
                />
            </ScrollView>

            <BaseBtn
                title="Book Appointment"
                disabled={!selectedSlot}
                loading={booking}
                onPress={handleBook}
                accessibilityLabel={"Book Appointment"}
            />
        </View>
    )
}

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
})
