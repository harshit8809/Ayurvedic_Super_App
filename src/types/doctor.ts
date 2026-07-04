export interface Doctor {
  id: string;
  name: string;
  specialization: string;
  experience: number;
  rating: number;
  consultationFee: number;
  image: string;
  hospital: string;
}

// export interface DoctorQuery {
//   page: number;
//   limit: number;

//   search?: string;

//   specialization?: string;

//   availableToday?: boolean;
// }

// export interface DoctorListResponse {
//   data: Doctor[];

//   page: number;

//   limit: number;

//   total: number;

//   totalPages: number;

//   hasNextPage: boolean;
// }