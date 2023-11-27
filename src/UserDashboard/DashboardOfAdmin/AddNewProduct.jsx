import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";



const AddNewProduct = () => {
    const [totalSpecification, setTotalSpecification] = useState([1])
    return (
        <div className="w-full px-3 md:px-8">
            <div className="bg-white p-4 md:p-10 rounded-xl shadow-sm w-full ">
            <h2 className="text-3xl font-semibol underline leading-[50px] text-gray-900 mb-4">Product Details:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <Input
          type="text"
          label="Name of your Product"
          placeholder="Product name"
          variant="underlined"
          labelPlacement="outside"
        />
           
          <Input
        type="file"
        label="Choose Images"
        placeholder=" "
        multiple
        variant="underlined"
        labelPlacement="outside"
      />
            <Input
          type="number"
          label="Real Price"
          placeholder="Tk. 00"
          variant="underlined"
          labelPlacement="outside"
        />
            <Input
          type="number"
          label="Price after discount"
          placeholder="Tk. 00"
          variant="underlined"
          labelPlacement="outside"
        />
        <Select
      label="Select main category"
      placeholder="Select an category"
      labelPlacement="outside"
      variant="underlined"
      className="max-w-xs"
    >
      <SelectItem key={"Electronics"}>Electronics</SelectItem>
      <SelectItem key={"kidsZone"}>Kids Zone</SelectItem>
      <SelectItem key={"personal-Care"}>Personal-Care</SelectItem>
      <SelectItem key={"daily-needs"}>Daily-needs</SelectItem>
    </Select>
        <Select
      label="Select Category"
      placeholder="Select an category"
      labelPlacement="outside"
      variant="underlined"
      className="max-w-xs"
    >
      <SelectItem key={"Electronics"}>Electronics</SelectItem>
      <SelectItem key={"kidsZone"}>Kids Zone</SelectItem>
      <SelectItem key={"personal-Care"}>Personal-Care</SelectItem>
      <SelectItem key={"daily-needs"}>Daily-needs</SelectItem>
    </Select>
    <Input
          type="number"
          label="Product rating"
          placeholder="rating"
          variant="underlined"
          labelPlacement="outside"
        />
        <Input
          type="text"
          label="Country of origin"
          placeholder="Origin country name"
          variant="underlined"
          labelPlacement="outside"
        />
            </div>
            <h2 className="text-xl font-semibold underline leading-[50px] text-gray-900 my-5">Brand Details:</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            <Input
          type="text"
          label="Brand Name"
          placeholder="Name of brand"
          variant="underlined"
          labelPlacement="outside"
        />
            <Input
          type="text"
          label="Brand Name"
          placeholder="Name of brand"
          variant="underlined"
          labelPlacement="outside"
        />
            </div>
            <h2 className="text-xl font-semibold underline leading-[50px] text-gray-900 my-5">Description&apos;s of Product and Brand:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Textarea
        label="Summery of Product"
        variant="underlined"
        placeholder="Enter your Summery"
      />
            <Textarea
        label="Description of the Brand"
        variant="underlined"
        placeholder="Enter brand description"
      />
            </div>
            <h2 className="text-xl font-semibold underline leading-[50px] text-gray-900 my-5">Product specifications:</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 relative gap-10">
            <Button onClick={() => setTotalSpecification([...totalSpecification, totalSpecification.length + 1])} isIconOnly color="primary" className="text-white absolute -top-4 right-3" variant="solid" aria-label="Take a photo">
        <FaPlus></FaPlus>
      </Button>
           {
            totalSpecification?.map(num =>  <div key={num} className="flex justify-start items-center">
            <Input
          type="text"
          label="Property"
          placeholder="Name of property"
          variant="bordered"
          radius="none"
          labelPlacement="outside"
        />
            <Input
          type="text"
          label="Value"
          placeholder="Name of value"
          variant="bordered"
          radius="none"
          labelPlacement="outside"
        />
            </div>)
           }
            </div>

            </div>
        </div>
    );
};

export default AddNewProduct;