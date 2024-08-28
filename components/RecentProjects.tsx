import { projects } from "@/data/projects";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading text-white">
        Recent <span className="text-purple">Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project, index) => (
          <div
            key={index}
            className="text-white border-slate-500 lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] m-4"
          >
            <div className="border border-[#394289] rounded-3xl overflow-hidden">
              {" "}
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                {" "}
                <div className="relative w-full h-full lg:rounded-3xl bg-[#21264e]">
                  {" "}
                  <Image
                    width={500}
                    height={500}
                    src="/bg.png"
                    alt={project.title}
                    className="rounded-xl "
                  />
                </div>
                <Image
                  width={500}
                  height={500}
                  src={project.img}
                  alt="Image"
                  className="z-10 absolute bottom-0 "
                />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 p-2">
                {project.title}
              </h1>
              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 p-2"
                style={{
                  color: "#BEC1DD",
                  margin: "1vh 0",
                }}
              >
                {project.des}
              </p>
              <div className="flex items-center justify-between mt-7 mb-3 p-4">
                <div className="flex items-center">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        width={500}
                        height={500}
                        src={icon}
                        alt="icon5"
                        className="p-2"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <a
                    target="_blank"
                    href={project.link}
                    className="flex hover:bg-indigo-800 transition-all hover:cursor-pointer lg:text-base md:text-xs text-xs text-white bg-indigo-500 px-2 py-3 rounded-md"
                  >
                    Check Site
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
