import { useQuery } from "@tanstack/react-query";

const useAcademicBooks = () => {
    const { data: academicBooks, isLoading: isAcademicBooksLoading } = useQuery({
        queryKey: ['academicBooks'],
        queryFn: async() => {
            const res = await fetch('https://rokomari-clone-server-beta.vercel.app/booksByCategory/academic-books');
            return res.json()
        },
      })
      return [academicBooks, isAcademicBooksLoading]
};

export default useAcademicBooks;