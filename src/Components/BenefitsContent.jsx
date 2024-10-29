import { LiIcon } from "./LiIcon";
import BackgroundSVG from "./BackgroundSVG";
import { BUTTON_SWITCH_TYPES, GUEST_BENEFITS, HOST_BENEFITS } from "./Benefits";

// eslint-disable-next-line react/prop-types

export const BenefitsContent = ({ selectedItem }) => {
  const benefitsList =
    selectedItem === BUTTON_SWITCH_TYPES.GUEST ? GUEST_BENEFITS : HOST_BENEFITS;

  return (
    <div className="h-full flex flex-row gap-10 items-center justify-stretch relative index-40 ">
      <div className="flex flex-col h-full ">
        {benefitsList.map(({ name, description, icon }) => (
          <LiIcon
            key={icon}
            name={name}
            icon={icon}
            description={description}
          />
        ))}
      </div>
      <div className="flex flex-col h-full ">
        <BackgroundSVG selectedItem={selectedItem} />
      </div>
    </div>
  );
};
