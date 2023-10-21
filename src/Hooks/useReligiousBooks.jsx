import { useQuery } from "@tanstack/react-query";

const useReligiousBooks = () => {
    const { data: religiousBooks, isLoading: isReligiousBooksLoading } = useQuery({
        queryKey: ['islami-books'],
        queryFn: async() => {
            const res = await fetch('https://rokomari-clone-server-omega.vercel.app/booksByCategory/relegious-books');
            return res.json()
        },
      })
      return [religiousBooks, isReligiousBooksLoading]
};

export default useReligiousBooks;