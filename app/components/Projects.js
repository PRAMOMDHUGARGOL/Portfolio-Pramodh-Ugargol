import React from "react";
import Image from "next/image";
import wizard from "../Images/wordWiz.png";
import nyu from "../Images/Nyu.png";
import lawnber from "../Images/lawnber.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      title: "NYU Student Rental",
      description:
        "I spearheaded the transformation of the Nyu Student Rental project from design to code. My role involved creating and integrating backend blog functionality, crafting visually appealing frontend interfaces, and enabling users to post listings. I also led the implementation of dual-language support, broadening platform accessibility",
      technologies: [
        "Next.js",
        "Express.js",
        "Node.js",
        "FirebaseDB",
        "TailwindCSS",
        "Vercel",
      ],
      githubLink: "",
      liveDemoLink: "https://nyustudentrent.com",
      imageLink: nyu,
      gitHub: false,
      project: "Featured",
    },
    {
      title: "Lawnber",
      description:
        "I developed robust servers and APIs to manage requests from the frontend for obtaining quotes. Additionally, I crafted intuitive user interfaces for signing up users with diverse subscription plans. Moreover, I seamlessly integrated a payment gateway for processing payments, ensuring a smooth user experience",
      technologies: [
        "Next.js",
        "Express.js",
        "Node.js",
        "FirebaseDB",
        "TailwindCSS",
        "Stripe.js",
      ],
      githubLink: "",
      liveDemoLink: "https://lawnber.com",
      imageLink: lawnber,
      github: false,
      project: "Featured",
    },

    {
      title: "Word-Wiz",
      description:
        "I developed a versatile text-to-speech tool as a hobby project. This tool allows users to convert text to speech, manipulate cases by converting text to uppercase or lowercase, and view word count along with an estimated reading time. It's designed to be user-friendly and efficient, catering to various needs for text processing and speech synthesis",
      technologies: ["React.js", "Material UI", "Tailwind CSS", "Javascript"],
      githubLink:
        "https://github.com/PRAMOMDHUGARGOL/Word-Wiz/tree/master/my-app",
      liveDemoLink: "https://word-wiz.vercel.app/",
      imageLink: wizard,
      github: true,
      project: "Hobby",
    },
  ];

  return (
    <div
      id="projects-section"
      className="max-w-7xl mx-auto px-4 py-10 md:py-20"
    >
      <h1 className="text-3xl md:text-5xl font-bold mb-5">
        <span className="text-2xl mr-2">2.</span> Projects
      </h1>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 shadow-lg rounded-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <div className="flex flex-col md:flex-row w-full">
              <div className="w-full md:w-1/2 mb-4 md:mb-0">
                <div className="w-full h-auto md:h-64 rounded-lg overflow-hidden cursor-pointer">
                  <Link href={project.liveDemoLink}>
                    <Image
                      src={project.imageLink}
                      alt={project.title}
                      className="w-full h-full object-cover" // Ensure the image covers the container
                    />
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-1/2 flex flex-col justify-between">
                <div className="p-4">
                  <h3 className="text-xl font-bold text-white  mb-1">
                    {project.title}
                  </h3>

                  <p className="text-green-500 mb-3">{project.project}</p>

                  <p className="text-white mb-6 text-justify">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {" "}
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-green-700 rounded text-sm text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-end space-x-4 mt-2">
                    {project.github && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-green-500 transition duration-300 ease-in-out"
                      >
                        <GitHubIcon />
                      </a>
                    )}
                    <a
                      href={project.liveDemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-500 transition duration-300 ease-in-out"
                    >
                      <OpenInNewOutlinedIcon />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
