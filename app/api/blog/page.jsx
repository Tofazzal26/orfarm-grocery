import React from "react";

const page = () => {
  const ourBlog = [
    {
      image: "/blog-1.jpg",
      title: "But I must explain to you how all this mistaken idea",
      paragraph:
        "Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula. Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien mauris sodales",
      readMore: "Read More",
      date: "May 3, 2021",
      tips: "Tips & Tricks",
      food: "food, store",
    },
    {
      image: "/blog-1.jpg",
      title: "The Problem With Typefaces on the Web",
      paragraph:
        "Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula. Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien mauris sodales",
      readMore: "Read More",
      date: "May 3, 2021",
      tips: "Grocery",
      food: "envato, fresh",
    },
    {
      image: "/blog-1.jpg",
      title: "English Breakfast Tea With Tasty Donut Desserts",
      paragraph:
        "Pellentesque feugiat, sem id interdum molestie, libero nibh imperdiet velit, sodales elementum enim sem sed lectus. Vivamus viverra diam congue tristique pellentesque. Proin efficitur est vel lectus ultrices rhoncus eu ut lacus. In gravida leo at justo lobortis, vitae aliquet justo vehicula. Maecenas at facilisis ex. Curabitur cursus, ex id efficitur ultrices, sapien mauris sodales",
      readMore: "Read More",
      date: "May 2, 2021",
      tips: "Grocery",
      food: "food, organic",
    },
  ];

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-6">
        <div className="col-span-4"></div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default page;
