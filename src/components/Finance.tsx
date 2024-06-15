import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import { SectionTitle } from "./SectionTitle";
import React from "react";

import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";

const data = {
  title: "Highlight your benefits",
  desc: "You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "Then explain the first point breifly in one or two lines.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Improve acquisition",
      desc: "Here you can add the next benefit point.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "This will be your last bullet point in this section.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

export const MiniSectionTitle = (props: any) => {
  const alignment = props.bulletPoint % 2 ? "right" : "left";
  const alignmentClasses =
    alignment === "right" ? "items-end text-right" : "items-start text-left";

  return (
    <div className={`flex flex-col ${alignmentClasses}`}>
      <button className="w-12 h-12 mt-3 text-center text-white bg-indigo-600 rounded-xl hover:bg-indigo-500">
        {props.bulletPoint}
      </button>
      <Container className={`flex w-full flex-col mt-1 ${alignmentClasses}`}>
        {props.title && (
          <h2 className="max-w-2xl mt-3 text-md font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight dark:text-white">
            {props.title}
          </h2>
        )}

        {props.children && (
          <p className="max-w-2xl py-4 text-md leading-normal text-gray-500 dark:text-gray-300">
            {props.children}
          </p>
        )}
      </Container>
    </div>
  );
};

function Benefit(props: any) {
  return (
    <div className="flex items-start mt-8 space-x-3">
      <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
        {React.cloneElement(props.icon, {
          className: "w-7 h-7 text-indigo-50",
        })}
      </div>
      <div>
        <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
          {props.title}
        </h4>
        <p className="mt-1 text-gray-500 dark:text-gray-400">
          {props.children}
        </p>
      </div>
    </div>
  );
}

export const Finance = () => {
  const bulletPoints = [
    {
      bulletIndex: 1,
      title: "Map",
      description: "Find parties in your area",
    },
    {
      bulletIndex: 2,
      title: "Tickets",
      description: "Keep track of all your purchased tickets",
    },
    {
      bulletIndex: 3,
      title: "Hosting",
      description: "Organize your party through a simple interface",
    },
    {
      bulletIndex: 4,
      title: "Account",
      description: "Create your unique experience with Tulum",
    },
  ];
  const alignment = "left";
  return (
    <>
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            true ? "lg:order-1" : ""
          }`}
        >
          <div>
            <div className="relative flex items-center justify-center mx-16 gap-20">
              <div className="absolute w-[450px] h-[450px] bg-indigo-500 rounded-full hidden sm:block"></div>
              <Image
                src={heroImg}
                width="250"
                height="250"
                alt="Hero Illustration"
                className="relative rotate-[-15deg]  translate-x-[20px] translate-y-[-60px] scale-[0.8]"
                loading="eager"
                placeholder="blur"
              />
              <Image
                src={heroImg}
                width="250"
                height="250"
                alt="Hero Illustration"
                className="relative rotate-[18deg] translate-x-[-3px] translate-y-[15px] scale-[0.8]"
                loading="eager"
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            true ? "lg:justify-end" : ""
          }`}
        >
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
