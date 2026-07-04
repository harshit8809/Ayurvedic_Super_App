// types/doctorDetails.ts

import { Doctor } from "./doctor";
import { Slot } from "./slot";

export interface DoctorDetails extends Doctor {
    id: any;
    about: string;
    education: string[];
    languages: string[];
    consultationDuration: number;
    patientsTreated: number;
    clinicAddress: string;
    availableSlots: Slot[];
}