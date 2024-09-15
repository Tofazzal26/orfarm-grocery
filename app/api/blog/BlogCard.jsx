import { Bookmark, Clock, Pill, PillIcon } from "lucide-react";

const BlogCard = ({ item }) => {
  const { image, title, paragraph, readMore, date, tips, food } = item || {};
  return (
    <div>
      <img src={image} alt="" className="rounded-md w-full" />
      <div className="flex flex-col md:flex-row md:items-center gap-4 my-4">
        <span className="flex items-center gap-2">
          <Clock size={18} className="text-blue-500" /> {date}
        </span>
        <span className="flex items-center gap-2">
          <Bookmark className="text-blue-500" /> {tips}
        </span>
        <span className="flex  items-center gap-2">
          <PillIcon className="text-blue-500" /> {food}
        </span>
      </div>

      <h2 className="text-[25px] md:text-[40px]">{title}</h2>
      <p>{paragraph}</p>
      <button className="bg-blue-700 text-white px-6 py-2 rounded-md my-8">
        {readMore}
      </button>
    </div>
  );
};

export default BlogCard;
