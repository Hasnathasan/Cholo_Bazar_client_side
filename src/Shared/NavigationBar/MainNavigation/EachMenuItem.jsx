import { MenuItem, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const EachMenuItem = ({ icon, title, description, path }) => {
  return (
    <Link className="h-full w-full " to={path}>
      <MenuItem className="flex !px-5 !py-3 items-center bg-[#f7fbff] hover:!bg-[#d9eafa] gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
          <img className="w-8 h-8" src={icon} alt="" />
        </div>
        <div>
          <Typography
            variant="h6"
            color="blue-gray"
            className="flex items-center font-bold"
          >
            {title}
          </Typography>
          <Typography
            variant="paragraph"
            className="text-xs !font-medium text-blue-gray-500"
          >
            {description}
          </Typography>
        </div>
      </MenuItem>
    </Link>
  );
};

export default EachMenuItem;
