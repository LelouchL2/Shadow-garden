"use client";
import Banner from "@/components/Home/Banner";
import bannerImg1 from "../../public/images/Shadow-garden-intro-trans.png";
import bannerImg2 from "../../public/images/1.png";
import bannerImg3 from "../../public/images/upscaled.png";
import { useState } from "react";

const bannerDataList = [
  {
    title: "Shadow Garden Introduction ",
    description: "Shadow garden introduction in the anime",
    imageUrl: bannerImg1,
    episodeNo: 1,
  },
  {
    title: "Shadow VS Viscount Grease ",
    description:
      "Shadow is lost and doesn't know where the girls went while walking around the tunnels before he encounters Grease. He attacks Shadow, who easily blocks his attack.",
    imageUrl: bannerImg1,
    episodeNo: 2,
  },
  {
    title: "School takeover ",
    description: "Shadow garden introduction in the anime",
    imageUrl: bannerImg2,
    episodeNo: 3,
  },
  {
    title: "I am Atomic ",
    description: "Most epic moment",
    imageUrl: bannerImg3,
    episodeNo: 5,
  },
  // Add more objects with different values for the Banner component
  // { title: "Another Title", description: "Another Description", ... },
];

export default function Home() {
  const [selectedBannerIndex, setSelectedBannerIndex] = useState(0);

  const handleDotClick = (index: number) => {
    setSelectedBannerIndex(index);
  };

  return (
    <main className=" text-white">
      <header
        className="flex justify-between items-center 
                  bg-gradient-to-t from-black/50 via-transparent to-transparent "
      >
        <ul className="flex flex-col pt-10 px-6">
          {bannerDataList.map((_, index) => (
            <li
              key={index}
              className={`w-3 h-3 rounded-full m-2 cursor-pointer hover:bg-primary 
                          transition-all duration-400 ease-in-out 
                          ${
                            selectedBannerIndex === index
                              ? "bg-primary"
                              : "bg-muted"
                          }`}
              onClick={() => handleDotClick(index)}
            ></li>
          ))}
        </ul>
        <div className="transition-all duration-600 ease-in-out">
          <Banner {...bannerDataList[selectedBannerIndex]} />
        </div>
      </header>
    </main>
  );
}
