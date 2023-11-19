import { Radio, RadioGroup } from "@nextui-org/react";
import "./Electronics.css";
import { Typography } from "@material-tailwind/react";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const Electronics = () => {
  const { filter, setFilter } = useContext(AuthContext);
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content max-w-5xl mx-auto flex flex-col items-start justify-start">
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side z-[1000] p-">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

        <div className="w-56"></div>
        <ul className="menu flex-nowrap fixed top-1/4 -left-[30%] md:left-2 shadow-lg shadow-gray-300 bg-white px-5  py-10 w-56 space-y-2">
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
            <input
              type="range"
              min={0}
              max="3000"
              defaultValue="0"
              className="range range-success range-xs"
              step="16"
            />
            <div className="w-full flex justify-between text-xs px-2">
              <span>0.5k</span>
              <span>1k</span>
              <span>1.5k</span>
              <span>2k</span>
              <span>2.5k</span>
              <span>3k</span>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Electronics;
