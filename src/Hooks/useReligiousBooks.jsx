import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useReligiousBooks = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: religiousBooks, isLoading: isReligiousBooksLoading } = useQuery(
    {
      queryKey: ["islamiBooks"],
      queryFn: async () => {
        const res = await axiosSecure.get("/booksByCategory/relegious-books");
        return res.data;
      },
    }
  );
  return [religiousBooks, isReligiousBooksLoading];
};

export default useReligiousBooks;
