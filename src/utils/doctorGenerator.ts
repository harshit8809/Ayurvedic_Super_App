import { faker } from "@faker-js/faker";
import { Doctor } from "../types/doctor";
import { specializations } from "../constant/dummyData/dummyData";

export const generateDoctors = (
    count: number = 5000
): Doctor[] => {
    return Array.from({ length: count }, (_, index) => ({
        id: String(index + 1),
        name: `Dr. ${faker.person.fullName()}`,
        specialization:
            faker.helpers.arrayElement(specializations),
        experience: faker.number.int({
            min: 1,
            max: 25,
        }),
        rating: Number(
            faker.number
                .float({
                    min: 3.5,
                    max: 5,
                    fractionDigits: 1,
                })
                .toFixed(1)
        ),
        consultationFee: faker.number.int({
            min: 300,
            max: 1500,
        }),
        image: faker.image.avatar(),
        hospital: faker.company.name(),
    }));
};