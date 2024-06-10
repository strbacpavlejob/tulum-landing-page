import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import { SectionTitle } from "./SectionTitle";

export const MiniSectionTitle = (props: any) => {
  return (
    <div className="flex flex-col items-center">
      <button className="w-12 h-12 mt-3 text-center text-white bg-indigo-600 rounded-xl hover:bg-indigo-500">
        {props.bulletPoint}
      </button>
      <Container
        className={`flex w-full flex-col mt-1 ${
          props.align === "left"
            ? ""
            : "items-center justify-center text-center"
        }`}
      >
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
  return (
    <>
      <SectionTitle title="How Tulum Works">
        You can find nearby parties that match your type.
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
