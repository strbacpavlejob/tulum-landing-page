import { SwitchElement } from "./SwitchElement";
import { useState } from "react";
import { BenefitsTitle } from "./BenefitsTitle";
import { BenefitsContent } from "./BenefitsContent";

export const BUTTON_SWITCH_TYPES = {
  GUEST: "GUEST",
  HOST: "HOST",
};

export const GUEST_BENEFITS = [
  {
    name: "Discover Exciting Parties",
    icon: "search",
    description:
      "Use the map to find parties that match your interests in your area. Easily purchase and manage your tickets within the app.",
  },
  {
    name: "Connect with Like-minded People",
    icon: "community",
    description:
      "Find and interact with other party-goers who share your interests. Check their relationship status and make new friend and connections.",
  },
  {
    name: "Social Media Integration",
    icon: "share",
    description:
      "Connect your Tulum account with platforms like TikTok. Share your party experiences and grow your social network, making every event memorable.",
  },
];

export const HOST_BENEFITS = [
  {
    name: "Earn Money with Unicoins",
    icon: "search",
    description:
      "As a host, earn Unicoins for every ticket sold to your events. Convert these Unicoins into real money, making your hosting efforts profitable.",
  },
  {
    name: "Simple and Efficient Hosting",
    icon: "community",
    description:
      "Use our intuitive interface to plan and manage your events seamlessly. Track ticket sales, manage guest list, and ensure a smooth event experience.",
  },
  {
    name: "Build Your Reputation",
    icon: "share",
    description:
      "Gain raiting and reviews from your guests, helping you build a solid reputation as a top host. The better your events, the more you earn and grow your following.",
  },
];

export const Benefits = () => {
  const [selectedItem, setSelectedItem] = useState(BUTTON_SWITCH_TYPES.GUEST);

  const handleSelect = (newSelectedButton) => {
    setSelectedItem(newSelectedButton);
  };

  // title

  return (
    <section className="min-h-[500px] w-full px-8 flex flex-col text-start border-solid border-gray-950 gap-16 flex-wrap lg:flex-nowrap overflow-hidden">
      <div className="h-5px" id="benefits"></div>
      <div className="flex flex-col items-center justify-center gap-16">
        <SwitchElement selectedItem={selectedItem} onChange={handleSelect} />
        <BenefitsTitle selectedItem={selectedItem} />
      </div>
      <BenefitsContent selectedItem={selectedItem} />
    </section>
  );
};
