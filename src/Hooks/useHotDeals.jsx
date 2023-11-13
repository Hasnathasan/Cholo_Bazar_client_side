import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
import axios from "axios";

const useHotDeals = () => {
    // const [axiosSecure] = useAxiosSecure()
    const { data: hotDeals, isLoading: isHotDealsLoading } = useQuery({
        queryKey: ['hotDeals'],
        queryFn: async() => {
            const res = await axios.get("https://summer-camp-server-black.vercel.app/products")
            return res.data;
        },
      })
      return [hotDeals, isHotDealsLoading]
};

export default useHotDeals;