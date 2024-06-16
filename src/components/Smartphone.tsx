// components/Smartphone.js
import Image from "next/image";
import heroImg from "../../public/img/heron.png";

import React from "react";

interface Props {
  src: string;
}

const Smartphone = ({ src }: Props) => {
  return (
    <div className="relative w-[350px] h-[700px] mt-16 mx-auto p-4 pt-2 pb-8 shadow-lg rounded-3xl justify-center">
      <div
        className="absolute w-full h-full bg-cover bg-center rounded-2xl overflow-y-auto z-20"
        style={{ backgroundImage: `url(${heroImg.src})` }}
      ></div>
      <div
        className="absolute w-full h-full  bg-cover bg-center rounded-2xl overflow-y-auto top-[0] left-[5%] scale-x-90 scale-y-90"
        style={{ backgroundImage: `url(${src})` }}
      ></div>
    </div>
  );

  // return (
  //   <div className="flex justify-center items-center">
  //     <div className="relative w-100">
  //       <Image
  //         src={heroImg}
  //         alt="iPhone Mockup"
  //         className="w-full z-10"
  //         width="350"
  //         height="700" // Adjust the height to match your mockup image
  //         loading="eager"
  //         placeholder="blur"
  //         {...rest}
  //       />
  //       <div className="absolute top-0 left-0">
  //         <Image
  //           src={heroImg}
  //           alt="Map"
  //           className="w-full h-full object-cover z-20"
  //           width="350"
  //           height="350"
  //           loading="eager"
  //           placeholder="blur"
  //           {...rest}
  //         />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default Smartphone;
