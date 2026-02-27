import type Text from "../interface/Text";
import "../style/text.css";
export default function Label({ variant, text, dataTestId }: Text) {
  return (
    <div data-testid={dataTestId} className={variant || "" + "label"}>
      {text}
    </div>
  );
}
