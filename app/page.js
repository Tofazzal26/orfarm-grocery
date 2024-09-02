import { Button } from "@/components/ui/button";
import Image from "next/image";
import Banner from "./_Components/Banner/Banner";
import OurProduct from "./_Components/OurProduct/OurProduct";

export default function Home() {
  return (
    <div>
      <div className="container mx-auto">
        <Banner />
        <OurProduct />
      </div>
    </div>
  );
}
