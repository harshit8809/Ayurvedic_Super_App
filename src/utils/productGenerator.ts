import { faker } from "@faker-js/faker";

import { Product } from "../types/product";

const categories = [
  "Medicine",
  "Supplements",
  "Ayurveda",
  "Skin Care",
  "Hair Care",
  "Personal Care",
];

export const generateProducts = (
  count = 20000
): Product[] => {

  return Array.from(
    { length: count },
    (_, index) => ({

      id: String(index + 1),

      name: faker.commerce.productName(),

      category:
        faker.helpers.arrayElement(categories),

      price: Number(
        faker.commerce.price({
          min: 100,
          max: 3000,
        })
      ),

      discount:
        faker.number.int({
          min: 5,
          max: 60,
        }),

      rating:
        Number(
          faker.number
            .float({
              min: 3.5,
              max: 5,
              fractionDigits: 1,
            })
            .toFixed(1)
        ),

      stock:
        faker.number.int({
          min: 0,
          max: 30,
        }),

      image:
        `https://picsum.photos/300?random=${index}`,

      brand:
        faker.company.name(),
    })
  );
};