import React from "react";
import { MdReorder } from "react-icons/md";

const NavigationBar = () => {
  // const { userInfo } = { name: "An", isAdmin: true };
  const logoutHandler = () => {
    console.log("log out");
  };
  return (
    <nav className="flex items-center bg-blue-500">
      <div className="flex items-center bg-black">
        <span>ScrollBuy</span>
      </div>
      <div>
        <MdReorder size={28} />
      </div>
      <div>
        <div>
          <div className='relative text-gray-600'>
            <input />
            <button className="cursor-pointer">
              <MdReorder size={28} />
            </button>
          </div>
        </div>
        <div>
          <button>
            <MdReorder size={28} />
          </button>
          <button>
            <MdReorder size={28} />
          </button>
          <button onClick={logoutHandler}>
            <MdReorder size={28} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
