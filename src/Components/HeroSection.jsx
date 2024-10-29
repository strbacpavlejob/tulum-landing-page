import rectangle from "../assets/Rectangle.png";
import googlePlay from "../assets/Google-Play.svg";
import appStore from "../assets/App-Store.svg";
import { WordFadeIn } from "./WordFadeIn";

export default function HeroSection() {
  return (
    <section className="w-100 flex flex-row items-center border-solid  border-gray-950	">
      <div className="h-5px" id="hero-section"></div>

      <div className="w-full flex flex-row items-start text-start justify-center gap-16 flex-wrap lg:flex-nowrap">
        <div className="w-2/3 flex flex-col gap-8">
          <WordFadeIn
            words="Download Tulum, Start Your Party, Earn Money!"
            className="text-left font-normal text-2xl"
          />
          <p className="">
            Get Tulum app, create your account, and discover exciting parties in
            your city. Host your own events and make money effortlessly. Join
            the Tulum community today and turn every night into a unforgettable
            expirience!
          </p>
          <div className="flex flex-row gap-3 w-full h-20">
            <button>
              <img src={googlePlay} alt="download on google play button" />
            </button>
            <button>
              <img src={appStore} alt="download on app store button" />
            </button>
          </div>
        </div>
        <div>
          <img src={rectangle} alt="phone mockup with Tulum login page" />
        </div>
      </div>
    </section>
  );
}
