import React from "react";
import {MdOutlineShoppingBag} from "react-icons/md"
function NavBar() {
  return (
    <>
      <nav className="h-20 flex items-center justify-between px-12 py-12 border-b  border-b[rgba(1,1,1,.1)]">
        <div>
          <p className="font-bold">Bin<span className="text-navy_blue">Go</span></p>
        </div>
        <ul className="flex items-center justify-between gap-10 [$>*]:text-navy_blue font-bold">
            <li>Home</li>
            <li>Strategy</li>
            <li>About</li>
            <li>Clients</li>
        </ul>
        <div className="flex items-center gap-10">
            <button>SignUp</button>
            <div>
                <MdOutlineShoppingBag/>
            </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
