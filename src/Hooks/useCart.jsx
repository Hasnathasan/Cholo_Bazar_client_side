import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";


const useCart = () => {
    const [axiosSecure] = useAxiosSecure();
    const {user} = useContext(AuthContext);
    const { data: cartProduct, isLoading: isCartProductLoading, refetch } = useQuery({
        queryKey: ['cart'],
        queryFn: async() => {
            const res = await axiosSecure.get(`/cart/?${user?.email ? `userEmail=${user?.email}` : `userNumber=${user?.phoneNumber}`}`)
            return res.data;
        },
      })
      return [cartProduct, isCartProductLoading, refetch];
};

export default useCart;