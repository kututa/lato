export const calculateMonthlyPayment = (
  price: number,
  deposit: number,
  months: number,
  annualRate: number,
): number => {
  const principal = price - deposit;
  if (principal <= 0 || months <= 0) return 0;

  const monthlyRate = annualRate / 100 / 12;
  if (monthlyRate === 0) return principal / months;

  const growth = Math.pow(1 + monthlyRate, months);
  return (principal * monthlyRate * growth) / (growth - 1);
};
