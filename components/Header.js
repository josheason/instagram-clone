import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import LogoMobile from "../assets/instagram_mobile.webp";
import LogoDesktop from "../assets/instagram_desktop.webp";

function Header() {
  return (
    <div>
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto">
        {/* Left - logo */}
        <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
          <Image src={LogoDesktop} layout="fill" objectFit="contain" />
        </div>

        <div className="relative w-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image src={LogoMobile} layout="fill" objectFit="contain" />
        </div>

        {/* Middle - search input field */}
        <div className="max-w-xs">
          <div className="relative mt-1 p-3 rounded-md">
            <div
              className="absolute inset-y-0 pl-3 flex items-center
          pointer-events-none"
            >
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </div>
            <input
              className="bg-gray-50 block-w-full pl-10 sm:text-sm border-gray-300
             focus:ring-black focus:border-black rounded-md"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>

        {/* Right */}
        <HomeIcon className="h-10 w-10" />
      </div>
    </div>
  );
}

export default Header;
