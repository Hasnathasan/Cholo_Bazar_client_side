import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAcademicBooks = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: academicBooks, isLoading: isAcademicBooksLoading } = useQuery({
    queryKey: ["academicBooks"],
    queryFn: async () => {
      const res = await axiosSecure.get("/booksByCategory/academic-books");
      return res.data;
    },
  });
  return [academicBooks, isAcademicBooksLoading];
};

export default useAcademicBooks;
