
import { Button, ButtonGroup, Chip, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Input, Table, TableBody, TableCell, TableColumn, TableHeader, TableRow, User } from "@nextui-org/react";

import img from '../../../public/user.png'
import axios from "axios";
import { FaArrowDown, FaPlus, FaSearch } from "react-icons/fa";
import UseProductsBySecondaryCategory from "../../Hooks/UseProductsBySecondaryCategory";

const ManageOrders = () => {
    const [products, isProductsLoading] = UseProductsBySecondaryCategory({
        category: "iron"
      });
      if(isProductsLoading){
        return <h1>Loading............</h1>
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
              <DropdownItem key={"data"}  className="capitalize">
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
      <span className="text-gray-600 mb-2">Total {products?.length} users</span>
  </div>
         <Table aria-label="Example table with custom cells">
  <TableHeader>
      <TableColumn >
        Name
      </TableColumn>
      <TableColumn >
        Price
      </TableColumn>
      <TableColumn >
        Category
      </TableColumn>
      <TableColumn >
        Main Category
      </TableColumn>
      <TableColumn >
        Actions
      </TableColumn>
  </TableHeader>
  <TableBody >
      {
        products?.map(product => <TableRow key={product._id} className="hover:!bg-gray-100 duration-100">
            <TableCell>
            {product.specification.Title.slice(0, 30)}....
            </TableCell>
            <TableCell>{product?.price?.discounted_price}</TableCell>
            <TableCell>
            {product?.secondary_category}
            </TableCell>
            <TableCell>
            {product?.main_category}
            </TableCell>
            <TableCell>
            {product?.main_category}
            </TableCell>
          </TableRow>)
      }
  </TableBody>
</Table>
    </div>
    );
};

export default ManageOrders;