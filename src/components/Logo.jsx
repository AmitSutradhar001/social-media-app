import propTypes from "prop-types";

export default function Logo({ width = "100px" }) {
  return (
    <div className={`${width} pl-10 pt-5`}>
      <img
        src="https://clipground.com/images/as-logo-png-4.png"
        alt="my name"
        className="w-9 rounded-full"
      />
    </div>
  );
}
Logo.propTypes = {
  width: propTypes.string,
};
