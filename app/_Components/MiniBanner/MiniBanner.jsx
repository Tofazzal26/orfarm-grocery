import Image from "next/image";

const MiniBanner = () => {
  return (
    <div className="my-[20px] md:my-[120px]">
      <div className="flex md:flex-row flex-col justify-center items-center gap-4 md:gap-8">
        <Image src="/mini2.jpg" alt="banner" width={400} height={400} />
        <Image src="/mini1.jpg" alt="banner" width={400} height={400} />
        <Image src="/mini2.jpg" alt="banner" width={400} height={400} />
      </div>
    </div>
  );
};

export default MiniBanner;
