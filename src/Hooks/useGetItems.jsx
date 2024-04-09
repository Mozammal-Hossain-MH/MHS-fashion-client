import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useGetItems = (route) => {
    const axiosPublic = useAxiosPublic();

    const { data: items = [], refetch } = useQuery({
        queryKey: ['menu', route],
        queryFn: async () => {
            const res = await axiosPublic.get(`${route}`);
            return res.data;
        }
    })

    return [items, refetch]
};

export default useGetItems;