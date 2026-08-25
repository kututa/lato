export const formatCurrency = (amount: number): string =>
  `KSh ${Math.round(amount).toLocaleString()}`;
