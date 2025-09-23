import { FaSearch, FaSoundcloud, FaPinterest } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import MenuItem from "./MenuItem";


function Header() {
    return (
        <>
    <div className="flex flex-direction-row justify-between  bg-white text-[#313131] text-[13px] ">
         
        <div className="flex justify-start items-center h-[75px] gap-10 p-5 font-[Karla] tracking-[2px] uppercase pl-12 ">
            <a href="/" className="pt-3.5 pb-3.5 cursor-pointer">Home</a>
        <div className="relative group pt-3.5 pb-3.5 cursor-pointer">
          <p>Lifestyle</p>
            <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300">
            <a
                href="/books"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
                Book
            </a>
 
            </div>
        </div>
        <a href="/fitness" className="pt-3.5 pb-3.5 cursor-pointer">Fitness</a>
        <a href="/outfits" className="pt-3.5 pb-3.5 cursor-pointer">Outfits</a>
        <a href="/about" className="pt-3.5 pb-3.5 cursor-pointer">About</a>
        <a href="/Wardrobe" className="font-[600] pt-3.5 pb-3.5 cursor-pointer">Starboy Wardrobe</a>
      </div>

        <div className="flex gap-6 text-[#2a3a51] text-md justify-center items-center pr-12 ">
            <a
              href="https://soundcloud.com/mohamed-saber-705705117/sets"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaSoundcloud className="cursor-pointer" />
            </a>

            <a
              href="https://www.pinterest.com/mohamedsaber1107/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest className="cursor-pointer" />
            </a>

            <a
              href="https://www.instagram.com/xmohamedsaber"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsInstagram className="cursor-pointer" />
            </a>
            <div className="group flex items-center">

                {/* wrapper that animates width; input inside is full-width */}
                <div className="w-0 group-hover:w-40 transition-all duration-500 ease-in-out overflow-hidden ml-2 min-w-0">
                    <input
                    type="text"
                    placeholder="Search..."
                    className="w-full h-[30px] px-2 border border-gray-300 rounded bg-gray-100 outline-none"
                    />
                </div>
                <FaSearch className="cursor-pointer" />

            </div>
        </div>

    </div>
        
         
        </>
    )
}

export default Header
