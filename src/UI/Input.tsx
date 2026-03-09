import type Input from "../interface/Input";
import "../style/input.css";

export default function InputComponent({
  variant,
  dataTestId,
  placeholder,
  isDisabled,
  type,
  value,
  onChange,
}: Input) {
  return (
    <div className={variant || "" + "input"} data-test-id={dataTestId}>
      <input
        type={type}
        placeholder={placeholder}
        disabled={isDisabled}
        value={value}
        onChange={onChange}
      ></input>
    </div>
  );
}
