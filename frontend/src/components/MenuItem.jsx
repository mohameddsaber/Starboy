import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function MenuItem({ title, links = [], onClick }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      {/* Menu Header */}
      <p
        className="pt-3.5 pb-3.5 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <FaChevronDown
          className={`ml-2 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </p>

      {/* Animated Submenu */}
      <div
        className={`overflow-hidden transition-all ease-in duration-350 ${
          isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="pl-5">
          {links.map((link, idx) => (
            <li key={idx} className="py-1 cursor-pointer">
              <Link
                to={link.path}
                className="hover:text-blue-500"
                onClick={onClick} // close sidebar on click
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default MenuItem;