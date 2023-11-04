import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useUser = () => {
    const {user} = useContext(AuthContext);
    const { data: userData, isLoading: isUserDataLoading, refetch } = useQuery({
        queryKey: [`user-${user?.email}`],
        queryFn: async() => {
            const res = await fetch(`https://rokomari-clone-server-beta.vercel.app/${user?.email ? `eachUser/${user?.email}` : `each-user-by-number/${user?.phoneNumber}`}`);
            return res.json()
        },
      })
      return [userData, isUserDataLoading, refetch]
};

export default useUser;