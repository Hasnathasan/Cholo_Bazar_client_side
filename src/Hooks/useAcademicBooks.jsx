import { useQuery } from "@tanstack/react-query";

const useAcademicBooks = () => {
    const { data: academicBooks, isLoading: isAcademicBooksLoading } = useQuery({
        queryKey: ['academicBooks'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/academic-books');
            return res.json()
        },
      })
      return [academicBooks, isAcademicBooksLoading]
};

export default useAcademicBooks;