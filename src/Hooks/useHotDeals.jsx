import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import useAxiosSecure from "./useAxiosSecure";

const useHotDeals = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: hotDeals, isLoading: isHotDealsLoading } = useQuery({
        queryKey: ['hotDeals'],
        queryFn: async() => {
            const res = await axiosSecure.get('/products')
            return res.data;
        },
      })
      return [hotDeals, isHotDealsLoading]
};

export default useHotDeals;