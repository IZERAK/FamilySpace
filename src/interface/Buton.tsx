import type Base from "./Base";

export default interface Button extends Base {
  text: string;
  fn: () => void;
  isDisabled?: boolean;
}
