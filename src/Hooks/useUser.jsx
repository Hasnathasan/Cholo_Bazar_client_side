import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import useAxiosSecure from "./useAxiosSecure";

const useUser = () => {
    const [axiosSecure] = useAxiosSecure()
    const {user} = useContext(AuthContext);
    const { data: userData, isLoading: isUserDataLoading, refetch } = useQuery({
        queryKey: [`user-${user?.email}`],
        queryFn: async() => {
            const res = await axiosSecure.get(`/${user?.email ? `eachUser/${user?.email}` : `each-user-by-number/${user?.phoneNumber}`}`)
            return res.data;
        },
      })
      return [userData, isUserDataLoading, refetch]
};

export default useUser;