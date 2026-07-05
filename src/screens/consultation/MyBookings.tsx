import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../redux/hooks'
import { fetchDoctorById } from '../../services/doctor.service'
import { cancelBooking as cancelBookingAction } from '../../redux/slice/bookings'
import { cancelBooking as cancelBookingService } from '../../services/booking.service'
import BaseBtn from '../../components/elements/BaseBtn'
import { toast } from '../../utils/toast'
import { useAppTheme } from '../../theme/ThemeProvider'

const MyBookings = () => {
    const dispatch = useAppDispatch()
    const bookings = useAppSelector(state => state.bookings.bookings)
    const colors = useAppTheme().colors
    const [doctorDetails, setDoctorDetails] = useState<Record<string, any>>({})
    const [loading, setLoading] = useState(true)
    const [cancelling, setCancelling] = useState<string | null>(null)

    useEffect(() => {
        loadDoctorDetails()
    }, [bookings])

    const loadDoctorDetails = async () => {
        try {
            setLoading(true)
            const details: Record<string, any> = {}

            for (const booking of bookings) {
                if (!details[booking.doctorId]) {
                    try {
                        const doctor = await fetchDoctorById(booking.doctorId)
                        details[booking.doctorId] = doctor
                    } catch (error) {
                        console.log('Error loading doctor:', error)
                    }
                }
            }

            setDoctorDetails(details)
        } catch (error) {
            console.log('Error loading doctor details:', error)
        } finally {
            setLoading(false)
        }
    }

    const handleCancelBooking = async (bookingId: string) => {
        try {
            setCancelling(bookingId)
            cancelBookingService(bookingId)
            dispatch(cancelBookingAction(bookingId))
            toast.success('Booking cancelled successfully')
        } catch (error) {
            toast.error('Failed to cancel booking')
            console.log('Error cancelling booking:', error)
        } finally {
            setCancelling(null)
        }
    }

    const upcomingBookings = bookings.filter(booking => booking.status === 'UPCOMING')

    const renderBookingItem = ({ item }: any) => {
        const doctor = doctorDetails[item.doctorId]

        return (
            <View style={[styles.bookingCard, { borderColor: colors.primary }]}>
                <View style={styles.bookingHeader}>
                    <Text style={[styles.doctorName, { color: colors.text }]}>
                        {doctor?.name || 'Dr. Loading...'}
                    </Text>
                    <Text style={[styles.specialty, { color: colors.textSecondary }]}>
                        {doctor?.specialty || 'Specialty'}
                    </Text>
                </View>

                <View style={styles.bookingDetails}>
                    <View style={styles.detailRow}>
                        <Text style={[styles.label, { color: colors.textSecondary }]}>Date:</Text>
                        <Text style={[styles.value, { color: colors.text }]}>{item.appointmentDate}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={[styles.label, { color: colors.textSecondary }]}>Time:</Text>
                        <Text style={[styles.value, { color: colors.text }]}>{item.appointmentTime}</Text>
                    </View>
                    <View style={styles.detailRow}>
                        <Text style={[styles.label, { color: colors.textSecondary }]}>Patient:</Text>
                        <Text style={[styles.value, { color: colors.text }]}>{item.patientName}</Text>
                    </View>
                </View>

                <BaseBtn
                    title="Cancel Booking"
                    onPress={() => handleCancelBooking(item.id)}
                    loading={cancelling === item.id}
                    style={styles.cancelBtn}
                />
            </View>
        )
    }

    if (loading && bookings.length === 0) {
        return (
            <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                <ActivityIndicator size="large" color={colors.primary} />
            </View>
        )
    }

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {upcomingBookings.length === 0 ? (
                <View style={[styles.emptyContainer, { justifyContent: 'center', alignItems: 'center' }]}>
                    <Text style={[styles.emptyText, { color: colors.textSecondary }]}>
                        No upcoming bookings
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={upcomingBookings}
                    keyExtractor={item => item.id}
                    renderItem={renderBookingItem}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                />
            )}
        </View>
    )
}

export default MyBookings

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    listContent: {
        paddingVertical: 10,
    },
    bookingCard: {
        borderWidth: 1,
        borderRadius: 12,
        padding: 15,
        marginBottom: 15,
    },
    bookingHeader: {
        marginBottom: 12,
    },
    doctorName: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    specialty: {
        fontSize: 13,
    },
    bookingDetails: {
        marginBottom: 12,
    },
    detailRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    label: {
        fontSize: 13,
        fontWeight: '500',
    },
    value: {
        fontSize: 13,
        fontWeight: '600',
    },
    cancelBtn: {
        height: 40,
    },
    emptyContainer: {
        flex: 1,
    },
    emptyText: {
        fontSize: 16,
        fontWeight: '500',
    },
})