import React, { useState } from 'react';

const LoanCalculator: React.FC = () => {
  const [loanAmount, setLoanAmount] = useState<number>(100000);
  const [interestRate, setInterestRate] = useState<number>(5);
  const [loanTerm, setLoanTerm] = useState<number>(30);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(0);

  const calculateMonthlyPayment = () => {
    const principal = loanAmount;
    const annualInterestRate = interestRate / 100;
    const numberOfPayments = loanTerm * 12;
    const monthlyInterestRate = annualInterestRate / 12;

    if (monthlyInterestRate === 0) {
      setMonthlyPayment(principal / numberOfPayments);
    } else {
      const payment = principal *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);
      setMonthlyPayment(payment);
    }
  };

  return (
    <div className="calculator-container">
      <h2>Loan Calculator</h2>
      <div className="input-columns">
        <div className="input-group">
          <label>Loan Amount (₹):</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
          />
        </div>
        <div className="input-group">
          <label>Loan Term (Years):</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
          />
        </div>
      </div>
      <button onClick={calculateMonthlyPayment}>Calculate</button>
      {monthlyPayment > 0 && (
        <div className="result">
          <h3>Monthly Payment: ₹{monthlyPayment.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default LoanCalculator;