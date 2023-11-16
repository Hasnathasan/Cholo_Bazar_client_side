import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import useHotDeals from "../../Hooks/useHotDeals";
import FictionNonFicBookContainer from "./FictionNonFicBookContainer/FictionNonFicBookContainer";
import bookFairLogo from '../../../public/book_fair_logo.svg'
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
import SecondaryProductContainer from "../../Components/SecondaryProductContainer/SecondaryProductContainer";
import ProductCard from "../../Components/ProductCard/ProductCard";



const Book = () => {
    const [hotDeals, isHotDealsLoading] = useHotDeals();
      if(isHotDealsLoading){
        return <h1>Loading.....................</h1>
         
      }
    return (
        <div>
            <HomeSlider></HomeSlider>
            <div className="flex items-center flex-col md:flex-row gap-5 md:gap-7 text-gray-700">
              <img className="w-44" src={bookFairLogo} alt="" />
              <p className="px-4">অনলাইন বইমেলার সাথে শেষ হয়ে গেলো নগদ-রকমারি বইমেলা বেস্টসেলার অ্যাওয়ার্ডের লিডারবোর্ডের টান টান উত্তেজনা। কে হবে বেস্টসেলার লেখক, কী হবে বেস্টসেলার বই- সব জল্পনা-কল্পনার অবসান ঘটিয়ে পাঠক প্রিয়তায় জায়গা করে নেয়া বই এবং লেখক দেখে নিন এক নজরে। আপনার প্রিয় লেখক আছেন তো এবারের বেস্টসেলার তালিকায়? তাছাড়া এবারের বেস্টসেলার লেখকের বইটি আপনি পড়েছেন তো?</p>
            </div>
            <SecondaryProductContainer data={hotDeals} apiPath={"products"} headding={"Deals on Rokomari Products"}></SecondaryProductContainer>
            <ProductCard></ProductCard>
            <CategorySlider></CategorySlider>
            {/* <FictionNonFicBookContainer></FictionNonFicBookContainer> */}
        </div>
    );
};

export default Book;