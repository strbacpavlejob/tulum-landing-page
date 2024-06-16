"use client";

import { Container } from "@/components/Container";
import { SectionTitle } from "./SectionTitle";
import {
  MapIcon,
  TicketIcon,
  MegaphoneIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import Smartphone from "./Smartphone";
import { useState } from "react";
import mapImg from "../../public/img/screenshots/map.png";

// MiniSectionTitle component
export const MiniSectionTitle = (props: any) => {
  const alignment = props.bulletPoint % 2 ? "right" : "left";
  const alignmentClasses =
    alignment === "right" ? "items-end text-right" : "items-start text-left";

  const Icon = props.icon;

  return (
    <div className={`flex flex-col ${alignmentClasses}`}>
      <button
        className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 "
        onClick={props.onClick}
      >
        <Icon className="w-7 h-7 text-indigo-50" />
      </button>
      <Container className={`flex w-full flex-col mt-1 ${alignmentClasses}`}>
        {props.title && (
          <h4 className="max-w-2xl mt-3 text-md font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight dark:text-white">
            {props.title}
          </h4>
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

// Features component
export const Features = () => {
  const bulletPoints = [
    {
      bulletIndex: 1,
      title: "Map",
      description:
        "Explore and find parties happening around you with our interactive map.",
      icon: MapIcon,
      imageSrc: mapImg,
    },

    {
      bulletIndex: 2,
      title: "Hosting",
      description:
        "Plan and organize your own parties with our user-friendly hosting interface.",
      icon: MegaphoneIcon,
      imageSrc: mapImg,
    },
    {
      bulletIndex: 3,
      title: "Tickets",
      description:
        "Easily manage and keep track of all your purchased tickets in one place.",
      icon: TicketIcon,
      imageSrc: mapImg,
    },
    {
      bulletIndex: 4,
      title: "Account",
      description:
        "Customize your unique party experience with your personal Tulum account.",
      icon: UserCircleIcon,
      imageSrc: mapImg,
    },
  ];
  const [selectedButton, setSelectedButton] = useState(1);

  return (
    <>
      <SectionTitle title="How Tulum Works">
        Discover How Tulum Transforms Your Party Experience Tulum makes finding
        and hosting parties easy and fun. Here’s how:
      </SectionTitle>

      <Container className="flex flex-wrap justify-center">
        <div className="flex w-full justify-center lg:w-2/3 gap-16">
          {/* Left Column for buttons 1 and 3 */}
          <div className="flex flex-col items-center justify-between h-full py-10">
            {bulletPoints
              .filter((_, index) => index % 2 === 0)
              .map((point, index) => (
                <MiniSectionTitle
                  title={point.title}
                  bulletPoint={point.bulletIndex}
                  isSelected={point.bulletIndex === selectedButton}
                  key={index}
                  onClick={() => setSelectedButton(point.bulletIndex)}
                  icon={point.icon}
                >
                  {point.description}
                </MiniSectionTitle>
              ))}
          </div>

          {/* Center Column for image */}
          <div className="relative flex items-center justify-center mx-16">
            <div className="absolute w-[450px] h-[450px] bg-indigo-500 rounded-full hidden lg:block sm:w-[150px] sm:h-[150px]"></div>
            <Smartphone
              width="550"
              height="550"
              className="relative rotate-[5deg]"
              src={bulletPoints[selectedButton - 1].imageSrc.src}
            />
          </div>

          {/* Right Column for buttons 2 and 4 */}
          <div className="flex flex-col items-center justify-between h-full py-10">
            {bulletPoints
              .filter((_, index) => index % 2 === 1)
              .map((point, index) => (
                <MiniSectionTitle
                  title={point.title}
                  bulletPoint={point.bulletIndex}
                  key={index}
                  icon={point.icon}
                  onClick={() => setSelectedButton(point.bulletIndex)}
                  isSelected={point.bulletIndex === selectedButton}
                >
                  {point.description}
                </MiniSectionTitle>
              ))}
          </div>
        </div>
      </Container>
    </>
  );
};
