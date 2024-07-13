import React from "react";
import Image from "next/image";
import banner2 from "../../public/banner2.jpg"; 
import Content from "./components/Content";

const Home = () => {
  return (
    <div className="">
      <div className="w-full h-[600px]">
        <Image
          src={banner2}
          alt={"bannerImage"}
          objectFit="cover"
          className="object-cover opacity-80  h-full w-full rounded-md"
        />
      </div>
      <Content />
    </div>
  );
};

export default Home;
