import { useEffect, useState } from "react";

import { getUpcomingBookings } from "../services/booking.service";
import { fetchDoctorById } from "../services/doctor.service";

export const useUpcomingConsultation = () => {

    const [consultation, setConsultation] =
        useState<any>(null);

    useEffect(() => {

        load();

    }, []);

    const load = async () => {

        const bookings =
            getUpcomingBookings();

        if (!bookings.length) return;

        const booking = bookings[0];

        const doctor =
            await fetchDoctorById(
                booking.doctorId
            );

        setConsultation({
            ...booking,
            doctor,
        });

    };

    return consultation;
};