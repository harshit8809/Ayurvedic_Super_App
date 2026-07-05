import { generateProducts } from "../utils/productGenerator";

const products = generateProducts();

const PAGE_SIZE = 20;

export const fetchProducts = (
  page: number,
  search = "",
  category = "All"
) => {

  return new Promise(resolve => {

    setTimeout(() => {

      let filtered = products;

      if (search.trim()) {
        filtered = filtered.filter(item =>
          item.name
            .toLowerCase()
            .includes(search.toLowerCase())
        );
      }

      if (category !== "All") {
        filtered = filtered.filter(
          item =>
            item.category === category
        );
      }

      const start =
        (page - 1) * PAGE_SIZE;

      resolve({

        data:
          filtered.slice(
            start,
            start + PAGE_SIZE
          ),

        totalPages:
          Math.ceil(
            filtered.length /
            PAGE_SIZE
          ),

      });

    }, 700);

  });

};