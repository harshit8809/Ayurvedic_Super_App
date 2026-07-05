import { Booking } from "../types/booking"

let bookings: Booking[] = []

export const bookAppointment = (booking: Booking) => {
    bookings.push(booking)
}

export const getUpcomingBookings = () => {
    return bookings.filter(
        booking => booking.status === "UPCOMING"
    )
}

export const cancelBooking = (bookingId: string) => {
    bookings = bookings.map(item =>
        item.id === bookingId
            ? {
                  ...item,
                  status: "CANCELLED",
              }
            : item
    )
}

export const isAlreadyBooked = (
    doctorId: string,
    slotId: string
) => {
    return bookings.some(
        booking =>
            booking.doctorId === doctorId &&
            booking.slotId === slotId &&
            booking.status === "UPCOMING"
    )
}

export const hasSlotConflict = (
    patientName: string,
    date: string,
    time: string
) => {
    return bookings.some(
        booking =>
            booking.patientName === patientName &&
            booking.appointmentDate === date &&
            booking.appointmentTime === time &&
            booking.status === "UPCOMING"
    )
}