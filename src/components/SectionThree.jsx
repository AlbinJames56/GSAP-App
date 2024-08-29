import React from "react";
import geo from "../assets/geo.svg";
const SectionThree = () => {
  return (
    <section className="section-3 h-screen">
      <div className="h-full flex items-center justify-center [&>*]:flex-1">
        <div className="h-full flex items-center justify-center">
          <div
            className="bg-3 h-[500px] w-[480px] flex items-center"
            style={{
              backgroundImage: `url(${geo}) `,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div
              className="white-box w-[calc(100%-4.5rem)] h-[calc(100%-9rem)]"
              style={{ background: "rgba(255, 255, 255, 0.8)" }}
            >
              <div className="white-box-content h-full flex flex-col gap-4 p-8 ">
                <h1 className="text-xl font-bold text-navy_blue">Statistic</h1>
                <p className="w-72 text">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
                  molestiae, distinctio expedita illum blanditiis qui cum
                  voluptatum harum facilis exercitationem magnam iure quaerat
                  provident error quibusdam doloribus veniam optio similique!
                </p>
                <div className="flex gap-6">
                  <div className="">
                    <p className="font-bold text-navy_blue text-xl">216</p>
                    <span className="text-gray-500 text-xs">Income</span>
                    <div className="h-1 w-8 bg-blue mt-1"></div>
                  </div>
                  <div className="">
                    <p className="font-bold text-navy_blue text-xl">647</p>
                    <span className="text-gray-500 text-xs">Expense</span>
                    <div className="h-1 w-8 bg-fuchsia mt-1"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden">
          <div className="text-content_s3 flex flex-col gap-4 w-80">
            <span className="text-8xl font-bold text-navy_blue">new</span>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
              quisquam facilis dicta at tempora esse sit earum ratione commodi
              deleniti, dolorem soluta vero sapiente fuga enim repellat hic.
              Vel, aperiam.
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
              rem..
            </p>
            <button className="btn">More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
