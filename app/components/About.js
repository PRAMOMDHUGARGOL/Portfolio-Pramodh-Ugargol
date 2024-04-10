import React from "react";
import Hero from "../Images/Hero.jpg";
import Image from "next/image";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const About = () => {
  return (
    <div id="about-section" className="max-w-7xl mx-auto px-4 py-10 md:py-20">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        <span className="text-2xl mr-2">1.</span> About{" "}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="col-span-1">
          <p className="text-lg md:text-xl mb-8 leading-relaxed">
            I'm Pramodh, a Software Engineer at Alltramatic. I specialize in
            creating websites and simplifying complex processes.
            <br />
          </p>
          <p className="text-lg md:text-xl mb-8">
            I'm passionate about Frontend Development, UI/UX Design, and
            integrating frontend solutions with backend systems.
          </p>
          <p className="text-lg md:text-xl mb-8">
            Here are a few technologies I've been working with recently:
          </p>
          <div>
            <ul>
              <li className="mb-4 flex flex-col md:flex-row items-start">
                <div className="flex items-center">
                  <div>
                    <ArrowRightIcon
                      sx={{ mr: 1 }}
                      fontSize="large"
                      className="text-green-500"
                    />
                  </div>

                  <div>
                    <h2 className="text-lg md:text-xl font-semibold mb-2 text-green-500">
                      Languages:
                    </h2>
                    <p className="text-md">
                      JavaScript, Python, HTML, CSS, C++
                    </p>
                  </div>
                </div>
              </li>
              <li className="mb-4 flex flex-col md:flex-row items-start">
                <div className="flex items-center">
                  <ArrowRightIcon
                    sx={{ mr: 1 }}
                    fontSize="large"
                    className="text-green-500"
                  />
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold mb-2 text-green-500">
                      Libraries/Frameworks:
                    </h2>
                    <p className="text-md">
                      ReactJS, NodeJS, NextJS, Redux, ExpressJS
                    </p>
                  </div>
                </div>
              </li>
              <li className="mb-4 flex flex-col md:flex-row items-start">
                <div className="flex items-center">
                  <ArrowRightIcon
                    sx={{ mr: 1 }}
                    fontSize="large"
                    className="text-green-500"
                  />
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold mb-2 text-green-500">
                      Databases:
                    </h2>
                    <p className="text-md">FirebaseDB, MongoDB</p>
                  </div>
                </div>
              </li>
              <li className="mb-4 flex flex-col md:flex-row items-start">
                <div className="flex items-center">
                  <ArrowRightIcon
                    sx={{ mr: 1 }}
                    fontSize="large"
                    className="text-green-500"
                  />
                  <div>
                    <h2 className="text-lg md:text-xl font-semibold mb-2 text-green-500">
                      Other:
                    </h2>
                    <p className="text-md">
                      Git, VS Code, Clean Code, Agile (Scrum), Figma, Moz, Ahref
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-span-1">
          <Image
            src={Hero} // Assuming Hero is correctly set to the path of your image
            alt="Your Image"
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
