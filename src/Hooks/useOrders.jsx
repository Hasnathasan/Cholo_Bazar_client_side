import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useOrders = ({orderStatus}) => {
    const [axiosSecure] = useAxiosSecure()
    const { data: orders, isLoading: isOrdersLoading, refetch } = useQuery({
        queryKey: [`Order${orderStatus}`, orderStatus],
        queryFn: async() => {
            const res = await axiosSecure.get(`/order/${orderStatus}`)
            return res.data;
        },
      })
      return [orders, isOrdersLoading, refetch]
};

export default useOrders;