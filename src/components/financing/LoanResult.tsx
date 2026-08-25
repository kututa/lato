import { formatCurrency } from '../../utils/currency';
export const LoanResult = ({ monthlyPayment }: { monthlyPayment: number }) => (<div className="calc-result"><span>Estimated Monthly Payment</span><h3>{formatCurrency(monthlyPayment)} / mo</h3></div>);
