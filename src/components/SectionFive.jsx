import React from "react";
import geo3 from "../assets/bg.jpg";
import img from "../assets/girlwithflower.jpg"
const SectionFive = () => {
  return (
    <section className="section-5 mt-10 h-screen bg-[#eef7fe] flex items-center justify-center">
      <div
        className="bg-5 h-[500px] w-[950px] flex flex-center justify-around gap-4"
        style={{
          backgroundImage: `url(${geo3})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="side-1 pt-20">
            <h1 className="text-white text-4xl font-bold mb-10">Our Program</h1>
            <img className="h-56 w-auto object-cover" src={img } alt="" />
        </div>
        <div className="side-2 pt-20">
            <p className="w-72 text-sm text-gray-200 leading-6 mb-10" style={{ textShadow: "2px 2px 5px gray" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quos incidunt voluptas aperiam soluta aliquid? Ullam eum facilis natus itaque officia officiis, consequuntur, sapiente, id consectetur iste eaque quae omnis!
            </p>
            <button className="bg-gray-200 text-navy_blue font-bold px-6 py-3">Subscribe</button>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;
