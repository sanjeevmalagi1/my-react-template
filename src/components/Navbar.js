import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="">
      <div className="flex justify-between h-14 container mx-auto px-4">
        <Link to="/" className="flex items-center">
            Title of Site
        </Link>
        <ul className="flex">
          <li className="flex items-center mx-5">
              <Link to="/">Home</Link>
          </li>
        </ul>  
      </div>
    </nav>
  );

};

export default Navbar;
