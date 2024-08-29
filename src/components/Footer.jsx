import React from "react";

function Footer() {
  return (
    <>
      <footer className="py-4">
        <div className="flex justify-around items-center p-4">
          <div className="">
          <p className="font-bold">Bin<span className="text-navy_blue">Go</span></p>
            <p className="w-72 text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
              eos quo ex commodi nobis accusantium animi{" "}
            </p>
          </div>
          <ul className="menu">
            <p className="">Company</p>
            <li>News</li>
            <li>Technology</li>
            <li>News</li>
          </ul>
          <ul className="menu">
            <p className="">Expand</p>
            <li>Partners</li>
            <li>Enterprise Service</li>
            <li>Developer</li>
          </ul>
          <ul className="menu">
            <p className="">Help</p>
            <li>Help Center</li>
            <li>Products</li>
            <li>Tools</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
