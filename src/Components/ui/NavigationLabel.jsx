// eslint-disable-next-line react/prop-types
export const NavigationLabel = ({ href, label, size }) => {
  let styledText = `text-gray-700 text-${
    size === "small" ? "lg " : "2xl"
  } font-${size === "small" ? "light" : "base"} whitespace-nowrap`;
  return (
    <a href={href}>
      <p className={styledText}>{label}</p>
    </a>
  );
};
