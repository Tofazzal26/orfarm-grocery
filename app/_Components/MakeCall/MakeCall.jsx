import { Phone } from "lucide-react";

const MakeCall = () => {
  return (
    <div className="bg-[#e8edee] mb-6">
      <div className="py-4 container mx-auto flex justify-between items-center">
        <h2 className="text-[30px]">Get A Free Service Or Make A Call</h2>
        <button className="flex justify-center text-lg items-center gap-2 bg-white px-8 py-[14px]">
          <Phone size={20} /> MAKE A CALL
        </button>
      </div>
    </div>
  );
};

export default MakeCall;
