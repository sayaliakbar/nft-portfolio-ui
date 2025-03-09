import "./input.css";
import arrow_drop_down from "../../assets/icons/arrow_drop_down.svg";

const Input = ({ placeholder, label = false, size, icon = false }) => {
  return (
    <>
      {label && (
        <label className={`yorfy__label yorfy__label-${size}`} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        className={`yorfy__input yorfy__input-${size}`}
      />
      {icon && <img src={arrow_drop_down} alt="dropdown" />}
    </>
  );
};

export default Input;
