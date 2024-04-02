import React from "react";
import "../styles/Experience.css"; // Import CSS file for animations

const Experience = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10 md:py-20">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        <span className="text-2xl mr-2">2.</span> Experience{" "}
      </h1>
      <div className="max-w-2xl mx-auto px-4 py-10 md:py-20 animate__fadeInUp">
        {/* Add fadeInUp animation class */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Software Engineer - L2 @ Red Hat
          </h2>
          <p className="text-sm text-gray-600 mb-2">July 2021 - Present</p>
          <ul className="list-disc list-inside mb-4">
            <li>
              Implemented a feature to request a remote session through the
              frontend UI
            </li>
            <li>
              Streamlined and implemented new workflow for the creation of
              cases, thus enhancing the overall user experience
            </li>
            <li>Contributed to CEPH and Red Hat OpenShift</li>
            <li>
              Working on the development of a history feature catering to
              scenarios involving extensive historical data, resembling the
              commenting system found on Reddit
            </li>
            <li>
              Improved GitLab pipeline speeds by writing custom stages and
              coverage scripts by 25%
            </li>
            <li>Increased overall unit test coverage of the application</li>
            <li>Revamped the UI of a Feedback form</li>
            <li>Contributed to Kong Service Mesh</li>
          </ul>
          <p className="text-sm mb-2">
            Skills: HTML · JavaScript · CSS · React.js · TypeScript · GoLang ·
            Python
          </p>
          <p className="text-sm mb-2">
            Promotion: Associate Software Engineer-L1 (Nov 2021 - Sept 2023) -
            Software Engineer-L2 (Oct 2023 - Present)
          </p>
          <p className="text-sm mb-2">
            FTE: Intern (July 2021 - Oct 2021) - Associate Software Engineer-L1
            (Nov 2021)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;
