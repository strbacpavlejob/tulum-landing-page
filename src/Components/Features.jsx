import { LiIcon } from "./LiIcon";
import home from "../assets/home.svg";
import { SectionTitle } from "./SectionTitle";
import { Iphone15Pro } from "./ui/Iphone15Pro";

export const Features = () => {
  const SIZE_MULTIPLIER = 1;
  const iphoneWidth = 433 * SIZE_MULTIPLIER;
  const iphoneHeight = 882 * SIZE_MULTIPLIER;
  return (
    <section className="w-full flex flex-col gap-20 items-center justify-center">
      <div className="h-5px" id="features"></div>

      <SectionTitle
        heading="How Tulum Works"
        subheading="Discover how Tulum transforms your pary expirience. Makes finding and
hosting parties easy and fun. Here&#39;s how:"
      />
      <div className="w-full flex flex-row flex-wrap max-w-7xl justify-between lg:flex-nowrap ">
        <div className="w-72 m-2 flex flex-col gap-24 items-right">
          <LiIcon
            leftAlign
            name="Map"
            icon="map"
            description="Explore and find parties happening around you with our interactive map."
          />
          <LiIcon
            leftAlign
            name="Tickets"
            icon="tickets"
            description="Easily manage and keep track of all your purchased tickets in one place."
          />
        </div>
        <Iphone15Pro src={home} width={iphoneWidth} height={iphoneHeight} />
        {/* <div>
          <img src={mockUp} />
        </div> */}
        <div className="w-72 m-2 flex flex-col gap-24 items-left">
          <LiIcon
            name="Hosting"
            icon="hosting"
            description="Plan and organize your own parties with our user-friendly hosting interface."
          />
          <LiIcon
            name="Account"
            icon="userIcon"
            description="Customize your unique party experience with your personal Tulum account."
          />
        </div>
      </div>
    </section>
  );
};
