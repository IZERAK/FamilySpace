import type Button from "../interface/Buton";
import "../style/button.css";

export default function SecondaryButon({
  variant,
  dataTestId,
  text,
  fn,
  isDisabled = false,
}: Button) {
  return (
    <div
      className={`${variant || ""} secondary-button`}
      data-test-id={dataTestId}
    >
      <button type="button" onClick={fn} disabled={isDisabled}>
        {text}
      </button>
    </div>
  );
}
