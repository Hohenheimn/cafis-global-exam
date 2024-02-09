export function numberSeparator(currency: string | number, decimal?: number) {
  if (!currency) {
    return parseFloat(0?.toString())
      .toFixed(decimal ?? 2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  return parseFloat(currency?.toString())
    .toFixed(decimal ?? 2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
