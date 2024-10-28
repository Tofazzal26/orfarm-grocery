import React, { useState } from "react";

const AddProduct = () => {
  const [images, setImages] = useState(null);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImages(file);
    }
  };

  console.log(images);

  return (
    <div>
      <h1 className="text-center">Add Product</h1>
      <form>
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
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
