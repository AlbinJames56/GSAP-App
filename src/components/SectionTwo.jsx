import React from "react";

const SectionTwo = () => {
  return (
    <>
      <section className="section-2 h-Screen my-20">
        <div className="h-full flex [&>*]:flex-1 items-center">
          <div className="flex items-center justify-center">
            <div className="w-[385px] [&>*]:w-48 [&>*]:h-48 flex flex-wrap items-center justify-center overflow-hidden">
              <div className=""></div>
              <div className="box box-1 bg-blue ">
                <p className="text-white">past</p>
                <p className="num ">01</p>
              </div>
              <div className="box box-2 bg-navy_blue">
                <p className="text-white"> present</p>
                <p className="num text-white">02</p>
              </div>
              <div className="box box-3 bg-meroon">
                <p className="text-white">future</p>
                <p className="num text-white">03</p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div className="text-content_s2 w-80 flex flex-col gap-4">
              <h1 className=" leading-normal text-navy_blue text-8xl font-bold overflow-hidden">
                past
              </h1>
              <div className="h-7 absolute top-28 left-6 overflow-hidden">
                <h3  className="sm-text text-gray-200 text-xl font-bold">branding project</h3>
              </div>
              <p className="text-gray-500 leading-6 text-sm">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore dolor recusandae sequi, consectetur incidunt qui velit
                fugit magnam, nihil, adipisci totam aspernatur officia commodi
                nam. Assumenda odio similique magni molestias!
              </p>
              <button className="btn ">More</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SectionTwo;
