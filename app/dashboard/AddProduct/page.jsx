import { useState } from "react";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AddProduct = () => {
  const [images, setImages] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImages(file);
    }
  };

  const handleSelectValue = (cate) => {
    console.log(cate);
  };

  const handleLocationValue = (loc) => {
    console.log(loc);
  };
  const handleProductStatus = (stat) => {
    console.log(stat);
  };
  const handleProductStock = (stoc) => {
    console.log(stoc);
  };

  return (
    <div>
      <h1 className="text-center">Add Product</h1>
      <form className="mt-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="col-span-1">
            <div>
              <div>
                <label className="text-gray-500 text-[20px]">Title</label>
                <br />
                <input
                  type="text"
                  name="title"
                  className="md:py-[10px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none"
                />
              </div>
              <div>
                <label className="text-gray-500 text-[20px]">Price</label>
                <br />
                <input
                  type="number"
                  name="price"
                  className="md:py-[10px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none"
                />
              </div>
              <div>
                <label className="text-gray-500 text-[20px]">Discount</label>
                <br />
                <input
                  type="number"
                  name="discount"
                  className="md:py-[10px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none"
                />
              </div>
              <div>
                <div>
                  <label className="text-gray-500 text-[20px]">Category</label>
                  <br />
                  <div className="md:py-[8px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none">
                    <Select onValueChange={handleSelectValue}>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="CATEGORIES" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>CATEGORIES</SelectLabel>
                          <SelectItem value="Food_Drinks">
                            Food & Drinks
                          </SelectItem>
                          <SelectItem value="Vegetables">Vegetables</SelectItem>
                          <SelectItem value="Dried_Foods">
                            Dried Foods
                          </SelectItem>
                          <SelectItem value="Bread_Cake">
                            Bread & Cake
                          </SelectItem>
                          <SelectItem value="Fish_Meat">Fish & Meat</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-gray-500 text-[20px]">Status</label>
                <br />
                <div className="md:py-[8px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none">
                  <Select onValueChange={handleProductStatus}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="STATUS" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="NEW">NEW</SelectItem>
                        <SelectItem value="OLD">OLD</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-1">
            <div>
              <div className="mb-4">
                <label className="text-gray-500 text-[20px]">Image</label>
                <br />
                <input
                  onChange={handleImageChange}
                  type="file"
                  required
                  className="file-input w-full bg-gray-200 text-gray-500 text-[17px] py-[8px] mt-2 px-5"
                />
              </div>
              <div>
                <label className="text-gray-500 text-[20px]">
                  Discount Price
                </label>
                <br />
                <input
                  type="number"
                  name="discountPrice"
                  className="md:py-[10px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none"
                />
              </div>
              <div>
                <label className="text-gray-500 text-[20px]">Rating</label>
                <br />
                <input
                  type="number"
                  name="rating"
                  className="md:py-[10px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none"
                />
              </div>
              <div>
                <label className="text-gray-500 text-[20px]">Location</label>
                <br />
                <div className="md:py-[8px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none">
                  <Select onValueChange={handleLocationValue}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Location</SelectLabel>
                        <SelectItem value="California">California</SelectItem>
                        <SelectItem value="Florida">Florida</SelectItem>
                        <SelectItem value="New_York">New York</SelectItem>
                        <SelectItem value="Washington">Washington</SelectItem>
                        <SelectItem value="Alaska">Alaska</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div>
                <label className="text-gray-500 text-[20px]">Stock</label>
                <br />
                <div className="md:py-[8px] py-2 mt-2 text-[18px] mb-4 px-3 w-full md:px-5 bg-gray-200 border-[1px]  outline-none rounded-none">
                  <Select onValueChange={handleProductStock}>
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="STOCK" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Status</SelectLabel>
                        <SelectItem value="In Stock">In Stock</SelectItem>
                        <SelectItem value="Out Stock">Out Stock</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
