import type Text from "../interface/Text";
import "../style/text.css";
export default function Header({ variant, text, dataTestId }: Text) {
  return (
    <div data-testid={dataTestId} className={"header " + variant || ""}>
      {text}
    </div>
  );
}
