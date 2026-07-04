// import { useEffect, useState } from "react";
// import { fetchDoctors } from "../services/doctor.service";
// import { Doctor } from "../types/doctor";
// import { useDebounce } from "./useDebounce";

// export const useDoctors = () => {
//     const [page, setPage] = useState(1);
//     const [doctors, setDoctors] = useState<Doctor[]>([]);
//     const [loading, setLoading] = useState(false);
//     const [hasMore, setHasMore] = useState(true);
//     const [search, setSearch] = useState("");

//     const [category, setCategory] = useState("All");


//     const debouncedSearch = useDebounce(search, 500);

//     const loadDoctors = async (
//         reset = false,
//         value = search
//     ) => {
//         if (loading) return;

//         setLoading(true);

//         const currentPage = reset ? 1 : page;

//         const res = await fetchDoctors(
//             currentPage,
//             value
//         );

//         setDoctors(prev =>
//             reset ? res.data : [...prev, ...res.data]
//         );

//         setHasMore(currentPage < res.totalPages);

//         setPage(currentPage + 1);

//         setLoading(false);
//     };

//     useEffect(() => {
//         loadDoctors(true, debouncedSearch);
//     }, [debouncedSearch]);

//     return {
//         doctors,
//         loading,
//         hasMore,
//         loadDoctors,
//         search,
//         setSearch,

//         category,
//         setCategory,
//     };
// };




import { useEffect, useState } from "react";
import { fetchDoctors } from "../services/doctor.service";
import { Doctor } from "../types/doctor";
import { useDebounce } from "./useDebounce";

export const useDoctors = () => {
    const [page, setPage] = useState(1);
    const [doctors, setDoctors] = useState<Doctor[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [search, setSearch] = useState("");

    const [category, setCategory] = useState("All");


    const debouncedSearch = useDebounce(search, 500);

    const loadDoctors = async (
        reset = false,
        value = search,
        selectedCategory = category
    ) => {
        if (loading) return;

        setLoading(true);

        const currentPage = reset ? 1 : page;

        const res = await fetchDoctors(
            currentPage,
            value,
            selectedCategory
        );

        setDoctors(prev =>
            reset ? res.data : [...prev, ...res.data]
        );

        setHasMore(currentPage < res.totalPages);

        setPage(currentPage + 1);

        setLoading(false);
    };

    // useEffect(() => {
    //     loadDoctors(true, debouncedSearch);
    // }, [debouncedSearch]);
    useEffect(() => {
        loadDoctors(true, debouncedSearch, category);
    }, [debouncedSearch, category]);

    return {
        doctors,
        loading,
        hasMore,
        loadDoctors,
        search,
        setSearch,

        category,
        setCategory,
    };
};