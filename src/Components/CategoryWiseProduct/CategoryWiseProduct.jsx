import { Radio, RadioGroup, Slider } from "@nextui-org/react";
import { Typography } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const CategoryWiseProduct = () => {
  const { filter, setFilter } = useContext(AuthContext);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content max-w-5xl py-14 md:py-0  mx-auto flex flex-col items-start justify-start">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="px-5 py-3 border border-green-500 hover:bg-green-500 hover:text-white transition-all duration-250 absolute top-4 left-2 md:left-10 drawer-button lg:hidden"
        >
          Filter
        </label>
      </div>
      <div className="drawer-side z-[100] p-">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <div className="w-64"></div>
        <ul className="menu flex-nowrap fixed top-1/4  md:left-2 shadow-lg shadow-gray-300 bg-white px-5  py-10 w-64 space-y-2">
          <h2 className="text-2xl mb-3">Filter</h2>

          <RadioGroup
            value={filter}
            onValueChange={setFilter}
            className="!mb-5"
          >
            <Radio className="mb-[1px]" value="priceHighToLow">
              <Typography variant="small">Price High to Low</Typography>
            </Radio>
            <Radio className="mb-[1px]" value="priceLowToHigh">
              <Typography variant="small">Price Low to High</Typography>
            </Radio>
            <Radio className="mb-[1px]" value="ratingHighToLow">
              <Typography variant="small">Rating High to Low</Typography>
            </Radio>
            <Radio value="ratingLowToHigh">
              <Typography variant="small">Rating Low to High</Typography>
            </Radio>
          </RadioGroup>
          {/* <p className="text-default-500 text-small">Selected: {selected}</p> */}

          <div>
            <Typography className="mb-1" variant="paragraph">
              Price Range
            </Typography>
            <Slider
              size="sm"
              label=" "
              step={10}
              minValue={0}
              maxValue={1000}
              color="success"
              defaultValue={[100, 500]}
              formatOptions={{ style: "currency", currency: "BDT" }}
              className="max-w-md"
            />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default CategoryWiseProduct;
