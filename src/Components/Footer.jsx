import Logo from "./Logo";
import { NavigationLabel } from "./ui/NavigationLabel";
import TermsModal from "./ui/TermsModal";
import { useState } from "react";
import blob from "@/assets/blob.svg";

export default function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    subtitle: "",
  });

  const navigationCol1 = [
    { label: "Home", href: "#hero-section", size: "small" },
    { label: "Guests", href: "#benefits", size: "small" },
    { label: "Host", href: "#benefits", size: "small" },
    { label: "FAQs", href: "#faq", size: "small" },
  ];

  const handleOpenModal = (type) => {
    switch (type) {
      case "terms":
        setModalContent({
          title: "Terms of Service",
          subtitle:
            "By using Tulum, you agree to our terms of service which outline the rules and guidelines for using our platform.",
        });
        break;
      case "privacy":
        setModalContent({
          title: "Privacy Policy",
          subtitle:
            "We take your privacy seriously. Learn how we collect, use, and protect your personal information.",
        });
        break;
      case "legal":
        setModalContent({
          title: "Legal Information",
          subtitle:
            "Important legal information about Tulum, our company structure, and compliance with local laws and regulations.",
        });
        break;
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex flex-col gap-4">
          <Logo />
          <blockquote className="max-w-xl">
            Tulum is a free app designed to help you discover and host parties
            effortlessly. Whather you're looking to attend the best events in
            your city or create unforgettable expiriences as a host, Tulum
            connects you with a vibrant community of party-goers. Earn money,
            make new friends, and share your experience. Join Tulum and elevate
            your social life today!
          </blockquote>
        </div>
        <div className="flex flex-col gap-4">
          {navigationCol1.map(({ label, href, size }) => (
            <NavigationLabel
              key={label}
              label={label}
              href={href}
              size={size}
            />
          ))}
        </div>
        <ul className="w-20 flex flex-col justify-start gap-4">
          <li
            className="text-lg font-light text-gray-700 cursor-pointer hover:text-gray-900"
            onClick={() => handleOpenModal("terms")}
          >
            Terms
          </li>
          <li
            className="text-lg font-light text-gray-700 cursor-pointer hover:text-gray-900"
            onClick={() => handleOpenModal("privacy")}
          >
            Privacy
          </li>
          <li
            className="text-lg font-light text-gray-700 cursor-pointer hover:text-gray-900"
            onClick={() => handleOpenModal("legal")}
          >
            Legal
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <TermsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={modalContent.title}
          subtitle={modalContent.subtitle}
        />
      )}

      <div className="flex flex-row gap-1 text-2xl text-gray-700 font-medium items-center">
        <span>Follow us </span>
        <div className="flex w-11 h-11 items-center justify-center">
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
        <div className="flex w-11 h-11 items-center justify-center">
          <ion-icon name="logo-linkedin"></ion-icon>
        </div>
        <div className=" flex w-11 h-11 items-center justify-center">
          <ion-icon name="logo-tiktok"></ion-icon>
        </div>
      </div>
      <div className=" flex flex-row items-center text-base justify-center gap-1">
        <span>Copyright &#169; 2024&#x2e; Made with </span>
        <ion-icon name="heart"></ion-icon>
        <span> by Pavle Strbac</span>
      </div>
      <img
        src={blob}
        alt="blob"
        className="absolute -bottom-36 -right-28 z-[-20]"
      />
    </>
  );
}
