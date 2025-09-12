import { FaSearch, FaSoundcloud, FaPinterest } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";


function Header() {
    return (
        <>
    <div className="flex flex-direction-row justify-between  bg-white text-[#313131] text-[13px] ">
         
        <div className="flex justify-start items-center h-[75px] gap-10 p-5 font-[Karla] tracking-[2px] uppercase pl-12 ">
            <p>Style</p>
            <p>Fitness</p>
            <p>Travel</p>
            <p>Lifestyle</p>
            <p>About</p>
            <p className="font-[600]">Shop My Outfits</p>
        </div>

        <div className="flex gap-6 text-[#2a3a51] text-md justify-center items-center pr-12 ">
            <FaSoundcloud className="cursor-pointer" />
            <FaPinterest className="cursor-pointer" />
            <BsInstagram className="cursor-pointer" />
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
