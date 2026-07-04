import { Booking } from "../types/booking";

let bookings: Booking[] = [];

export const bookAppointment = (
    booking: Booking
) => {
    bookings.push(booking)
}

export const getUpcomingBookings = () => {
    return bookings.filter(
        booking =>
            booking.status === "UPCOMING"
    )
}

export const cancelBooking = (
    bookingId: string
) => {
    bookings = bookings.map(item =>
        item.id === bookingId
            ? {
                ...item,
                status: "CANCELLED",
            }
            : item
    )
}