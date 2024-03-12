import { forwardRef } from "react";
import propTypes from "prop-types";
import { useId } from "react";

const Select = forwardRef(function Select(
  { options, lable, className = "", ...props },
  ref
) {
  const id = useId();
  return (
    <div className="w-full">
      {lable && <label htmlFor={id} className=""></label>}
      <select
        id={id}
        {...props}
        ref={ref}
        className={`${className}  px-3 py-2 rounded-lg bg-white text—black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w—full w-full`}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
});

Select.propTypes = {
  options: propTypes.arrayOf(propTypes.string),
  lable: propTypes.string,
  className: propTypes.string,
};

export default Select;
