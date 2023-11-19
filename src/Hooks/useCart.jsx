import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useCart = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: cartProduct, isLoading: isCartProductLoading } = useQuery({
        queryKey: ['cart'],
        queryFn: async() => {
            const res = await axiosSecure.get('/cart')
            return res.data;
        },
      })
      return [cartProduct, isCartProductLoading];
};

export default useCart;