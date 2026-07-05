import { useEffect, useState } from "react";
import { Product } from "../types/product";
import { fetchProducts } from "../services/product.service";
import { useDebounce } from "./useDebounce";

export const useProducts = () => {
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");
    const debouncedSearch = useDebounce(search, 500);

    const loadProducts = async (
        reset = false,
        value = debouncedSearch,
        selectedCategory = category
    ) => {
        if (loading) return;

        setLoading(true);

        const currentPage = reset ? 1 : page;

        try {
            const response: any = await fetchProducts(
                currentPage,
                value,
                selectedCategory
            );

            setProducts(prev =>
                reset
                    ? response.data
                    : [...prev, ...response.data]
            );

            setHasMore(
                currentPage < response.totalPages
            );

            setPage(currentPage + 1);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadProducts(true);
    }, [debouncedSearch, category]);

    return {
        products,
        loading,
        hasMore,
        loadProducts,
        search,
        setSearch,
        category,
        setCategory,
    };
};