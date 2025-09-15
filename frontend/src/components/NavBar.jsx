import { FaBars, FaTimes, FaSoundcloud, FaPinterest, FaSearch } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { useState } from "react";
import MenuItem from "./MenuItem";
function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Top bar with menu button */}
      <div className="flex justify-start items-center h-[40px] bg-white shadow-md px-4">
        {isOpen ? (
          <FaTimes
            className="cursor-pointer text-xl"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <FaBars
            className="cursor-pointer text-xl"
            onClick={() => setIsOpen(true)}
          />
        )}
        <img 
        src="/starboyLogo.png" 
        alt="Starboy Logo" 
        className="h-30 ml-auto"
        />        
      </div>

      {/* Sidebar menu */}
      <div
        className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-md transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button inside */}
        <div className="flex justify-end p-4">
          <FaTimes
            className="cursor-pointer text-xl"
            onClick={() => setIsOpen(false)}
          />
        </div>

        {/* Menu links */}
        <div className="flex flex-col justify-start items-start font-[Karla] tracking-[2px] uppercase pl-5 pr-5 text-[#313131] text-[13px]">
            <a href="/" className="pt-3.5 pb-3.5 cursor-pointer">Home</a>
            <MenuItem 
              title="Lifestyle"
              links={[{ path: "/books", label: "Books" }]}
            />
            <a href="/fitness" className="pt-3.5 pb-3.5 cursor-pointer">Fitness</a>
            <MenuItem 
              title="Outfits"
              links={[
                  { path: "/outfits/summer", label: "Summer Outfits" },
                  { path: "/outfits/winter", label: "Winter Outfits" },
                  { path: "/outfits/fall", label: "Fall Outfits" },
                  { path: "/outfits/spring", label: "Spring Outfits" }
                ]}

            />
            <a href="/about" className="pt-3.5 pb-3.5 cursor-pointer">About</a>
            <a href="/shop" className="font-[600] pt-3.5 pb-3.5 cursor-pointer">Shop My Outfits</a>
        </div>

        {/* Social + Search */}
        <div className="flex text-[#2a3a51] text-md items-center py-4 pl-5 pr-5">
          <div className="flex gap-6">
            <FaSoundcloud className="cursor-pointer" />
            <FaPinterest className="cursor-pointer" />
            <BsInstagram className="cursor-pointer" />
          </div>

          <div className="group flex items-center ml-auto">
            <input
              type="text"
              placeholder="Search..."
              className="w-0 opacity-0 group-hover:w-40 group-hover:opacity-100 transition-all duration-500 ease-in-out ml-2 border border-gray-300 rounded px-2 h-[30px] bg-gray-100"
            />
            <FaSearch className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
