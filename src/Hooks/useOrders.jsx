import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useOrders = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: orders, isLoading: isOrdersLoading } = useQuery({
        queryKey: ['allOrders'],
        queryFn: async() => {
            const res = await axiosSecure.get("/order")
            return res.data;
        },
      })
      return [orders, isOrdersLoading]
};

export default useOrders;