import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Input,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";

import { FaArrowDown, FaEye, FaPlus, FaSearch, FaTrash } from "react-icons/fa";
import useProducts from "../../Hooks/useProducts";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader/Loader";
const ManageProducts = () => {
  const [products, isProductsLoading] = useProducts();
  if (isProductsLoading) {
    return <Loader></Loader>;
  }
  return (
    <div className="overflow-x-auto w-full md:w-[80%]">
      <div className="flex flex-col  gap-4">
        <div className="flex justify-between p-5 bg-white rounded-xl gap-3 items-end">
          <Input
            isClearable
            className="w-full sm:max-w-[44%]"
            placeholder="Search by name..."
            startContent={<FaSearch></FaSearch>}
          />
          <div className="flex gap-3">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<FaArrowDown></FaArrowDown>} variant="flat">
                  Status
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={["data"]}
                selectionMode="multiple"
              >
                <DropdownItem key={"data"} className="capitalize">
                  Data
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button endContent={<FaArrowDown></FaArrowDown>} variant="flat">
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={["hi"]}
                selectionMode="multiple"
              >
                <DropdownItem key={"hi"} className="capitalize">
                  Hi
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Button color="primary" endContent={<FaPlus></FaPlus>}>
              Add New
            </Button>
          </div>
        </div>
        <span className="text-gray-600 mb-2">
          Total {products?.length} Products
        </span>
      </div>
      <Table aria-label="Example table with custom cells">
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Price</TableColumn>
          <TableColumn>Category</TableColumn>
          <TableColumn>Main Category</TableColumn>
          <TableColumn>Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {products?.map((product) => (
            <TableRow
              key={product._id}
              className="hover:!bg-gray-100 duration-100"
            >
              <TableCell>
                {product.specification.Title.slice(0, 30)}....
              </TableCell>
              <TableCell>{product?.price?.discounted_price}</TableCell>
              <TableCell>{product?.secondary_category}</TableCell>
              <TableCell>{product?.main_category}</TableCell>
              <TableCell className="flex justify-center items-center gap-2">
                <Button isIconOnly variant="faded" color="success">
                  <Link
                    className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0"
                    to={`/details/products/${product?._id}`}
                  >
                    <FaEye></FaEye>
                  </Link>
                </Button>
                <Button isIconOnly variant="faded" color="danger">
                  <FaTrash></FaTrash>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageProducts;
