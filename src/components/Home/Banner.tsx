import React from "react";
import Image, { StaticImageData } from "next/image";
import { MoveRight } from "lucide-react";
import { FC } from "react";

interface BannerProps {
  title: string;
  description: string;
  episodeNo: number;
  imageUrl: StaticImageData;
}

const Banner: FC<BannerProps> = ({
  title,
  description,
  episodeNo,
  imageUrl,
}) => {
  return (
    <section
      className="
      relative w-full h-[600px]      
      grid grid-row-[1fr,0.5fr,0.5fr] grid-cols-[0.8fr,1fr] gap-1 pt-28"
    >
      <h1 className="text-7xl font-black text-primary leading-[90px] mx-2 min-w-[800px] min-h-[160px]">
        {title}
      </h1>
      <p className="px-3">{description}</p>
      <button
        className="
        flex justify-around border items-center 
        border-white rounded-full text-base 
        ml-2 my-auto w-60 h-16 
        col-start-1 col-end-2 row-start-3 row-end-4 "
      >
        <p className="px-2">Watch Episode {episodeNo}</p>
        <MoveRight className="mr-2" />
      </button>
      <div className="overflow-visible h-full col-start-2 col-end-3 row-start-1 row-end-4 -z-10">
        <Image
          width={950}
          height={560}
          sizes="(min-width: 1060px) 1000px, calc(94.59vw + 16px)"
          className="absolute bottom-0 right-0"
          src={imageUrl}
          alt="Banner image"
        />
      </div>
    </section>
  );
};

export default Banner;
