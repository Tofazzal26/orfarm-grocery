import CardStyle from "./Catagory/Catagory.module.css";

const CatagoriesCard = ({ item }) => {
  const { img, title, item: newItem } = item || {};
  return (
    <div className="py-[50px] cursor-pointer ">
      <div
        className={`flex flex-col bg-[#ffffff] relative border-[1.5px] justify-center space-y-2 items-center w-[270px] h-[280px] ${CardStyle.category}`}
      >
        <img src={img} alt="" className="" />
        <h2 className="text-xl">{title}</h2>
        <h2 className="text-base">{newItem}</h2>
        <div
          className={`bg-[#80b500] w-[0px]  h-[5px] absolute bottom-0 ${CardStyle.catCard}`}
        ></div>
      </div>
    </div>
  );
};

export default CatagoriesCard;
