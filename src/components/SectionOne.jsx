import React from "react";
import geo from "../assets/girl.jpg";
import icon1 from "../assets/icon1.svg";
import icon2 from "../assets/icon2.svg";
import icon3 from "../assets/icon3.svg";
import icon4 from "../assets/icon4.svg";
import { PiSlidersBold } from "react-icons/pi";

const SectionOne = () => {
  return (
    <section>
      <div className="h-screen flex">
        {/* Left Column */}
        <div className="flex-1 flex flex-col justify-center px-16 ">
          <h1
            className="txt text-7xl font-bold text-nav_blue"
            style={{ textShadow: "2px 2px 5px rgba(0,0, 0, .5)" }}
          >
            <span className="border-b-8 border-b-navy_blue">Id</span>entic
          </h1>
          <p className="txt opacity-70 mt-8 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br />
            Vero repellat iure delectus reiciendis ipsam rem voluptatibus
            possimus molestiae debitis.
          </p>
        </div>

        {/* Right Column with Background Image */}
        <div
          className=" bg-1 flex-1 flex flex-col mr-9 justify-center items-center text-white"
          style={{
            backgroundImage: `url(${geo})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div
            className="max-w-md text-shadow-5 "
            style={{ textShadow: "2px 2px 5px rgba(1,1, 1, 1)" }}
          >
            <span className="txt uppercase text-sm tracking-widest text-white bg-navy_blue p-2">
              new
            </span>
            <h1 className="txt text-4xl font-bold mt-4">Marketing Agency</h1>
            <p className="txt text-gray-200 mt-4">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
              non rerum veritatis? Eos quasi voluptatibus dicta facilis.
            </p>
            <div
              className="flex items-start   mt-10  "
              style={{ marginLeft: "-10rem" }}
            >
              <div className="btn-1 bg-navy_blue p-3">
                <PiSlidersBold size={24} color="black" />
              </div>
              <div className="overflow-hidden">
                <button className="btn-2 bg-white text-navy_blue py-3 px-6 font-bold">
                  Start Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 border-t border-t-[rgba(1,1,1,.1)]">
        <div className="grid grid_ gap-4 py-3 place-items-center [&>*]:w-24">
          <img className="icon" src={icon1} alt="icon1" />
          <img className="icon" src={icon2} alt="icon2" />
          <img className="icon" src={icon3} alt="icon3" />
          <img className="icon" src={icon4} alt="icon4" />
        </div>
      </div>
    </section>
  );
};

export default SectionOne;
