import propTypes from "prop-types";

export default function Button({
  children,
  type = "button",
  bgColor = "bg-blue-500",
  textColor = "text-white",
  className = "",
  ...props
}) {
  return (
    <button
      type={type}
      className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: propTypes.node,
  type: propTypes.oneOf(["button", "submit", "reset"]),
  bgColor: propTypes.string,
  textColor: propTypes.string,
  className: propTypes.string,
};
