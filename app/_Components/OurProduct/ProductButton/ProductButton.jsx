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

import { Eye } from "lucide-react";

const ProductButton = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button
            variant="outline"
            className="rounded-full p-0 w-[40px] h-[40px] flex items-center justify-center bg-white hover:bg-[#80b500] hover:text-white transition-all"
          >
            {" "}
            <button className="w-[40px] bg-white hover:bg-[#80b500] h-[40px] transition-all hover:text-white rounded-full flex justify-center items-center">
              <Eye size={16} />
            </button>
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductButton;
