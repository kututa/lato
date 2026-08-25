import { useMemo, useState } from 'react';
import { calculateMonthlyPayment } from '../utils/loanCalculator';

export const useLoanCalculator = () => {
  const [price, setPrice] = useState(4500000);
  const [deposit, setDeposit] = useState(1000000);
  const [months, setMonths] = useState(36);
  const [annualRate, setAnnualRate] = useState(14);
  const monthlyPayment = useMemo(
    () => calculateMonthlyPayment(price, deposit, months, annualRate),
    [price, deposit, months, annualRate],
  );
  return { price, setPrice, deposit, setDeposit, months, setMonths, annualRate, setAnnualRate, monthlyPayment };
};
