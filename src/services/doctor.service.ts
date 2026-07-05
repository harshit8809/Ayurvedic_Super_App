import { DoctorDetails } from "../types/doctorDetails";
import { generateDoctorDetails } from "../utils/doctorDetailsGenerator";
import { generateDoctors } from "../utils/doctorGenerator";

const doctors = generateDoctors();

export interface DoctorResponse {
    data: typeof doctors;
    page: number;
    totalPages: number;
}

const PAGE_SIZE = 20;

export const fetchDoctors = (
    page: number,
    search: string = "",
    category: string = "All"
): Promise<DoctorResponse> => {
    return new Promise(resolve => {
        setTimeout(() => {

            let filtered = doctors;

            if (search.trim()) {
                filtered = filtered.filter(item =>
                    item.name
                        .toLowerCase()
                        .includes(search.toLowerCase())
                );
            }

            if (category !== "All") {
                filtered = filtered.filter(
                    item => item.specialization === category
                );
            }

            const start = (page - 1) * PAGE_SIZE;
            const end = start + PAGE_SIZE;

            resolve({
                data: filtered.slice(start, end),
                page,
                totalPages: Math.ceil(filtered.length / PAGE_SIZE),
            });
        }, 700);
    });
};

export const fetchDoctorById = (
  doctorId: string
): Promise<DoctorDetails> => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const doctor = doctors.find(
        item => item.id === doctorId
      );
      if (!doctor) {
        reject("Doctor not found");
        return;
      }
      resolve(
        generateDoctorDetails(doctor)
      );
    }, 500);
  });
};