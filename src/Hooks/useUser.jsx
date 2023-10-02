import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

const useUser = () => {
    const {user} = useContext(AuthContext);
    const { data: userData, isLoading: isUserDataLoading } = useQuery({
        queryKey: [`user-${user?.email}`],
        queryFn: async() => {
            const res = await fetch(`http://localhost:5000/eachUser/${user?.email}`);
            return res.json()
        },
      })
      return [userData, isUserDataLoading]
};

export default useUser;