import "react-tabs/style/react-tabs.css";

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
  const { setIsAnimationVisible } = useContext(AuthContext);

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

  if (isHotDealsLoading || isIronsLoading) {
    setIsAnimationVisible(true);
  }
  setIsAnimationVisible(false);
  return (
    <div>
      <div className="max-w-6xl mx-auto">
        <div>
          <HomeSlider></HomeSlider>
          <SecondaryProductContainer
            data={hotDeals}
            apiPath={"products"}
            headding={"Deals on CholoBazar Products 🔥🔥"}
          ></SecondaryProductContainer>
          <ProductContainer
            data={irons}
            apiPath={"products"}
          ></ProductContainer>
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
