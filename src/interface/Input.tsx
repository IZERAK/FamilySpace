import type Base from "./Base";

export default interface Input extends Base {
  placeholder?: string;
  isDisabled?: boolean;
  type?: string;
}
