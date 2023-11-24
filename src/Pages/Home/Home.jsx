
import "react-tabs/style/react-tabs.css";

import bookFairLogo from "../../../public/book_fair_logo.svg";
import "./Home.css";
import useHotDeals from "../../Hooks/useHotDeals";
import UseProductsBySecondaryCategory from "../../Hooks/UseProductsBySecondaryCategory";
import HomeSlider from "../../Components/HomeSlider/HomeSlider";
import SecondaryProductContainer from "../../Components/SecondaryProductContainer/SecondaryProductContainer";
import ProductContainer from "../../Components/ProductContainer/ProductContainer";
import CategorySlider from "../../Components/CategorySlider/CategorySlider";
import FictionNonFicBookContainer from "../Book/FictionNonFicBookContainer/FictionNonFicBookContainer";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Home = () => {
  const { setIsAnimationVisible} = useContext(AuthContext)

  const [hotDeals, isHotDealsLoading] = useHotDeals();
  const [irons, isIronsLoading] = UseProductsBySecondaryCategory({
    category: "iron",
  });
  const [refrigerators, isRefrigeratorsLoading2] =
    UseProductsBySecondaryCategory({ category: "refrigerator" });
  const [kettles, isKettlesLoading2] = UseProductsBySecondaryCategory({
    category: "kettle",
  });
  const [airCollers, isAirCollersLoading2] = UseProductsBySecondaryCategory({
    category: "airColler",
  });
  const [televisons, isTelevisonsLoading2] = UseProductsBySecondaryCategory({
    category: "television",
  });

  if ( isHotDealsLoading || isIronsLoading ) {
    setIsAnimationVisible(true)
  }
 setIsAnimationVisible(false)
  return (
    <div>
        <div className="max-w-6xl mx-auto">
        <div>
      <HomeSlider></HomeSlider>
      {/* <div className="flex items-center flex-col md:flex-row gap-5 md:gap-7 text-gray-700">
        <img className="w-44" src={bookFairLogo} alt="" />
        <p className="px-4">
          অনলাইন বইমেলার সাথে শেষ হয়ে গেলো নগদ-রকমারি বইমেলা বেস্টসেলার
          অ্যাওয়ার্ডের লিডারবোর্ডের টান টান উত্তেজনা। কে হবে বেস্টসেলার লেখক, কী
          হবে বেস্টসেলার বই- সব জল্পনা-কল্পনার অবসান ঘটিয়ে পাঠক প্রিয়তায় জায়গা
          করে নেয়া বই এবং লেখক দেখে নিন এক নজরে। আপনার প্রিয় লেখক আছেন তো এবারের
          বেস্টসেলার তালিকায়? তাছাড়া এবারের বেস্টসেলার লেখকের বইটি আপনি পড়েছেন
          তো?
        </p>
      </div> */}
      <SecondaryProductContainer
        data={hotDeals}
        apiPath={"products"}
        headding={"Deals on CholoBazar Products 🔥🔥"}
      ></SecondaryProductContainer>
      <ProductContainer data={irons} apiPath={"products"}></ProductContainer>
      <CategorySlider></CategorySlider>
      <FictionNonFicBookContainer></FictionNonFicBookContainer>
      <SecondaryProductContainer
        data={refrigerators}
        apiPath={"products"}
        headding={"Refrigerator are on fire 🔥🔥"}
      ></SecondaryProductContainer>
      <SecondaryProductContainer
        data={kettles}
        apiPath={"products"}
        headding={"Buy The Hot kettles "}
      ></SecondaryProductContainer>
      <SecondaryProductContainer
        data={airCollers}
        apiPath={"products"}
        headding={"Buy AirCollers to cool down ⛄⛄"}
      ></SecondaryProductContainer>
      <SecondaryProductContainer
        data={televisons}
        apiPath={"products"}
        headding={"See Movies in Big Screens"}
      ></SecondaryProductContainer>
    </div>
        </div>
    </div>
  );
};

export default Home;
