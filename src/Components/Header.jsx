import Logo from "./Logo.jsx";
import { RainbowButton } from "./RainbowButton.jsx";
import { NavigationLabel } from "./ui/NavigationLabel.jsx";
import WishlistModal from "./ui/WishlistModal.jsx";
import { useCallback, useState } from "react";

export default function Header() {
  const navigationMenu = [
    { label: "Home", href: "#hero-section", size: "large" },
    { label: "How it works", href: "#features", size: "large" },
    { label: "Benefits", href: "#benefits", size: "large" },
    { label: "FAQs", href: "#faq", size: "large" },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClick = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFormSubmit = (formData) => {
    setIsModalOpen(false);
    console.log("Form submitted with data:", formData);
  };

  return (
    <header
      className="w-full mx-0 sticky top-[2rem] flex flex-row items-center z-50"
      style={{ backgroundColor: "" }}
    >
      <div className="w-full">
        <Logo />
      </div>
      <menu className="w-full justify-center flex-row mx-8">
        <ul
          className="flex flex-row text-2xl gap-8 list-none justify-center"
          style={{ color: "var(--secondary)" }}
        >
          {navigationMenu.map(({ label, href, size }) => (
            <NavigationLabel
              key={label}
              label={label}
              href={href}
              size={size}
            />
          ))}
        </ul>
      </menu>
      <div className="w-full flex flex-row box-border justify-end">
        <RainbowButton
          className="px-8 py-4 text-white font-normal text-xl rounded-[2rem] hover:border-transparent cursor-pointer"
          onClick={handleClick}
        >
          Join wishlist
        </RainbowButton>
      </div>
      {isModalOpen && (
        <WishlistModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          buttonCaption="Add to wishlist"
          onSubmit={handleFormSubmit}
          title="Join wishlist"
          subtitle="Enter your full name and email to add Tulum on Wishlist."
        />
      )}
    </header>
  );
}
