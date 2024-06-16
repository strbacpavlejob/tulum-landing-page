import {
  MagnifyingGlassCircleIcon,
  UserGroupIcon,
  ShareIcon,
  CurrencyDollarIcon,
  StarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/svgs/partyticket.svg";
import benefitTwoImg from "../../public/img/svgs/host.svg";

const benefitOne = {
  title: "Guest Benefits with Tulum",
  desc: "Experience Parties as a Tulum Guest",
  image: benefitOneImg,
  bullets: [
    {
      title: "Discover Exciting Parties",
      desc: "Use the map to find parties that match your interests in your area. Easily purchase and manage your tickets within the app.",
      icon: <MagnifyingGlassCircleIcon />,
    },
    {
      title: "Connect with Like-minded People",
      desc: "Find and interact with other party-goers who share your interests. Check their relationship status and make new friends or connections.",
      icon: <UserGroupIcon />,
    },
    {
      title: "Social Media Integration",
      desc: "Connect your Tulum account with platforms like TikTok. Share your party experiences and grow your social network, making every event memorable.",
      icon: <ShareIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Host Benefits with Tulum",
  desc: "Why Host Parties with Tulum?",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Earn Money with Party Coins",
      desc: "As a host, earn Party Coins for every ticket sold to your events. Convert these Party Coins into real money, making your hosting efforts profitable.",
      icon: <CurrencyDollarIcon />,
    },
    {
      title: "Simple and Efficient Hosting",
      desc: "Use our intuitive interface to plan and manage your events seamlessly. Track ticket sales, manage guest lists, and ensure a smooth event experience.",
      icon: <ChartBarIcon />,
    },
    {
      title: "Build Your Reputation",
      desc: "Gain ratings and reviews from your guests, helping you build a solid reputation as a top host. The better your events, the more you earn and grow your following.",
      icon: <StarIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
