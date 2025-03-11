import "./input.css";
import arrow_drop_down from "../../assets/icons/arrow_drop_down.svg";

const Input = ({ placeholder, label = false, size, icon = false }) => {
  return (
    <div className="yorfy__inputContainer">
      {label && (
        <label
          className={`yorfy__inputContainer-label yorfy__inputContainer-label-${size}`}
          htmlFor={label}
        >
          {label}
        </label>
      )}
      <input
        placeholder={placeholder}
        className={`yorfy__inputContainer-input yorfy__inputContainer-input-${size}`}
      />
      {icon && <img src={arrow_drop_down} alt="dropdown" />}
    </div>
  );
};

export default Input;
