import type Text from "../interface/Text";
import "../style/text.css";
export default function Title({ variant, text, dataTestId }: Text) {
  return (
    <div data-testid={dataTestId} className={"title " + variant || ""}>
      {text}
    </div>
  );
}
