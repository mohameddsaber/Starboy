import { useState } from "react";

function MenuItem({ title, links }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <p
        className="pt-3.5 pb-3.5 cursor-pointer flex justify-between items-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="ml-2">{isOpen ? "▲" : "▼"}</span>
      </p>

      {isOpen && (
        <ul className="pl-5 transition-all duration-300 ease-in-out">
          {links.map((link, index) => (
            <li key={index} className="py-1 cursor-pointer">
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MenuItem;
