import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Rating } from "@smastrom/react-rating";

import { Eye, ShoppingCart } from "lucide-react";

const ProductButton = ({ item, singleProductShow, singleProduct }) => {
  const {
    category,
    disPrice,
    discount,
    image,
    location,
    price,
    productStatus,
    rating: prdRating,
    stock,
    title,
  } = singleProduct || {};

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full p-0 w-[40px] h-[40px] flex items-center justify-center bg-white hover:bg-[#80b500] hover:text-white transition-all"
          >
            {" "}
            <button
              onClick={() => singleProductShow(item?._id)}
              className="w-[40px] bg-white hover:bg-[#80b500] h-[40px] transition-all hover:text-white rounded-full flex justify-center items-center"
            >
              <Eye size={16} />
            </button>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[900px]">
          <DialogHeader>
            <DialogDescription>
              <div className="flex gap-[50px]">
                <div>
                  <img src={image} alt="" className="h-[444px] w-[444px]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <Rating
                      style={{ maxWidth: 80 }}
                      value={parseFloat(prdRating)}
                      readOnly
                    />
                    <span className="text-[#80b500]">( 95 Reviews )</span>
                  </div>
                  <h2 className="text-[25px] text-black my-4 mb-8">{title}</h2>
                  <div className="flex items-center gap-2">
                    <h2 className="text-[50px] text-[#80b500]">${price}.00</h2>
                    <h2 className="text-[40px] text-[#b3d366]">
                      <del>${disPrice}.00</del>
                    </h2>
                  </div>
                  <h2 className="border-t-2 border-b-2 mt-8 py-4 text-base w-full">
                    Categories: <span className="text-black">{category}</span>
                  </h2>

                  <div className="flex items-center gap-4 mt-8">
                    <div className="">
                      <button className="w-[40px] h-[60px] outline-none border-b-2 border-t-2 border-l-2 text-center text-lg text-black">
                        -
                      </button>
                      <input
                        type="text"
                        name=""
                        id=""
                        value={1}
                        className="w-[55px] h-[59px] outline-none border-2 text-center text-lg text-black"
                      />
                      <button className="w-[40px] h-[60px] outline-none border-b-2 border-t-2 border-r-2 text-center text-lg text-black">
                        +
                      </button>
                    </div>
                    <div>
                      <button className="flex items-center gap-2 bg-[#80b500] text-white px-6 py-3 text-lg">
                        {" "}
                        <ShoppingCart size={20} /> ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductButton;
