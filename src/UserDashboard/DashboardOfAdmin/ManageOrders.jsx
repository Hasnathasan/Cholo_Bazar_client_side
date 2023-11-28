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

import axios from "axios";
import { FaArrowDown, FaPlus, FaSearch } from "react-icons/fa";
import useOrders from "../../Hooks/useOrders";
import { Link } from "react-router-dom";

const ManageOrders = () => {
  const [orders, isOrdersLoading, refetch] = useOrders({orderStatus: "pending"});
  if (isOrdersLoading) {
    return <h1>Loading............</h1>;
  }
  console.log(orders);

  const handleDecline = id => {
    axios.patch(`https://cholo-bazar.vercel.app/order/${id}?status=${"declined"}`)
    .then(res => {
      console.log(res.data);
      refetch()
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  const handleAccept = id => {
    axios.patch(`https://cholo-bazar.vercel.app/order/${id}?status=${"accepted"}`)
    .then(res => {
      console.log(res.data);
      refetch()
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
    <div className="overflow-x-auto w-full md:w-[90%]">
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
          Total {orders?.length} Orders
        </span>
      </div>
      <Table aria-label="Example table with custom cells">
        <TableHeader>
          <TableColumn>Order By</TableColumn>
          <TableColumn>Customer Email / Number</TableColumn>
          <TableColumn className="text-center">Total Products</TableColumn>
          <TableColumn className="text-center">Total Price</TableColumn>
          <TableColumn className="text-center">Details</TableColumn>
          <TableColumn className="text-center">Actions</TableColumn>
        </TableHeader>
        <TableBody>
          {orders?.map((order) => (
            <TableRow
              key={order._id}
              className="hover:!bg-gray-100 duration-100"
            >
              <TableCell>{order.order?.customerName || "Unknown"}</TableCell>
              <TableCell>
                {order.order?.customerEmail || order.order?.phoneNumber}
              </TableCell>
              <TableCell className="text-center">
                {order.order?.products?.length}
              </TableCell>
              <TableCell className="text-center">
                {order.order?.products
                  ?.reduce(
                    (total, product) =>
                      product.price.discounted_price * product.quantity + total,
                    0
                  )
                  .toFixed(2)}{" "}
                Tk
              </TableCell>
              <TableCell className="">
                <Button
                  className="basis-1/2 !text-white"
                  size="sm"
                  color="success"
                  radius="none"
                  variant="solid"
                >
                  <Link className="flex justify-center items-center absolute top-0 bottom-0 left-0 right-0" to={`/admin-dashboard/products-details/${order._id}`}>Details</Link>
                </Button>
              </TableCell>
              <TableCell className="flex justify-center items-center gap-3">
                <Button
                  onClick={() => handleDecline(order._id)}
                  className="basis-1/2 hover:!text-white"
                  size="sm"
                  color="danger"
                  radius="none"
                  variant="ghost"
                >
                  Decline
                </Button>
                <Button
                onClick={() => handleAccept(order._id)}
                  className="basis-1/2 hover:!text-white"
                  size="sm"
                  color="success"
                  radius="none"
                  variant="ghost"
                >
                  Accept
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ManageOrders;
