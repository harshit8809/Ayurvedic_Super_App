import { faker } from "@faker-js/faker";
import { Doctor } from "../types/doctor";
import { DoctorDetails } from "../types/doctorDetails";
import { generateSlots } from "./slotGenerator";

export const generateDoctorDetails = (
  doctor: Doctor
): DoctorDetails => ({
  ...doctor,

  about: faker.lorem.paragraph(),

  education: [
    "MBBS",
    "MD",
  ],

  languages: [
    "English",
    "Hindi",
  ],

  consultationDuration: 30,

  patientsTreated:
    faker.number.int({
      min: 500,
      max: 6000,
    }),

  clinicAddress:
    faker.location.streetAddress(),

  availableSlots:
    generateSlots(),
});