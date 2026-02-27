import type Button from "../interface/Buton";
import "../style/button.css";

export default function MainButton({
  variant,
  dataTestId,
  text,
  fn,
  isDisabled = false,
}: Button) {
  return (
    <div className={`${variant || ""} mainbutton`} data-test-id={dataTestId}>
      <button type="button" onClick={fn} disabled={isDisabled}>
        {text}
      </button>
    </div>
  );
}
