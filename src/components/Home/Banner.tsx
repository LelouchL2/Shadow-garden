import Image from "next/image";
import bannerImg from "../../../public/images/Shadow-garden-intro-trans.png";
import { Dot, MoveRight } from "lucide-react";
const Banner = () => {
  return (
    <main className="relative w-full h-[600px] bg-black grid grid-row-3 grid-cols-[0.1fr,1fr,1fr] gap-1 pt-28">
      <i className="col-start-1 col-end-2 row-start-1 row-end-4">
        <Dot color="white" size={50} />
        <Dot color="white" size={50} />
        <Dot color="white" size={50} />
        <Dot color="white" size={50} />
      </i>
      <h1 className=" text-7xl font-black text-primary leading-[90px] mx-2">
        Shadow Garden Introduction
      </h1>
      <p className="">Shadow garden introduction in the anime</p>
      <button className="flex justify-around border items-center border-white rounded-full text-base ml-2 my-auto w-60 h-16 col-start-2 col-end-3 row-start-3 row-end-4 ">
        <p className="px-2">Watch Episode 01</p>
        <MoveRight className="mr-2" />
      </button>
      <div className="overflow-visible h-full col-start-3 col-end-4 row-start-1 row-end-4">
        <Image
          width={980}
          className="absolute bottom-0 right-0"
          // className="w-[1000px] object-cover"
          src={bannerImg}
          alt="Banner image"
        />
        {/* <img src={bannerImg} alt="banner image" /> */}
      </div>
    </main>
  );
};

export default Banner;
