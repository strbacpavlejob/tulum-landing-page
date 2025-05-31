import Marquee from "@/Components/ui/Marquee";
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";
import avatar4 from "@/assets/avatar4.png";
import avatar5 from "@/assets/avatar5.png";
import { Card } from "../Card";

const reviews = [avatar1, avatar2, avatar3, avatar4, avatar5].map((item) => ({
  name: "Alex M.",
  quote: `"Tulum makes finding parties so easy! I’ve discovered amazing events I would’ve never known about. The app is super user-friendly, and buying tickets with UICOINS is a breeze!"`,
  avatar: item,
}));

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

export function MagicLoop() {
  return (
    <div className="relative flex h-[500px] w-full max-w-screen-2xl max-h-full flex-col items-center justify-center overflow-hidden rounded-lg">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review, index) => (
          <Card key={index} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review, index) => (
          <Card key={index} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white/30 dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/30 dark:from-background"></div>
    </div>
  );
}
