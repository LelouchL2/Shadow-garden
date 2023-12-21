import Banner from "@/components/Home/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24 text-white">
      <Banner />
    </main>
  );
}
