import { useState } from "react";
import logo from "../../assets/pro.png";
import logo1 from "../../assets/feature1.svg";

const features = [
  {
    title: "Effortlessly export projects for client review, ensuring they can see the work whenever they want. Maintain transparency and keep clients informed about project progress and details.",
    description:
      "Effortlessly export projects for client review, ensuring they can see the work whenever they want. Maintain transparency and keep clients informed about project progress and details.",
    tag: "Project Exporting",
    footer:
      "CheckMateGo is built for seamless project management and effortless collaboration, empowering teams to work smarter and stay organized.",
  },
  {
    title: "Capture every detail of your project with limitless cloud storage",
    description:
      "Capture every detail of your project with limitless cloud storage.",
    tag: "Documentation",
    footer:
      "CheckMateGo is built for seamless project management and effortless collaboration, empowering teams to work smarter and stay organized.",
  },
  {
    title: "Quickly locate any project or photo with ease",
    description: "Quickly locate any project or photo with ease.",
    tag: "Efficient",
    footer:
      "CheckMateGo is built for seamless project management and effortless collaboration, empowering teams to work smarter and stay organized.",
  },
  {
    title:
      "Reassure your clients by providing complete visibility into all documentation",
    description:
      "CheckMateGo is built for seamless project management and effortless collaboration, empowering teams to work smarter and stay organized.",
    tag: "Transparency",
    footer:
      "CheckMateGo is built for seamless project management and effortless collaboration, empowering teams to work smarter and stay organized.",
  },
];

const Feature = () => {
  const [tag, setTag] = useState("Project Exporting");
  return (
    <section className="relative py-12 ">
      <div className=" z-20 px-2 md:px-0   xl:ml-[60px] xl:mr-5">
     
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-[#0F172A] font-bold text-center mb-5 lg:mb-12">
        Features
        </h2>

        <div className="flex flex-col-reverse lg:flex-row items-start  gap-3  rounded-lg">
          {/* Image Section */}
          <div className=" flex justify-end z-30 flex-1">
            <img
              src={logo} 
              alt="Dashboard Overview"
              className="w-full  lg:w-auto rounded-lg"
            />
          </div>

          {/* Text Section */}
          <div className="w-full lg:w-[500px] xl:w-[650px] px-4">
            <div className="flex 
            justify-around
            lg:justify-center border border-[#555B69] rounded-full  sm:max-w-[550px]  lg:min-w-[550px] py-[6px] px-1 sm:px-3 gap-1 md:gap-3 xl:gap-4 mb-4">
              <span
                onClick={() => setTag("Project Exporting")}
                className={`${
                  tag === "Project Exporting" && "bg-[#22C55E]"
                } px-1 sm:px-3 py-2 rounded-full text-black text-[12px] sm:text-base font-semibold whitespace-nowrap cursor-pointer`}
              >
                Project Exporting
              </span>
              <span
                onClick={() => setTag("Documentation")}
                className={`${
                  tag === "Documentation" && "bg-[#22C55E]"
                } px-1 sm:px-3 text-black py-2 rounded-full text-[12px] sm:text-base  font-semibold cursor-pointer`}
              >
                Documentation
              </span>
              <span
                onClick={() => setTag("Efficient")}
                className={`${
                  tag === "Efficient" && "bg-[#22C55E]"
                } px-1 sm:px-3 py-2 text-black rounded-full text-[12px] sm:text-base  font-semibold cursor-pointer`}
              >
                Efficient
              </span>
              <span
                onClick={() => setTag("Transparency")}
                className={`${
                  tag === "Transparency" && "bg-[#22C55E]"
                } px-1 sm:px-3 py-2 text-black text-[12px] sm:text-base  rounded-full font-semibold cursor-pointer`}
              >
                Transparency
              </span>
            </div>

            <div>
              {features
                .filter((f) => f.tag === tag)
                .map((k, ind) => (
                  <div key={ind}>
                    <h3 className="text-xl md:text-[29px] md:leading-[40px]  font-semibold text-[#0F172A] mt-5 mb-6">
                      {k?.title}
                    </h3>

                    <p className="text-gray-900 text-base md:text-xl xl:text-2xl mb-5 lg:mb-8">{k?.footer}</p>
                    <div className="flex items-center gap-5">
                      <h2 className="text-4xl text-[#0F172A]  lg:text-[44px] font-bold">80%</h2>
                      <p className="text-base lg:text-lg text-[#000000] 
                      leading-[20px] lg:leading-[22px]  md:w-2/3 ">
                        of the Feature X/Queue Checkmate go to work with
                        partners and customers.
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <img className="absolute bottom-0 h-[350px] md:h-[400px] lg:h-[450px] " src={logo1} alt="" />
    </section>
  );
};

export default Feature;
