import React from "react";
import { MdOutlineWifiTethering } from "react-icons/md";

const Footer = () => {
  // const year = new Date().getFullYear();
  return (
    <footer className='flex bg-red-900  '>
      <div>
        <div>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href="google.com">
            <MdOutlineWifiTethering />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
