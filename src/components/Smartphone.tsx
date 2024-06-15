// components/Smartphone.js
import Image from "next/image";
import heroImg from "../../public/img/heron.png";
import React from "react";

type SmartphoneProps = {
  videoSrc: string;
};

const Smartphone = ({
  videoSrc = "https://www.w3schools.com/html/mov_bbb.mp4",
}: SmartphoneProps) => {
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="relative w-80">
        <Image
          src={heroImg}
          alt="iPhone Mockup"
          className="w-full z-10"
          width="350"
          height="350"
          // className={"object-cover"}
          loading="eager"
          placeholder="blur"
        />
        <div className="absolute top-[20%] left-[11%] w-[78%] h-[60%] w-full">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover position-absolute z-10 height-fit-content"
          />
        </div>
      </div>
    </div>
  );
};

export default Smartphone;
