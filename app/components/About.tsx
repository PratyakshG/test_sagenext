import Image from "next/image";
import React from "react";
import aboutImage from "../../public/Aboutimage.png";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-12 py-10">
      <span className="shadow-md rounded-full px-4 py-2 font-bold">
        About Daas
      </span>
      <h1 className="font-black text-[#023576] text-3xl text-center">
        Desktop as a Service (DaaS)
      </h1>

      <div className="max-w-[1300px] py-10 flex max-lg:flex-col gap-12">
        <Image src={aboutImage} alt="aboutImage" className="aspect-square size-full" />
        <div>
          <span className="text-[17px]">
            DaaS is a cost-effective solution for providing desktop
            virtualization on any device. The cloud-hosted DaaS infrastructure
            allows your team to access and work on the virtual desktop
            environment from anywhere, anytime. A desktop-as-a-service provider
            like Sagenext offers seamless and effective hosting solutions to
            ensure your workflow isn’t hampered. Many Desktop as a Service
            providers exist in the USA and Canada, but choosing the right one
            will matter for smooth operations and customized business solutions.
            <br />
            <br />
            You must have seen traditional PC setups take a lot of time and IT
            efforts like managing, updating, and patching, while DaaS frees your
            IT staff and allows them to focus on other crucial projects.
            Moreover, it is easy for cloud service providers in the USA to
            manage backups as the DaaS informational data is stored in dedicated
            and centralized data centers. With this, the business organization
            doesn't have to worry about the application and the data. It can be
            accessed anytime, anywhere by any client or team member. The cloud
            environment is the best desktop-as-a-service solution across the
            United States.
          </span>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center">
        <span className="font-black text-4xl text-[#023576] text-center">
          Boost Your Team’s Productivity with Our DaaS Hosting – Sign Up Now!
        </span>

        <div className="flex gap-3 pt-6 max-md:p-4 max-sm:pb-10">
          <button className="border border-white rounded-full text-white bg-[#0151C1] px-4 lg:px-8 py-3 max-md:text-sm font-bold whitespace-nowrap">
            Talk to our Experts
          </button>
          <button className="border border-[#023576] rounded-full text-[#023576] px-4 lg:px-8 py-3 max-md:text-sm font-semibold whitespace-nowrap">
            Get Your Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
