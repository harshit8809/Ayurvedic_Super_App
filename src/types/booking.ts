export interface Booking {
  id: string;
  doctorId: string;

  patientName: string;

  slotId: string;

  appointmentDate: string;

  appointmentTime: string;

  status:
    | "UPCOMING"
    | "COMPLETED"
    | "CANCELLED";
}