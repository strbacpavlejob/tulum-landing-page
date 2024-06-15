// components/Smartphone.js
import Image from "next/image";
import heroImg from "../../public/img/heron.png";
import mapImg from "../../public/img/screenshots/map.png";

import React from "react";

const Smartphone = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="relative w-100">
        <Image
          src={heroImg}
          alt="iPhone Mockup"
          className="w-full z-10"
          width="350"
          height="700" // Adjust the height to match your mockup image
          loading="eager"
          placeholder="blur"
        />
        <div className="absolute top-0 left-0">
          <Image
            src={mapImg}
            alt="Map"
            className="w-full h-full object-cover z-20"
            width="350"
            height="350"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
    </div>
  );
};

export default Smartphone;
