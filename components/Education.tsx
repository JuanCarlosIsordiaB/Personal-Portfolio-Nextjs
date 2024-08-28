import React from "react";
import { Button } from "./ui/MovingBorders";
import { Spotlight } from "./ui/Spotlight";

const Education = () => {
  return (
    <div className=" py-20">
      <h1 className="heading text-white">
        My <span className="text-purple">Education</span>
      </h1>
      <div className="w-full mt-12 grid md:flex gap-3 ">
        <Button className="" duration={Math.floor(Math.random() * 1000)}>
          <div className="p-3 py-6 md:p-5 lg:p-10 gap-2">
            <h1 className="text-lg font-extrabold ">
              City University of Seattle
            </h1>
            <h2 className="text-base  text-purple">
              Bachelor of Science in Applied Computer Science
            </h2>

            <h3 className="text-base">Seattle, WA | Aug. 2021 – June 2025</h3>
            <p className="font-light">GPA 3.8/4</p>
          </div>
        </Button>
        <Button className="flex-1" duration={Math.floor(Math.random() * 1000)}>
          <div className="p-3 py-6 md:p-5 lg:p-10 gap-2">
            <h1 className="text-lg font-extrabold">
              Universidad Autonoma de San Luis Potosi
            </h1>
            <h2 className="text-base  text-purple">
              Intelligent Systems Engineering
            </h2>

            <h3 className="text-base">
              SaN Luis Potosi, MX | Aug. 2021 – June 2025
            </h3>
            <p className="font-light">GPA 8.3/10</p>
          </div>
        </Button>
        <Button className="flex-1" duration={Math.floor(Math.random() * 1000)}>
          <div className="p-3 py-6 md:p-5 lg:p-10 gap-2">
            <h1 className="text-lg font-extrabold">
              BEDU + Santander Open Academy{" "}
            </h1>
            <h2 className="text-base  text-purple">
              Fullstack Web Developer Bootcamp
            </h2>

            <h3 className="text-base">Aug. 2023 – Aug. 2024</h3>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Education;
