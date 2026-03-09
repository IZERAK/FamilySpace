import type Base from "./Base";

export default interface Alert extends Base {
  text: string;
  status: string;
}
