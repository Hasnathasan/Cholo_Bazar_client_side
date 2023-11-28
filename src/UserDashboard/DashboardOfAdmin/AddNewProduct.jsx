import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaPlus } from "react-icons/fa";

const AddNewProduct = () => {
  const { register, handleSubmit } = useForm();
  const [totalSpecification, setTotalSpecification] = useState([1]);
  const [images, setImages] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleImageChange = (event) => {
    const selectedImages = event.target.files;
    setImages(selectedImages);
  };
  console.log(images);
  const onSubmit = async (data) => {
    console.log(data);
    if (images.length === 0) {
      alert("Please select at least one image to upload.");
      return;
    }


    const formData = new FormData();
    for (const image of images) {
      formData.append('image', image);
    }

    axios.post('https://api.imgbb.com/1/upload?key=d3f91f97f4271f1b700b4304ebdb8133', formData, {
      onUploadProgress: (progressEvent) => {
        const uploadPercentage = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        setUploadProgress(uploadPercentage);
      },
    })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="w-full px-3 md:px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-white p-4 md:p-10 rounded-xl shadow-sm w-full ">
          <h2 className="text-3xl font-semibol underline leading-[50px] text-gray-900 mb-4">
            Product Details:
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            <Input
              {...register("product_name", { required: true })}
              type="text"
              label="Name of your Product"
              placeholder="Product name"
              variant="underlined"
              labelPlacement="outside"
            />

            <Input
              {...register("images", { required: true })}
              onChange={handleImageChange}
              type="file"
              label="Choose Images"
              placeholder=" "
              multiple
              variant="underlined"
              labelPlacement="outside"
            />
            <Input
              {...register("real_price", { required: true })}
              type="number"
              label="Real Price"
              placeholder="Tk. 00"
              variant="underlined"
              labelPlacement="outside"
            />
            <Input
              {...register("discounted_price", { required: true })}
              type="number"
              label="Price after discount"
              placeholder="Tk. 00"
              variant="underlined"
              labelPlacement="outside"
            />
            <Select
              {...register("main_category", { required: true })}
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
              {...register("secondary_category", { required: true })}
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
              {...register("rating", { required: true })}
              type="number"
              label="Product rating"
              placeholder="rating"
              variant="underlined"
              labelPlacement="outside"
            />
            <Input
              {...register("countryOfOrigin", { required: true })}
              type="text"
              label="Country of origin"
              placeholder="Origin country name"
              variant="underlined"
              labelPlacement="outside"
            />
          </div>
          <h2 className="text-xl font-semibold underline leading-[50px] text-gray-900 my-5">
            Brand Details:
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            <Input
              {...register("brand", { required: true })}
              type="text"
              label="Brand Name"
              placeholder="Name of brand"
              variant="underlined"
              labelPlacement="outside"
            />
            <Input
              {...register("brand_image", { required: true })}
              type="file"
              label="Brand Image"
              placeholder="Image of Brand"
              variant="underlined"
              labelPlacement="outside"
            />
          </div>
          <h2 className="text-xl font-semibold underline leading-[50px] text-gray-900 my-5">
            Description&apos;s of Product and Brand:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Textarea
              {...register("product_summery", { required: true })}
              label="Summery of Product"
              variant="underlined"
              placeholder="Enter your Summery"
            />
            <Textarea
              {...register("brand_description", { required: true })}
              label="Description of the Brand"
              variant="underlined"
              placeholder="Enter brand description"
            />
          </div>
          <h2 className="text-xl font-semibold underline leading-[50px] text-gray-900 my-5">
            Product specifications:
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 relative gap-10">
            <Button
              onClick={() =>
                setTotalSpecification([
                  ...totalSpecification,
                  totalSpecification.length + 1,
                ])
              }
              isIconOnly
              color="primary"
              className="text-white absolute -top-4 right-3"
              variant="solid"
              aria-label="Take a photo"
            >
              <FaPlus></FaPlus>
            </Button>
            {totalSpecification?.map((num) => (
              <div key={num} className="flex justify-start items-center">
                <Input
                  {...register(`specification_property_${num}`, {
                    required: true,
                  })}
                  type="text"
                  label="Property"
                  placeholder="Name of property"
                  variant="bordered"
                  radius="none"
                  labelPlacement="outside"
                />

                <Input
                  {...register(`specification_value_${num}`, {
                    required: true,
                  })}
                  type="text"
                  label="Value"
                  placeholder="Name of value"
                  variant="bordered"
                  radius="none"
                  labelPlacement="outside"
                />
              </div>
            ))}
          </div>
        </div>
        <Button
          type="submit"
          className="btn"
          color="primary"
          radius="none"
          variant="ghost"
        >
          Ghost
        </Button>
      </form>
    </div>
  );
};

export default AddNewProduct;
