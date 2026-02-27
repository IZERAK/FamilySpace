export default interface Button {
  variant?: string;
  dataTestId: string;
  text: string;
  fn: () => void;
  isDisabled?: boolean;
}
