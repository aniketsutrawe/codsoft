"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const gpaList = [
  {
    gpa: "GPA",
    valueMca: "8.3",
    valueBsc: "8.9",
    postfix: "/10",
  },
];


const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 ">
        <li className="lg:inline-block max-md:block  max-md:p-1">React.Js <Image src="/icons/reactJs.png" alt="React logo" width={25} height={25} className="inline-block align-middle p-0.5 m-1" /></li>
        <li className="lg:inline-block lg:ml-24 max-md:block max-md:ml-0 max-md:p-1">Express <Image src="/icons/express.png" width={65} height={25} alt="ExpressJs logo" className="inline-block align-middle bg-yellow-300 opacity-50 py-0.5 m-1 w-16 h-7" /></li>
        <br className="max-sm:hidden" /><br className="max-sm:hidden" />
        <li className="lg:inline-block max-md:block max-md:p-1">Node.Js <Image src="/icons/nodejs.png" alt="NodeJs logo" width={65} height={65}  className="inline-block align-top m-1" /></li>
        <li className="lg:inline-block lg:ml-14 max-md:block max-md:ml-0 max-md:p-1">MongoDB <Image src="/icons/mongodb.png" alt="MongoDB logo" width={65} height={15} className="inline-block align-top m-1" /></li>
        <br className=" max-sm:hidden" /><br className=" max-sm:hidden" />
        <li className="lg:inline-block max-md:block max-md:p-1">JavaScript <Image src="/icons/javascript.png" alt="Javascript logo" width={25} height={25} className="inline-block align-middle  m-1" /></li>
        <li className="lg:inline-block lg:ml-[82px] max-md:block max-md:ml-0 max-md:p-1">TailwindCSS <Image src="/icons/tailwindcss.png" alt="Tailwind logo" width={140} height={30} className="inline-block align-middle m-0.5" /></li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="pl-2">
        <li className=" font-bold text-fuchsia-300">Masters of Computer Applications (MCA)</li>
        <li className="italic">Solapur University, Solapur 2021-23</li>
        {gpaList.map((Gpa, index) => {
          return <li className="font-bold italic flex flex-row gap-1" key={""}>{Gpa.gpa} : ‎
            <AnimatedNumbers includeComma animateToNumber={parseFloat(Gpa.valueMca)} locale="en-US" className=" text-white flex flex-row"
              configs={(_, index) => {
                return {
                  mass: 1,
                  friction: 50,
                  tensions: 140 * (index + 1),
                };
              }
              }
            /> {Gpa.postfix}</li>
        })}

        <br />
        <li className=" font-bold text-fuchsia-300">Bachelor of Computer Science (B.Sc.)</li>
        <li className="italic">DBF Dayanand College of Arts And Science, Solapur 2018-21</li>
        {gpaList.map((Gpa, index) => {
          return <li className="font-bold italic flex flex-row gap-1" key={""}>{Gpa.gpa} : ‎
            <AnimatedNumbers includeComma animateToNumber={parseFloat(Gpa.valueBsc)} locale="en-US" className=" text-white flex flex-row"
              configs={(_, index) => {
                return {
                  mass: 1,
                  friction: 50,
                  tensions: 140 * (index + 1),
                };
              }
              }
            /> {Gpa.postfix}</li>
        })}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <div className="flex gap-4 ">
      <ul className="list-disc pl-2">
        <li className="font-bold">MERN-Stack Course</li>
        <span className="italic ">Form IT Education Center, Pune.</span>
      </ul>
      <a href="https://drive.google.com/file/d/1kbvfbLRuDp169KGCRRkfJ7SriORj7m_p/view?usp=drive_link">
      <Image src="/images/MernCertificate.webp" alt="certificate" width={250} height={80} title="Open Certificate" />
      </a>
      </div>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="pl-2">
        <li><Image src="/icons/surfing.png" alt="surfing" width={35} height={35} className=" inline-block"></Image> &nbsp; <span className="italic font-semibold">Surfing on Internet</span></li> <br />
        <li><Image src="/icons/travelling.png" alt="travel" width={35} height={35} className=" inline-block"></Image> &nbsp; <span className="italic font-semibold">Travelling</span></li> <br />
        <li><Image src="/icons/meditation.png" alt="meditation" width={35} height={35} className=" inline-block"></Image> &nbsp; <span className="italic font-semibold">Meditation</span></li> <br />
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" alt="aboutImage" width={500} height={500} className="" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 max-md:text-center">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a MERN stack Frontend developer with a passion for creating
            interactive and responsive websites and web applications. Also seeking 
            knowledge of backend developement with Next.js. I have experience
            working with JavaScript, React, Redux, Node.js, Express, Tailwind CSS,
            MongoDB, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing websites and applications.
          </p>
          <div className="flex flex-row justify-start mt-8 gap-2 max-md:justify-center">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Technical Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("hobbies")}
              active={tab === "hobbies"}
            >
              {" "}
              Hobbies{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
