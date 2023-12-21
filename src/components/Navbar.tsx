import Image from "next/image";
import logo from "../../public/images/Main-Logo-Small.png";
import { Search } from "lucide-react";
import { Button } from "./ui/Button";
const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 h-fit z-10 py-0 ">
      <ul className="flex items-center justify-around gap-2 text-white text-xl ">
        <li className="hover:text-primary hover:underline cursor-pointer">
          Home
        </li>
        <li className="hover:text-primary hover:underline cursor-pointer">
          Latest
        </li>
        <li className="hover:text-primary hover:underline cursor-pointer">
          Watch
        </li>
        <li className="hover:text-primary hover:underline cursor-pointer">
          Arcs
        </li>
        <li>
          <Image src={logo} width={220} height={10} alt="Logo"></Image>
        </li>
        <li>
          <div className="flex items-center justify-between w-56 rounded-full bg-transparent border border-white active:border-accent hover:border-primary">
            <input
              className=" w-full h-full rounded-2xl px-4 py-3 text-xm text-white bg-transparent  placeholder-white placeholder: text-xs focus:outline-none"
              placeholder="Moonlight Sonata"
            />
            <i className="px-3">
              <Search color="white" size={20} />
            </i>
          </div>
        </li>
        <li>
          <Button variant={"default"} size={"lg"}>
            Log In
          </Button>

          <Button className="mx-4" variant={"outline"} size={"lg"}>
            Sign Up
          </Button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
