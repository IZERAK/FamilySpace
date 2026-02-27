export default interface Text {
  variant?: string;
  text: string;
  dataTestId: string; // Лучше сделать опциональным, если не всегда передается
}
