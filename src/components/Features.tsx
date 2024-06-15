import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import { SectionTitle } from "./SectionTitle";

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

export const Features = () => {
  const bulletPoints = [
    {
      bulletIndex: 1,
      title: "Map",
      description:
        "Explore and find parties happening around you with our interactive map.",
    },
    {
      bulletIndex: 2,
      title: "Tickets",
      description:
        "Easily manage and keep track of all your purchased tickets in one place.",
    },
    {
      bulletIndex: 3,
      title: "Hosting",
      description:
        "Plan and organize your own parties with our user-friendly hosting interface.",
    },
    {
      bulletIndex: 4,
      title: "Account",
      description:
        "Customize your unique party experience with your personal Tulum account.",
    },
  ];
  return (
    <>
      <SectionTitle title="How Tulum Works">
        Discover How Tulum Transforms Your Party Experience Tulum makes finding
        and hosting parties easy and fun. Here’s how:
      </SectionTitle>

      <Container className="flex flex-wrap justify-center">
        <div className="flex w-full justify-center lg:w-1/2 gap-16">
          {/* Left Column for buttons 1 and 3 */}
          <div className="flex flex-col items-center justify-between h-full py-10">
            {bulletPoints
              .filter((_, index) => index % 2 === 0)
              .map((point, index) => (
                <MiniSectionTitle
                  title={point.title}
                  bulletPoint={point.bulletIndex}
                  key={index}
                >
                  {point.description}
                </MiniSectionTitle>
              ))}
          </div>

          {/* Center Column for image */}
          <div className="relative flex items-center justify-center mx-16">
            <div className="absolute w-[450px] h-[450px] bg-indigo-500 rounded-full hidden sm:block"></div>
            <Image
              src={heroImg}
              width="550"
              height="550"
              alt="Hero Illustration"
              className="relative rotate-[5deg]"
              loading="eager"
              placeholder="blur"
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
