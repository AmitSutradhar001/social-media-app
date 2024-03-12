import propTypes from "prop-types";

export default function Container({ children }) {
  return (
    <div className=" relative w-full  max-w-7xl mx-auto px-10">{children}</div>
  );
}

Container.propTypes = {
  children: propTypes.node,
};
