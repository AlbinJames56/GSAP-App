import React from "react";
import geo from "../assets/bg-light.png";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";

const SectionFour = () => {
  return (
    <section className="section-4 h-screen">
      <div className="h-full [&>*]:flex-1 flex">
        <div className="flex items-center justify-center">
          <div className="h-[500px] w-[400px] ">
            <div
              className="bg-4 h-[380px] p-10 flex flex-col gap-4"
              style={{
                backgroundImage: `url(${geo}) `,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="txt-1 flex flex-col gap-4">
                <h1
                  className="text-xl font-bold text-white"
                  style={{ textShadow: "2px 2px 5px black" }}
                >
                  Next Generation
                </h1>
                <p
                  className="w-72 text-sm leading-6 text-gray-200"
                  style={{ textShadow: "2px 2px 5px black" }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  voluptas accusamus inventore libero saepe atque, cumque quo,
                  rerum culpa et reiciendis aliquam illo incidunt maxime, quae
                  repellat maiores dicta ipsam.
                </p>
              </div>
              <div className="self-end translate-x-20 translate-y-8 flex flex-col gap-4">
                <img className="img_1 w-64 h-auto" src={img2} alt="" />
                <div className="txt-2">
                  <h4 className="font-bold">Headder</h4>
                  <p className="text-w-52">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Fuga recusandae quae exercitationem at magnam facilis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <div className="h-[500px] w-[400px]">
            <div className="flex flex-col gap-[4.79rem] p-10">
              <h1 className="txt-3 text-8xl text-navy_blue font-bold">next </h1>
              <div className="flex flex-col gap-4">
                <img
                  className="img_2 w
                            -96 h-60"
                  src={img1}
                  alt=""
                />
                <div className="txt-4 ">
                  <h4 className="font-bold">Indarem ipsum dolor</h4>
                  <p className="w-52 ">
                    ELorem ipsum dolor, sit amet consectetur adipisicing.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
